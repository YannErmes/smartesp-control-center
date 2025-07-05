import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize, Minimize } from 'lucide-react';
import { useVideo } from '@/contexts/VideoContext';

interface OptimizedVideoProps {
  src: string;
  title: string;
  description: string;
  thumbnail?: string;
  className?: string;
  videoId: string;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  title,
  description,
  thumbnail,
  className = "",
  videoId
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [shouldAutoFullscreen, setShouldAutoFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentPlayingVideo, setCurrentPlayingVideo } = useVideo();

  // Check if video frame is too small for comfortable viewing
  useEffect(() => {
    const checkVideoSize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // If video takes less than 70% of viewport width or is very small
        const isSmall = (rect.width / viewportWidth) < 0.7 || rect.width < 500;
        setShouldAutoFullscreen(isSmall);
      }
    };

    checkVideoSize();
    window.addEventListener('resize', checkVideoSize);
    
    return () => window.removeEventListener('resize', checkVideoSize);
  }, []);

  useEffect(() => {
    if (currentPlayingVideo && currentPlayingVideo !== videoId && isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [currentPlayingVideo, videoId, isPlaying]);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setCurrentPlayingVideo(null);
      } else {
        setCurrentPlayingVideo(videoId);
        
        // Auto fullscreen if video frame is small
        if (shouldAutoFullscreen && !document.fullscreenElement) {
          try {
            await toggleFullscreen();
          } catch (error) {
            console.error('Auto fullscreen failed:', error);
          }
        }
        
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(false);
    setCurrentPlayingVideo(null);
    
    // Exit fullscreen when video ends
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(console.error);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleVideoEnd);
      
      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative group ${className} ${isFullscreen ? 'bg-black' : ''}`}
    >
      <video
        ref={videoRef}
        className={`w-full h-full object-cover rounded-lg ${isFullscreen ? 'rounded-none' : ''}`}
        poster={thumbnail}
        preload="metadata"
        playsInline
        muted
      >
        <source src={src} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
      
      {/* Play/Pause Overlay - Only show when not playing or when controls are explicitly shown */}
      <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
        !isPlaying ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex items-center gap-4">
          <button
            onClick={handlePlayPause}
            className="bg-white/90 hover:bg-white text-black rounded-full p-4 transition-all duration-300 transform hover:scale-110"
            aria-label={isPlaying ? 'Mettre en pause' : 'Lire la vidéo'}
          >
            {isPlaying ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8 ml-1" />
            )}
          </button>
          
          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="bg-white/90 hover:bg-white text-black rounded-full p-3 transition-all duration-300 transform hover:scale-110"
            aria-label={isFullscreen ? 'Quitter le plein écran' : 'Plein écran'}
          >
            {isFullscreen ? (
              <Minimize className="h-6 w-6" />
            ) : (
              <Maximize className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Video Info Overlay - Only show when not playing */}
      {!isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h4 className="text-white font-medium text-sm mb-1">{title}</h4>
          <p className="text-gray-300 text-xs">{description}</p>
          {shouldAutoFullscreen && (
            <p className="text-yellow-300 text-xs mt-1">
              📺 Lecture automatique en plein écran pour un meilleur confort
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default OptimizedVideo;
