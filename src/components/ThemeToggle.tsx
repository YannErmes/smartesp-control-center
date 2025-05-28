
import React from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  variant?: 'button' | 'switch';
  size?: 'sm' | 'default' | 'lg';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'button', size = 'default' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  if (variant === 'switch') {
    return (
      <div className="flex items-center gap-3">
        <Sun className={`h-4 w-4 ${isDarkMode ? 'text-gray-500' : 'text-yellow-500'}`} />
        <Switch
          checked={isDarkMode}
          onCheckedChange={toggleTheme}
          className="data-[state=checked]:bg-primary"
        />
        <Moon className={`h-4 w-4 ${isDarkMode ? 'text-blue-400' : 'text-gray-500'}`} />
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={toggleTheme}
      className="neomorphic hover:neo-glow"
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="ml-2 hidden md:inline">
        {isDarkMode ? 'Mode Clair' : 'Mode Sombre'}
      </span>
    </Button>
  );
};

export default ThemeToggle;
