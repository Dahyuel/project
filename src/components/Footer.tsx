import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Use a short timeout to allow the page to change before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    // If we're already on the homepage, just scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-10 border-t border-white/10 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold tracking-wider text-white mb-3">NileByte</h3>
            <p className="text-gray-400 font-light leading-relaxed tracking-wide mb-3 max-w-sm text-sm">
              Building the future with AI-powered solutions
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide text-sm">Pages</h3>
            <ul className="space-y-1.5">
              {['home', 'about', 'services', 'contact', 'faq'].map((section) => (
                <li key={section}>
                  <button 
                    onClick={() => scrollToSection(section)} 
                    className="footer-link text-gray-400 hover:text-white font-light tracking-wide relative py-0.5 px-0 rounded transition-colors duration-200 block text-left text-sm"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide text-sm">Social</h3>
            <ul className="space-y-1.5">
              {['Twitter (X)', 'Instagram', 'LinkedIn'].map((platform) => (
                <li key={platform}>
                  <a href="#" className="footer-link text-gray-400 hover:text-blue-400 font-light tracking-wide py-0.5 px-0 rounded hover:bg-white/5 block text-left text-sm">
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Form */}
          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide text-sm">Subscribe Form</h3>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter Your Email..."
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 font-light text-sm"
              />
              <button className="premium-button px-6 py-2 gradient-cta-btn text-white font-normal text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/5">
          <p className="text-gray-400 font-light tracking-wide text-xs">
            © 2024 Nilebyte
          </p>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <a href="#" className="footer-link text-gray-400 hover:text-white font-light tracking-wide text-xs px-2 py-0.5 rounded transition-colors duration-200">
              Terms & Conditions
            </a>
            <a href="#" className="footer-link text-gray-400 hover:text-white font-light tracking-wide text-xs px-2 py-0.5 rounded transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;