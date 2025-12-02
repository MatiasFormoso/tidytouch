'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = {
  t: Dict;
  locale: Locale;
};

export default function HeroSection({ t, locale }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-100 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neutral-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neutral-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-neutral-600 bg-neutral-100 rounded-full"
          >
            {t.hero.badge}
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href={`/${locale}/contacto`}
            className="px-8 py-4 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl"
          >
            {t.hero.ctaPrimary}
          </Link>
          <Link
            href={`/${locale}/servicios`}
            className="px-8 py-4 bg-white text-neutral-900 border-2 border-neutral-200 rounded-lg font-medium hover:border-neutral-300 transition-colors"
          >
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

