
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
    
const images =[
  {
    url: "https://fe-store.pro/smartESPgaleriephoto/4.jpg",
    title: "Poubelle intelligente",
    description: "Gestion automatique de l’ouverture de la poubelle via ESP et SmartESP"
  },
  {
    url: "https://fe-store.pro/smartESPgaleriephoto/8.png",
    title: "Quann intelligent contrôlé par ESP via SmartESP",
    description: "Système Quann piloté à distance grâce à un module ESP configuré avec SmartESP"
  },
  {
    url: "https://fe-store.pro/smartESPgaleriephoto/6.jpg",
    title: "Circuit CNC contrôlé par SmartESP",
    description: "Supervisation d’un circuit CNC à distance via interface  SmartESP et ESP8266"
  },
  {
    url: "https://fe-store.pro/smartESPgaleriephoto/9.jpg",
    title: "Système de contrôle d'accès avec notifications grâce à SmartESP",
    description: "Déclenchement d’ouverture de porte et envoi de notifications via ESP et SmartESP plus modification de code"
  },
  {
    url: "https://fe-store.pro/smartESPgaleriephoto/11.png",
    title: "Monitoring multi-ESP d'une voiture de surveillance",
    description: "Surveillance mobile avec ESP8266 pour le contrôle et ESP32-CAM pour la vidéo"
  }
];

const GalerieSection = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null);
  
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
              className="neomorphic rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-video relative">
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
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
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="glass-morphism border-0 max-w-4xl p-1">
          <div className="relative">
            {selectedImage && (
              <>
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="w-full rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                  <h3 className="text-white text-lg font-medium">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GalerieSection;
