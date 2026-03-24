'use client';
import React, { useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import CoverSection from '@/components/CoverSection';
import BabyNamesSection from '@/components/BabyNamesSection';
import EventDetailsSection from '@/components/EventDetailsSection';
import MapsSection from '@/components/MapsSection';

import MusicPlayer from '@/components/MusicPlayer';
import WishesSection from '@/components/WishesSection';
import ClosingSection from '@/components/ClosingSection';
import WaveDivider from '@/components/WaveDivider';

export default function Home() {
  const [coverOpen, setCoverOpen] = useState(false);

  return (
    <>
      <AnimatedBackground />
      {coverOpen && <ScrollProgressBar />}

      <CoverSection onOpen={() => setCoverOpen(true)} />

      {/* Main content — visible after cover opens */}
      <main className="relative z-10">
        <section
          className="px-6 py-20 text-center relative z-10"
          style={{ background: 'linear-gradient(135deg, #FFF5F7, #F0FFF4)' }}
        >
          {/* Arabic */}
          <p className="text-2xl md:text-3xl mb-6 text-gray-700"
            style={{ fontFamily: 'serif' }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>

          {/* Hadith */}
          <blockquote className="italic text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto">
            "Setiap anak tergadai dengan aqiqahnya."
            <br />
            <span className="text-xs not-italic">— HR. Ahmad, Abu Dawud, At-Tirmidzi</span>
          </blockquote>

          {/* Main text */}
          <div className="max-w-xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              Dengan penuh rasa syukur kehadirat Allah Subhanahu wa Ta'ala
              atas segala nikmat dan karunia-Nya, kami mengumumkan
              dengan penuh kebahagiaan kelahiran dua buah hati kami.
            </p>
            <p>
              Sebagai wujud syukur dan mengikuti sunnah Rasulullah ﷺ,
              kami akan menyelenggarakan syukuran Aqiqah untuk
              putra-putri tercinta kami.
            </p>
            <p>
              Dengan rendah hati, kami mengundang Bapak/Ibu/Saudara/i
              untuk hadir memberikan doa restu.
              Kehadiran dan doa Anda adalah kebahagiaan terbesar bagi kami.
            </p>
          </div>
        </section>
        {/* Names Section */}
        <section>
          <BabyNamesSection />
        </section>

        <WaveDivider fillColor="#FFF8E7" variant="sine" />

        {/* Event Details Section */}
        <section>
          <EventDetailsSection />
        </section>

        <WaveDivider fillColor="#E8F8FF" variant="hill" />

        {/* Maps Section */}
        <section>
          <MapsSection />
        </section>



        <WaveDivider fillColor="#F5F0FF" variant="sine" />

        {/* Wishes Section */}
        <section>
          <WishesSection />
        </section>

        <WaveDivider fillColor="#FFF5F7" variant="hill" />

        {/* Closing Section */}
        <section>
          <ClosingSection />
        </section>
      </main>

      {/* Music player FAB */}
      {coverOpen && <MusicPlayer />}
    </>
  );
}
