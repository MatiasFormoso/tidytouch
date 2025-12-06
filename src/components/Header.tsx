'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import LocaleSwitcher from './LocaleSwitcher';
import type { Dict, Locale } from '@/i18n/config';

type HeaderProps = { 
  t: Dict; 
  locale: Locale;
};

export default function Header({ t, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.about, href: `/${locale}/nosotros` },
    { name: t.nav.services, href: `/${locale}/servicios` },
    { name: t.nav.contact, href: `/${locale}/contacto` },
  ];

  return (
    <nav 
      id="site-nav" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-white border-b border-[#BCAAA4] shadow-sm' 
          : 'bg-white border-b border-[#BCAAA4]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="-ml-1 sm:ml-0"
          >
            <Link
              href={`/${locale}`}
              className="flex items-center h-full"
            >
              <ImageWithPlaceholder
                src="/images/header-logo.png"
                alt="Tidy Touch by Luisa Rueda"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
                priority={true}
              />
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative text-[#5A6E78] hover:text-[#0F3A4E] transition-colors text-sm font-medium group"
                  style={{ fontFamily: 'var(--font-lato)' }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0F3A4E] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            <LocaleSwitcher locale={locale} />
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Abrir menú"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-neutral-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-neutral-700 mt-1 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-neutral-700 mt-1 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-lg transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-[#0F3A4E] hover:text-[#0F3A4E] transition-colors font-medium py-3 px-3 rounded-lg hover:bg-neutral-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 pt-4 border-t border-neutral-200">
              <LocaleSwitcher locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

