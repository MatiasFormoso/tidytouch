import "../globals.css";
import { Inter } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import { getDictionary } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang={locale} className={inter.variable}>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900 overflow-x-hidden">
        <LayoutWrapper t={t} locale={locale as Locale}>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

