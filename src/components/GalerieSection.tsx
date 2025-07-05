
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ImageZoom from './ImageZoom';
    
const images =[
  {
    url: "https://fe-store.pro/smartESPgaleriephoto/4.jpg",
    title: "Poubelle intelligente",
    description: "Gestion automatique de l'ouverture de la poubelle via ESP et SmartESP",
    thumbnail: "https://fe-store.pro/smartESPgaleriephoto/4.jpg"
  },
  {
    url: "https://fe-store.pro/smartESPgaleriephoto/8.png",
    title: "Quann intelligent contrôlé par ESP via SmartESP",
    description: "Système Quann piloté à distance grâce à un module ESP configuré avec SmartESP",
    thumbnail: "https://fe-store.pro/smartESPgaleriephoto/8.png"
  },
  {
    url: "https://fe-store.pro/smartESPgaleriephoto/6.jpg",
    title: "Circuit CNC contrôlé par SmartESP",
    description: "Supervisation d'un circuit CNC à distance via interface  SmartESP et ESP8266",
    thumbnail: "https://fe-store.pro/smartESPgaleriephoto/6.jpg"
  },
  {
    url: "https://fe-store.pro/smartESPgaleriephoto/9.jpg",
    title: "Système de contrôle d'accès avec notifications grâce à SmartESP",
    description: "Déclenchement d'ouverture de porte et envoi de notifications via ESP et SmartESP plus modification de code",
    thumbnail: "https://fe-store.pro/smartESPgaleriephoto/9.jpg"
  },
  {
    url: "https://fe-store.pro/smartESPgaleriephoto/11.png",
    title: "Monitoring multi-ESP d'une voiture de surveillance",
    description: "Surveillance mobile avec ESP8266 pour le contrôle et ESP32-CAM pour la vidéo",
    thumbnail: "https://fe-store.pro/smartESPgaleriephoto/11.png"
  }
];

const GalerieSection = () => {
  return (
    <section id="galerie" className="py-20 relative">
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3 text-gradient-primary">Galerie</h2>
          <p className="text-gray-400">
            Aperçu de SmartESP en action et des modules compatibles
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="neomorphic rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-video relative">
                <ImageZoom
                  src={image.url}
                  alt={image.title}
                  thumbnailClassName="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end pointer-events-none">
                  <div className="p-4">
                    <h3 className="text-white font-medium">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="glass-morphism px-8 py-5 rounded-full text-center">
            <p className="text-gray-300">
            Découvrez plus d'exemples, de projets et des personnes expérimentées pour vous aider gratuitement sur notre 
              <a href="https://chat.whatsapp.com/BYFnSgoU8BqEDmtuJMhp3k" className="text-primary hover:text-accent transition-colors mx-1">communauté Whatsapp</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalerieSection;
