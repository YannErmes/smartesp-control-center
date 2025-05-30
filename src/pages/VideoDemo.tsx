
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';

const VideoDemo = () => {
  const { isDarkMode } = useTheme();

  const videoTitles = [
    "Introduction à SmartESP et premiers pas",
    "Configuration d'un module ESP32CAM",
    "Contrôle à distance avec SmartESP",
    "Intégration de capteurs avec ESP8266",
    "Projets avancés avec ESP32 Simple"
  ];

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
            <span className="text-gradient-primary">Vidéos de démonstration</span>
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Découvrez SmartESP en action à travers ces tutoriels vidéo
          </p>
        </div>

        {/* Section des vidéos existantes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Vidéo 1 */}
          <div className={`neomorphic rounded-xl p-6 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
            <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
              Introduction à Smart ESP plus premiers pas
            </h3>
            <div className={`aspect-video rounded-lg mb-4 border overflow-hidden ${
              isDarkMode ? 'bg-[#0a0a0a] border-[#333]' : 'bg-gray-100 border-gray-300'
            }`}>
              <video 
                controls 
                className="w-full h-full"
                poster="/placeholder.svg"
              >
                <source src="https://fe-store.pro/appapk/videos/ESP video demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Une introduction complète à SmartESP et comment commencer vos premiers projets.
            </p>
          </div>

          {/* Vidéo 2 */}
          <div className={`neomorphic rounded-xl p-6 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
            <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
              Premier essai en temps réel
            </h3>
            <div className={`aspect-video rounded-lg mb-4 border overflow-hidden ${
              isDarkMode ? 'bg-[#0a0a0a] border-[#333]' : 'bg-gray-100 border-gray-300'
            }`}>
              <video 
                controls 
                className="w-full h-full"
                poster="/placeholder.svg"
              >
                <source src="https://fe-store.pro/appapk/videos/ESP video demo2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Regardez SmartESP en action lors d'un test en temps réel avec des modules ESP.
            </p>
          </div>
        </div>

        {/* Nouvelle section avec les 5 titres de vidéos */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-primary">
            Tutoriels à venir
          </h2>
          <div className="grid gap-4">
            {videoTitles.map((title, index) => (
              <div key={index} className={`neomorphic rounded-lg p-6 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <span className="font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Vidéo bientôt disponible
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <Button className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white px-8 py-3">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default VideoDemo;
