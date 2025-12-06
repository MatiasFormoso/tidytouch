import { getDictionary } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import ContactInfo from '@/components/ContactInfo';
import WhatsAppButton from '@/components/WhatsAppButton';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Split Screen Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
        {/* Left Side - Contact Information (Beige Background) */}
        <ContactInfo t={t} />

        {/* Right Side - WhatsApp Button */}
        <div className="relative bg-white flex items-center justify-center p-8 sm:p-12 lg:p-16">
          <div className="w-full max-w-lg mx-auto text-center">
            <WhatsAppButton t={t} phone={t.contact.phone} />
          </div>
        </div>
      </div>
    </div>
  );
}

