import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Image as ImageIcon, BookOpen } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';

const ModuleESP8266 = () => {
  const { isDarkMode } = useTheme();

  const moduleImages = [
    "https://www.flyrobo.in/image/cache/catalog/blog/nodemcu-esp8266/F7KRNQQIVO7WQ8V-600x315w.jpg",
    "https://www.elecrow.com/media/catalog/product/cache/b6b9577937e6a96f50e53ddc42983628/d/p/dpo28090b_nodemcu_v2_esp8266_development_board_01.jpg",
    "https://kunkune.co.uk/wp-content/uploads/2023/10/0.96-Display-ESP8266-NodeMCU-Board-min.jpg",
    "https://electropeak.com/learn/wp-content/uploads/2023/05/NodeMCU_ADC_PWM_LED-1200x750.jpg"
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
            <span className="text-gradient-primary">ESP8266</span>
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Module Wi-Fi économique et performant
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
                    alt={`ESP8266 Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
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
              <Button
  className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white px-8 py-3"
  onClick={() => window.open('https://github.com/fe-webstore/Version-ESP8266-projet-SmartESP', '_blank')}
>
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
                <h3 className="text-lg font-semibold mb-3">Premier démarrage</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Connectez l'ESP8266 via un adaptateur USB-TTL</li>
                  <li>Installez les pilotes CH340 ou CP2102 selon votre adaptateur</li>
                  <li>Configurez l'IDE Arduino pour ESP8266</li>
                  <li>Sélectionnez le bon modèle (NodeMCU, Wemos D1, etc.)</li>
                </ol>
                
                <h3 className="text-lg font-semibold mb-3 mt-6">Configuration WiFi</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Utilisez la bibliothèque WiFi.h pour la connexion</li>
                  <li>Configurez votre SSID et mot de passe WiFi</li>
                  <li>Testez la connexion avec des exemples simples</li>
                  <li>Implémentez un serveur web basique</li>
                </ul>

                <div className={`p-4 rounded-lg mt-6 ${
                  isDarkMode ? 'bg-orange-900/20 border border-orange-800' : 'bg-orange-50 border border-orange-200'
                }`}>
                  <p className="text-sm">
                    <strong>Économie :</strong> L'ESP8266 consomme très peu d'énergie et 
                    est parfait pour les projets IoT alimentés par batterie.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className={`neomorphic rounded-xl p-8 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
            <h2 className="text-2xl font-bold mb-6 text-gradient-primary">
              Caractéristiques principales
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Spécifications techniques</h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Processeur: Tensilica L106</li>
                  <li>• Fréquence: 80/160 MHz</li>
                  <li>• Mémoire: 128KB RAM</li>
                  <li>• Flash: 4MB</li>
                  <li>• Wi-Fi: 802.11 b/g/n</li>
                  <li>• GPIO: 17 pins</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Avantages</h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Très économique</li>
                  <li>• Faible consommation</li>
                  <li>• Idéal pour l'IoT</li>
                  <li>• Large communauté</li>
                  <li>• Compatible Arduino</li>
                  <li>• Intégration SmartESP</li>
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

export default ModuleESP8266;
