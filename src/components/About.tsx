import React, { useEffect, useRef } from 'react';
import { Target, Users, Handshake, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../utils/scrollAnimations';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission',
      description: 'Our mission is to empower businesses of all sizes with intelligent automation. We turn complex operational challenges into growth opportunities, freeing human potential to focus on what matters most: innovation.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'We are a collective of AI specialists, data scientists, and automation engineers. Our team\'s deep experience allows us to transform cutting-edge academic research into real-world, reliable business solutions.'
    },
    {
      icon: Handshake,
      title: 'Collaborative Approach',
      description: 'From initial discovery to deployment and ongoing support, we follow a clear, agile methodology. We keep you involved and informed at every step, guaranteeing the final solution exceeds your expectations.'
    },
    {
      icon: TrendingUp,
      title: 'Commitment to Your Success',
      description: 'Our relationship doesn\'t end at deployment. We provide continuous support and strategic guidance to ensure your AI solutions evolve, adapt, and continue to deliver value as your business scales.'
    }
  ];

  const { observeElements } = useScrollAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elementsToAnimate = [
        titleRef.current,
        textRef.current,
        gridRef.current
    ].filter(el => el !== null) as HTMLElement[];
    observeElements(elementsToAnimate);
  }, [observeElements]);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
            About <span className="dynamic-gradient-text">Us</span>
          </h2>
          <p ref={textRef} className="scroll-animate text-base font-light text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide">
            We are a dedicated team of AI experts, data scientists, and engineers. We leverage our deep expertise to build and integrate custom automation solutions that solve your most complex business challenges and drive measurable growth.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children scroll-animate">
          {features.map((feature, index) => (
            <div
              key={index}
              className="unified-card p-8 bg-white/5 border border-white/10 rounded-2xl group"
            >
              <div className="w-16 h-16 dynamic-gradient-icon rounded-lg flex items-center justify-center mb-6 card-icon">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed tracking-wide">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;