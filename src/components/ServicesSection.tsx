'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type ServicesSectionProps = {
  t: Dict;
  locale: Locale;
};

const services = [
  {
    title: "Organización de Espacios",
    description: "Transformamos tus espacios en lugares funcionales y armoniosos.",
    icon: "📦"
  },
  {
    title: "Limpieza Profesional",
    description: "Servicios de limpieza integral para tu hogar o negocio.",
    icon: "✨"
  },
  {
    title: "Consultoría",
    description: "Asesoramiento personalizado para optimizar tus espacios.",
    icon: "💡"
  },
];

export default function ServicesSection({ t, locale }: ServicesSectionProps) {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href={`/${locale}/servicios`}
                className="inline-flex items-center text-neutral-900 font-medium hover:gap-2 transition-all group-hover:gap-2"
              >
                Saber más
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href={`/${locale}/servicios`}
            className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            Ver todos los servicios
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

