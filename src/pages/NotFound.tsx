import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const NotFound = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-background text-foreground' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className={`text-xl mb-4 ${
          isDarkMode ? 'text-muted-foreground' : 'text-gray-600'
        }`}>Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-primary/80 underline transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
