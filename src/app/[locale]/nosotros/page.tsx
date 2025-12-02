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

  // TODO: Cargar valores reales del PDF
  const values: Array<{
    title: string;
    description: string;
  }> = [];

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

      </div>
    </div>
  );
}

