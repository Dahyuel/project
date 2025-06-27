import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import ReadyToTransform from '../components/ReadyToTransform';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { ChatBotProvider } from '../contexts/ChatBotContext';
import '../styles/animations.css';

function Home() {

  useEffect(() => {
    // Only keep scroll to top functionality
    window.scrollTo(0, 0);
  }, []);

  return (
    <ChatBotProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        <div className="relative z-10">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Services />
            <Pricing />
            <FAQ />
            <ReadyToTransform />
            <Contact />
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </ChatBotProvider>
  );
}

export default Home;