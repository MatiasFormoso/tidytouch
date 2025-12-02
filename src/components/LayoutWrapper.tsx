'use client';

import Header from './Header';
import Footer from './Footer';
import type { Dict, Locale } from '@/i18n/config';

type LayoutWrapperProps = {
  children: React.ReactNode;
  t: Dict;
  locale: Locale;
};

export default function LayoutWrapper({ children, t, locale }: LayoutWrapperProps) {
  return (
    <>
      <Header t={t} locale={locale} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer t={t} locale={locale} />
    </>
  );
}

