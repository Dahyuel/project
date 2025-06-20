import React, { useState, useEffect } from 'react';
import { Bot, X, Send, Loader2 } from 'lucide-react';
import { useChatBot } from '../contexts/ChatBotContext';

interface Message {
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

const ChatBot = () => {
  const { isOpen, closeChat, toggleChat, prefilledMessage } = useChatBot();
  const [messages, setMessages] = useState<Message[]>([
    { 
      type: 'bot', 
      text: 'Hello! I\'m your AI assistant from NileByte. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [userId] = useState(`user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  // N8N Webhook URL
  const WEBHOOK_URL = 'https://dahyy.app.n8n.cloud/webhook-test/ai-chatbot-webhook';

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      const timer = setTimeout(() => setIsRendered(true), 10);

      if (prefilledMessage) {
        handleSendMessage(prefilledMessage);
      }
      return () => clearTimeout(timer);
    } else {
      setIsRendered(false);
    }
  }, [isOpen, prefilledMessage]);

  const sendToN8N = async (message: string): Promise<string> => {
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          sessionId: sessionId,
          userId: userId,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseText = await response.text();
      return responseText || 'I apologize, but I didn\'t receive a proper response. Please try again.';
    } catch (error) {
      console.error('Error sending message to N8N:', error);
      return 'I\'m sorry, but I\'m having trouble connecting right now. Please try again in a moment, or feel free to contact our team directly.';
    }
  };

  const handleSendMessage = async (messageText?: string) => {
    const messageToSend = messageText || inputValue.trim();
    
    if (!messageToSend) return;

    // Add user message immediately
    const userMessage: Message = {
      type: 'user',
      text: messageToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Send to N8N and get response
      const botResponse = await sendToN8N(messageToSend);
      
      // Add bot response
      const botMessage: Message = {
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      
      // Add error message
      const errorMessage: Message = {
        type: 'bot',
        text: 'I apologize, but I\'m experiencing technical difficulties. Please try again or contact our support team.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeChat();
      setIsClosing(false);
    }, 400);
  };

  const formatMessage = (text: string) => {
    // Simple formatting for better readability
    return text
      .split('\n')
      .map((line, index) => (
        <span key={index}>
          {line}
          {index < text.split('\n').length - 1 && <br />}
        </span>
      ));
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
                <h3 className="text-white font-light">NileByte AI Assistant</h3>
                <p className="text-xs text-gray-400">
                  {isLoading ? 'Typing...' : 'Online now'}
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
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] text-white'
                    : 'bg-white/10 text-gray-200'
                }`}>
                  <p className="text-sm font-light">
                    {formatMessage(message.text)}
                  </p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-gray-200 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm font-light">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !isLoading) {
                    handleSendMessage();
                  }
                }}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputValue.trim()}
                className="w-8 h-8 dynamic-gradient-icon rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                ) : (
                  <Send className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
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
      </button>
    </>
  );
};

export default ChatBot;