'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Clock } from 'lucide-react';
import type { Dict } from '@/i18n/config';

type ContactFormProps = {
  t: Dict;
};

export default function ContactForm({ t }: ContactFormProps) {
  return (
    <>
      {/* Contact Information */}
      <div className="lg:col-span-1 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-neutral-50 rounded-xl border border-neutral-200"
        >
          <Mail className="w-6 h-6 text-neutral-900 mb-4" />
          <h3 className="font-semibold text-neutral-900 mb-2">Email</h3>
          <a href="mailto:info@tidytouch.com" className="text-neutral-600 hover:text-neutral-900 transition-colors">
            info@tidytouch.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-6 bg-neutral-50 rounded-xl border border-neutral-200"
        >
          <Phone className="w-6 h-6 text-neutral-900 mb-4" />
          <h3 className="font-semibold text-neutral-900 mb-2">Telefono</h3>
          <a href="tel:+1234567890" className="text-neutral-600 hover:text-neutral-900 transition-colors">
            +1 234 567 890
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-neutral-50 rounded-xl border border-neutral-200"
        >
          <Clock className="w-6 h-6 text-neutral-900 mb-4" />
          <h3 className="font-semibold text-neutral-900 mb-2">Horarios</h3>
          <p className="text-neutral-600 text-sm">
            Lunes - Viernes: 9:00 - 18:00<br />
            Sabados: 10:00 - 14:00
          </p>
        </motion.div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                {t.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                {t.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              {t.contact.form.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all hover:shadow-lg"
          >
            {t.contact.form.submit}
          </button>
        </motion.form>
      </div>
    </>
  );
}

