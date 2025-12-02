'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import type { Dict, Locale } from '@/i18n/config';

type ServicesSectionProps = {
  t: Dict;
  locale: Locale;
};

export default function ServicesSection({ t, locale }: ServicesSectionProps) {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl sm:text-5xl font-light text-[#0F3A4E] mb-6"
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            {t.services.title}
          </h2>
        </motion.div>

        {/* Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Organización de Hogar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="relative h-[300px] mb-6 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-500">
              <ImageWithPlaceholder
                src="/images/collage-hogar.jpg"
                alt="Collage de organización de hogar"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3
              className="text-2xl font-light text-[#0F3A4E] mb-4"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              {t.services.home.title}
            </h3>
            <p
              className="text-[#5A6E78] leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {t.services.home.description}
            </p>
            <Link
              href={`/${locale}/servicios`}
              className="inline-flex items-center text-[#0F3A4E] font-medium hover:gap-2 transition-all group-hover:gap-2 border-b border-transparent hover:border-[#0F3A4E]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Saber más
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          {/* Oficina y Digital */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative h-[140px] rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-500">
                <ImageWithPlaceholder
                  src="/images/archivadores-blancos.jpg"
                  alt="Archivadores blancos"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-[140px] rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-500">
                <ImageWithPlaceholder
                  src="/images/manos-laptop.jpg"
                  alt="Manos en laptop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            <h3
              className="text-2xl font-light text-[#0F3A4E] mb-4"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              {t.services.office.title}
            </h3>
            <p
              className="text-[#5A6E78] leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {t.services.office.description}
            </p>
            <Link
              href={`/${locale}/servicios`}
              className="inline-flex items-center text-[#0F3A4E] font-medium hover:gap-2 transition-all group-hover:gap-2 border-b border-transparent hover:border-[#0F3A4E]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Saber más
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href={`/${locale}/servicios`}
            className="inline-flex items-center px-10 py-4 border border-[#0F3A4E] text-[#0F3A4E] font-medium hover:bg-[#0F3A4E] hover:text-white transition-all duration-300"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Ver todos los servicios
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
