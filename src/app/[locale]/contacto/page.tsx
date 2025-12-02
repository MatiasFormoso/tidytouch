import { getDictionary } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import ContactForm from '@/components/ContactForm';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <ContactForm t={t} />
        </div>
      </div>
    </div>
  );
}

