'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export default function MapsSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="px-4 py-20 relative" style={{ background: 'linear-gradient(135deg, #E8F8FF, #F0FFF4)' }}>
      <div className="max-w-xl mx-auto">
        <motion.div
          className="text-center mb-8"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-3">Lokasi Acara</h2>
          <p className="text-secondary text-sm">Jl. Bunga Raya No. 12, Padang, Sumatera Barat</p>
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg"
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            title="Lokasi Acara"
            src="https://maps.google.com/maps?q=Padang,Sumatera+Barat&z=15&output=embed"
            width="100%"
            height="320"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.a
          href="https://maps.google.com/?q=Padang,Sumatera+Barat"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-medium text-sm w-full"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Buka di Google Maps
        </motion.a>
      </div>
    </section>
  );
}
