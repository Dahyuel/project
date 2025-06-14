import React, { useRef, useEffect } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../utils/scrollAnimations';

const faqs = [
  {
    question: "What types of AI solutions do you offer?",
    answer: "We offer a comprehensive suite of AI solutions including machine learning models, natural language processing, computer vision, predictive analytics, and custom AI development. Our solutions are tailored to meet specific business needs and can be integrated into existing systems."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation timelines vary based on complexity and scope. Simple solutions can be deployed in 2-4 weeks, while more complex systems may take 2-3 months. We work closely with clients to establish clear timelines and milestones during the initial consultation."
  },
  {
    question: "What kind of support and maintenance do you provide?",
    answer: "We provide comprehensive support including 24/7 monitoring, regular updates, performance optimization, and technical assistance. Our maintenance packages ensure your AI solutions remain current, secure, and efficient."
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "We implement industry-leading security measures including end-to-end encryption, secure data storage, and strict access controls. Our solutions comply with major data protection regulations and we conduct regular security audits."
  },
  {
    question: "Can AI solutions be integrated with existing systems?",
    answer: "Yes, our AI solutions are designed for seamless integration with existing systems. We use standard APIs and protocols to ensure compatibility with your current infrastructure while maintaining data integrity and system performance."
  }
];

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  // Initialize scroll animation
  useScrollAnimation(sectionRef, {
    threshold: 0.1,
    rootMargin: '-50px',
    staggerChildren: true,
    staggerDelay: 0.1
  });

  // Split FAQ questions into words for animation
  useEffect(() => {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(question => {
      if (question instanceof HTMLElement) {
        const words = question.textContent?.split(' ') || [];
        question.innerHTML = words
          .map(word => `<span class="word stagger-item">${word}</span>`)
          .join(' ');
      }
    });
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto animate-on-scroll"
      id="faq"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-text">
          Frequently Asked <span className="dynamic-gradient-text">Questions</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto stagger-item">
          Find answers to common questions about our AI solutions and services
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'open' : ''
            }`}
          >
            <button
              className="w-full px-2 py-4 text-left flex items-center justify-between bg-transparent hover:bg-transparent focus:bg-transparent transition-colors"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="faq-question text-lg font-medium">
                {faq.question}
              </span>
              <div className="w-8 h-8 dynamic-gradient-icon rounded-lg flex items-center justify-center faq-icon flex-shrink-0">
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-white" />
                ) : (
                  <Plus className="w-5 h-5 text-white" />
                )}
              </div>
            </button>
            <div
              id={`faq-answer-${index}`}
              className="faq-answer px-2"
              aria-hidden={openIndex !== index}
            >
              <p className="py-4 text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;