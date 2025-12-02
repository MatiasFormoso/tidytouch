import { getDictionary } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            {t.about.title}
          </h1>
          <p className="text-xl text-neutral-600">
            {t.about.subtitle}
          </p>
        </div>
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t.about.description}
          </p>
        </div>
      </div>
    </div>
  );
}

