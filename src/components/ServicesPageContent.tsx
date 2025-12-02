'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import type { Dict, Locale } from '@/i18n/config';

type ServicesPageContentProps = {
  t: Dict;
  locale: Locale;
};

export default function ServicesPageContent({ t, locale }: ServicesPageContentProps) {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1
            className="text-4xl sm:text-5xl font-light text-[#0F3A4E] mb-6"
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            {t.services.title}
          </h1>
        </motion.div>

        {/* Bloque A: Organización de Hogar */}
        <div className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Imagen Collage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden"
            >
              <ImageWithPlaceholder
                src="/images/collage-hogar.jpg"
                alt="Collage de organización de hogar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2
                className="text-3xl sm:text-4xl font-light text-[#0F3A4E] mb-6"
                style={{ fontFamily: 'var(--font-raleway)' }}
              >
                {t.services.home.title}
              </h2>
              <p
                className="text-lg text-[#5A6E78] leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-lato)' }}
              >
                {t.services.home.description}
              </p>
              
              {/* Lista de áreas */}
              <ul className="space-y-4 mb-8">
                {t.services.home.areas.map((area, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-[#5A6E78]"
                    style={{ fontFamily: 'var(--font-lato)' }}
                  >
                    <span className="w-2 h-2 bg-[#BCAAA4] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-lg">{area}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/${locale}/contacto`}
                className="inline-flex items-center px-10 py-4 border border-[#0F3A4E] text-[#0F3A4E] font-medium hover:bg-[#0F3A4E] hover:text-white transition-all duration-300"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Solicitar información
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bloque B: Oficina y Digital */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl font-light text-[#0F3A4E] mb-6"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              {t.services.office.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Organización de Oficina */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[400px] mb-6 rounded-lg overflow-hidden">
                <ImageWithPlaceholder
                  src="/images/archivadores-blancos.jpg"
                  alt="Archivadores blancos para organización de oficina"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3
                className="text-2xl font-light text-[#0F3A4E] mb-4"
                style={{ fontFamily: 'var(--font-raleway)' }}
              >
                Organización de Oficina
              </h3>
              <p
                className="text-[#5A6E78] leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-lato)' }}
              >
                {t.services.office.description}
              </p>
            </motion.div>

            {/* Archivos Digitales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-[400px] mb-6 rounded-lg overflow-hidden">
                <ImageWithPlaceholder
                  src="/images/manos-laptop.jpg"
                  alt="Archivos digitales"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3
                className="text-2xl font-light text-[#0F3A4E] mb-4"
                style={{ fontFamily: 'var(--font-raleway)' }}
              >
                Archivos Digitales
              </h3>
              <p
                className="text-[#5A6E78] leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-lato)' }}
              >
                {t.services.office.description}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href={`/${locale}/contacto`}
              className="inline-flex items-center px-10 py-4 border border-[#0F3A4E] text-[#0F3A4E] font-medium hover:bg-[#0F3A4E] hover:text-white transition-all duration-300"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Solicitar información
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

