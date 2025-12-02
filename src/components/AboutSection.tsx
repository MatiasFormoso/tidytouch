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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-neutral-200 rounded-full mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-neutral-400 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Valor {item}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {t.about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

