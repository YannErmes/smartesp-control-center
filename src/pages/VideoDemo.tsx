
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";

const VideoDemo = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-4 border-b border-[#222]">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Retour à l'accueil
          </Link>
          <div className="text-gradient-primary flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="font-bold text-lg mono">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight">SmartESP</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Page Vidéo Démo</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Découvrez SmartESP en action à travers ces démonstrations vidéo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vidéo 1 */}
          <div className="neomorphic rounded-xl p-6 bg-[#151515]">
            <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
              Introduction à Smart ESP plus premiers pas
            </h3>
            <div className="aspect-video bg-[#0a0a0a] rounded-lg mb-4 border border-[#333] overflow-hidden">
              <video 
                controls 
                className="w-full h-full"
                poster="/placeholder.svg"
              >
                <source src="https://fe-store.pro/appapk/videos/ESP video demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-400 text-sm">
              Une introduction complète à SmartESP et comment commencer vos premiers projets.
            </p>
          </div>

          {/* Vidéo 2 */}
          <div className="neomorphic rounded-xl p-6 bg-[#151515]">
            <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
              Premier essai en temps réel
            </h3>
            <div className="aspect-video bg-[#0a0a0a] rounded-lg mb-4 border border-[#333] overflow-hidden">
              <video 
                controls 
                className="w-full h-full"
                poster="/placeholder.svg"
              >
                <source src="https://fe-store.pro/appapk/videos/ESP video demo2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-400 text-sm">
              Regardez SmartESP en action lors d'un test en temps réel avec des modules ESP.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <Button className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white px-8 py-3">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default VideoDemo;
