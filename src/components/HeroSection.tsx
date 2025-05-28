
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Download } from 'lucide-react';

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
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
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
              <Button className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white px-8 py-6" size="lg">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" 
                    fill="currentColor"/>
                </svg>
                Découvrir sur GitHub
              </Button>
              <RouterLink to="/demo">
                <Button variant="outline" className="neomorphic hover:neo-glow text-gray-200 px-6 py-6" size="lg">
                  Démo
                </Button>
              </RouterLink>
            </div>
            
            {/* Nouveaux boutons */}
            <div className="flex flex-wrap gap-4">
              <RouterLink to="/installation">
                <Button variant="outline" className="neomorphic hover:neo-glow text-gray-200 px-6 py-3">
                  Documentation
                </Button>
              </RouterLink>
              <Button className="neomorphic bg-accent hover:bg-accent/90 accent-glow text-white px-6 py-3">
                <Download className="h-4 w-4 mr-2" />
                Télécharger Smart ESP V.01
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center fade-in-delay-1">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-2xl transform rotate-6"></div>
              <div className="neomorphic rounded-xl p-6 bg-[#151515] relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-500 mono">SmartESP v1.0</div>
                </div>
                <pre className="text-xs md:text-sm font-mono overflow-x-auto bg-[#0a0a0a] p-3 rounded-lg">
                  <code className="text-gray-300">
{`# Initialisation de SmartESP
import smartesp

# Configuration du module
esp = smartesp.connect("ESP32CAM")

# Récupération du flux vidéo
camera = esp.get_camera()
camera.start_stream()

# Contrôle des capteurs
if esp.has_sensor("temperature"):
    temp = esp.get_sensor("temperature")
    print(f"Température: {temp.read()}°C")

# Actions à distance
esp.send_command("LED_ON")

# SmartESP gère tout pour vous!`}
                  </code>
                </pre>
                <div className="mt-4 flex justify-between">
                  <div className="text-xs text-green-400 mono">● Connecté à ESP32CAM</div>
                  <div className="text-xs text-gray-400 mono">Autorefresh: ON</div>
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
