'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Dict, Locale } from '@/i18n/config';

type CTASectionProps = {
  t: Dict;
  locale: Locale;
};

export default function CTASection({ t, locale }: CTASectionProps) {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t.hero.title}
          </h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <Link
            href={`/${locale}/contacto`}
            className="inline-block px-8 py-4 bg-white text-neutral-900 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
          >
            {t.hero.ctaPrimary}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

