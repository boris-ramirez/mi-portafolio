import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Info from './components/Info';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  const [prevPath, setPrevPath] = useState('/');
  const [targetPoint, setTargetPoint] = useState<[number, number, number]>([0, 0, 0]);

  const calculateDisplacement = (currentPath: string) => {
    const routes = ['/', '/projects', '/info', '/contact', '/faq'];
    const points: [number, number, number][] = [
      [0, 0, 0],        // Home
      [1000, 0, 0],     // Projects
      [2000, 0, 0],     // Info
      [3000, 0, 0],     // Contact
      [4000, 0, 0],     // FAQ
    ];

    const currentIndex = routes.indexOf(currentPath);
    setTargetPoint(points[currentIndex]);
    setPrevPath(currentPath);
  };

  return (
    <Router>
      <div className="relative w-full h-screen overflow-hidden">
        <ParticlesBackground targetPoint={targetPoint} />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <Header onNavClick={calculateDisplacement} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/info" element={<Info />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
