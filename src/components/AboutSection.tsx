'use client';

import { motion } from 'framer-motion';
import type { Dict, Locale } from '@/i18n/config';

type AboutSectionProps = {
  t: Dict;
  locale: Locale;
};

export default function AboutSection({ t, locale }: AboutSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="prose prose-lg prose-neutral max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed text-center max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}

