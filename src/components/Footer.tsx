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
    <footer className="bg-[#F8F6F2] text-[#5A6E78]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3
              className="text-2xl font-light text-[#0F3A4E] mb-4"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              TIDY TOUCH by Luisa Rueda
            </h3>
            <p
              className="text-[#5A6E78] leading-relaxed max-w-md"
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold text-[#0F3A4E] mb-4 uppercase tracking-[2px]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#5A6E78] hover:text-[#0F3A4E] text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-lato)' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold text-[#0F3A4E] mb-4 uppercase tracking-[2px]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-[#5A6E78] hover:text-[#0F3A4E] text-sm transition-colors break-all"
                  style={{ fontFamily: 'var(--font-lato)' }}
                >
                  {t.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                  className="text-[#5A6E78] hover:text-[#0F3A4E] text-sm transition-colors"
                  style={{ fontFamily: 'var(--font-lato)' }}
                >
                  {t.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#BCAAA4] text-center">
          <p
            className="text-[#5A6E78] text-sm"
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            © {currentYear} TIDY TOUCH by Luisa Rueda. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

