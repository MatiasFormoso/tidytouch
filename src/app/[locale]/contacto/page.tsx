import { getDictionary } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-neutral-600">
            {t.contact.subtitle}
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              {t.contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              {t.contact.form.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            {t.contact.form.submit}
          </button>
        </form>
      </div>
    </div>
  );
}

