
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 glass-morphism backdrop-blur-lg' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-gradient-primary flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center border border-primary/30">
            <span className="font-bold text-lg mono">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight">SmartESP</span>
        </div>

        <nav className="hidden md:flex space-x-1">
          {['presentation', 'stp', 'avantages', 'galerie'].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="px-3 py-2 rounded-md text-sm uppercase tracking-wider text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              {item === 'stp' ? 'STP' : item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <RouterLink to="/installation">
            <Button variant="ghost" size="sm" className="hidden md:flex neomorphic hover:neo-glow">
              Documentation
            </Button>
          </RouterLink>
          <Button className="neo-glow bg-primary hover:bg-primary/90">
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" 
                fill="currentColor"/>
            </svg>
            GitHub
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
