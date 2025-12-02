'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import type { Dict } from '@/i18n/config';

type ContactFormProps = {
  t: Dict;
};

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm({ t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Limpiar error al escribir
    if (formState === 'error') {
      setFormState('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      // Éxito
      setFormState('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Resetear a idle después de 3 segundos
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    } catch (error) {
      setFormState('error');
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.'
      );
    }
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
      {/* Success Message */}
      {formState === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-green-800 text-sm">
            ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.
          </p>
        </motion.div>
      )}

      {/* Error Message */}
      {formState === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 text-sm">{errorMessage}</p>
        </motion.div>
      )}

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
            disabled={formState === 'loading'}
            className="w-full px-4 py-3 bg-white border border-[#BCAAA4] rounded-lg focus:ring-2 focus:ring-[#0F3A4E] focus:border-[#0F3A4E] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={formState === 'loading'}
            className="w-full px-4 py-3 bg-white border border-[#BCAAA4] rounded-lg focus:ring-2 focus:ring-[#0F3A4E] focus:border-[#0F3A4E] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={formState === 'loading'}
          className="w-full px-4 py-3 bg-white border border-[#BCAAA4] rounded-lg focus:ring-2 focus:ring-[#0F3A4E] focus:border-[#0F3A4E] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={formState === 'loading'}
          className="w-full px-4 py-3 bg-white border border-[#BCAAA4] rounded-lg focus:ring-2 focus:ring-[#0F3A4E] focus:border-[#0F3A4E] transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontFamily: 'var(--font-lato)' }}
        />
      </div>
      <button
        type="submit"
        disabled={formState === 'loading' || formState === 'success'}
        className="w-full px-10 py-4 border border-[#0F3A4E] text-[#0F3A4E] font-medium hover:bg-[#0F3A4E] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {formState === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando...
          </>
        ) : formState === 'success' ? (
          <>
            <CheckCircle2 className="w-5 h-5" />
            Enviado
          </>
        ) : (
          t.contact.form.submit
        )}
      </button>
    </motion.form>
  );
}
