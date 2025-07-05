import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Package, Cpu, Download, BookOpen, ExternalLink, Zap } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';

const Installation = () => {
  const { isDarkMode } = useTheme();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [];
  const electronicComponents = [];
  const components = [];
  const pdfGuides = [];

  const openPdfViewer = (pdfUrl: string, title: string) => {
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
    window.open(viewerUrl, '_blank', 'width=1000,height=800,scrollbars=yes,resizable=yes');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-background text-foreground' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* ...other layout content */}

      {/* Composants Électroniques Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Cpu className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-gradient-primary">Composants Électroniques</h2>
          </div>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Découvrez les composants électroniques de  démmarage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component) => (
            <a
              key={component.id}
              href={component.link}
              className={`neomorphic rounded-xl p-6 hover:neo-glow transition-all duration-300 group cursor-pointer ${
                isDarkMode ? 'bg-[#151515]' : 'bg-white'
              }`}
            >
              <div className={`aspect-square rounded-lg overflow-hidden mb-4 border ${
                isDarkMode ? 'border-[#333]' : 'border-gray-200'
              } flex items-center justify-center`}>
                <img
                  src={component.image}
                  alt={component.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-gradient-primary group-hover:text-white transition-colors">
                {component.title}
              </h3>
            </a>
          ))}
        </div>
      </div>

      {/* ... repeat same logic for electronicComponents and pdfGuides with image container centered */}
    </div>
  );
};

export default Installation;
