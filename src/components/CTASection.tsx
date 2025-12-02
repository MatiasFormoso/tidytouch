'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import type { Dict, Locale } from '@/i18n/config';

type CTASectionProps = {
  t: Dict;
  locale: Locale;
};

export default function CTASection({ t, locale }: CTASectionProps) {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Banner Image - Horizontal (slide 9) */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
        <ImageWithPlaceholder
          src="/images/banner-inspiracion.jpg"
          alt="Banner de inspiración: Toallas dobladas, Perchas vacías, Despensa llena, Lavandería"
          fill
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center px-4 max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              {t.inspiration.text}
            </h2>
            <Link
              href={`/${locale}/contacto`}
              className="inline-block px-10 py-4 border border-white text-white font-medium hover:bg-white hover:text-[#0F3A4E] transition-all duration-300"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {t.hero.ctaPrimary}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
