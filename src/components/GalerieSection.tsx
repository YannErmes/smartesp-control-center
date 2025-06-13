
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
    
const images = [  
  {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Circuit OSP32CAM",
    description: "Vue macro d'une carte ESP32CAM avec module caméra intégré"
  },
  {
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Interface SmartESP",
    description: "Capture d'écran du logiciel SmartESP en fonctionnement"
  },
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    title: "Configuration sans-fil",
    description: "Configuration d'un module OSP via l'interface web"
  },
  {
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    title: "Programmation SmartESP",
    description: "Code source pour intégration rapide via API Python"
  },
  {
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    title: "Monitoring multi-appareils",
    description: "Interface de monitoring pour plusieurs modules OSP"
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Développement avec SmartESP",
    description: "Environnement de développement intégré SmartESP IDE"
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
