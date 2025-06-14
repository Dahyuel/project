import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpecServices from './pages/SpecServices';
import GenServices from './pages/GenServices';
import { initSmoothScroll } from './utils/smoothScroll';
import './animations.css';
import './styles/buttons.css';
import './styles/faq.css';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specservices" element={<SpecServices />} />
        <Route path="/genservices" element={<GenServices />} />
      </Routes>
    </>
  );
}

export default App;