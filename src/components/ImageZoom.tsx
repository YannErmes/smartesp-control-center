
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
  thumbnailClassName?: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt, className = "", thumbnailClassName = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer hover:opacity-80 transition-opacity ${thumbnailClassName}`}
        onClick={() => setIsOpen(true)}
        loading="lazy"
        decoding="async"
      />
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={`max-w-7xl max-h-[90vh] p-0 bg-black/90 border-0 ${className}`}>
          <VisuallyHidden>
            <DialogTitle>{alt}</DialogTitle>
          </VisuallyHidden>
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageZoom;
