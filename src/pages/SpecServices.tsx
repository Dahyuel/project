import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { ChatBotProvider } from '../contexts/ChatBotContext';
import { ShoppingCart, Megaphone, TrendingUp, Users, Home, Bot, FileText, Calendar, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import '../animations.css';
import DynamicBlobBackground from '../components/DynamicBlobBackground';
import { useParams } from 'react-router-dom';
import { nichesData } from '../data/nichesData';
import { useScrollAnimation } from '../utils/scrollAnimations';

const SpecServices = () => {
  const { nicheId } = useParams<{ nicheId: string }>();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [selectedNiche, setSelectedNiche] = useState<string>(nicheId || 'Healthcare');
  const [hoveredNiche, setHoveredNiche] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const niche = nichesData.find(n => n.name === selectedNiche);

  const handleNicheChange = (n: string) => {
    setSelectedNiche(n);
  };

  const handleMobileNicheChange = (direction: 'left' | 'right') => {
    const currentIndex = nichesData.findIndex(n => n.name === selectedNiche);
    let nextIndex = currentIndex;

    if (direction === 'left') {
      nextIndex = (currentIndex - 1 + nichesData.length) % nichesData.length;
    } else {
      nextIndex = (currentIndex + 1) % nichesData.length;
    }
    setSelectedNiche(nichesData[nextIndex].name);
  };

  const getIndicatorPosition = () => {
    const index = nichesData.findIndex(n => n.name === (hoveredNiche || selectedNiche));
    return (index / nichesData.length) * 100;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Only keep scroll to top functionality
    window.scrollTo(0, 0);
  }, []);

  if (!niche) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Niche not found.</p>
      </div>
    );
  }

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
                    <span className="dynamic-gradient-text">Specific Niche Services</span>
                  </h1>
                  <p className="hero-subtitle text-lg font-light text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide">
                    Industry-focused AI solutions tailored to meet the unique challenges and opportunities of your specific sector.
                  </p>
                </div>
              </div>
            </section>

            {/* Niche Selector Section */}
            <section className="pb-16 relative">
              <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                  {/* Desktop Niche Selector */}
                  {!isMobile && (
                    <div className="relative bg-black/20 backdrop-blur-sm rounded-full p-4 border border-white/10 mb-8">
                      <div className="flex relative">
                        {/* Moving indicator */}
                        <div 
                          className="absolute inset-y-0 gradient-cta-btn niche-selector-indicator transition-all duration-300 ease-in-out niche-selector-glow rounded-full px-2" 
                          style={{
                            left: `${getIndicatorPosition()}%`,
                            width: `${100 / nichesData.length}%`,
                          }}
                        />
                        {nichesData.map((n, index) => (
                          <button
                            key={n.name}
                            onClick={() => handleNicheChange(n.name)}
                            onMouseEnter={() => setHoveredNiche(n.name)}
                            onMouseLeave={() => setHoveredNiche(null)}
                            className={`relative z-10 flex-1 py-4 px-6 text-sm font-bold tracking-wide transition-all duration-300 rounded-full text-white whitespace-nowrap`}
                          >
                            {n.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mobile Niche Selector */}
                  {isMobile && (
                    <div className="flex items-center justify-center mb-8 space-x-4">
                      <button
                        onClick={() => handleMobileNicheChange('left')}
                        className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      
                      <div className="bg-black/20 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10 min-w-[200px] text-center">
                        <span className="text-white font-bold tracking-wide">{selectedNiche}</span>
                      </div>
                      
                      <button
                        onClick={() => handleMobileNicheChange('right')}
                        className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  )}

                  {/* Dynamic Cards Section with smooth content transition */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {niche.features.map((feature, index) => (
                      <div
                        key={index}
                        className="feature-card bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 hover:bg-white/10 group transition-all duration-300"
                      >
                        <div className="w-16 h-16 dynamic-gradient-icon rounded-lg flex items-center justify-center mb-6 feature-icon">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white tracking-wide">{feature.name}</h3>
                        <p className="text-gray-400 font-light leading-relaxed tracking-wide">{feature.description}</p>
                      </div>
                    ))}
                  </div>
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

export default SpecServices;