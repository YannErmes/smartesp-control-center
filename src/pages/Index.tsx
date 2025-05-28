
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PresentationSection from '../components/PresentationSection';
import StpSection from '../components/StpSection';
import AvantagesSection from '../components/AvantagesSection';
import GalerieSection from '../components/GalerieSection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';
import { useTheme } from '@/contexts/ThemeContext';

const Index = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-background text-foreground' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <Header />
      <HeroSection />
      <PresentationSection />
      <StpSection />
      <AvantagesSection />
      <GalerieSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
