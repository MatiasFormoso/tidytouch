'use client';

import { motion } from 'framer-motion';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import type { Dict, Locale } from '@/i18n/config';

type AboutSectionProps = {
  t: Dict;
  locale: Locale;
};

export default function AboutSection({ t, locale }: AboutSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            {t.about.title}
          </h2>
        </motion.div>

        {/* Sección 1: La Misión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h3
              className="text-3xl font-light text-[#0F3A4E] mb-6"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              {t.about.mission.title}
            </h3>
            <p
              className="text-lg text-[#5A6E78] leading-relaxed"
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {t.about.mission.text}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] order-1 lg:order-2"
          >
            <ImageWithPlaceholder
              src="/images/cajas-lavanda.jpg"
              alt="Foto cenital de cajas blancas y rama de lavanda"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Sección 2: La Filosofía */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <ImageWithPlaceholder
              src="/images/perchero-industrial.jpg"
              alt="Perchero industrial negro con ropa colgada"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3
              className="text-3xl font-light text-[#0F3A4E] mb-6"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              {t.about.philosophy.title}
            </h3>
            <p
              className="text-lg text-[#5A6E78] leading-relaxed"
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {t.about.philosophy.text}
            </p>
          </motion.div>
        </div>

        {/* Sección 3: Bio de Luisa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-3xl font-light text-[#0F3A4E] mb-6"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              {t.about.bio.title}
            </h3>
            <p
              className="text-lg text-[#5A6E78] leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {t.about.bio.text}
            </p>
            <p
              className="text-lg text-[#5A6E78] leading-relaxed"
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {t.about.bio.personal}
            </p>
            <p
              className="text-2xl text-[#0F3A4E] mt-6"
              style={{ fontFamily: 'var(--font-sacramento)' }}
            >
              — Luisa
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <ImageWithPlaceholder
              src="/images/luisa-roca.jpg"
              alt="Luisa sentada en las rocas"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
