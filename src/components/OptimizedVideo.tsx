
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentPlayingVideo, setCurrentPlayingVideo } = useVideo();

  useEffect(() => {
    if (currentPlayingVideo && currentPlayingVideo !== videoId && isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [currentPlayingVideo, videoId, isPlaying]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setCurrentPlayingVideo(null);
      } else {
        setCurrentPlayingVideo(videoId);
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(false);
    setCurrentPlayingVideo(null);
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
      className={`relative group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        poster={thumbnail}
        preload="metadata"
        playsInline
        muted
      >
        <source src={src} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
      
      {/* Play/Pause Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
        showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
      }`}>
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
      </div>
      
      {/* Video Info Overlay */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h4 className="text-white font-medium text-sm mb-1">{title}</h4>
          <p className="text-gray-300 text-xs">{description}</p>
        </div>
      )}
    </div>
  );
};

export default OptimizedVideo;
