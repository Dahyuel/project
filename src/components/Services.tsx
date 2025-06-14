import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DynamicBlobBackground from './DynamicBlobBackground';
import { useScrollAnimation } from '../utils/scrollAnimations';
import { servicesData } from '../data/servicesData';

const Services = () => {
  const { observeElements } = useScrollAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const elementsToAnimate = [
      titleRef.current,
      textRef.current,
      gridRef.current,
      buttonRef.current
    ].filter(el => el !== null) as HTMLElement[];
    observeElements(elementsToAnimate);
  }, [observeElements]);

  return (
    <section id="services" ref={sectionRef} className="py-20 relative bg-black overflow-hidden">
      <DynamicBlobBackground className="blob-bg-services" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
            AI-Powered Services for
            <br />
            <span className="dynamic-gradient-text">
              Future-Driven Businesses
            </span>
          </h2>
          <p ref={textRef} className="scroll-animate text-base font-light text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Our cutting-edge AI solutions are designed to transform businesses, enhance efficiency, and drive innovation.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children scroll-animate">
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

        <div className="text-center mt-16">
          <Link
            to="/specservices"
            className="premium-button inline-block px-8 py-4 gradient-cta-btn text-white font-normal"
          >
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;