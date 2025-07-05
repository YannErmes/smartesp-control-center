
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Image as ImageIcon, BookOpen } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';

const ModuleESP32Simple = () => {
  const { isDarkMode } = useTheme();

  const moduleImages = [
    "https://www.okuelectronics.com/wp-content/uploads/2021/03/ESP32-Development-Board...jpg?w=400&h=300&fit=crop",
    "https://5.imimg.com/data5/SELLER/Default/2023/10/354838092/LU/GP/KY/153669915/esp32-wroom-30pin-module-500x500.jpeg?w=400&h=300&fit=crop",
    "https://preview.redd.it/what-is-the-difference-between-these-2-esp32-v0-8y8a1eluuk6e1.jpg?width=1080&crop=smart&auto=webp&s=03ee2689eafe81bdafa2a667b1fcb59e87991a40",
    "https://www.researchgate.net/publication/373643331/figure/fig3/AS:11431281185914535@1693809247549/Major-Components-on-ESP32-Dev-Kit-V17.png?w=400&h=300&fit=crop"
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
            <span className="text-gradient-primary">ESP32 Simple</span>
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Microcontrôleur basique polyvalent pour tous vos projets
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
                    alt={`ESP32 Simple Image ${index + 1}`}
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
  onClick={() => window.open('https://github.com/fe-webstore/Version-ESP32-projet-SmartESP', '_blank')}
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
                <h3 className="text-lg font-semibold mb-3">Configuration de base</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Connectez l'ESP32 à votre ordinateur via un câble USB</li>
                  <li>Installez l'IDE Arduino et la bibliothèque ESP32</li>
                  <li>Sélectionnez la carte "ESP32 Dev Module" dans l'IDE</li>
                  <li>Choisissez le port série correct</li>
                </ol>
                
                <h3 className="text-lg font-semibold mb-3 mt-6">Programmation</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Utilisez les exemples fournis dans SmartESP</li>
                  <li>Configurez les broches GPIO selon vos besoins</li>
                  <li>Testez la connectivité WiFi et Bluetooth</li>
                  <li>Intégrez vos capteurs et actionneurs</li>
                </ul>

                <div className={`p-4 rounded-lg mt-6 ${
                  isDarkMode ? 'bg-green-900/20 border border-green-800' : 'bg-green-50 border border-green-200'
                }`}>
                  <p className="text-sm">
                    <strong>Info :</strong> L'ESP32 Simple est idéal pour débuter avec les projets IoT 
                    grâce à sa polyvalence et sa facilité d'utilisation.
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
                  <li>• Processeur: ESP32 dual-core</li>
                  <li>• Mémoire: 520KB SRAM</li>
                  <li>• Flash: 4MB</li>
                  <li>• Wi-Fi: 802.11 b/g/n</li>
                  <li>• Bluetooth: 4.2 LE</li>
                  <li>• GPIO: 36 pins</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Fonctionnalités</h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Contrôle d'appareils connectés</li>
                  <li>• Capteurs de température et humidité</li>
                  <li>• Contrôle LED et moteurs</li>
                  <li>• Communication série</li>
                  <li>• Programmation Arduino</li>
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

export default ModuleESP32Simple;
