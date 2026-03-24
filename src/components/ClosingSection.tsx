'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import FootprintsAnimation from './FootprintsAnimation';

/* ── Paper Lanterns ───────────────────────── */
const lanternColors = ['#e74c3c', '#e67e22', '#f1c40f', '#FFB7C5', '#9b59b6', '#B5EAD7'];

function PaperLanterns() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {lanternColors.map((color, i) => (
        <div
          key={i}
          className="absolute animate-float motion-reduce:animate-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${10 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i * 0.5}s`,
          }}
        >
          <svg width="28" height="42" viewBox="0 0 28 42" style={{ opacity: 0.15 }}>
            {/* Lantern body (trapezoid) */}
            <path d="M6,8 L4,32 A4,4,0,0,0,8,36 L20,36 A4,4,0,0,0,24,32 L22,8Z" fill={color} />
            {/* Top ring */}
            <rect x="10" y="4" width="8" height="6" rx="2" fill={color} opacity="0.7" />
            {/* String */}
            <line x1="14" y1="0" x2="14" y2="4" stroke={color} strokeWidth="1" opacity="0.5" />
            {/* Glow */}
            <ellipse cx="14" cy="22" rx="6" ry="8" fill="#fffbe6" opacity="0.4" />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* ── Main Section ─────────────────────────── */
export default function ClosingSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-closing px-6 py-32 text-center max-w-3xl mx-auto relative overflow-hidden">
      <PaperLanterns />

      <div className="relative z-10">
        <motion.p
          className="text-secondary font-body leading-relaxed mb-12 italic text-sm md:text-base"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
          berkenan hadir untuk memberikan doa restu kepada putra-putri kami. Atas kehadiran
          dan doa restunya, kami ucapkan terima kasih.
        </motion.p>

        {/* Family name with halo */}
        <motion.div
          className="relative inline-block mb-12"
          initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.3, delay: 0.2 }}
        >
          {/* Soft halo */}
          <div
            className="absolute inset-0 rounded-full -m-8 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(81,97,97,0.08) 0%, transparent 70%)',
              transform: 'scale(1.5)',
            }}
          />
          <h4 className="font-headline text-3xl md:text-4xl text-primary relative">
            Keluarga Besar Zakiul Fahmi Jailani &amp; Tri Rachmat Riski
          </h4>
        </motion.div>

        {/* Heart icon */}
        <div className="flex items-center justify-center gap-4 text-tertiary mb-8">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#735c00" opacity="0.3">
            <path d="M12,21 C12,21 3,13 3,8 A5,5,0,0,1,12,5 A5,5,0,0,1,21,8 C21,13 12,21 12,21Z" />
          </svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#e9c349">
            <path d="M12,21 C12,21 3,13 3,8 A5,5,0,0,1,12,5 A5,5,0,0,1,21,8 C21,13 12,21 12,21Z" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#735c00" opacity="0.3">
            <path d="M12,21 C12,21 3,13 3,8 A5,5,0,0,1,12,5 A5,5,0,0,1,21,8 C21,13 12,21 12,21Z" />
          </svg>
        </div>

        {/* Footprints */}
        <FootprintsAnimation />

        {/* Divider */}
        <div className="h-px w-40 bg-outline-variant/30 mx-auto my-10" />

        <p className="font-label text-[10px] tracking-[0.5em] text-outline uppercase">
          Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
        </p>
      </div>
    </section>
  );
}
