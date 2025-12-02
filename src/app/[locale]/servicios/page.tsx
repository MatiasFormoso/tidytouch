import { getDictionary } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import ServicesPageContent from '@/components/ServicesPageContent';

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return <ServicesPageContent t={t} locale={locale as Locale} />;
}
