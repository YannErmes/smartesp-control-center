
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';

const ModuleESP32CAMMB = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-background text-foreground' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`py-4 border-b ${isDarkMode ? 'border-[#222]' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className={`flex items-center gap-2 transition-colors ${
            isDarkMode 
              ? 'text-gray-300 hover:text-white' 
              : 'text-gray-600 hover:text-gray-900'
          }`}>
            <ArrowLeft className="h-5 w-5" />
            Retour à l'accueil
          </Link>
          <div className="text-gradient-primary flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="font-bold text-lg mono">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight">SmartESP</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">ESP32CAM MB</span>
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Module caméra avec motherboard intégrée
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`neomorphic rounded-xl p-8 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'} mb-8`}>
            <h2 className="text-2xl font-bold mb-6 text-gradient-primary">
              Caractéristiques principales
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Spécifications techniques</h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Processeur: ESP32-S</li>
                  <li>• Caméra: OV2640 2MP</li>
                  <li>• Motherboard: CH340G intégrée</li>
                  <li>• Alimentation: 5V via USB</li>
                  <li>• Wi-Fi: 802.11 b/g/n</li>
                  <li>• Connecteurs: USB-C</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Avantages</h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Programmation directe via USB</li>
                  <li>• Pas besoin d'adaptateur FTDI</li>
                  <li>• Reset automatique</li>
                  <li>• Alimentation stable</li>
                  <li>• Plug & Play</li>
                  <li>• Compatible SmartESP</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/">
              <Button className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white px-8 py-3">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuleESP32CAMMB;
