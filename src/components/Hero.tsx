import React from 'react';
import { useChatBot } from '../contexts/ChatBotContext';
import DynamicBlobBackground from './DynamicBlobBackground';
import { Phone } from 'lucide-react';

const Hero = () => {
  const { openChat } = useChatBot();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-32 bg-black overflow-hidden">
      <DynamicBlobBackground />
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div>
          {/* Badge */}
          <div className="hero-badge inline-flex items-center px-4 py-2 mb-16 mt-8 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <span className="text-sm font-bold dynamic-gradient-text tracking-wide">2025</span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="text-xs font-light text-gray-300 tracking-wide">Next-Gen Ai Integrations</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-white">AI-Driven Success</span>
            <span className="block dynamic-gradient-text">
              Redefining the Future.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-sm sm:text-base md:text-lg font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Creating latest solutions that redefine innovation.
            <br className="hidden sm:block" />
            Stay ahead with AI-powered technology for the future.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col items-center justify-center gap-4">
            <button 
              onClick={() => openChat('Book A Call')} 
              className="premium-button w-full sm:w-auto px-8 py-4 gradient-cta-btn text-white font-normal flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 mr-1" />
              Book A Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;