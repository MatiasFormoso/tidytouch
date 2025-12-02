import { getDictionary } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import AboutSection from '@/components/AboutSection';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return <AboutSection t={t} locale={locale as Locale} />;
}

