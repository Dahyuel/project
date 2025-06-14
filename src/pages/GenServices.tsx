import React, { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { ChatBotProvider } from '../contexts/ChatBotContext';
import '../styles/animations.css';
import DynamicBlobBackground from '../components/DynamicBlobBackground';
import { useScrollAnimation } from '../utils/scrollAnimations';
import { servicesData } from '../data/servicesData';
import AnimatedBackground from '../components/AnimatedBackground';

const GenServices = () => {
  const { observeElements } = useScrollAnimation();
  const heroRef = useRef<HTMLDivElement>(null);
  const topGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only keep scroll to top functionality
    window.scrollTo(0, 0);
    const elementsToAnimate = [
      heroRef.current,
      topGridRef.current
    ].filter(el => el !== null) as HTMLElement[];
    observeElements(elementsToAnimate);

    // Add custom transition classes to elements
    const addTransitionClasses = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element) => {
        const el = element as HTMLElement;
        el.classList.add('slow-fade-blur');
      });
    };

    // Call after a small delay to ensure elements are mounted
    setTimeout(addTransitionClasses, 100);
  }, [observeElements]);

  return (
    <ChatBotProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-20">
          <Navigation />
          <main>
            {/* Hero Section */}
            <section className="pt-32 pb-8 relative">
              <div className="container mx-auto px-6 text-center relative z-10">
                <div ref={heroRef} className="scroll-animate slow-fade-blur">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                    <span className="dynamic-gradient-text">General Services</span>
                  </h1>
                  <p className="text-lg font-light text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide">
                    Comprehensive AI solutions designed to transform your business operations and drive innovation across all sectors.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Grid Section */}
            <section className="pb-16 relative">
              <div className="container mx-auto px-6 relative z-10">
                <div ref={topGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children scroll-animate">
                  {servicesData.map((service, index) => (
                    <div
                      key={index}
                      className="unified-card p-8 bg-white/5 border border-white/10 rounded-2xl group"
                    >
                      <div className="w-16 h-16 dynamic-gradient-icon rounded-lg flex items-center justify-center mb-6 card-icon">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-white tracking-wide">{service.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed tracking-wide">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </ChatBotProvider>
  );
};

export default GenServices;