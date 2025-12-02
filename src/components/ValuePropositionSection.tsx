'use client';

import { motion } from 'framer-motion';
import ImageWithPlaceholder from './ImageWithPlaceholder';

export default function ValuePropositionSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Image - Toallas beige sobre superficie blanca (slide 2) */}
      <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] bg-[#F8F6F2] overflow-hidden">
        <ImageWithPlaceholder
          src="/images/toallas-beige.jpg"
          alt="Toallas beige sobre superficie blanca"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={true}
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-white/20"></div>
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center px-4 max-w-4xl mx-auto relative z-10"
          >
            <div className="inline-block px-8 py-4 bg-white/90 backdrop-blur-sm rounded-lg mb-6 shadow-lg">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#0F3A4E] uppercase tracking-[3px] sm:tracking-[4px] leading-tight"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                HOME ORGANIZER SERVICES
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

