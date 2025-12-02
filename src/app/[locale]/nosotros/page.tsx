import { getDictionary } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { motion } from 'framer-motion';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  const values = [
    {
      title: "Profesionalismo",
      description: "Cada proyecto se aborda con el máximo nivel de profesionalismo y atención al detalle."
    },
    {
      title: "Calidad",
      description: "Nos comprometemos a entregar resultados de la más alta calidad en cada servicio."
    },
    {
      title: "Compromiso",
      description: "Tu satisfacción es nuestra prioridad. Trabajamos hasta superar tus expectativas."
    }
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            {t.about.title}
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="prose prose-lg prose-neutral max-w-none mb-16">
          <p className="text-lg text-neutral-700 leading-relaxed text-center max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

