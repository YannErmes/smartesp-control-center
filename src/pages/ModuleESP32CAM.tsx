
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Image as ImageIcon, BookOpen } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';

const ModuleESP32CAM = () => {
  const { isDarkMode } = useTheme();

  const moduleImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
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
            <span className="text-gradient-primary">ESP32CAM</span>
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Module caméra HD connecté pour vos projets IoT
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Images Section */}
          <div className={`neomorphic rounded-xl p-8 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-gradient-primary">Images du module</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {moduleImages.map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden border border-gray-300">
                  <img
                    src={image}
                    alt={`ESP32CAM Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Code Section */}
          <div className={`neomorphic rounded-xl p-8 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-gradient-primary">Code du module</h2>
            </div>
            <div className="text-center">
              <Button className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white px-8 py-3">
                <Code className="h-5 w-5 mr-2" />
                Voir le code du module
              </Button>
            </div>
          </div>

          {/* Instructions Section */}
          <div className={`neomorphic rounded-xl p-8 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-gradient-primary">Instructions d'utilisation</h2>
            </div>
            <div className="prose max-w-none">
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-4`}>
                <h3 className="text-lg font-semibold mb-3">Configuration initiale</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Connectez le module ESP32CAM à votre ordinateur via un adaptateur FTDI</li>
                  <li>Installez les pilotes nécessaires pour votre système d'exploitation</li>
                  <li>Configurez l'IDE Arduino avec la bibliothèque ESP32</li>
                  <li>Sélectionnez le bon port COM dans l'IDE</li>
                </ol>
                
                <h3 className="text-lg font-semibold mb-3 mt-6">Première utilisation</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Téléchargez le code exemple depuis SmartESP</li>
                  <li>Modifiez les paramètres WiFi selon votre réseau</li>
                  <li>Compilez et téléversez le code sur le module</li>
                  <li>Accédez à l'interface web pour voir le stream vidéo</li>
                </ul>

                <div className={`p-4 rounded-lg mt-6 ${
                  isDarkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'
                }`}>
                  <p className="text-sm">
                    <strong>Astuce :</strong> Assurez-vous que l'alimentation est suffisante (3.3V/5V) 
                    pour éviter les redémarrages intempestifs du module.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className={`neomorphic rounded-xl p-8 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
            <h2 className="text-2xl font-bold mb-6 text-gradient-primary">
              Caractéristiques techniques
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Spécifications techniques</h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Processeur: ESP32-S</li>
                  <li>• Caméra: OV2640 2MP</li>
                  <li>• Résolution max: 1600x1200</li>
                  <li>• Wi-Fi: 802.11 b/g/n</li>
                  <li>• Bluetooth: 4.2 LE</li>
                  <li>• Flash: 4MB</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Fonctionnalités</h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Streaming vidéo en temps réel</li>
                  <li>• Capture d'images haute qualité</li>
                  <li>• Détection de mouvement</li>
                  <li>• Contrôle à distance via WiFi</li>
                  <li>• Compatible avec SmartESP</li>
                  <li>• Programmation Arduino IDE</li>
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

export default ModuleESP32CAM;
