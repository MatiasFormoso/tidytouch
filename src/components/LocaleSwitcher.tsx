'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { Locale } from '@/i18n/config';

type LocaleSwitcherProps = {
  locale: Locale;
};

export default function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => switchLocale('es')}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          locale === 'es'
            ? 'bg-neutral-900 text-white'
            : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          locale === 'en'
            ? 'bg-neutral-900 text-white'
            : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
        }`}
      >
        EN
      </button>
    </div>
  );
}

