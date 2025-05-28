
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, HardDrive } from "lucide-react";

const DownloadSection: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient-primary">
            Téléchargements
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Obtenez tous les outils nécessaires pour commencer avec SmartESP
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* SmartESP Download */}
            <div className="neomorphic bg-[#151515] border-[#2a2a2a] p-8 rounded-xl">
              <div className="mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border border-primary/30">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">SmartESP V0.1</h3>
                <p className="text-gray-400 text-sm">
                  L'application principale pour contrôler vos modules ESP avec une interface intuitive
                </p>
              </div>
              <div className="space-y-3 mb-6 text-left">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Interface graphique moderne
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Détection automatique des modules
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  IA intégrée FavourV0.1
                </div>
              </div>
              <Button className="w-full neomorphic bg-primary hover:bg-primary/90 neo-glow text-white">
                <Download className="h-4 w-4 mr-2" />
                Télécharger Smart ESP V0.1
              </Button>
            </div>
            
            {/* ESP Driver Download */}
            <div className="neomorphic bg-[#151515] border-[#2a2a2a] p-8 rounded-xl">
              <div className="mb-6">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 border border-accent/30">
                  <HardDrive className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">ESP DRIVER</h3>
                <p className="text-gray-400 text-sm">
                  Pilotes essentiels pour la communication avec vos modules ESP
                </p>
              </div>
              <div className="space-y-3 mb-6 text-left">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Support Windows/Mac/Linux
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Installation automatique
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Compatible tous modules ESP
                </div>
              </div>
              <Button className="w-full neomorphic bg-accent hover:bg-accent/90 accent-glow text-white">
                <HardDrive className="h-4 w-4 mr-2" />
                Télécharger ESP DRIVER
              </Button>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-[#151515] rounded-xl border border-[#2a2a2a]">
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Note :</strong> Assurez-vous d'installer les pilotes ESP avant d'utiliser SmartESP pour garantir une compatibilité optimale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
