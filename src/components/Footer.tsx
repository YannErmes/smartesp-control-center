import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative border-t border-[#222]">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-gradient-primary flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="font-bold text-lg mono">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight">SmartESP</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              La solution complète pour contrôler vos modules ESP simplement et efficacement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.4[...]"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427[...]"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605[...]"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Liens rapides</h3>
            <ul className="space-y-2 text-gray-400">
              {['presentation', 'stp', 'avantages', 'galerie'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {item === 'stp' ? 'STP' : item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
              <li>
                <RouterLink 
                  to="/conseils"
                  className="hover:text-primary transition-colors"
                >
                  Conseils
                </RouterLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Ressources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://www.youtube.com/@iotdiysmartesp/" className="hover:text-primary transition-colors">Tutoriels</a></li>
              <li><a href="https://www.youtube.com/@iotdiysmartesp/playlists" className="hover:text-primary transition-colors">Exemples de Projets</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-[#222] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SmartESP. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
{/*             <a href="#" className="text-gray-500 text-sm hover:text-gray-400">Confidentialité</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400">Conditions d'utilisation</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400">Mentions légales</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
