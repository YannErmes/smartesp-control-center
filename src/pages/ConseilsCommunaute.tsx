
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
      title: "Optimisation des Connexions ESP",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=250&fit=crop",
      description: "Découvrez les meilleures pratiques pour optimiser les connexions de vos modules ESP et améliorer la stabilité."
    },
    {
      title: "Configuration Réseau Avancée",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=250&fit=crop",
      description: "Apprenez à configurer des réseaux complexes avec plusieurs modules ESP pour des projets d'envergure."
    },
    {
      title: "Débogage et Diagnostic",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop",
      description: "Techniques avancées de débogage pour identifier et résoudre rapidement les problèmes de communication."
    },
    {
      title: "Sécurité et Chiffrement",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop",
      description: "Implémentez des mesures de sécurité robustes pour protéger vos appareils ESP contre les intrusions."
    },
    {
      title: "Performance et Monitoring",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop",
      description: "Surveillez les performances de vos modules ESP en temps réel et optimisez leur fonctionnement."
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
                <a href="https://github.com/YannErmes" className="text-primary hover:text-primary/80 transition-colors">
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
