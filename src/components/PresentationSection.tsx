
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { ArrowRight } from 'lucide-react';
import ImageZoom from './ImageZoom';

const PresentationSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  const compatibleModules = [
    { 
      name: 'ESP32CAM', 
      description: 'Module caméra HD connecté',
      route: '/modules/esp32cam'
    },
    { 
      name: 'ESP32Simple', 
      description: 'Microcontrôleur basique polyvalent',
      route: '/modules/esp32simple'
    },
    { 
      name: 'ESP32CAM MB', 
      description: 'Module caméra avec motherboard',
      route: '/modules/esp32cam-mb'
    },
    { 
      name: 'ESP8266', 
      description: 'Module Wi-Fi économique',
      route: '/modules/esp8266'
    }
  ];

  return (
    <section id="presentation" className={`py-20 relative ${
      isDarkMode ? 'bg-background' : 'bg-gray-50'
    }`}>
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-gradient-primary text-center">Qu'est-ce que SmartESP ?</h2>
          <p className={`text-center mb-10 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Une solution logicielle intuitive et puissante pour contrôler l'ensemble de votre écosystème ESP
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Une plateforme unifiée</h3>
            <p className={`mb-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              SmartESP est une interface centrale qui simplifie le contrôle et la programmation de tous vos modules ESP. Fini les configurations complexes et les interfaces disparates, gérez l'ensemble de vos appareils depuis un seul outil.
            </p>
            <p className={`mb-6 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Conçue par des développeurs pour des développeurs, notre solution offre aussi bien une interface graphique intuitive que des systémes de communication robustes pour l'intégration à vos projets existants.
            </p>
            
            <h3 className="text-xl font-bold mb-3">Modules compatibles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {compatibleModules.map((module, index) => (
                <RouterLink key={index} to={module.route}>
                  <Card className={`neomorphic overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer ${
                    isDarkMode ? 'bg-[#151515] border-[#2a2a2a]' : 'bg-white'
                  }`}>
                    <CardContent className="p-4">
                      <h4 className="text-primary font-mono font-medium">{module.name}</h4>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{module.description}</p>
                    </CardContent>
                  </Card>
                </RouterLink>
              ))}
            </div>
            
            {/* Boutons de navigation entre modules */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <RouterLink to="/modules/esp32cam" className="flex-1">
                <Button className="w-full neomorphic bg-primary hover:bg-primary/90 neo-glow text-white">
                  ESP32CAM
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </RouterLink>
              <RouterLink to="/modules/esp32simple" className="flex-1">
                <Button className="w-full neomorphic bg-accent hover:bg-accent/90 accent-glow text-white">
                  ESP32Simple
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </RouterLink>
              <RouterLink to="/modules/esp8266" className="flex-1">
                <Button variant="outline" className={`w-full neomorphic ${
                  isDarkMode 
                    ? 'border-[#333] hover:bg-[#222] text-gray-200' 
                    : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                }`}>
                  ESP8266
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </RouterLink>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-3xl"></div>
              <div className={`relative neomorphic rounded-xl p-1.5 w-full max-w-md aspect-square ${
                isDarkMode ? 'bg-[#151515]' : 'bg-white'
              }`}>
                <ImageZoom
                  src="https://i.postimg.cc/CMCcLNKK/Digital-Marketing-Agency-Facebook-Post-1.png"
                  alt="Circuit électronique ESP"
                  thumbnailClassName="rounded-lg object-cover w-full h-full"
                />
                <div className="absolute top-3 right-3 glass-morphism px-2 py-1 rounded-md text-xs font-mono text-white/90 pointer-events-none">
                  ESP32CAM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
