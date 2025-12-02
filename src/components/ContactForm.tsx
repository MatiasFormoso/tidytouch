'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Dict } from '@/i18n/config';

type ContactFormProps = {
  t: Dict;
};

export default function ContactForm({ t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar envío real del formulario
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado! Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white p-8 space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#0F3A4E] mb-2">
            {t.contact.form.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-[#BCAAA4] rounded-lg focus:ring-2 focus:ring-[#0F3A4E] focus:border-[#0F3A4E] transition-all"
            style={{ fontFamily: 'var(--font-lato)' }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#0F3A4E] mb-2">
            {t.contact.form.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-[#BCAAA4] rounded-lg focus:ring-2 focus:ring-[#0F3A4E] focus:border-[#0F3A4E] transition-all"
            style={{ fontFamily: 'var(--font-lato)' }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#0F3A4E] mb-2">
          {t.contact.form.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-[#BCAAA4] rounded-lg focus:ring-2 focus:ring-[#0F3A4E] focus:border-[#0F3A4E] transition-all"
          style={{ fontFamily: 'var(--font-lato)' }}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#0F3A4E] mb-2">
          {t.contact.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white border border-[#BCAAA4] rounded-lg focus:ring-2 focus:ring-[#0F3A4E] focus:border-[#0F3A4E] transition-all resize-none"
          style={{ fontFamily: 'var(--font-lato)' }}
        />
      </div>
      <button
        type="submit"
        className="w-full px-10 py-4 border border-[#0F3A4E] text-[#0F3A4E] font-medium hover:bg-[#0F3A4E] hover:text-white transition-all duration-300"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {t.contact.form.submit}
      </button>
    </motion.form>
  );
}

