'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface BottomNavBarProps {
  visible?: boolean;
}

const TABS = [
  { id: 'beranda', icon: '🏠', label: 'Beranda' },
  { id: 'nama', icon: '👶', label: 'Nama' },
  { id: 'acara', icon: '📅', label: 'Acara' },
  { id: 'lokasi', icon: '📍', label: 'Lokasi' },
  { id: 'doa', icon: '💌', label: 'Doa' },
];

export default function BottomNavBar({ visible = false }: BottomNavBarProps) {
  const [activeTab, setActiveTab] = useState('beranda');
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!visible) return;

    const sections = TABS.map(tab => document.getElementById(tab.id));
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is mostly visible
        let mostVisible = entries[0];
        for (const entry of entries) {
          if (entry.intersectionRatio > mostVisible.intersectionRatio) {
            mostVisible = entry;
          }
        }
        
        if (mostVisible && mostVisible.isIntersecting) {
          setActiveTab(mostVisible.target.id);
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [visible]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 max-w-lg mx-auto bg-white/90 backdrop-blur-md rounded-t-2xl py-2 pb-[env(safe-area-inset-bottom)] flex justify-around items-center"
      style={{
        borderTop: '1px solid rgba(81,97,97,0.1)',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
      }}
      initial={prefersReduced ? { opacity: 0 } : { y: 100, opacity: 0 }}
      animate={prefersReduced ? { opacity: 1 } : { y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex flex-col items-center justify-center gap-0.5 flex-1 transition-colors ${
              isActive ? 'text-[#516161]' : 'text-gray-400'
            }`}
          >
            <motion.div
              className={`flex items-center justify-center rounded-xl px-3 py-1 ${
                isActive ? 'bg-[#516161]/10' : 'bg-transparent'
              }`}
              whileTap={prefersReduced ? {} : { scale: 0.85 }}
            >
              <span className="text-xl leading-none">{tab.icon}</span>
            </motion.div>
            <span className="text-[10px] font-medium tracking-wide">
              {tab.label}
            </span>
            {/* Dot Indicator */}
            <div
              className={`w-1 h-1 rounded-full mt-0.5 transition-opacity ${
                isActive ? 'bg-[#516161] opacity-100' : 'opacity-0'
              }`}
            />
          </button>
        );
      })}
    </motion.nav>
  );
}
