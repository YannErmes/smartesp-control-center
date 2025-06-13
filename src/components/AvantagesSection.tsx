
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AvantageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Avantage: React.FC<AvantageProps> = ({ title, description, icon }) => {
  return (
    <Card className="neomorphic bg-[#151515] border-[#2a2a2a] overflow-hidden hover:neo-glow transition-all duration-500">
      <CardHeader className="pb-2">
        <div className="mb-3 text-primary">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const AvantagesSection: React.FC = () => {
  const avantages = [
    {
      title: "Simplicité d'utilisation",
      description: "Interface intuitive ne nécessitant aucune connaissance  en programmation pour les opérations de base.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Compatibilité étendue",
      description: "Support complet de l'écosystème ESP avec détection automatique des modules.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "IA intégrée FavourV0.1",
      description: "Contrôlez vos appareils via notre IA intégrée FavourV0.1 ",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Sécurité intégrée",
      description: "Communications websocket et http robuste pour protéger vos appareils .",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Mode hors-ligne",
      description: "Fonctionnalité complète même sans connexion internet, sauf pour notre assitant IA.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Extensible",
      description: "Système de plugins permettant d'ajouter vos propres fonctionnalités et de supporter de nouveaux modules.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    }
  ];

  return (
    <section id="avantages" className="py-20 relative">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3 text-gradient-primary">Avantages exclusifs</h2>
          <p className="text-gray-400">
            Découvrez pourquoi SmartESP est l'outil incontournable des développeurs
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {avantages.map((avantage, index) => (
            <Avantage
              key={index}
              title={avantage.title}
              description={avantage.description}
              icon={avantage.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="neomorphic bg-[#151515] border-[#2a2a2a] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-center">Niveau performances </h3>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <p className="text-sm text-gray-400">Taux de détection automatique</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5ms+</div>
                <p className="text-sm text-gray-400">Latence de contrôle</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">4+</div>
                <p className="text-sm text-gray-400">Modules compatibles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvantagesSection;
