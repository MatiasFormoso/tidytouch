'use client';

import Image from 'next/image';

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
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
