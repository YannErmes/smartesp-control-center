
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Package, Cpu } from "lucide-react";

const Installation = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Étape 1",
      description: "Contenu à remplir ultérieurement"
    },
    {
      id: 2,
      title: "Étape 2", 
      description: "Contenu à remplir ultérieurement"
    },
    {
      id: 3,
      title: "Étape 3",
      description: "Contenu à remplir ultérieurement"
    },
    {
      id: 4,
      title: "Étape 4",
      description: "Contenu à remplir ultérieurement"
    },
    {
      id: 5,
      title: "Étape 5",
      description: "Contenu à remplir ultérieurement"
    },
    {
      id: 6,
      title: "Étape 6",
      description: "Contenu à remplir ultérieurement"
    }
  ];

  const components = [
    {
      id: 1,
      title: "Résistance",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "#" // À remplacer par le lien fourni
    },
    {
      id: 2,
      title: "Condensateur",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      link: "#" // À remplacer par le lien fourni
    },
    {
      id: 3,
      title: "Transistor",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop",
      link: "#" // À remplacer par le lien fourni
    },
    {
      id: 4,
      title: "Diode LED",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      link: "#" // À remplacer par le lien fourni
    },
    {
      id: 5,
      title: "Capteur",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      link: "#" // À remplacer par le lien fourni
    },
    {
      id: 6,
      title: "Microcontrôleur",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      link: "#" // À remplacer par le lien fourni
    }
  ];

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
            <span className="text-gradient-primary">Page d'Installation</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Guide étape par étape pour installer et configurer SmartESP
          </p>
        </div>

        {/* Packages à Installer Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="neomorphic rounded-xl p-8 bg-[#151515] mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Package className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-gradient-primary">Packages à Installer</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0a0a0a] rounded-lg p-4 border border-[#333]">
                <h3 className="text-lg font-semibold mb-3 text-white">Python Dependencies</h3>
                <div className="bg-black rounded p-3 font-mono text-sm text-green-400">
                  <div>pip install smartesp</div>
                  <div>pip install pyserial</div>
                  <div>pip install opencv-python</div>
                  <div>pip install numpy</div>
                </div>
              </div>
              <div className="bg-[#0a0a0a] rounded-lg p-4 border border-[#333]">
                <h3 className="text-lg font-semibold mb-3 text-white">System Requirements</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Python 3.8 ou supérieur</li>
                  <li>• Port USB disponible</li>
                  <li>• 100MB d'espace libre</li>
                  <li>• Permissions administrateur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stepper Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <button
                    onClick={() => setCurrentStep(step.id)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                      currentStep === step.id
                        ? 'border-primary bg-primary text-white'
                        : currentStep > step.id
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-600 bg-transparent text-gray-400'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-semibold">{step.id}</span>
                    )}
                  </button>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 ${currentStep > step.id ? 'bg-green-500' : 'bg-gray-600'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="neomorphic rounded-xl p-8 bg-[#151515] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gradient-primary">
              {steps[currentStep - 1].title}
            </h2>
            <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#333]">
              <p className="text-gray-400 text-center py-8">
                {steps[currentStep - 1].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="neomorphic hover:neo-glow"
            >
              Précédent
            </Button>
            
            <Button
              onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
              disabled={currentStep === 6}
              className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white"
            >
              Suivant
            </Button>
          </div>
        </div>

        {/* Composants Électroniques Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cpu className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-gradient-primary">Composants Électroniques</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Découvrez les composants électroniques compatibles avec SmartESP
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component) => (
              <a
                key={component.id}
                href={component.link}
                className="neomorphic rounded-xl p-6 bg-[#151515] hover:neo-glow transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 border border-[#333]">
                  <img
                    src={component.image}
                    alt={component.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-gradient-primary group-hover:text-white transition-colors">
                  {component.title}
                </h3>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <Button className="neomorphic bg-secondary hover:bg-secondary/90 text-white px-8 py-3">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Installation;
