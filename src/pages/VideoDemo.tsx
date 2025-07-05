
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';
import OptimizedVideo from '@/components/OptimizedVideo';

const VideoDemo = () => {
  const { isDarkMode } = useTheme();

  // Partie 1 : Vidéos de démonstration simples
  const demonstrationVideos = [
    {
      id: "demo-1",
      title: "SmartESP affichage de valeur en temps réel de resistance du joystick",
      url: "https://fe-store.pro/smartESPgalerievidoe/1.mp4",
      description: "Démonstration complète d'une maison connectée avec SmartESP",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/4.jpg"
    },
    {
      id: "demo-2", 
      title: "Test en temps réel - Surveillance caméra",
      url: "https://fe-store.pro/smartESPgalerievidoe/2.mp4",
      description: "Test en direct d'un système de surveillance avec ESP32CAM",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/8.png"
    },
    {
      id: "demo-3",
      title: "Démo capteurs environnementaux", 
      url: "https://fe-store.pro/smartESPgalerievidoe/3.mp4",
      description: "Surveillance environnementale avec capteurs multiples",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/6.jpg"
    },
    {
      id: "demo-4",
      title: "Contrôle LED et automatisation",
      url: "https://fe-store.pro/smartESPgalerievidoe/4.mp4", 
      description: "Automatisation d'éclairage intelligent avec ESP",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/9.jpg"
    },
    {
      id: "demo-5",
      title: "Système d'alarme connecté",
      url: "https://fe-store.pro/smartESPgalerievidoe/5.mp4",
      description: "Démonstration d'un système d'alarme complet",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/11.png"
    },
    {
      id: "demo-6",
      title: "Interface web temps réel",
      url: "https://fe-store.pro/smartESPgalerievidoe/6.mp4",
      description: "Interface web pour contrôler tous vos modules ESP",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/Home.png"
    }
  ];

  // Partie 2 : Vidéos explicatives avec boutons d'interaction
  const explicativeVideos = [
    {
      id: "tuto-1",
      title: "Configuration ESP32CAM",
      url: "https://fe-store.pro/smartESPgalerievidoe/video1.mp4",
      description: "Apprenez à configurer votre module ESP32CAM avec SmartESP",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/4.jpg",
      githubLink: "https://github.com/fe-webstore/",
      externalLink: "https://www.youtube.com/watch?v=example1"
    },
    {
      id: "tuto-2",
      title: "Programmation ESP8266",
      url: "https://fe-store.pro/smartESPgalerievidoe/video2.mp4",
      description: "Guide complet pour programmer un ESP8266 avec SmartESP",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/8.png",
      githubLink: "https://github.com/fe-webstore/",
      externalLink: "https://www.youtube.com/watch?v=example2"
    },
    {
      id: "tuto-3",
      title: "Intégration de capteurs",
      url: "https://fe-store.pro/smartESPgalerievidoe/video3.mp4",
      description: "Comment intégrer différents capteurs avec vos modules ESP",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/6.jpg",
      githubLink: "https://github.com/fe-webstore/",
      externalLink: "https://www.youtube.com/watch?v=example3"
    },
    {
      id: "tuto-4",
      title: "Contrôle à distance",
      url: "https://fe-store.pro/smartESPgalerievidoe/video4.mp4",
      description: "Contrôlez vos modules ESP depuis n'importe où",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/9.jpg",
      githubLink: "https://github.com/fe-webstore/",
      externalLink: "https://www.youtube.com/watch?v=example4"
    },
    {
      id: "tuto-5",
      title: "Projets IoT avancés",
      url: "https://fe-store.pro/smartESPgalerievidoe/video5.mp4",
      description: "Créez des projets IoT complexes avec SmartESP",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/11.png",
      githubLink: "https://github.com/fe-webstore/",
      externalLink: "https://www.youtube.com/watch?v=example5"
    },
    {
      id: "tuto-6",
      title: "Débogage et optimisation",
      url: "https://fe-store.pro/smartESPgalerievidoe/video6.mp4",
      description: "Techniques de débogage et d'optimisation pour vos projets",
      thumbnail: "https://fe-store.pro/smartESPgaleriephoto/Home.png",
      githubLink: "https://github.com/fe-webstore/",
      externalLink: "https://www.youtube.com/watch?v=example6"
    }
  ];

  const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-background text-foreground' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`py-4 border-b ${isDarkMode ? 'border-[#222]' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className={`flex items-center gap-2 transition-colors ${
            isDarkMode 
              ? 'text-gray-300 hover:text-white' 
              : 'text-gray-600 hover:text-gray-900'
          }`}>
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
            <span className="text-gradient-primary">Vidéos SmartESP</span>
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Découvrez SmartESP à travers nos tutoriels et démonstrations
          </p>
        </div>

        {/* Partie 1 : Vidéos de démonstration */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient-primary">
              Vidéos de démonstration
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              SmartESP en action dans des projets réels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {demonstrationVideos.map((video) => (
              <div key={video.id} className={`neomorphic rounded-xl p-6 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
                <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
                  {video.title}
                </h3>
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <OptimizedVideo
                    src={video.url}
                    title={video.title}
                    description={video.description}
                    thumbnail={video.thumbnail}
                    videoId={video.id}
                  />
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Partie 2 : Vidéos explicatives */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient-primary">
              Vidéos explicatives
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Tutoriels détaillés avec instructions et code source
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {explicativeVideos.map((video) => (
              <div key={video.id} className={`neomorphic rounded-xl p-6 ${isDarkMode ? 'bg-[#151515]' : 'bg-white'}`}>
                <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
                  {video.title}
                </h3>
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <OptimizedVideo
                    src={video.url}
                    title={video.title}
                    description={video.description}
                    thumbnail={video.thumbnail}
                    videoId={video.id}
                  />
                </div>
                <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {video.description}
                </p>
                
                {/* Boutons d'interaction */}
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => openExternalLink(video.externalLink)}
                    className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Voir la vidéo en ligne
                  </Button>
                  <Button 
                    onClick={() => openExternalLink(video.githubLink)}
                    variant="outline"
                    className={`neomorphic ${
                      isDarkMode 
                        ? 'border-[#333] hover:bg-[#222]' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Voir les instructions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
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
