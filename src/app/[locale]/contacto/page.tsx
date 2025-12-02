import { getDictionary } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import ContactForm from '@/components/ContactForm';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

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
        <div className="bg-[#F8F6F2] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-4xl sm:text-5xl font-light text-[#0F3A4E] mb-4"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              {t.contact.title}
            </h1>
            <p 
              className="text-xl text-[#5A6E78] mb-12"
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              {t.contact.subtitle}
            </p>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <Phone className="w-6 h-6 text-[#0F3A4E] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[#0F3A4E] font-medium mb-1">Teléfono</h3>
                  <a 
                    href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                    className="text-[#5A6E78] hover:text-[#0F3A4E] transition-colors"
                    style={{ fontFamily: 'var(--font-lato)' }}
                  >
                    {t.contact.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <Mail className="w-6 h-6 text-[#0F3A4E] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[#0F3A4E] font-medium mb-1">Email</h3>
                  <a 
                    href={`mailto:${t.contact.email}`}
                    className="text-[#5A6E78] hover:text-[#0F3A4E] transition-colors break-all"
                    style={{ fontFamily: 'var(--font-lato)' }}
                  >
                    {t.contact.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <MapPin className="w-6 h-6 text-[#0F3A4E] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[#0F3A4E] font-medium mb-1">Ubicación</h3>
                  <p 
                    className="text-[#5A6E78]"
                    style={{ fontFamily: 'var(--font-lato)' }}
                  >
                    {t.contact.location}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <Instagram className="w-6 h-6 text-[#0F3A4E] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[#0F3A4E] font-medium mb-1">Instagram</h3>
                  <a 
                    href={`https://instagram.com/${t.contact.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5A6E78] hover:text-[#0F3A4E] transition-colors"
                    style={{ fontFamily: 'var(--font-lato)' }}
                  >
                    {t.contact.instagram}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <div className="relative bg-white flex items-center p-8 sm:p-12 lg:p-16">
          <div className="w-full max-w-lg mx-auto">
            <ContactForm t={t} />
          </div>
        </div>
      </div>
    </div>
  );
}

