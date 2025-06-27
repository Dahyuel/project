import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { ChatBotProvider } from '../contexts/ChatBotContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/animations.css';
import Aurora from '../components/Aurora';
import { useParams } from 'react-router-dom';
import { nichesData } from '../data/nichesData';
import { useScrollAnimation } from '../utils/scrollAnimations';

const validNicheNames = nichesData.map(n => n.name);

const SpecServices = () => {
  const { nicheId } = useParams<{ nicheId: string }>();
  const initialNiche = validNicheNames.includes(nicheId || '') ? nicheId! : 'Sales';
  const [selectedNiche, setSelectedNiche] = useState<string>(initialNiche);
  const [hoveredNiche, setHoveredNiche] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { observeElements } = useScrollAnimation();
  const heroRef = useRef<HTMLDivElement>(null);
  const nicheSelectorRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayNiche, setDisplayNiche] = useState(selectedNiche);
  const [nextNiche, setNextNiche] = useState('');
  const [transitionDirection, setTransitionDirection] = useState<'left' | 'right'>('right');
  const transitionTimeoutRef = useRef<number>();

  const niche = nichesData.find(n => n.name === selectedNiche);

  const handleNicheChange = (n: string) => {
    setSelectedNiche(n);
  };

  const handleMobileNicheChange = (direction: 'left' | 'right') => {
    if (isTransitioning) return;
    
    const currentIndex = nichesData.findIndex(n => n.name === selectedNiche);
    let nextIndex = currentIndex;

    if (direction === 'left') {
      nextIndex = (currentIndex - 1 + nichesData.length) % nichesData.length;
    } else {
      nextIndex = (currentIndex + 1) % nichesData.length;
    }

    setTransitionDirection(direction);
    setNextNiche(nichesData[nextIndex].name);
    setIsTransitioning(true);
    
    // Update after animation
    transitionTimeoutRef.current = setTimeout(() => {
      setSelectedNiche(nichesData[nextIndex].name);
      setDisplayNiche(nichesData[nextIndex].name);
      setIsTransitioning(false);
    }, 300);
  };

  const getIndicatorPosition = () => {
    const targetNiche = hoveredNiche || selectedNiche;
    const index = nichesData.findIndex(n => n.name === targetNiche);
    return (index / nichesData.length) * 100;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Only keep scroll to top functionality
    window.scrollTo(0, 0);
     const elementsToAnimate = [
        heroRef.current,
        nicheSelectorRef.current,
        gridRef.current
    ].filter(el => el !== null) as HTMLElement[];
    observeElements(elementsToAnimate);

  }, [observeElements]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
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
      <div className="min-h-screen bg-black relative">
        <div className="fixed inset-0 w-full h-full z-0">
          <div style={{ transform: 'scaleY(-1)', width: '100%', height: '100%' }}>
            <Aurora colorStops={["#0052D4", "#4364F7", "#6FB1FC"]} blend={0.9} amplitude={1.0} speed={0.5} />
          </div>
          <div className="absolute inset-0 w-full h-full bg-black/30 pointer-events-none" />
        </div>
        <div className="relative z-20">
          <Navigation />
          <main>
            {/* Hero Section */}
            <section className="pt-32 pb-8 relative">
              <div className="container mx-auto px-6 text-center relative z-10">
                <div ref={heroRef} className="scroll-animate slow-fade-blur">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                    <span className="dynamic-gradient-text">Specific Niche Services</span>
                  </h1>
                  <p className="text-lg font-light text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide">
                    Industry-focused AI solutions tailored to meet the unique challenges and opportunities of your specific sector.
                  </p>
                </div>
              </div>
            </section>

            {/* Niche Selector Section */}
            <section className="pb-16 relative">
              <div className="container mx-auto px-6 relative z-10">
                <div ref={nicheSelectorRef} className="max-w-4xl mx-auto scroll-animate slow-fade-blur">
                  {/* Desktop Niche Selector */}
                  {!isMobile && (
                    <div className="relative bg-black/20 backdrop-blur-sm rounded-full p-4 border border-white/10 mb-8" onMouseLeave={() => setHoveredNiche(null)}>
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
                        disabled={isTransitioning}
                        className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>

                      <div className="relative overflow-hidden rounded-full px-8 py-4 min-w-[200px] text-center h-[52px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] animate-gradient-shift"></div>
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                          {/* Current niche text */}
                          <div 
                            className={`absolute w-full transition-all duration-300 ease-in-out ${
                              isTransitioning 
                                ? transitionDirection === 'left'
                                  ? '-translate-x-full'
                                  : 'translate-x-full'
                                : 'translate-x-0'
                            }`}
                          >
                            <span className="block text-white font-bold tracking-wide">
                              {displayNiche}
                            </span>
                          </div>
                          
                          {/* Next niche text */}
                          {isTransitioning && (
                            <div 
                              className={`absolute w-full transition-all duration-300 ease-in-out ${
                                transitionDirection === 'left'
                                  ? 'translate-x-0'
                                  : 'translate-x-0'
                              }`}
                              style={{
                                transform: transitionDirection === 'left' 
                                  ? 'translateX(100%)' 
                                  : 'translateX(-100%)',
                                animation: transitionDirection === 'left'
                                  ? 'slide-in-left 300ms ease-in-out forwards'
                                  : 'slide-in-right 300ms ease-in-out forwards'
                              }}
                            >
                              <span className="block text-white font-bold tracking-wide">
                                {nextNiche}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => handleMobileNicheChange('right')}
                        disabled={isTransitioning}
                        className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  )}

                  {/* Dynamic Cards Section with smooth content transition */}
                  <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 stagger-children scroll-animate">
                    {niche.features.map((feature, index) => (
                      <div
                        key={index}
                        className="unified-card p-8 bg-white/5 border border-white/10 rounded-2xl group"
                      >
                        <div className="w-16 h-16 dynamic-gradient-icon rounded-lg flex items-center justify-center mb-6 card-icon">
                          <feature.icon className="w-8 h-8 text-white" />
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