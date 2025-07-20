import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Users, ExternalLink } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const DownloadSection: React.FC = () => {
  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="download" className="py-20 relative bg-[#0a0a0a]">
      {/* AUCUN OVERLAY OU BACKGROUND QUI BLOQUE */}
      {/* Si tu veux un décor, utilise pointer-events: none */}
      {/* <div className="absolute inset-0 bg-circuit-pattern opacity-5" style={{ pointerEvents: 'none' }}></div> */}

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
            Téléchargez SmartESP
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Commencez dès maintenant avec SmartESP et transformez vos projets IoT
          </p>

          {/* Two download cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* SmartESP APK */}
            <div className="neomorphic bg-[#151515] border-[#2a2a2a] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-gradient-primary">SmartESP V0.2</h3>
              <p className="text-gray-400 mb-6">
                L'application principale avec toutes les fonctionnalités pour contrôler vos modules ESP
              </p>
              <Button 
                className="w-full neomorphic bg-accent hover:bg-accent/90 accent-glow text-white"
                onClick={() => handleDownload('https://github.com/YannErmes/smartespapp/releases/download/v1.0.0/app-armeabi-v7a-release.apk', 'Smart_ESP_V02.apk')}
              >
                <Download className="h-4 w-4 mr-2" />
                Télécharger Smart ESP V0.2
              </Button>
            </div>

            {/* ESP Driver */}
            <div className="neomorphic bg-[#151515] border-[#2a2a2a] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-gradient-primary">ESP DRIVER</h3>
              <p className="text-gray-400 mb-6">
                Les drivers nécessaires pour une communication optimale avec vos modules ESP
              </p>
              <Button 
                className="w-full neomorphic bg-accent hover:bg-accent/90 accent-glow text-white"
                onClick={() => handleDownload('https://github.com/user-attachments/files/21335196/CH341SER.zip', 'CH341SER.EXE')}
              >
                <Download className="h-4 w-4 mr-2" />
                Télécharger ESP DRIVER
              </Button>
            </div>
          </div>

          {/* Additional download options */}
        

          {/* Community Button */}
          <div className="mb-8">
            <RouterLink to="/conseils">
              <Button variant="outline" className="neomorphic hover:neo-glow text-gray-200 px-8 py-3">
                <Users className="h-4 w-4 mr-2" />
                Découvrir les Conseils de la Communauté
              </Button>
            </RouterLink>
          </div>

          {/* Footer info */}
          <div className="text-center text-gray-500 text-sm">
            <p>Compatible avec ESP32, ESP32CAM, ESP8266 et autres modules compatibles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
