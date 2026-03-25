'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useInView } from '@/hooks/useInView';

function CalendarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="8" width="32" height="28" rx="4" fill="#FFB7C5" opacity="0.3" />
      <rect x="4" y="8" width="32" height="28" rx="4" stroke="#FFB7C5" strokeWidth="1.5" />
      <rect x="4" y="8" width="32" height="10" rx="4" fill="#FFB7C5" opacity="0.5" />
      <line x1="13" y1="4" x2="13" y2="12" stroke="#516161" strokeWidth="2" strokeLinecap="round" />
      <line x1="27" y1="4" x2="27" y2="12" stroke="#516161" strokeWidth="2" strokeLinecap="round" />
      <rect x="10" y="22" width="6" height="6" rx="1" fill="#516161" opacity="0.4" />
      <rect x="17" y="22" width="6" height="6" rx="1" fill="#516161" opacity="0.4" />
      <rect x="24" y="22" width="6" height="6" rx="1" fill="#516161" opacity="0.4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="16" fill="#FFDAC1" opacity="0.3" />
      <circle cx="20" cy="20" r="16" stroke="#FFDAC1" strokeWidth="1.5" />
      <line x1="20" y1="20" x2="20" y2="10" stroke="#516161" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="20" x2="28" y2="24" stroke="#516161" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="20" r="2" fill="#516161" />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="16" r="12" fill="#B5EAD7" opacity="0.3" />
      <circle cx="20" cy="16" r="12" stroke="#B5EAD7" strokeWidth="1.5" />
      <circle cx="20" cy="16" r="4" fill="#516161" opacity="0.5" />
      <path d="M20,28 L20,36" stroke="#516161" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  delay: number;
  inView: boolean;
}

function InfoRow({ icon, label, value, sub, delay, inView }: InfoRowProps) {
  return (
    <motion.div
      className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm"
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <p className="font-label text-[10px] tracking-widest uppercase text-secondary mb-0.5">{label}</p>
        <p className="font-semibold text-gray-800 text-sm leading-snug">{value}</p>
        {sub && <p className="text-gray-500 text-xs mt-0.5">{sub}</p>}
      </div>
    </motion.div>
  );
}

export default function EventDetailsSection() {
  const prefersReduced = useReducedMotion();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="px-4 py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFF8E7, #FEF0FF)' }}>
      <div className="max-w-xl mx-auto">
        <motion.div
          className="text-center mb-10"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-3">Detail Acara</h2>
          <p className="text-secondary text-sm">Syukuran Aqiqah Rumaisha Qonita</p>
        </motion.div>

        <div className="space-y-4">
          <InfoRow icon={<CalendarIcon />} label="Hari &amp; Tanggal" value="Sabtu, 28 Maret 2026" sub="Bertepatan dengan 27 Ramadan 1447 H" delay={0.1} inView={inView} />
          <InfoRow icon={<ClockIcon />} label="Waktu" value="Pukul 10.00 WIB s/d selesai" delay={0.2} inView={inView} />
          <InfoRow icon={<LocationPinIcon />} label="Lokasi" value="Jl. Bunga Raya No. 12, Padang" sub="Sumatera Barat" delay={0.3} inView={inView} />
        </div>

        <motion.div
          className="mt-8 p-5 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm text-center"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-arabic text-2xl text-primary mb-2" dir="rtl">وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا</p>
          <p className="text-secondary text-xs italic">"Dan jika kamu menghitung nikmat Allah, niscaya kamu tidak akan mampu menghitungnya." (QS. Ibrahim: 34)</p>
        </motion.div>
      </div>
    </section>
  );
}
