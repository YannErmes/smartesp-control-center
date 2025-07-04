import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Users } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 relative bg-[#0a0a0a]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

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
              <h3 className="text-xl font-bold mb-4 text-gradient-primary">SmartESP V0.1</h3>
              <p className="text-gray-400 mb-6">
                L'application principale avec toutes les fonctionnalités pour contrôler vos modules ESP
              </p>
              <Button className="w-full neomorphic bg-accent hover:bg-accent/90 accent-glow text-white p-0 overflow-hidden">
                <a
                  href="https://fe-store.pro/appapk/Smart_ESP_V02.apk"
                  download
                  rel="noopener noreferrer"
                  type="application/vnd.android.package-archive"
                  className="flex items-center justify-center w-full h-full px-4 py-2 text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger Smart ESP V0.1
                </a>
              </Button>
            </div>

            {/* ESP Driver */}
            <div className="neomorphic bg-[#151515] border-[#2a2a2a] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-gradient-primary">ESP DRIVER</h3>
              <p className="text-gray-400 mb-6">
                Les drivers nécessaires pour une communication optimale avec vos modules ESP
              </p>
              <Button className="w-full neomorphic bg-accent hover:bg-accent/90 accent-glow text-white p-0 overflow-hidden">
                <a
                  href="https://fe-store.pro/appapk/CH341SER.EXE"
                  download
                  rel="noopener noreferrer"
                  type="application/x-msdownload"
                  className="flex items-center justify-center w-full h-full px-4 py-2 text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger ESP DRIVER
                </a>
              </Button>
            </div>
          </div>

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
