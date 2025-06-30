
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MessageSquare } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const TestimonySection = () => {
  const { isDarkMode } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Développeuse IoT",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Cette plateforme m'a fait gagner énormément de temps dans mes projets ESP32. L'interface est intuitive et les guides sont très clairs."
    },
    {
      id: 2,
      name: "Pierre Martin",
      role: "Ingénieur Électronique",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Excellent outil pour débuter avec l'ESP32-CAM. Les tutoriels sont parfaits pour comprendre rapidement les concepts."
    },
    {
      id: 3,
      name: "Sophie Laurent",
      role: "Étudiante en Informatique",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Grâce à cette application, j'ai pu réaliser mon projet de fin d'études avec l'ESP32. Interface moderne et très pratique."
    },
    {
      id: 4,
      name: "Thomas Rousseau",
      role: "Maker Passionné",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      comment: "Une application complète pour tous les projets ESP. J'apprécie particulièrement la section sur les modules différents."
    },
    {
      id: 5,
      name: "Isabelle Moreau",
      role: "Professeure d'Électronique",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Je recommande cette ressource à tous mes étudiants. Les explications sont claires et les exemples très pratiques."
    },
    {
      id: 6,
      name: "Lucas Bernard",
      role: "Développeur Embedded",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Interface élégante et contenu de qualité. C'est devenu ma référence pour tous mes projets avec l'ESP32 et ESP8266."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-300 text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className={`py-20 px-4 ${
      isDarkMode 
        ? 'bg-background' 
        : 'bg-gray-50'
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient-primary">
            Témoignages Clients
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Découvrez ce que nos utilisateurs pensent de notre plateforme ESP32
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`neomorphic hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 fade-in-delay-${Math.min(index + 1, 3)}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="neomorphic bg-primary hover:bg-primary/90 neo-glow text-white px-8 py-3"
            onClick={() => window.open('https://smart-esp-reviews.netlify.app/', '_blank')}
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Donner mon avis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
