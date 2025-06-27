import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/animations.css';

// Add custom styles for the logo
const logoStyles = {
  gradient: {
    background: 'linear-gradient(45deg, #0052D4, #4364F7, #6FB1FC, #0052D4, #4364F7)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradient-shift 2.5s ease infinite'
  }
};

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownTimeoutRef = useRef<number>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setShowMobileMenu(false);
    
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('home');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isServicesPage = location.pathname === '/genservices' || location.pathname === '/specservices';

  useEffect(() => {
    if (isServicesPage) {
      setActiveSection('services');
      return;
    }

    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const current = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isServicesPage]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setShowServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setShowServicesDropdown(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-xl border border-white/5 rounded-full hover-glow md:left-4 md:right-4 md:transform-none">
      <div className="px-6 md:container md:mx-auto">
        <div className="flex items-center justify-center h-16 md:justify-between">
          {/* Logo - Only on desktop */}
          <div className="hidden md:flex flex-shrink-0">
            <button 
              onClick={scrollToHome}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="text-xl font-semibold tracking-wider"
            >
              <span 
                className={`inline-block transition-[background,color] duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${isHovered ? 'bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] bg-clip-text text-transparent animate-gradient-shift' : 'text-white'}`}
              >
                Nile
              </span>
              <span 
                className={`inline-block transition-[background,color] duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${isHovered ? 'text-white' : 'bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] bg-clip-text text-transparent animate-gradient-shift'}`}
              >
                Byte
              </span>
            </button>
          </div>

          {/* Desktop Navigation - Right aligned on desktop, centered on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.id === 'services' ? (
                  <div 
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-4 py-2 text-sm font-light tracking-wide transition-all duration-300 rounded-lg flex items-center space-x-1 ${
                        activeSection === item.id || isServicesPage
                          ? 'text-blue-400 bg-blue-400/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showServicesDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Services Dropdown */}
                    {showServicesDropdown && (
                      <div 
                        className="absolute right-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden transform origin-top-right transition-all duration-200"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link
                          to="/genservices"
                          className="nav-dropdown-item block px-6 py-3 text-gray-300 hover:text-white transition-all duration-200 border-b border-white/5 hover:bg-white/5"
                        >
                          <div className="font-medium">General Services</div>
                          <div className="text-xs text-gray-500 mt-1">Comprehensive AI solutions</div>
                        </Link>
                        <Link
                          to="/specservices"
                          className="nav-dropdown-item block px-6 py-3 text-gray-300 hover:text-white transition-all duration-200 hover:bg-white/5"
                        >
                          <div className="font-medium">Specific Niche</div>
                          <div className="text-xs text-gray-500 mt-1">Industry-focused solutions</div>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-sm font-light tracking-wide transition-all duration-300 rounded-lg ${
                      activeSection === item.id
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Items - Centered */}
          <div className="flex md:hidden items-center space-x-4">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-xs font-light tracking-wide transition-all duration-300 rounded-lg ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Fixed positioning and better styling */}
        {showMobileMenu && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.id === 'services' ? (
                    <div>
                      <button
                        onClick={() => {
                          setShowServicesDropdown(!showServicesDropdown);
                        }}
                        className={`w-full text-left px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 flex items-center justify-between ${
                          activeSection === item.id || isServicesPage
                            ? 'text-blue-400 bg-blue-400/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showServicesDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      {showServicesDropdown && (
                        <div className="bg-black/50 border-t border-white/5">
                          <Link
                            to="/genservices"
                            onClick={() => setShowMobileMenu(false)}
                            className="block px-8 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                          >
                            General Services
                          </Link>
                          <Link
                            to="/specservices"
                            onClick={() => setShowMobileMenu(false)}
                            className="block px-8 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                          >
                            Specific Niche
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        scrollToSection(item.id);
                        setShowMobileMenu(false);
                      }}
                      className={`w-full text-left px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-blue-400 bg-blue-400/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;