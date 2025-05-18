
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PresentationSection from '../components/PresentationSection';
import StpSection from '../components/StpSection';
import AvantagesSection from '../components/AvantagesSection';
import GalerieSection from '../components/GalerieSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <PresentationSection />
      <StpSection />
      <AvantagesSection />
      <GalerieSection />
      <Footer />
    </div>
  );
};

export default Index;
