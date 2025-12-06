'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import type { Dict } from '@/i18n/config';

type WhatsAppButtonProps = {
  t: Dict;
  phone: string;
};

export default function WhatsAppButton({ t, phone }: WhatsAppButtonProps) {
  // Formatear el número de teléfono (remover espacios y el +, pero mantener números)
  const formattedPhone = phone.replace(/\s/g, '').replace(/^\+/, '');
  
  // Mensaje precargado
  const message = t.contact.whatsappMessage || 'Hola, me gustaría obtener más información sobre sus servicios de organización.';
  const encodedMessage = encodeURIComponent(message);
  
  // URL de WhatsApp
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2
          className="text-3xl sm:text-4xl font-light text-[#0F3A4E] mb-4"
          style={{ fontFamily: 'var(--font-raleway)' }}
        >
          {t.contact.title}
        </h2>
        <p
          className="text-lg text-[#5A6E78] mb-8"
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          {t.contact.whatsappDescription || 'Contáctanos directamente por WhatsApp'}
        </p>
      </div>

      <button
        onClick={handleClick}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white font-medium hover:bg-[#20BA5A] transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        <MessageCircle className="w-6 h-6" />
        <span>{t.contact.whatsappButton || 'Contactar por WhatsApp'}</span>
      </button>
    </motion.div>
  );
}

