import HeroSection from '@/components/HeroSection';
import { getDictionary } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <>
      <HeroSection t={t} locale={locale as Locale} />
    </>
  );
}

