'use client';
import React, { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useInView } from '@/hooks/useInView';
import { BabyPrayingHands, FloatingStars, IslamicLantern } from '@/components/BabyIllustrations';
import { CuteSheep, BabyCradle } from '@/components/AqiqahDecorations';

function OrbitingIcon({ radius = 50, speed = 1, children }: { radius?: number; speed?: number; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  useAnimationFrame((t) => {
    if (ref.current && !prefersReduced) {
      const time = t / 1000;
      ref.current.style.transform = `translate(${Math.cos(time * speed) * radius}px, ${Math.sin(time * speed) * radius}px)`;
    }
  });
  return <div ref={ref} className="absolute" style={{ willChange: 'transform' }}>{children}</div>;
}

function TypewriterName({ name, delay = 0 }: { name: string; delay?: number }) {
  const prefersReduced = useReducedMotion();
  const { ref, inView } = useInView();
  return (
    <motion.div
      ref={ref}
      className="flex justify-center flex-wrap"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: prefersReduced ? 0 : 0.05, delayChildren: delay }}
    >
      {name.split('').map((char, i) => (
        <motion.span
          key={i}
          className="font-headline text-4xl md:text-6xl text-primary tracking-tight"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.3 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}

function BabyBottle() {
  return (
    <svg width="24" height="40" viewBox="0 0 24 40" className="animate-float motion-reduce:animate-none">
      <rect x="7" y="6" width="10" height="26" rx="4" fill="#FFB7C5" />
      <rect x="9" y="0" width="6" height="8" rx="2" fill="#FFDAC1" />
      <rect x="8" y="14" width="8" height="2" rx="1" fill="#fff" opacity="0.5" />
      <rect x="8" y="20" width="8" height="2" rx="1" fill="#fff" opacity="0.5" />
    </svg>
  );
}
function Rattle() {
  return (
    <svg width="24" height="36" viewBox="0 0 24 36" className="animate-sway motion-reduce:animate-none">
      <circle cx="12" cy="10" r="8" fill="#FFB7C5" />
      <circle cx="12" cy="10" r="4" fill="#FFDAC1" opacity="0.5" />
      <rect x="11" y="18" width="2" height="16" rx="1" fill="#c0587a" opacity="0.5" />
    </svg>
  );
}
function Cradle() {
  return (
    <svg width="40" height="30" viewBox="0 0 40 30" className="animate-rock-cradle motion-reduce:animate-none" style={{ transformOrigin: 'top center' }}>
      <path d="M5,20 Q20,30 35,20" fill="none" stroke="#FFB7C5" strokeWidth="2" />
      <rect x="8" y="8" width="24" height="14" rx="4" fill="#FFDAC1" opacity="0.7" />
      <line x1="20" y1="0" x2="20" y2="8" stroke="#c2a8b0" strokeWidth="1" />
    </svg>
  );
}
function BabyShoes() {
  return (
    <svg width="30" height="20" viewBox="0 0 30 20" className="animate-float motion-reduce:animate-none" style={{ animationDelay: '1.2s' }}>
      <path d="M2,12 Q2,4 10,4 L10,14 Q10,18 6,18 L2,18Z" fill="#FFB7C5" />
      <path d="M18,12 Q18,4 26,4 L26,14 Q26,18 22,18 L18,18Z" fill="#FFB7C5" />
    </svg>
  );
}
function RainbowArc() {
  return (
    <div className="relative w-48 md:w-64 h-24 md:h-32 mx-auto mb-8 opacity-40">
      {['#ffdce4','#ffe0ec','#ffb7c5','#FFDAC1','#FFB7C5'].map((color, i) => (
        <div key={i} className="absolute inset-0 rounded-t-full border-t-[6px] border-x-[6px] border-b-0 border-transparent"
          style={{ borderTopColor: color, transform: `scale(${1 - i * 0.1})` }} />
      ))}
      <div className="absolute inset-0 rounded-t-full border-t-4 border-x-4 border-b-0 border-transparent motion-reduce:animate-none"
        style={{ borderTopColor: '#e9c349', animation: 'spinSlow 6s linear infinite' }} />
    </div>
  );
}

export default function BabyNamesSection() {
  const prefersReduced = useReducedMotion();
  const { ref, inView } = useInView();

  return (
    <section className="px-4 py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EC)' }}>
      <RainbowArc />
      <div className="max-w-md mx-auto relative z-10">
        <div className="flex justify-center items-end gap-8 mb-8 opacity-50">
          <CuteSheep size={50} delay={0} />
          <BabyCradle size={65} delay={0.3} />
          <CuteSheep size={45} delay={0.6} flip />
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30 hidden md:block"><CuteSheep size={40} delay={0.2} /></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 hidden md:block"><CuteSheep size={40} delay={0.5} flip /></div>

        <motion.div
          ref={ref}
          className="flex flex-col items-center text-center"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <div className="relative inline-block mb-4">
            <OrbitingIcon radius={70} speed={0.4}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#e9c349">
                <polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10" />
              </svg>
            </OrbitingIcon>
            <OrbitingIcon radius={80} speed={-0.3}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFB7C5">
                <path d="M12,2 A10,10,0,0,0,12,22 A7,7,0,0,1,12,2Z" />
              </svg>
            </OrbitingIcon>
            <h2 className="font-headline text-2xl md:text-3xl text-primary leading-tight px-2">
              <TypewriterName name="Rumaisha Qonita" delay={0} />
            </h2>
          </div>
          <p className="font-label text-xs tracking-widest text-secondary uppercase mb-1">Perempuan</p>
          <p className="text-secondary text-sm mb-6">Lahir pada tanggal 4 Februari 2026</p>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-sm w-full">
            <p className="font-label text-[10px] tracking-widest uppercase text-secondary mb-2 italic">Putri Tercinta dari</p>
            <p className="font-semibold text-gray-800 text-sm leading-relaxed">Bapak Tri Rachmat Riski</p>
            <p className="text-gray-600 text-sm">&amp;</p>
            <p className="font-semibold text-gray-800 text-sm leading-relaxed">Ibu Upita Anggunsuri</p>
          </div>
          <div className="flex gap-6 mt-6 justify-center opacity-40">
            <div className="animate-float"><BabyBottle /></div>
            <div className="animate-sway" style={{ animationDelay: '0.2s' }}><Rattle /></div>
            <div className="animate-rock-cradle" style={{ animationDelay: '0.4s' }}><Cradle /></div>
            <div className="animate-float" style={{ animationDelay: '0.6s' }}><BabyShoes /></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
