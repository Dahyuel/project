import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../utils/scrollAnimations';

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="py-32 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div>
          <div className="text-center mb-16">
            <h2 ref={titleRef} className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
              Get in <span className="cta-headline">Touch</span>
            </h2>
            <p ref={textRef} className="scroll-animate text-lg font-light text-gray-400 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Ready to transform your business with AI? Let's discuss your project and explore the possibilities.
            </p>
          </div>

          <div ref={gridRef} className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto stagger-children scroll-animate">
            <div className="unified-card flex items-center bg-white/5 border border-white/10 rounded-2xl p-6 group">
              <div className="w-12 h-12 dynamic-gradient-icon rounded-lg flex items-center justify-center mr-4 card-icon">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Call Us</p>
                <p className="text-gray-400 font-light tracking-wide">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="unified-card flex items-center bg-white/5 border border-white/10 rounded-2xl p-6 group">
              <div className="w-12 h-12 dynamic-gradient-icon rounded-lg flex items-center justify-center mr-4 card-icon">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Email Us</p>
                <p className="text-gray-400 font-light tracking-wide">hello@aistudio.com</p>
              </div>
            </div>

            <div className="unified-card flex items-center bg-white/5 border border-white/10 rounded-2xl p-6 group">
              <div className="w-12 h-12 dynamic-gradient-icon rounded-lg flex items-center justify-center mr-4 card-icon">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Visit Us</p>
                <p className="text-gray-400 font-light tracking-wide">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;