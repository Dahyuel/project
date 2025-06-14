import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpecServices from './pages/SpecServices';
import GenServices from './pages/GenServices';
import { useCustomCursor } from './utils/customCursor';
import { initSmoothScroll } from './utils/smoothScroll';
import './animations.css';
import './styles/buttons.css';
import './styles/faq.css';
import './styles/cursor.css';

function App() {
  const { cursorRef, cursorDotRef, cursorCircleRef } = useCustomCursor();

  useEffect(() => {
    // Initialize smooth scrolling
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        aria-hidden="true"
      >
        <div ref={cursorDotRef} className="cursor-dot" />
        <div ref={cursorCircleRef} className="cursor-circle" />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specservices" element={<SpecServices />} />
        <Route path="/genservices" element={<GenServices />} />
      </Routes>
    </>
  );
}

export default App;