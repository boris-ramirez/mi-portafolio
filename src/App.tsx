import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import Content from './components/Content';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
