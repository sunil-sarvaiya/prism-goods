import { useState } from 'react';
import { PLACEHOLDER_IMAGE } from '@/data/mockData';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  showLoadingSpinner?: boolean;
  onError?: () => void;
  onLoad?: () => void;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackSrc = PLACEHOLDER_IMAGE,
  showLoadingSpinner = true,
  onError,
  onLoad,
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
    onError?.();
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    onLoad?.();
  };

  return (
    <div className="relative">
      {imageLoading && showLoadingSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      <img
        src={imageError ? fallbackSrc : src}
        alt={alt}
        className={`${className} ${
          imageLoading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
