
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';

const VideoDemo = () => {
  const { isDarkMode } = useTheme();

  // Placeholder data - will be updated with actual video links and titles
  const videos = [
    {
      id: 1,
      title: "Introduction à SmartESP et premiers pas",
      url: "https://fe-store.pro/appapk/videos/ESP video demo.mp4",
      description: "Une introduction complète à SmartESP et comment commencer vos premiers projets."
    },
    {
      id: 2,
      title: "Premier essai en temps réel",
      url: "https://fe-store.pro/appapk/videos/ESP video demo2.mp4",
      description: "Regardez SmartESP en action lors d'un test en temps réel avec des modules ESP."
    },
    {
      id: 3,
      title: "Configuration d'un module ESP32CAM",
      url: "", // To be provided
      description: "Apprenez à configurer et utiliser un module ESP32CAM avec SmartESP."
    },
    {
      id: 4,
      title: "Contrôle à distance avec SmartESP",
      url: "", // To be provided
      description: "Découvrez comment contrôler vos modules ESP à distance."
    },
    {
      id: 5,
      title: "Intégration de capteurs avec ESP8266",
      url: "", // To be provided
      description: "Guide pour intégrer différents types de capteurs avec ESP8266."
    },
    {
      id: 6,
      title: "Projets avancés avec ESP32 Simple",
      url: "", // To be provided
      description: "Explorez des projets plus complexes avec le module ESP32 Simple."
    }
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

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className={`neomorphic rounded-xl p-6 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
              <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
                {video.title}
              </h3>
              <div className={`aspect-video rounded-lg mb-4 border overflow-hidden ${
                isDarkMode ? 'bg-[#0a0a0a] border-[#333]' : 'bg-gray-100 border-gray-300'
              }`}>
                {video.url ? (
                  <video 
                    controls 
                    className="w-full h-full"
                    poster="/placeholder.svg"
                  >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      Vidéo bientôt disponible
                    </p>
                  </div>
                )}
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {video.description}
              </p>
            </div>
          ))}
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
