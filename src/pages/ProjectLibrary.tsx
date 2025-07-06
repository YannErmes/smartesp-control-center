
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Données d'exemple pour les projets
const projects = [
  {
    id: 1,
    title: "Module ESP32-CAM",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    codeUrl: "https://github.com/example/esp32-cam",
    available: true
  },
  {
    id: 2,
    title: "Module ESP8266",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    codeUrl: "https://github.com/example/esp8266",
    available: false
  },
  {
    id: 3,
    title: null, // Projet pas encore disponible
    image: null,
    codeUrl: "#",
    available: false
  },
  {
    id: 4,
    title: "Capteur IoT Avancé",
    image: null, // Image pas encore disponible
    codeUrl: "https://github.com/example/iot-sensor",
    available: false
  },
  {
    id: 5,
    title: null, // Projet pas encore disponible
    image: null,
    codeUrl: "#",
    available: false
  },
  {
    id: 6,
    title: "Station Météo Connectée",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    codeUrl: "https://github.com/example/weather-station",
    available: false
  }
];

const ProjectLibrary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            Bibliothèque de Projets
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre collection de projets IoT et électroniques avec le code source complet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="neomorphic hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title || "Projet"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                      <div className="text-center">
                        <Code2 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground font-medium">
                          Image pas encore disponible
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="mb-4 text-xl">
                  {project.title || (
                    <span className="text-muted-foreground italic">
                      Pas encore disponible
                    </span>
                  )}
                </CardTitle>
                
                <div className="flex flex-col gap-3">
                  {project.available && project.codeUrl !== "#" ? (
                    <Button 
                      asChild 
                      className="w-full group/btn"
                      variant="default"
                    >
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Code2 className="h-4 w-4" />
                        Accéder au code
                        <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      disabled 
                      className="w-full"
                      variant="secondary"
                    >
                      <Code2 className="h-4 w-4 mr-2" />
                      Code pas encore disponible
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Plus de projets arrivent bientôt !
          </p>
          <Button asChild variant="outline">
            <Link to="/">
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectLibrary;
