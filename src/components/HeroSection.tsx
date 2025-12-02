'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = {
  t: Dict;
  locale: Locale;
};

export default function HeroSection({ t, locale }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Image - Perchero con espejo (slide 1) */}
      <div className="absolute inset-0 w-full h-full bg-[#F8F6F2]">
        <ImageWithPlaceholder
          src="/images/perchero-industrial.jpg"
          alt="Perchero de ropa - Organización profesional"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-raleway)' }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href={`/${locale}/contacto`}
            className="px-10 py-4 border border-white text-white font-medium hover:bg-white hover:text-[#0F3A4E] transition-all duration-300"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {t.hero.ctaPrimary}
          </Link>
          <Link
            href={`/${locale}/servicios`}
            className="px-10 py-4 border border-white/50 text-white font-medium hover:border-white hover:bg-white/10 transition-all duration-300"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

