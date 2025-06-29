import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpecServices from './pages/SpecServices';
import GenServices from './pages/GenServices';
import { initSmoothScroll } from './utils/smoothScroll';
import './animations.css';
import './styles/buttons.css';
import './styles/faq.css';
import { ChatBotProvider } from './contexts/ChatBotContext';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  return (
    <ChatBotProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specservices" element={<SpecServices />} />
        <Route path="/genservices" element={<GenServices />} />
      </Routes>
    </ChatBotProvider>
  );
}

export default App;