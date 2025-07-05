
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";

interface ConseilProps {
  title: string;
  image: string;
  description: string;
  isDark: boolean;
}

const Conseil: React.FC<ConseilProps> = ({ title, image, description, isDark }) => {
  return (
    <Card className={`overflow-hidden hover:scale-[1.02] transition-all duration-300 ${
      isDark 
        ? 'neomorphic bg-[#151515] border-[#2a2a2a] hover:neo-glow' 
        : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
    }`}>
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className={`text-lg mb-3 ${
          isDark ? 'text-gradient-primary' : 'text-gray-800'
        }`}>
          {title}
        </CardTitle>
        <p className={`text-sm ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const ConseilsCommunaute = () => {
  const { isDarkMode } = useTheme();

  const conseils = [
    {
      title: " Déconnecter TX/RX si utilisé avant l’upload de code ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB51sBK--IN-94F5OeypIVONgjUvjP7IRJ6w&s",
      description: "Si tu utilises un module connecté en UART (TX/RX), débranche-le avant d’envoyer le code."
    },
    {
      title: "Vérifier les tensions d'alimentation (3.3V / 5V)",
      image: "https://www.researchgate.net/publication/359068957/figure/fig2/AS:1131088432893953@1646683905265/The-pin-diagram-of-DHT11-temperature-sensors.pngw=400&h=250&fit=crop",
      description: "⚠️ Tous les composants ne supportent pas le 5V !"
    },
    {
      title: "Débogage et Diagnostic",
      image: "https://i.postimg.cc/hvFJ0zTp/Capture-d-cran-2025-07-05-141915.png?w=400&h=250&fit=crop",
      description: " Pour résoudre rapidement les problèmes de communication  utilisé le driver ESP."
    },
    {
      title: " Éviter de brancher des modules à chaud",
      image: "https://circuitdigest.com/sites/default/files/inlineimages/u2/IoT-Based-Temperature-and-Humidity-Measurement-using-ESP32-and-DHT11-Sensor.jpg",
      description: "Ne branche/débranche aucun composant à chaud (pendant que la carte est alimentée)."
    },
    {
      title: "Tester les composants un par un",
      image: "https://preview.redd.it/esp32-power-supply-with-sensors-v0-cxop1y0gr3jb1.jpg?width=1235&format=pjpg&auto=webp&s=2bf4e032111fdfa3f7b0d224da632bb6be8a7d32",
      description: "Cela permet d’isoler les problèmes plus facilement en cas de dysfonctionnement."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-background text-foreground' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`py-4 border-b transition-colors duration-300 ${
        isDarkMode ? 'border-[#222]' : 'border-gray-200'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className={`flex items-center gap-2 transition-colors hover:opacity-80 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
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
          
          <ThemeToggle variant="switch" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className={`absolute inset-0 bg-circuit-pattern opacity-5 ${
          isDarkMode ? 'block' : 'hidden'
        }`}></div>
        
        <div className="relative z-10">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Conseils de la Communauté</span>
            </h1>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Découvrez les conseils et astuces partagés par notre communauté d'experts ESP
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {conseils.map((conseil, index) => (
              <Conseil
                key={index}
                title={conseil.title}
                image={conseil.image}
                description={conseil.description}
                isDark={isDarkMode}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className={`p-6 rounded-xl max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode 
                ? 'neomorphic bg-[#151515] border-[#2a2a2a]' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Rejoignez Notre Communauté
              </h3>
              <p className={`mb-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Partagez vos expériences, posez vos questions et découvrez de nouvelles techniques avec des milliers de développeurs ESP.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/smart.esp/#" className="text-primary hover:text-primary/80 transition-colors">
                  Instagram
                </a>
                <a href="https://chat.whatsapp.com/BYFnSgoU8BqEDmtuJMhp3k" className="text-primary hover:text-primary/80 transition-colors">
                  Forum whatsapp
                </a>
                <a href="https://github.com/fe-webstore" className="text-primary hover:text-primary/80 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConseilsCommunaute;
