import React, { useEffect, useRef } from 'react';
import { useChatBot } from '../contexts/ChatBotContext';
import { Phone } from 'lucide-react';
import { useScrollAnimation } from '../utils/scrollAnimations';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const { openChat } = useChatBot();
  const { observeElements } = useScrollAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elementsToAnimate = [
      badgeRef.current,
      headlineRef.current,
      subtitleRef.current,
      ctaRef.current
    ].filter(el => el !== null) as HTMLElement[];

    observeElements(elementsToAnimate);
  }, [observeElements]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center relative pt-20 pb-32 bg-black overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-20">
        <div>
          {/* Badge */}
          <div ref={badgeRef} className="scroll-animate inline-flex items-center px-4 py-2 mb-16 mt-8 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <span className="text-sm font-bold dynamic-gradient-text tracking-wide">2025</span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="text-xs font-light text-gray-300 tracking-wide">Next-Gen Ai Integrations</span>
          </div>

          {/* Main Headline */}
          <h1 ref={headlineRef} className="scroll-animate text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-white">AI-Driven Success</span>
            <span className="block dynamic-gradient-text">
              Redefining the Future.
            </span>
          </h1>

          {/* Subtitle */}
          <p ref={subtitleRef} className="scroll-animate text-sm sm:text-base md:text-lg font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Creating latest solutions that redefine innovation.
            <br className="hidden sm:block" />
            Stay ahead with AI-powered technology for the future.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="scroll-animate flex flex-col items-center justify-center gap-4">
            <button
              onClick={() => openChat('Book A Call')}
              className="premium-button w-[200px] sm:w-auto px-8 py-4 gradient-cta-btn text-white font-normal flex items-center justify-center gap-2"
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