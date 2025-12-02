import { getDictionary } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  // TODO: Cargar servicios reales del PDF
  const services: Array<{
    title: string;
    description: string;
    icon: string;
    features: string[];
  }> = [];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            {t.services.title}
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-neutral-600">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contacto`}
                className="inline-flex items-center text-neutral-900 font-medium hover:gap-2 transition-all"
              >
                Solicitar información
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-neutral-600">Información de servicios próximamente...</p>
            <p className="text-sm text-neutral-500 mt-2">Estamos preparando la información detallada de nuestros servicios.</p>
          </div>
        )}
      </div>
    </div>
  );
}

