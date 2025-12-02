'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

type ImageWithPlaceholderProps = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function ImageWithPlaceholder({
  src,
  alt,
  fill = false,
  className = '',
  sizes,
  width,
  height,
  priority = false,
}: ImageWithPlaceholderProps) {
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset when src changes
    setCurrentSrc(src);
    setImageError(false);
    setIsLoading(true);
  }, [src]);

  const handleImageError = () => {
    // Try alternative extension
    if (currentSrc.endsWith('.jpg') || currentSrc.endsWith('.jpeg')) {
      const pngSrc = currentSrc.replace(/\.(jpg|jpeg)$/i, '.png');
      setCurrentSrc(pngSrc);
      setImageError(false);
    } else if (currentSrc.endsWith('.png')) {
      const jpgSrc = currentSrc.replace('.png', '.jpg');
      setCurrentSrc(jpgSrc);
      setImageError(false);
    } else {
      setImageError(true);
      setIsLoading(false);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (imageError && currentSrc === src) {
    return (
      <div
        className={`bg-[#F8F6F2] flex items-center justify-center text-[#5A6E78] ${className}`}
        style={{ width: width, height: height }}
      >
        <p className="text-center p-8 text-sm">Imagen próximamente</p>
      </div>
    );
  }

  if (fill) {
    return (
      <div className={`relative ${className} overflow-hidden`}>
        {isLoading && (
          <div className="absolute inset-0 bg-[#F8F6F2] animate-pulse" />
        )}
        <Image
          src={currentSrc}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          sizes={sizes}
          onError={handleImageError}
          onLoad={handleImageLoad}
          priority={priority}
          quality={90}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div 
          className="absolute inset-0 bg-[#F8F6F2] animate-pulse"
          style={{ width: width, height: height }}
        />
      )}
      <Image
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        quality={90}
      />
    </div>
  );
}
