'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export default function ClosingSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="px-4 py-20 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFF5F7, #F5F0FF)' }}>
      <div className="max-w-lg mx-auto">
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-arabic text-3xl text-primary mb-4" dir="rtl">جَزَاكُمُ اللَّهُ خَيْرًا</p>
          <p className="text-secondary text-sm italic mb-8">Jazakumullahu Khairan — Semoga Allah membalas kebaikan Anda</p>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm mb-8">
            <p className="font-headline text-xl text-primary mb-2">Hormat kami,</p>
            <p className="text-gray-700 font-semibold">Tri Rachmat Riski</p>
            <p className="text-gray-500 text-sm">&amp;</p>
            <p className="text-gray-700 font-semibold">Upita Anggunsuri</p>
            <p className="text-gray-500 text-sm mt-2">Beserta keluarga</p>
          </div>

          <div className="flex justify-center gap-3 opacity-50">
            {['💐','🌙','⭐','🕌','💐'].map((e, i) => (
              <span key={i} className="text-2xl animate-float motion-reduce:animate-none" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
