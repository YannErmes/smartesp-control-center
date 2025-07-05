
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VideoContextType {
  currentPlayingVideo: string | null;
  setCurrentPlayingVideo: (videoId: string | null) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPlayingVideo, setCurrentPlayingVideo] = useState<string | null>(null);

  return (
    <VideoContext.Provider value={{ currentPlayingVideo, setCurrentPlayingVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
};
