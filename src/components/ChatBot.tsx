import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Loader2, RefreshCw, AlertCircle } from 'lucide-react';
import { useChatBot } from '../contexts/ChatBotContext';

interface Message {
  type: 'bot' | 'user' | 'error';
  text: string;
  timestamp: Date;
  id: string;
  isRetryable?: boolean;
}

interface N8NResponse {
  action?: string;
  response?: string;
  message?: string;
  output?: string;
  text?: string;
  content?: string;
  error?: string;
  status?: string;
}

const ChatBot = () => {
  const { isOpen, closeChat, toggleChat, prefilledMessage } = useChatBot();
  const [messages, setMessages] = useState<Message[]>([
    { 
      type: 'bot', 
      text: 'Hello! I\'m Nilebot, your AI assistant from NileByte. How can I help you today?',
      timestamp: new Date(),
      id: 'welcome-message'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'online' | 'offline' | 'error'>('online');
  const [retryCount, setRetryCount] = useState(0);
  const [sessionId] = useState(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageQueue = useRef<string[]>([]);
  const isProcessingQueue = useRef(false);

  // Updated N8N Webhook URL to match your configuration
  const WEBHOOK_URL = 'https://dahyy.app.n8n.cloud/webhook/bb30e559-80ea-485b-baa0-3667d177c083';
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 1000;
  const REQUEST_TIMEOUT = 30000;

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      const timer = setTimeout(() => {
        setIsRendered(true);
        // Focus input when chat opens
        inputRef.current?.focus();
      }, 10);

      if (prefilledMessage) {
        handleSendMessage(prefilledMessage);
      }
      return () => clearTimeout(timer);
    } else {
      setIsRendered(false);
    }
  }, [isOpen, prefilledMessage]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateMessageId = () => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const sanitizeResponse = (text: string): string => {
    // Basic sanitization - remove potentially harmful content
    return text
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .trim();
  };

  const formatBotResponse = (text: string): string => {
    // Enhanced formatting for better readability
    return sanitizeResponse(text)
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  };

  const processN8NResponse = (responseData: any): string => {
    try {
      // Handle different response formats from N8N workflow
      if (typeof responseData === 'string') {
        return responseData;
      }

      const response = responseData as N8NResponse;

      // Check for error status
      if (response.error || response.status === 'error') {
        throw new Error(response.error || 'Unknown error from server');
      }

      // Extract response content in order of preference
      const content = response.response || 
                    response.message || 
                    response.output || 
                    response.text || 
                    response.content;

      if (content) {
        return content;
      }

      // If response is an object without recognized fields, stringify it
      if (typeof responseData === 'object') {
        return JSON.stringify(responseData, null, 2);
      }

      throw new Error('Empty response from server');
    } catch (error) {
      console.error('Error processing N8N response:', error);
      throw error;
    }
  };

  const sendToN8N = async (message: string, attempt: number = 1): Promise<string> => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    try {
      setConnectionStatus('online');
      
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          chatInput: message,
          sessionId: sessionId,
          timestamp: new Date().toISOString(),
          attempt: attempt,
          userAgent: navigator.userAgent,
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please wait a moment before sending another message.');
        }
        if (response.status >= 500) {
          throw new Error('Server is temporarily unavailable. Please try again.');
        }
        throw new Error(`Request failed with status ${response.status}`);
      }

      const responseData = await response.json();
      return processN8NResponse(responseData);

    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timed out. Please check your connection and try again.');
        }
        if (error.message.includes('Failed to fetch')) {
          setConnectionStatus('offline');
          throw new Error('Unable to connect. Please check your internet connection.');
        }
        throw error;
      }
      
      throw new Error('An unexpected error occurred. Please try again.');
    }
  };

  const processMessageQueue = async () => {
    if (isProcessingQueue.current || messageQueue.current.length === 0) return;
    
    isProcessingQueue.current = true;
    
    while (messageQueue.current.length > 0) {
      const message = messageQueue.current.shift();
      if (message) {
        await handleSendMessage(message, false);
        // Small delay between queued messages
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    
    isProcessingQueue.current = false;
  };

  const handleSendMessage = async (messageText?: string, addToQueue: boolean = true) => {
    const messageToSend = messageText || inputValue.trim();
    
    if (!messageToSend) return;

    // If currently processing and this is a new message, add to queue
    if (isLoading && addToQueue) {
      messageQueue.current.push(messageToSend);
      setInputValue('');
      return;
    }

    // Add user message immediately
    const userMessage: Message = {
      type: 'user',
      text: messageToSend,
      timestamp: new Date(),
      id: generateMessageId()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setRetryCount(0);

    let attempt = 1;
    let lastError: string = '';

    while (attempt <= MAX_RETRIES) {
      try {
        const botResponse = await sendToN8N(messageToSend, attempt);
        
        // Add successful bot response
        const botMessage: Message = {
          type: 'bot',
          text: botResponse,
          timestamp: new Date(),
          id: generateMessageId()
        };

        setMessages(prev => [...prev, botMessage]);
        setConnectionStatus('online');
        break;

      } catch (error) {
        console.error(`Attempt ${attempt} failed:`, error);
        lastError = error instanceof Error ? error.message : 'Unknown error occurred';
        
        if (attempt < MAX_RETRIES) {
          // Wait before retrying
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * attempt));
          attempt++;
          setRetryCount(attempt - 1);
        } else {
          // All retries failed, add error message
          setConnectionStatus('error');
          const errorMessage: Message = {
            type: 'error',
            text: lastError,
            timestamp: new Date(),
            id: generateMessageId(),
            isRetryable: true
          };

          setMessages(prev => [...prev, errorMessage]);
        }
      }
    }

    setIsLoading(false);
    setRetryCount(0);
    
    // Process any queued messages
    setTimeout(processMessageQueue, 100);
  };

  const handleRetryMessage = (messageId: string) => {
    // Find the error message and the user message before it
    const messageIndex = messages.findIndex(msg => msg.id === messageId);
    if (messageIndex > 0) {
      const userMessage = messages[messageIndex - 1];
      if (userMessage.type === 'user') {
        // Remove the error message and retry
        setMessages(prev => prev.filter(msg => msg.id !== messageId));
        handleSendMessage(userMessage.text, false);
      }
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeChat();
      setIsClosing(false);
      // Clear any queued messages when closing
      messageQueue.current = [];
    }, 400);
  };

  const formatMessage = (text: string, isBot: boolean = false) => {
    const formattedText = isBot ? formatBotResponse(text) : text;
    
    return formattedText
      .split('<br>')
      .map((line, index) => {
        // Handle horizontal lines
        if (line.trim() === '---') {
          return <hr key={index} className="my-2 border-white/20" />;
        }
        
        return (
          <span key={index} dangerouslySetInnerHTML={{ __html: line }}>
          </span>
        );
      })
      .reduce((acc, curr, index) => {
        if (index > 0 && curr.type !== 'hr') acc.push(<br key={`br-${index}`} />);
        acc.push(curr);
        return acc;
      }, [] as React.ReactNode[]);
  };

  const getStatusText = () => {
    if (isLoading) {
      return retryCount > 0 ? `Retrying... (${retryCount}/${MAX_RETRIES})` : 'Typing...';
    }
    
    switch (connectionStatus) {
      case 'offline':
        return 'Connection lost';
      case 'error':
        return 'Connection error';
      default:
        return 'Online now';
    }
  };

  const getStatusColor = () => {
    if (isLoading) return 'text-blue-400';
    
    switch (connectionStatus) {
      case 'offline':
      case 'error':
        return 'text-red-400';
      default:
        return 'text-green-400';
    }
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className={`chatbot-container fixed bottom-24 right-6 w-80 h-96 bg-black/80 border border-white/20 rounded-xl backdrop-blur-md z-50 flex flex-col ${(isRendered && !isClosing) ? 'open' : ''}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center">
              <div className="w-8 h-8 dynamic-gradient-icon rounded-full flex items-center justify-center mr-3">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-light">Nilebot AI Assistant</h3>
                <p className={`text-xs ${getStatusColor()}`}>
                  {getStatusText()}
                </p>
              </div>
            </div>
            <button 
              onClick={handleClose} 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] text-white'
                    : message.type === 'error'
                    ? 'bg-red-500/20 border border-red-500/30 text-red-200'
                    : 'bg-white/10 text-gray-200'
                }`}>
                  <div className="text-sm font-light">
                    {message.type === 'error' && (
                      <div className="flex items-center mb-2">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        <span className="font-medium">Connection Error</span>
                      </div>
                    )}
                    {formatMessage(message.text, message.type === 'bot')}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    {message.isRetryable && (
                      <button
                        onClick={() => handleRetryMessage(message.id)}
                        className="text-xs text-red-300 hover:text-red-100 flex items-center ml-2"
                        disabled={isLoading}
                      >
                        <RefreshCw className="w-3 h-3 mr-1" />
                        Retry
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-gray-200 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm font-light">
                      {retryCount > 0 ? `Retrying... (${retryCount}/${MAX_RETRIES})` : 'Nilebot is thinking...'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Queue indicator */}
            {messageQueue.current.length > 0 && (
              <div className="flex justify-center">
                <div className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-xs">
                  {messageQueue.current.length} message{messageQueue.current.length > 1 ? 's' : ''} queued
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !isLoading && inputValue.trim()) {
                    handleSendMessage();
                  }
                }}
                placeholder={
                  connectionStatus === 'offline' 
                    ? 'Connection lost...' 
                    : connectionStatus === 'error'
                    ? 'Connection error...'
                    : 'Type your message...'
                }
                disabled={isLoading || connectionStatus === 'offline'}
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputValue.trim() || connectionStatus === 'offline'}
                className="w-8 h-8 dynamic-gradient-icon rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                ) : (
                  <Send className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
            
            {/* Connection status indicator */}
            {connectionStatus !== 'online' && (
              <div className="mt-2 text-xs text-center">
                <span className={connectionStatus === 'offline' ? 'text-red-400' : 'text-yellow-400'}>
                  {connectionStatus === 'offline' 
                    ? 'Check your internet connection' 
                    : 'Having trouble connecting to our servers'
                  }
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 shadow-xl rounded-full p-4 gradient-cta-btn animate-gradient-shift border border-white/10 backdrop-blur-lg transition-all duration-300 hover:scale-105 focus:outline-none"
        aria-label="Open chatbot"
      >
        <Bot className="w-7 h-7 text-white" />
        {/* Connection status indicator on button */}
        {connectionStatus !== 'online' && (
          <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
            connectionStatus === 'offline' ? 'bg-red-500' : 'bg-yellow-500'
          } animate-pulse`} />
        )}
      </button>
    </>
  );
};

export default ChatBot;