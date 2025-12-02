import { getDictionary } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            {t.services.title}
          </h1>
          <p className="text-xl text-neutral-600">
            {t.services.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TODO: Add services from PDF */}
          <div className="p-6 bg-white rounded-lg border border-neutral-200 shadow-sm">
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Servicio 1</h3>
            <p className="text-neutral-600">Descripcion del servicio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

