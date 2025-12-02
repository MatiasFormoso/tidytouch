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

  if (imageError) {
    return (
      <div
        className={`bg-[#F8F6F2] flex items-center justify-center text-[#5A6E78] ${className}`}
        style={{ width: width, height: height }}
      >
        <p className="text-center p-8">Imagen próximamente</p>
      </div>
    );
  }

  if (fill) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}

