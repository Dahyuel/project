import React from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { useChatBot } from '../contexts/ChatBotContext';
import DynamicBlobBackground from './DynamicBlobBackground';

const ReadyToTransform = () => {
  const { openChat } = useChatBot();

  return (
    <section id="readytotransform" className="py-32 relative bg-black overflow-hidden">
      <DynamicBlobBackground className="blob-bg-services" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
            Ready To Transform
            <br />
            <span className="dynamic-gradient-text">
              Your Business?
            </span>
          </h2>
          <p className="text-lg font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Let's discuss how AI can revolutionize your operations and drive unprecedented growth for your company.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => openChat('Book A Call')}
              className="premium-button px-8 py-4 gradient-cta-btn text-white font-normal flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 mr-1" />
              Book A Call
            </button>
            <button 
              onClick={() => openChat()} 
              className="premium-button px-8 py-4 white-cta-btn font-normal flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 mr-1" />
              Chat With Our Bot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToTransform;