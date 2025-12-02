'use client';

import Link from 'next/link';
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
    <footer className="bg-neutral-100 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">TidyTouch</h3>
            <p className="text-neutral-600 text-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">
              {t.footer.contact}
            </h4>
            <p className="text-neutral-600 text-sm">
              {/* TODO: Add contact information from PDF */}
              info@tidytouch.com
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
          <p className="text-neutral-600 text-sm">
            © {currentYear} TidyTouch. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

