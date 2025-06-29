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
        name: 'Basic',
        price: '$147–197/month',
        description: 'Starter sales automation',
        features: [
          'Lead capture to CRM',
          'Cold email & LinkedIn automation',
          'Auto-booking calendar sync',
          'Reminders & no-show follow-ups',
          'Weekly pipeline summary',
        ],
      },
      {
        name: 'Pro',
        price: '$297–497/month',
        description: 'Full-funnel sales automation',
        features: [
          'Everything in Basic',
          'SMS + WhatsApp follow-up',
          'AI lead scoring',
          'Custom sales workflows',
          'Warm-up/reactivation flows',
          'Bi-weekly conversion reviews',
        ],
      },
    ],
  },
  {
    name: 'Coaching',
    plans: [
      {
        name: 'Basic',
        price: '$127–177/month',
        description: 'Coaching ops made simple',
        features: [
          'Intake → calendar automation',
          'Email/SMS session reminders',
          'Onboarding email flow',
          'Feedback request automation',
          'Prep docs sent before session',
        ],
      },
      {
        name: 'Pro',
        price: '$277–447/month',
        description: 'Scale coaching with smart workflows',
        features: [
          'Everything in Basic',
          'Course/membership automation',
          'Upsell/payment flows',
          'AI session summaries',
          'Lead nurture sequences',
          'Monthly performance report',
        ],
      },
    ],
  },
  {
    name: 'Real-Estate',
    plans: [
      {
        name: 'Basic',
        price: '$127–177/month',
        description: 'Essential listing automation',
        features: [
          'Lead capture & qualification',
          'Buyer/seller email sequences',
          'Showing request automation',
          'Follow-up system',
          'Monthly lead report',
        ],
      },
      {
        name: 'Pro',
        price: '$297–447/month',
        description: 'Advanced real estate workflows',
        features: [
          'Everything in Basic',
          'Multi-source lead sync',
          'Property alert emails',
          'Deal milestone automation',
          'Referral & nurture flows',
          'Bi-weekly strategy calls',
        ],
      },
    ],
  },
  {
    name: 'E-Commerce',
    plans: [
      {
        name: 'Basic',
        price: '$147–197/month',
        description: 'Boost sales, save time',
        features: [
          'Abandoned cart flows',
          'Order tracking notifications',
          'Review request automation',
          'Inventory automation',
          'AI chatbot for IG/FB DMs',
          'Winback email flows',
        ],
      },
      {
        name: 'Pro',
        price: '$347–547/month',
        description: 'Full-stack ecom automation',
        features: [
          'Everything in Basic',
          'Upsell/cross-sell flows',
          'AI product recommendations',
          'Loyalty/rewards workflows',
          'Growth dashboard',
          'Bi-weekly strategy sessions',
        ],
      },
    ],
  },
  {
    name: 'Marketing',
    plans: [
      {
        name: 'Basic',
        price: '$177–247/month',
        description: 'Automate your ops',
        features: [
          'CRM lead capture',
          'Proposal → invoice automation',
          'Client onboarding flows',
          'Weekly task digests',
          'Launch checklist workflows',
        ],
      },
      {
        name: 'Pro',
        price: '$397–647/month',
        description: 'Systemize for scale',
        features: [
          'Everything in Basic',
          'Churn prevention automations',
          'White-labeled dashboards',
          'AI content feedback loops',
          'Client health summaries',
          'Calendar + approvals integration',
        ],
      },
    ],
  },
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
            <span className="dynamic-gradient-text">Pricing</span>
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
        <div ref={cardsRef} className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto stagger-children scroll-animate h-full">
          {/* Basic Card */}
          <div className="unified-card p-8 bg-white/5 border border-white/10 rounded-2xl group relative flex flex-col h-full min-h-[540px] flex-1">
            <div className="text-left mb-8 flex-shrink-0">
              <h3 className="text-4xl font-extrabold dynamic-gradient-text mb-2 tracking-wide">{currentNiche.plans[0].name.replace(' Bundle', '')}</h3>
              <div className="text-xl font-bold text-white mb-2">{currentNiche.plans[0].price}</div>
              <p className="text-gray-400 font-light">{currentNiche.plans[0].description}</p>
            </div>
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-700" />
              <span className="uppercase text-xs tracking-widest text-gray-500 font-semibold px-4">Features</span>
              <div className="flex-1 h-px bg-gray-700" />
            </div>
            <div className="space-y-6 flex flex-col">
              {currentNiche.plans[0].features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center">
                  <div className="w-3 h-3 bg-white/10 rounded-full mr-2 flex-shrink-0 transition-all duration-300 group-hover:bg-white" />
                  <span className="text-gray-300 font-light leading-none flex items-center">
                    {feature.startsWith('Everything in Basic')
                      ? 'Everything in Basic plan'
                      : feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Pro Card (duplicate structure, different content) */}
          <div className="unified-card p-8 bg-white/5 border border-white/10 rounded-2xl group relative flex flex-col h-full min-h-[540px] flex-1">
            <div className="text-left mb-8 flex-shrink-0">
              <h3 className="text-4xl font-extrabold dynamic-gradient-text mb-2 tracking-wide">{currentNiche.plans[1].name.replace(' Bundle', '')}</h3>
              <div className="text-xl font-bold text-white mb-2">{currentNiche.plans[1].price}</div>
              <p className="text-gray-400 font-light">{currentNiche.plans[1].description}</p>
            </div>
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-700" />
              <span className="uppercase text-xs tracking-widest text-gray-500 font-semibold px-4">Features</span>
              <div className="flex-1 h-px bg-gray-700" />
            </div>
            <div className="space-y-6 flex flex-col">
              {currentNiche.plans[1].features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center">
                  <div className="w-3 h-3 bg-white/10 rounded-full mr-2 flex-shrink-0 transition-all duration-300 group-hover:bg-white" />
                  <span className="text-gray-300 font-light leading-none flex items-center">
                    {feature.startsWith('Everything in Basic')
                      ? 'Everything in Basic plan'
                      : feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;