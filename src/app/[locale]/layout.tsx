import LayoutWrapper from "@/components/LayoutWrapper";
import { getDictionary } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);
  
  return (
    <LayoutWrapper t={t} locale={locale as Locale}>
      {children}
    </LayoutWrapper>
  );
}

