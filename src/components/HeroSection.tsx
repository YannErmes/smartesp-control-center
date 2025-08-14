
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Download, BookOpen, Code2 } from 'lucide-react';
import ImageZoom from './ImageZoom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-background to-[#121212]">
      {/* Background animation */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      {/* Animated dots/stars */}
      <div className="stars absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animation: `pulse-glow ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left column */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient-primary">SmartESP</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              Contrôlez vos modules ESP en un clic
            </p>
            <p className="text-gray-400 mb-6 max-w-lg">
              Une interface intuitive pour gérer l'ensemble de vos modules ESP32CAM, ESP32Simple et autres appareils compatibles de manière centralisée.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <RouterLink to="/projets">
                <Button className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white px-8 py-6" size="lg">
                  <Code2 className="h-5 w-5 mr-2" />
                  Voir les Projets
                </Button>
              </RouterLink>
              <RouterLink to="/installation">
                <Button variant="outline" className="neomorphic hover:neo-glow px-8 py-6" size="lg">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Documentation
                </Button>
              </RouterLink>
              <a
                href="https://github.com/fe-webstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="neomorphic hover:neo-glow text-white px-8 py-6" size="lg">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089..." fill="currentColor"/>
                  </svg>
                  GitHub
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right column */}
          <div className="lg:w-1/2 flex flex-col items-center gap-8 fade-in-delay-1">
            {/* App Screenshot */}
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl transform rotate-3"></div>
              <div className="neomorphic rounded-2xl p-4 bg-[#151515] relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#333] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
                  <ImageZoom
                    src="https://i.postimg.cc/4y37Y3xJ/IMG-20250727-WA0084.jpg"
                    alt="SmartESP Application Screenshot"
                    thumbnailClassName="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs text-green-400 font-mono">SmartESP Dashboard</span>
                    </div>
                    <p className="text-xs text-gray-300">Interface de contrôle en temps réel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
