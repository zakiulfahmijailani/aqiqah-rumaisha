'use client';
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import BismillahCalligraphy from '@/components/BismillahCalligraphy';
import { MuslimBabyBoy, BabyMoon, FloatingStars, IslamicLantern } from '@/components/BabyIllustrations';
import { MuslimBabyBoySeated, BabyCradle, MoonAndStars, CuteSheep, IslamicStarPattern } from '@/components/AqiqahDecorations';

function HotAirBalloon() {
  return (
    <svg width="50" height="70" viewBox="0 0 50 70" className="animate-float motion-reduce:animate-none">
      <ellipse cx="25" cy="22" rx="18" ry="22" fill="#FFB7C5" />
      <rect x="15" y="22" width="20" height="4" rx="2" fill="#C7CEEA" opacity="0.6" />
      <rect x="15" y="28" width="20" height="4" rx="2" fill="#B5EAD7" opacity="0.6" />
      <line x1="12" y1="40" x2="18" y2="52" stroke="#735c00" strokeWidth="1" opacity="0.5" />
      <line x1="38" y1="40" x2="32" y2="52" stroke="#735c00" strokeWidth="1" opacity="0.5" />
      <rect x="18" y="52" width="14" height="10" rx="2" fill="#FFDAC1" />
    </svg>
  );
}

function StorkSilhouette() {
  return (
    <svg width="60" height="45" viewBox="0 0 60 45" className="animate-float motion-reduce:animate-none" style={{ animationDelay: '0.5s' }}>
      <ellipse cx="30" cy="20" rx="14" ry="10" fill="#c2c8c7" />
      <polygon points="44,18 58,14 44,22" fill="#c2c8c7" />
      <line x1="25" y1="30" x2="22" y2="42" stroke="#6b5a60" strokeWidth="1.5" />
      <line x1="35" y1="30" x2="38" y2="42" stroke="#6b5a60" strokeWidth="1.5" />
      <circle cx="30" cy="40" r="5" fill="#FFB7C5" opacity="0.6" />
    </svg>
  );
}

function GiftBox({ delay = 0, color = '#B5EAD7' }: { delay?: number; color?: string }) {
  return (
    <svg width="30" height="35" viewBox="0 0 30 35" className="animate-float motion-reduce:animate-none" style={{ animationDelay: `${delay}s` }}>
      <rect x="2" y="12" width="26" height="20" rx="3" fill={color} />
      <rect x="0" y="8" width="30" height="8" rx="2" fill={color} opacity="0.8" />
      <line x1="15" y1="8" x2="15" y2="32" stroke="#fff" strokeWidth="2" opacity="0.6" />
      <line x1="0" y1="12" x2="30" y2="12" stroke="#fff" strokeWidth="2" opacity="0.6" />
      <path d="M15,8 Q10,2 6,5" fill="none" stroke="#e9c349" strokeWidth="1.5" />
      <path d="M15,8 Q20,2 24,5" fill="none" stroke="#e9c349" strokeWidth="1.5" />
    </svg>
  );
}

interface CoverSectionProps {
  onOpen: () => void;
}

export default function CoverSection({ onOpen }: CoverSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleOpen = useCallback(() => {
    confetti({
      particleCount: 120,
      spread: 100,
      colors: ['#FFB7C5', '#B5EAD7', '#C7CEEA', '#FFD700', '#FFDAC1'],
      origin: { y: 0.6 },
    });
    setIsOpen(true);
    setTimeout(() => onOpen(), 800);
  }, [onOpen]);

  return (
    <AnimatePresence>
      {!isOpen && (
        <div className="cover-overlay section-cover">
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute top-[10%] left-[5%]"><HotAirBalloon /></div>
            <div className="absolute top-[20%] right-[8%]"><StorkSilhouette /></div>
            <div className="absolute bottom-[25%] left-[10%]"><GiftBox delay={0.8} color="#C7CEEA" /></div>
            <div className="absolute bottom-[30%] right-[12%]"><GiftBox delay={1.2} color="#FFDAC1" /></div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2"><GiftBox delay={1.6} color="#FFB7C5" /></div>
            <div className="absolute top-[8%] left-[50%] -translate-x-1/2"><BabyMoon size={80} delay={0} /></div>
            <div className="absolute bottom-[10%] left-[15%]"><IslamicLantern size={50} delay={0.5} /></div>
            <div className="absolute top-[15%] right-[15%]"><FloatingStars size={60} delay={0.3} /></div>
            <div className="absolute top-[45%] right-[20%]"><MuslimBabyBoy size={70} delay={0.8} /></div>
            <div className="absolute" style={{ top: '8%', left: '10%' }}><MoonAndStars size={90} delay={0} /></div>
            <div className="absolute" style={{ top: '5%', left: '75%' }}><IslamicStarPattern size={60} delay={0.5} /></div>
            <div className="absolute" style={{ top: '40%', left: '5%' }}><CuteSheep size={65} delay={0.3} /></div>
            <div className="absolute" style={{ top: '38%', left: '78%' }}><CuteSheep size={55} delay={0.8} flip /></div>
            <div className="absolute" style={{ top: '70%', left: '8%' }}><BabyCradle size={80} delay={0.6} /></div>
            <div className="absolute" style={{ top: '75%', left: '40%' }}><MuslimBabyBoySeated size={70} delay={1} /></div>
            <div className="absolute" style={{ top: '72%', left: '72%' }}><CuteSheep size={45} delay={1.2} /></div>
          </div>

          {/* Card content — centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <motion.div
              className="w-full max-w-sm flex flex-col items-center text-center"
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-headline italic text-primary text-lg mb-8 tracking-widest">
                Bismillahirrahmanirrahim
              </h2>

              <div className="relative w-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center mb-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-tertiary opacity-30" />
                <BismillahCalligraphy size="md" color="#735c00" className="mb-6" />
                <p className="font-body text-secondary text-sm leading-relaxed">
                  Kami mengundang Anda untuk hadir dalam syukuran Aqiqah putri kami
                </p>
              </div>

              <motion.button
                onClick={handleOpen}
                className="bg-primary text-on-primary px-10 py-4 rounded-xl font-medium tracking-wide flex items-center gap-3 shadow-xl cursor-pointer"
                whileTap={prefersReduced ? {} : { scale: 0.95 }}
                animate={prefersReduced ? {} : { scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Buka Undangan
                <svg width="18" height="14" viewBox="0 0 18 14" fill="currentColor" opacity="0.8">
                  <rect x="0" y="0" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0,0 L9,8 L18,0" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
