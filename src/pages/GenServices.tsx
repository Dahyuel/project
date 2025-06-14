import React, { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { ChatBotProvider } from '../contexts/ChatBotContext';
import { Bot, BarChart3, Cog, Brain, Link, Users } from 'lucide-react';
import '../animations.css';
import DynamicBlobBackground from '../components/DynamicBlobBackground';

const GenServices = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const services = [
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Streamline your workflows with intelligent automation'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights'
    },
    {
      icon: Cog,
      title: 'Process Optimization',
      description: 'Enhance efficiency with smart solutions'
    },
    {
      icon: Brain,
      title: 'Custom AI Models',
      description: 'Tailored artificial intelligence for your needs'
    },
    {
      icon: Link,
      title: 'Integration Services',
      description: 'Connect all your systems seamlessly'
    },
    {
      icon: Users,
      title: 'Consulting & Strategy',
      description: 'Expert guidance for AI implementation'
    }
  ];

  useEffect(() => {
    // Only keep scroll to top functionality
    window.scrollTo(0, 0);
  }, []);

  return (
    <ChatBotProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative overflow-hidden">
        <DynamicBlobBackground />
        <div className="relative z-10">
          <Navigation />
          <main>
            {/* Hero Section */}
            <section className="pt-32 pb-8 relative">
              <div className="container mx-auto px-6 text-center relative z-10">
                <div className="hero-headline">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                    <span className="dynamic-gradient-text">General Services</span>
                  </h1>
                  <p className="hero-subtitle text-lg font-light text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide">
                    Comprehensive AI solutions designed to transform your business operations and drive innovation across all sectors.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Grid Section */}
            <section className="pb-16 relative">
              <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="feature-card bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-8 hover:bg-white/10 group"
                    >
                      <div className="w-16 h-16 dynamic-gradient-icon rounded-lg flex items-center justify-center mb-6 feature-icon">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white tracking-wide mb-4">{service.title}</h3>
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