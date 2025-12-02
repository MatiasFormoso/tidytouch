import type { Metadata } from 'next';
import { Raleway, Montserrat, Lato, Sacramento } from "next/font/google";
import './globals.css';

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-raleway",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sacramento",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Tidy Touch - Organizacion Profesional',
  description: 'Servicios profesionales de organizacion y limpieza para tu hogar o negocio.',
  keywords: "organizacion profesional, limpieza, orden, espacios, hogar, negocio",
    authors: [{ name: "Tidy Touch" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Tidy Touch",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "TIDY TOUCH",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#FFFFFF',
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
    <html lang="es" className={`${raleway.variable} ${montserrat.variable} ${lato.variable} ${sacramento.variable}`}>
      <body className="font-sans antialiased bg-white text-[#0F3A4E] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

