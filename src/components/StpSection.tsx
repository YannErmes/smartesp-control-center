
import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="neomorphic rounded-xl bg-[#151515] border-[#2a2a2a] p-6 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-start gap-4">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-primary/10 border border-primary/20 text-primary">
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-[#1a1a1a] text-primary text-sm font-mono font-semibold px-2 py-0.5 rounded-md">
              Étape {number}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const StpSection: React.FC = () => {
  return (
    <section id="stp" className="py-20 relative">
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="inline-block bg-primary/10 text-primary font-mono text-sm px-3 py-1 rounded-md mb-4">
            STP
          </div>
          <h2 className="text-3xl font-bold mb-2 text-gradient-primary">Simple. Transparent. Puissant.</h2>
          <p className="text-gray-400">
            Démarrez en quelques minutes avec ces étapes simples
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Step
            number={1}
            title="Télécharger"
            description="Récupérez l'application SmartESP depuis notre dépôt GitHub ou installez-la via pip install smartesp"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            }
          />
          
          <Step
            number={2}
            title="Connecter"
            description="Branchez votre module OSP et lancez la détection automatique pour établir la connexion"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          
          <Step
            number={3}
            title="Configurer"
            description="Définissez les paramètres de base selon vos besoins via l'assistant intégré"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
          
          <Step
            number={4}
            title="Contrôler"
            description="Utilisez l'interface ou les API pour piloter vos modules en temps réel"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            }
          />
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="neomorphic bg-[#151515] border-[#2a2a2a] p-6 rounded-xl max-w-3xl w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-gray-500 mono">Terminal</div>
            </div>
            <div className="bg-[#0a0a0a] p-4 rounded-lg font-mono text-sm">

              ✅ WiFi connected

              <p className="text-gray-400"> $ Moniteur serie</p>
              <p className="text-gray-400"> Wifi scan ...........</p>
              <p className="text-green-400">✅ WiFi connected </p>
              <p className="text-gray-400"> IP Address: 192.168.43.8</p>
              <p className="text-blue-400">félicition votre premier code  été téléverser  avec sucssé! 😎</p>
              <p className="text-purple-400">SmartESP interface running </p>
              <p className="text-gray-300 flex items-center">
                <span className="animate-pulse mr-1">■</span> _
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StpSection;
