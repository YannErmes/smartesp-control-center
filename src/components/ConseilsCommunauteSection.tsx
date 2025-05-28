
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ConseilProps {
  title: string;
  image: string;
  description: string;
}

const Conseil: React.FC<ConseilProps> = ({ title, image, description }) => {
  return (
    <Card className="neomorphic bg-[#151515] border-[#2a2a2a] overflow-hidden hover:neo-glow transition-all duration-500">
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
        <CardTitle className="text-lg mb-3 text-gradient-primary">{title}</CardTitle>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const ConseilsCommunauteSection: React.FC = () => {
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
    <section id="conseils" className="py-20 relative bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3 text-gradient-primary">Conseils de la Communauté</h2>
          <p className="text-gray-400">
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
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="neomorphic bg-[#151515] border-[#2a2a2a] p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-white">Rejoignez Notre Communauté</h3>
            <p className="text-gray-400 mb-4">
              Partagez vos expériences, posez vos questions et découvrez de nouvelles techniques avec des milliers de développeurs ESP.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                Discord
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                Forum
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConseilsCommunauteSection;
