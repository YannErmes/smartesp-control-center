
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link as RouterLink } from 'react-router-dom';

const PresentationSection: React.FC = () => {
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
    <section id="presentation" className="py-20 relative">
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-gradient-primary text-center">Qu'est-ce que SmartESP ?</h2>
          <p className="text-gray-400 text-center mb-10">
            Une solution logicielle intuitive et puissante pour contrôler l'ensemble de votre écosystème ESP
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Une plateforme unifiée</h3>
            <p className="text-gray-400 mb-4">
              SmartESP est une interface centrale qui simplifie le contrôle et la programmation de tous vos modules ESP. Fini les configurations complexes et les interfaces disparates, gérez l'ensemble de vos appareils depuis un seul outil.
            </p>
            <p className="text-gray-400 mb-6">
              Conçue par des développeurs pour des développeurs, notre solution offre aussi bien une interface graphique intuitive que des systémes de communication robustes pour l'intégration à vos projets existants.
            </p>
            
            <h3 className="text-xl font-bold mb-3">Modules compatibles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {compatibleModules.map((module, index) => (
                <RouterLink key={index} to={module.route}>
                  <Card className="neomorphic bg-[#151515] border-[#2a2a2a] overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <h4 className="text-primary font-mono font-medium">{module.name}</h4>
                      <p className="text-sm text-gray-400">{module.description}</p>
                    </CardContent>
                  </Card>
                </RouterLink>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-3xl"></div>
              <div className="relative neomorphic rounded-xl p-1.5 bg-[#151515] w-full max-w-md aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="Circuit électronique ESP"
                  className="rounded-lg object-cover w-full h-full"
                />
                <div className="absolute top-3 right-3 glass-morphism px-2 py-1 rounded-md text-xs font-mono text-white/90">
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
