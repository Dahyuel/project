import React from 'react';
import { Bot, Brain, BarChart3, Eye, Mic, Cog, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicBlobBackground from './DynamicBlobBackground';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Development',
      subtitle: 'Smart Websites',
      description: 'We build AI-driven websites that adapt to users and automation.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      subtitle: '24/7 Customer Support',
      description: 'Instant AI-powered chatbots that automate responses.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      subtitle: 'Driven Decisions',
      description: 'Leverage AI to analyze trends and predict outcomes for smarter ways.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      subtitle: 'World Through AI',
      description: 'AI-based facial recognition, image analysis, and automation solutions.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Mic,
      title: 'Speech Recognition',
      subtitle: 'Smart Actions',
      description: 'Develop voice assistants, transcriptions, and speech with AI.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Cog,
      title: 'AI-Driven Automation',
      subtitle: 'Driven Decisions',
      description: 'Automate tasks, reduce costs, and improve productivity with solutions.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-black overflow-hidden">
      <DynamicBlobBackground className="blob-bg-services" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
            AI-Powered Services for
            <br />
            <span className="dynamic-gradient-text">
              Future-Driven Businesses
            </span>
          </h2>
          <p className="text-base font-light text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Our cutting-edge AI solutions are designed to transform businesses, enhance efficiency, and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden group hover:bg-white/10 stagger-${index + 1}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 dynamic-gradient-icon rounded-lg flex items-center justify-center mr-4 service-icon">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-wide">{service.title}</h3>
                    <p className="text-xs font-light text-gray-400 tracking-wide">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 font-light leading-relaxed tracking-wide">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/specservices"
            className="premium-button w-full sm:w-auto px-8 py-4 gradient-cta-btn text-white font-normal flex items-center justify-center gap-2 mx-auto"
          >
            <span>Load More</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;