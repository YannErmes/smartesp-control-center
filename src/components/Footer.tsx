import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative border-t border-[#222] bg-[#0a0a0a] text-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo + description */}
          <div>
            <div className="text-gradient-primary flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="font-bold text-lg mono">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight">SmartESP</span>
            </div>
            <p className="text-gray-400 mb-4">
              La solution complète pour contrôler vos modules ESP simplement et efficacement.
            </p>
            <div className="flex space-x-4">
              {/* GitHub */}
              <a
                href="https://github.com/fe-webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <title>GitHub</title>
                  <path d="M12 .5C5.65.5.5 5.85.5 12.4c0 5.25 3.44 9.7 8.2 11.28.6.1.82-.27.82-.6v-2.1c-3.34.74-4.03-1.66-4.03-1.66-.55-1.45-1.35-1.84-1.35-1.84-1.1-.78.08-.77.08-.77 1.2.08 1.83 1.28 1.83 1.28 1.1 1.88 2.88 1.33 3.58 1.02.1-.84.43-1.33.78-1.63-2.66-.3-5.47-1.38-5.47-6.15 0-1.36.46-2.47 1.22-3.33-.12-.3-.53-1.54.12-3.21 0 0 1-.33 3.3 1.26a11.3 11.3 0 0 1 6 0c2.3-1.6 3.3-1.26 3.3-1.26.66 1.67.24 2.9.12 3.2.76.87 1.22 1.98 1.22 3.33 0 4.79-2.82 5.85-5.5 6.15.45.39.84 1.13.84 2.3v3.4c0 .33.21.71.83.6A12 12 0 0 0 23.5 12.4C23.5 5.85 18.35.5 12 .5Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@iotdiysmartesp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <title>YouTube</title>
                  <path d="M23.5 6.2c-.3-1.1-1.2-1.9-2.3-2.1C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.2.6c-1.1.2-2 1-2.3 2.1C.1 8.3 0 10.3 0 12s.1 3.7.5 5.8c.3 1.1 1.2 1.9 2.3 2.1 2 .6 9.2.6 9.2.6s7.2 0 9.2-.6c1.1-.2 2-1 2.3-2.1.4-2.1.5-4.1.5-5.8s-.1-3.7-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/smart.esp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <title>Instagram</title>
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4a5 5 0 0 1 1.8 1.1c.5.5.8 1.1 1.1 1.8.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5a5 5 0 0 1-1.1 1.8c-.5.5-1.1.8-1.8 1.1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4a5 5 0 0 1-1.8-1.1c-.5-.5-.8-1.1-1.1-1.8-.2-.5-.3-1.3-.4-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5a5 5 0 0 1 1.1-1.8c.5-.5 1.1-.8 1.8-1.1.5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7 0 4.7 0 4 .2 2.6.5 1.5 1.6 1.2 3 .2 4.7.2 6.8.2 12s0 7.3 1 9c.3 1.4 1.4 2.5 2.8 2.8.7.2 1.7.2 3 .2s1.7 0 5 0 3.3 0 5-.2c1.4-.3 2.5-1.4 2.8-2.8.2-.7.2-1.7.2-3s0-1.7 0-5 0-3.3-.2-5c-.3-1.4-1.4-2.5-2.8-2.8-.7-.2-1.7-.2-3-.2s-1.7 0-5 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Liens rapides */}
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

          {/* Ressources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Ressources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://www.youtube.com/@iotdiysmartesp/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Tutoriels</a></li>
              <li><a href="https://www.youtube.com/@iotdiysmartesp/playlists" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Exemples de Projets</a></li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-10 pt-6 border-t border-[#222] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SmartESP. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
