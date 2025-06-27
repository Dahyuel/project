import React, { useState, useEffect, useRef } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../utils/scrollAnimations';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface NichePricing {
  name: string;
  plans: PricingPlan[];
}

const pricingData: NichePricing[] = [
  {
    name: 'Sales',
    plans: [
      {
        name: 'Basic Bundle',
        price: '$97-147/month',
        description: 'Essential sales automation tools',
        features: [
          'Lead capture forms with basic qualification',
          '3-sequence email automation (welcome, nurture, follow-up)',
          'Simple CRM setup and contact tagging',
          'Basic pipeline tracking',
          'Monthly performance report'
        ]
      },
      {
        name: 'Pro Bundle',
        price: '$247-347/month',
        description: 'Advanced sales automation suite',
        features: [
          'Everything in Basic plus:',
          'Lead scoring system',
          'Email + SMS automation',
          'Meeting booking integration',
          'Simple proposal templates',
          'Sales performance dashboard',
          'Priority support'
        ]
      }
    ]
  },
  {
    name: 'Coaching',
    plans: [
      {
        name: 'Basic Bundle',
        price: '$77-127/month',
        description: 'Essential coaching automation',
        features: [
          'Client intake form automation',
          'Basic scheduling system',
          'Payment collection setup',
          'Simple progress check-in emails',
          'Monthly client report'
        ]
      },
      {
        name: 'Pro Bundle',
        price: '$197-297/month',
        description: 'Complete coaching automation',
        features: [
          'Everything in Basic plus:',
          'Client onboarding sequence',
          'Resource delivery automation',
          'Progress tracking workflows',
          'Retention email campaigns',
          'Basic client portal',
          'Weekly optimization calls'
        ]
      }
    ]
  },
  {
    name: 'Real Estate',
    plans: [
      {
        name: 'Basic Bundle',
        price: '$127-177/month',
        description: 'Essential real estate automation',
        features: [
          'Lead capture and basic qualification',
          'Buyer/seller email sequences',
          'Showing request automation',
          'Simple follow-up system',
          'Monthly lead report'
        ]
      },
      {
        name: 'Pro Bundle',
        price: '$297-447/month',
        description: 'Advanced real estate automation',
        features: [
          'Everything in Basic plus:',
          'Multi-source lead integration',
          'Property alert system',
          'Transaction milestone automation',
          'Past client nurturing',
          'Referral request campaigns',
          'Bi-weekly strategy calls'
        ]
      }
    ]
  }
];

const Pricing = () => {
  const [selectedNiche, setSelectedNiche] = useState<string>('Sales');
  const [hoveredNiche, setHoveredNiche] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayNiche, setDisplayNiche] = useState(selectedNiche);
  const [nextNiche, setNextNiche] = useState('');
  const [transitionDirection, setTransitionDirection] = useState<'left' | 'right'>('right');
  const transitionTimeoutRef = useRef<number>();
  
  const { observeElements } = useScrollAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const currentNiche = pricingData.find(n => n.name === selectedNiche);

  useEffect(() => {
    const elementsToAnimate = [
      titleRef.current,
      textRef.current,
      selectorRef.current,
      cardsRef.current
    ].filter(el => el !== null) as HTMLElement[];
    observeElements(elementsToAnimate);
  }, [observeElements]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const handleNicheChange = (niche: string) => {
    setSelectedNiche(niche);
  };

  const handleMobileNicheChange = (direction: 'left' | 'right') => {
    if (isTransitioning) return;
    
    const currentIndex = pricingData.findIndex(n => n.name === selectedNiche);
    let nextIndex = currentIndex;

    if (direction === 'left') {
      nextIndex = (currentIndex - 1 + pricingData.length) % pricingData.length;
    } else {
      nextIndex = (currentIndex + 1) % pricingData.length;
    }

    setTransitionDirection(direction);
    setNextNiche(pricingData[nextIndex].name);
    setIsTransitioning(true);
    
    transitionTimeoutRef.current = setTimeout(() => {
      setSelectedNiche(pricingData[nextIndex].name);
      setDisplayNiche(pricingData[nextIndex].name);
      setIsTransitioning(false);
    }, 300);
  };

  const getIndicatorPosition = () => {
    const targetNiche = hoveredNiche || selectedNiche;
    const index = pricingData.findIndex(n => n.name === targetNiche);
    return (index / pricingData.length) * 100;
  };

  if (!currentNiche) return null;

  return (
    <section id="pricing" ref={sectionRef} className="py-32 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
            Transparent <span className="dynamic-gradient-text">Pricing</span>
          </h2>
          <p ref={textRef} className="scroll-animate text-base font-light text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Choose the perfect automation package for your business needs. All plans include setup, training, and ongoing support.
          </p>
        </div>

        {/* Niche Selector */}
        <div ref={selectorRef} className="max-w-4xl mx-auto scroll-animate mb-16">
          {/* Desktop Niche Selector */}
          {!isMobile && (
            <div className="relative bg-black/20 backdrop-blur-sm rounded-full p-4 border border-white/10 mb-8" onMouseLeave={() => setHoveredNiche(null)}>
              <div className="flex relative">
                <div
                  className="absolute inset-y-0 gradient-cta-btn transition-all duration-300 ease-in-out rounded-full px-2"
                  style={{
                    left: `${getIndicatorPosition()}%`,
                    width: `${100 / pricingData.length}%`,
                  }}
                />
                {pricingData.map((niche) => (
                  <button
                    key={niche.name}
                    onClick={() => handleNicheChange(niche.name)}
                    onMouseEnter={() => setHoveredNiche(niche.name)}
                    className="relative z-10 flex-1 py-4 px-6 text-sm font-bold tracking-wide transition-all duration-300 rounded-full text-white whitespace-nowrap"
                  >
                    {niche.name}
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
                  
                  {isTransitioning && (
                    <div 
                      className="absolute w-full transition-all duration-300 ease-in-out"
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
        </div>

        {/* Pricing Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-children scroll-animate">
          {currentNiche.plans.map((plan, index) => (
            <div
              key={index}
              className={`unified-card p-8 bg-white/5 border border-white/10 rounded-2xl group relative ${
                index === 1 ? 'md:transform md:scale-105' : ''
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">{plan.name}</h3>
                <div className="text-3xl font-bold dynamic-gradient-text mb-2">{plan.price}</div>
                <p className="text-gray-400 font-light">{plan.description}</p>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className="w-5 h-5 dynamic-gradient-icon rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className={`text-gray-300 font-light leading-relaxed ${
                      feature.startsWith('Everything in Basic') ? 'font-semibold text-white' : ''
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;