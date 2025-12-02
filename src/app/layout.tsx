import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import './globals.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'TidyTouch - Organizacion Profesional',
  description: 'Servicios profesionales de organizacion y limpieza para tu hogar o negocio.',
  keywords: "organizacion profesional, limpieza, orden, espacios, hogar, negocio",
  authors: [{ name: "TidyTouch" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "TidyTouch",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "TidyTouch",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#F5F5F0',
    viewportFit: 'cover',
    interactiveWidget: 'resizes-content',
    colorScheme: 'light',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

