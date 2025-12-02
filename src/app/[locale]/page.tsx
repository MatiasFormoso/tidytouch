import HeroSection from '@/components/HeroSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
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
      <ValuePropositionSection />
      <AboutSection t={t} locale={locale as Locale} />
      <ServicesSection t={t} locale={locale as Locale} />
      <CTASection t={t} locale={locale as Locale} />
    </>
  );
}

