import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutBreathing from './components/AboutBreathing';
import BreathingIssues from './components/BreathingIssues';
import Symptoms from './components/Symptoms';
import BreathingConsequences from './components/BreathingConsequences';
import AboutMe from './components/AboutMe';
import Reviews from './components/Reviews';
import QuickTest from './components/QuickTest';
import Products from './components/Products';
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BreathingIssues />
      <Symptoms />
      <BreathingConsequences />
      <AboutBreathing />
      <AboutMe />
      <Reviews />
      <QuickTest />
      <Products />
      <FAQ />
      <ScrollToTop />
    </div>
  );
}

export default App; 