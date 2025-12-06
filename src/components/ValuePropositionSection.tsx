'use client';

import { motion } from 'framer-motion';
import ImageWithPlaceholder from './ImageWithPlaceholder';

export default function ValuePropositionSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Image - Toallas beige sobre superficie blanca (slide 2) */}
      <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] bg-[#F8F6F2] overflow-hidden">
        <ImageWithPlaceholder
          src="/images/value-proposition-toallas-beige.jpg"
          alt="Toallas beige sobre superficie blanca"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={true}
        />
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center px-4"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#0F3A4E] uppercase tracking-[2px]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              HOME ORGANIZER SERVICES
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

