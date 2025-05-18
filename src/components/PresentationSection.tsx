
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const PresentationSection: React.FC = () => {
  const compatibleModules = [
    { name: 'OSP32CAM', description: 'Module caméra HD connecté' },
    { name: 'OSP32Simple', description: 'Microcontrôleur basique polyvalent' },
    { name: 'OSP8266', description: 'Module Wi-Fi économique' },
    { name: 'OSPDuino', description: 'Compatible avec écosystème Arduino' },
    { name: 'OSPSensor', description: 'Capteurs environnementaux avancés' }
  ];

  return (
    <section id="presentation" className="py-20 relative">
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-gradient-primary text-center">Qu'est-ce que SmartESP ?</h2>
          <p className="text-gray-400 text-center mb-10">
            Une solution logicielle intuitive et puissante pour contrôler l'ensemble de votre écosystème OSP
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Une plateforme unifiée</h3>
            <p className="text-gray-400 mb-4">
              SmartESP est une interface centrale qui simplifie le contrôle et la programmation de tous vos modules OSP. Fini les configurations complexes et les interfaces disparates, gérez l'ensemble de vos appareils depuis un seul outil.
            </p>
            <p className="text-gray-400 mb-6">
              Conçue par des développeurs pour des développeurs, notre solution offre aussi bien une interface graphique intuitive que des API robustes pour l'intégration à vos projets existants.
            </p>
            
            <h3 className="text-xl font-bold mb-3">Modules compatibles</h3>
            <div className="grid grid-cols-2 gap-3">
              {compatibleModules.map((module, index) => (
                <Card key={index} className="neomorphic bg-[#151515] border-[#2a2a2a] overflow-hidden">
                  <CardContent className="p-4">
                    <h4 className="text-primary font-mono font-medium">{module.name}</h4>
                    <p className="text-sm text-gray-400">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-3xl"></div>
              <div className="relative neomorphic rounded-xl p-1.5 bg-[#151515] w-full max-w-md aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="Circuit électronique OSP"
                  className="rounded-lg object-cover w-full h-full"
                />
                <div className="absolute top-3 right-3 glass-morphism px-2 py-1 rounded-md text-xs font-mono text-white/90">
                  OSP32CAM
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
