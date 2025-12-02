'use client';

import Link from 'next/link';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type FooterProps = {
  t: Dict;
  locale: Locale;
};

export default function Footer({ t, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.about, href: `/${locale}/nosotros` },
    { name: t.nav.services, href: `/${locale}/servicios` },
    { name: t.nav.contact, href: `/${locale}/contacto` },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">TidyTouch</h3>
            <p className="text-neutral-400 leading-relaxed max-w-md">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@tidytouch.com" className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4" />
                  info@tidytouch.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4" />
                  +1 234 567 890
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-400 text-sm">
            © {currentYear} TidyTouch. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

