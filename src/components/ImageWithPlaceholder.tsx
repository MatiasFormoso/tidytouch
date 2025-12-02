'use client';

import Image from 'next/image';
import { useState } from 'react';

type ImageWithPlaceholderProps = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
};

export default function ImageWithPlaceholder({
  src,
  alt,
  fill = false,
  className = '',
  sizes,
  width,
  height,
}: ImageWithPlaceholderProps) {
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [triedAlternatives, setTriedAlternatives] = useState(false);

  const handleImageError = () => {
    if (!triedAlternatives) {
      // Try alternative extension
      if (currentSrc.endsWith('.jpg') || currentSrc.endsWith('.jpeg')) {
        const pngSrc = currentSrc.replace(/\.(jpg|jpeg)$/i, '.png');
        setCurrentSrc(pngSrc);
        setTriedAlternatives(true);
        setImageError(false);
      } else if (currentSrc.endsWith('.png')) {
        const jpgSrc = currentSrc.replace('.png', '.jpg');
        setCurrentSrc(jpgSrc);
        setTriedAlternatives(true);
        setImageError(false);
      } else {
        setImageError(true);
      }
    } else {
      setImageError(true);
    }
  };

  if (imageError) {
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
      <div className={`relative ${className}`}>
        <Image
          src={currentSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          onError={handleImageError}
          priority={src.includes('hero')}
        />
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleImageError}
    />
  );
}
