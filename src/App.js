import React from 'react';
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import ImproveSkills from './components/ImproveSkills.js';
import QuoteSection from './components/QuoteSection.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
      </div>
    </div>
  );
}

export default App;
