import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Package, Cpu, Download, BookOpen, ExternalLink, Zap } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';

const Installation = () => {
  const { isDarkMode } = useTheme();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Étape 1",
      description: "📥 Rends-toi sur la page de téléchargement de Smart ESP pour récupérer l’APK et les fichiers nécessairent (driver ESP) ."
    },
    {
      id: 2,
      title: "Étape 2", 
      description: "📱 Installe l'application Smart ESP sur ton appareil."
    },
    {
      id: 3,
      title: "Étape 3",
      description: "Rendez-vous sur le GitHub officiel Smart ESP pour :Télécharger le code source spécifique à ton projet "
    },
    {
      id: 4,
      title: "Étape 4",
      description: " Configurer les packages et librairies"
    },
    {
      id: 5,
      title: "Étape 5",
      description: "Félicitation 🎥 Une vidéo de démonstration est disponible pour t’aider pour la suite"
    },
    
  ];

  const electronicComponents = [
    {
      id: 1,
      name: "Servo-Motor",
      image: "https://iotdesignpro.com/sites/default/files/inline-images/Servo-Motor-Pinout.jpg"
    },
    {
      id: 2,
      name: "Relay 5V",
      image: "https://components101.com/sites/default/files/component_pin/Single-Channel-Relay-Module-Pinout.jpg"
    },
    {
      id: 3,
      name: "Capteur d'humidité DHTXX de  l'air",
      image: "https://cdn.circuitgeeks.com/wp-content/uploads/2021/11/DHT11-Pinout.png"
    },
    {
      id: 4,
      name: "Capteur PIR",
      image: "https://community-assets.home-assistant.io/original/4X/c/9/0/c90ca57982cf3747284c7d232ef741b4132d2d62.jpeg"
    },
    {
      id: 5,
      name: "Capteur PIR",
      image: "https://mytectutor.com/wp-content/uploads/2019/04/pir_sensor_pinout.png"
    },
    {
      id: 6,
      name: "Capteur IR",
      image: "https://microcontrollerslab.com/wp-content/uploads/2020/01/IR-receiver-with-and-without-metallic-head.png"
    },
    {
      id: 7,
      name: "Capteur d'humidité du sol",
      image: "https://sltech.com.np/wp-content/uploads/2024/08/soil-moisture-pin.jpg"
    },
    {
      id: 8,
      name: "Utrasonic",
      image: "https://microcontrollerslab.com/wp-content/uploads/2014/12/HC-SR04-Ultrasonic-Sensor-Pinout-diagram.jpg"
    },
    {
      id: 9,
      name: "Suiveur de ligne",
      image: "https://i0.wp.com/srituhobby.com/wp-content/uploads/2023/11/3-11.png?resize=1024%2C576&ssl=1"
    },
    {
      id: 10,
      name: "Transistor",
      image: "https://components101.com/sites/default/files/component_pin/LM35-Pinout.pngg"
    }
  ];

  const components = [
    {
      id: 1,
      title: "ESP 32 ou 8266",
      image: "https://techeonics.com/wp-content/uploads/2022/07/esp32-vs-esp8266-devlopment-boards.webp",
      link: "#" // À remplacer par le lien fourni
    },
    {
      id: 2,
      title: "LED",
      image: "https://blog.sparkfuneducation.com/hubfs/EDU/BLOG%20Images/November%202017/LED%20Diagram.jpg",
      link: "#" // À remplacer par le lien fourni
    },
    {
      id: 3,
      title: "Bouton Poussoir",
      image: "https://marocproduits.com/mp_content/uploads/2019/08/5-mini-bouton-poussoir.jpg",
      link: "#" // À remplacer par le lien fourni
    },
    {
      id: 4,
      title: "Potentiométre",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0pu43wzyJ6siWTj05KJ9HXCjrx4JmyneWQ&s",
      link: "#" // À remplacer par le lien fourni
    },
    {
      id: 5,
      title: "Resistance",
      image: "https://cdn.sparkfun.com/assets/c/4/a/9/d/515c7a2bce395f653d000002.png",
      link: "#" // À remplacer par le lien fourni
    },
    {
      id: 6,
      title: "cable jumper ",
      image: "https://shop.sb-components.co.uk/cdn/shop/products/jumping-wire_1800x1800_7153f42e-cd92-4401-9354-93dfc46c06f0.jpg",
      link: "#" // À remplacer par le lien fourni
    }
  ];

  const pdfGuides = [
    {
      id: 1,
      title: "Guide ESP32 CAM",
      description: "Guide complet pour débuter avec l'ESP32 CAM",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      pdfUrl: "https://example.com/guide-esp32cam.pdf" // À remplacer par le vrai lien PDF
    },
    {
      id: 2,
      title: "Programmation ESP32",
      description: "Apprenez à programmer votre ESP32 facilement",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      pdfUrl: "https://example.com/programmation-esp32.pdf" // À remplacer par le vrai lien PDF
    },
    {
      id: 3,
      title: "Capteurs et ESP8266",
      description: "Intégration de capteurs avec l'ESP8266",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      pdfUrl: "https://example.com/capteurs-esp8266.pdf" // À remplacer par le vrai lien PDF
    },
    {
      id: 4,
      title: "Projets IoT Avancés",
      description: "Créez vos premiers projets IoT avec SmartESP",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      pdfUrl: "https://example.com/projets-iot.pdf" // À remplacer par le vrai lien PDF
    },
    {
      id: 5,
      title: "Debugging ESP32",
      description: "Techniques de débogage pour vos projets ESP32",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop",
      pdfUrl: "https://example.com/debugging-esp32.pdf" // À remplacer par le vrai lien PDF
    },
    {
      id: 6,
      title: "Sécurité IoT",
      description: "Sécurisez vos dispositifs IoT efficacement",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      pdfUrl: "https://example.com/securite-iot.pdf" // À remplacer par le vrai lien PDF
    }
  ];

  const openPdfViewer = (pdfUrl: string, title: string) => {
    // Utilisation de Google Docs Viewer pour ouvrir le PDF en ligne
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
    window.open(viewerUrl, '_blank', 'width=1000,height=800,scrollbars=yes,resizable=yes');
  };

  const downloadImage = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      // Fallback: open image in new tab
      window.open(imageUrl, '_blank');
    }
  };

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
            <span className="text-gradient-primary">Page d'Installation</span>
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Guide étape par étape pour installer et configurer SmartESP
          </p>
          
          {/* Download Button */}
          <div className="mt-8">
            <a 
              href="https://github.com/fe-webstore/smartesp-app/releases/latest" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white px-8 py-4 text-lg">
                <Download className="h-5 w-5 mr-2" />
                Télécharger SmartESP APK
              </Button>
            </a>
          </div>
        </div>

        {/* Packages à Installer Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className={`neomorphic rounded-xl p-8 mb-8 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Package className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-gradient-primary">Packages à Installer</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`rounded-lg p-4 border ${
                isDarkMode ? 'bg-[#0a0a0a] border-[#333]' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className="text-lg font-semibold mb-3">Python Dependencies</h3>
                <div className={`rounded p-3 font-mono text-sm ${
                  isDarkMode ? 'bg-black text-green-400' : 'bg-gray-800 text-green-300'
                }`}>
                  <div>Pour ESP 32 Simple</div>
                  <div>#include WiFi.h</div>
                  <div>#include AsyncTCP.h</div>
                  <div>#include ESPAsyncWebServer.h</div>
                  <div>#include ArduinoJson.h</div>
                  <div>#include "SmartESP32Utils.h"</div>

                  <div>Pour ESP 8266</div>
                  <div>#include ESP8266WiFi.h</div>
                  <div>#include ESPAsyncWebServer.h</div>
                  <div>#include ArduinoJson.h</div>
                  <div>#include "SmartESP8266Utils.h"</div>
                </div>
              </div>
              <div className={`rounded-lg p-4 border ${
                isDarkMode ? 'bg-[#0a0a0a] border-[#333]' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className="text-lg font-semibold mb-3">System Requirements</h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li>Mots-clés à taper</li>
                  <li>• AsyncTCP</li>
                  <li>• ESPAsyncWebServer</li>
                  <li>• ArduinoJson</li>
        
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stepper Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <button
                    onClick={() => setCurrentStep(step.id)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                      currentStep === step.id
                        ? 'border-primary bg-primary text-white'
                        : currentStep > step.id
                        ? 'border-green-500 bg-green-500 text-white'
                        : isDarkMode
                        ? 'border-gray-600 bg-transparent text-gray-400'
                        : 'border-gray-400 bg-transparent text-gray-500'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-semibold">{step.id}</span>
                    )}
                  </button>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 ${
                      currentStep > step.id 
                        ? 'bg-green-500' 
                        : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className={`neomorphic rounded-xl p-8 mb-8 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
            <h2 className="text-2xl font-bold mb-4 text-gradient-primary">
              {steps[currentStep - 1].title}
            </h2>
            <div className={`rounded-lg p-6 border ${
              isDarkMode ? 'bg-[#0a0a0a] border-[#333]' : 'bg-gray-50 border-gray-200'
            }`}>
              <p className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {steps[currentStep - 1].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="neomorphic hover:neo-glow"
            >
              Précédent
            </Button>
            
            <Button
              onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
              disabled={currentStep === 6}
              className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white"
            >
              Suivant
            </Button>
          </div>
        </div>

        {/* Documentation - Composants Électroniques Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-gradient-primary">Documentation - Composants Électroniques</h2>
            </div>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Découvrez les quelques composants électroniques les  tension d'alimentation recommandé
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {electronicComponents.map((component) => (
              <div
                key={component.id}
                className={`neomorphic rounded-xl p-4 hover:neo-glow transition-all duration-300 group ${
                  isDarkMode ? 'bg-[#151515]' : 'bg-white'
                }`}
              >
                <div className={`aspect-[4/3] rounded-lg overflow-hidden mb-3 border ${
                  isDarkMode ? 'border-[#333]' : 'border-gray-200'
                }`}>
                  <img
                    src={component.image}
                    alt={component.name}
                    className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-center text-gradient-primary group-hover:text-white transition-colors mb-3">
                  {component.name}
                </h3>
                {/* Download Button */}
                <Button 
                  onClick={() => downloadImage(component.image, `${component.name.replace(/\s+/g, '_')}_diagram.jpg`)}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white text-xs py-2"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Télécharger
                </Button>
              </div>
            ))}
          </div>
        </div>

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
              <div
                key={component.id}
                className={`neomorphic rounded-xl p-6 hover:neo-glow transition-all duration-300 group ${
                  isDarkMode ? 'bg-[#151515]' : 'bg-white'
                }`}
              >
                <div className={`aspect-[4/3] rounded-lg overflow-hidden mb-4 border ${
                  isDarkMode ? 'border-[#333]' : 'border-gray-200'
                }`}>
                  <img
                    src={component.image}
                    alt={component.title}
                    className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-gradient-primary group-hover:text-white transition-colors mb-4">
                  {component.title}
                </h3>
                {/* Download Button */}
                <Button 
                  onClick={() => downloadImage(component.image, `${component.title.replace(/\s+/g, '_')}_diagram.jpg`)}
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger l'image
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* 👉 Nouveau bouton Librairie de Composants */}
        <div className="text-center mt-12">
          <Link to="https://github.com/fe-webstore/Code_composants">
            <Button className="neomorphic bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg transition-all duration-300 hover:neo-glow">
              📚 Accéder à la Librairie de Composants
            </Button>
          </Link>
        </div>


        {/* Guides PDF Gratuits Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-gradient-primary">Guides PDF Gratuits</h2>
            </div>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Consultez nos guides complets pour maîtriser SmartESP et vos projets IoT
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pdfGuides.map((guide) => (
              <div
                key={guide.id}
                className={`neomorphic rounded-xl p-6 hover:neo-glow transition-all duration-300 group ${
                  isDarkMode ? 'bg-[#151515]' : 'bg-white'
                }`}
              >
                <div className={`aspect-video rounded-lg overflow-hidden mb-4 border ${
                  isDarkMode ? 'border-[#333]' : 'border-gray-200'
                }`}>
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gradient-primary mb-2">
                    {guide.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {guide.description}
                  </p>
                  <Button
                    onClick={() => openPdfViewer(guide.pdfUrl, guide.title)}
                    className="neomorphic bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:neo-glow"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Lire le PDF
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <Button className="neomorphic bg-secondary hover:bg-secondary/90 text-white px-8 py-3">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Installation;
