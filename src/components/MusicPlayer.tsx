'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function FloatingNotes({ playing }: { playing: boolean }) {
  const [notes, setNotes] = useState<{ id: number; char: string; x: number }[]>([]);
  const counter = useRef(0);

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      const chars = ['\u266a', '\u266b', '\u266c', '\u2669'];
      counter.current += 1;
      setNotes((prev) => [
        ...prev.slice(-5),
        { id: counter.current, char: chars[counter.current % chars.length], x: Math.random() * 40 - 20 },
      ]);
    }, 1500);
    return () => clearInterval(interval);
  }, [playing]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {notes.map((n) => (
        <motion.span
          key={n.id}
          initial={{ opacity: 1, y: 0, x: n.x }}
          animate={{ opacity: 0, y: -60 }}
          transition={{ duration: 1.5 }}
          onAnimationComplete={() => setNotes((prev) => prev.filter((nn) => nn.id !== n.id))}
          className="absolute bottom-full text-primary text-sm"
        >
          {n.char}
        </motion.span>
      ))}
    </div>
  );
}

function SoundWaveBars({ playing }: { playing: boolean }) {
  const delays = [0, 0.1, 0.2, 0.3, 0.4];
  const durations = [0.5, 0.6, 0.4, 0.7, 0.5];
  return (
    <div className="flex items-end gap-0.5 h-4">
      {delays.map((d, i) => (
        <motion.div
          key={i}
          className="w-0.5 bg-primary rounded-full"
          animate={playing ? { height: ['4px', '16px', '4px'] } : { height: '4px' }}
          transition={{ duration: durations[i], delay: d, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const prefersReduced = useReducedMotion();

  // iOS: buat audio element secara manual, jangan pakai JSX <audio>
  useEffect(() => {
    const audio = new Audio('/audio/maryam.mp4');
    audio.loop = true;
    audio.preload = 'none'; // iOS: jangan preload otomatis
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      // iOS requires play() to be called directly from a user gesture
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setPlaying(true))
          .catch(() => setPlaying(false));
      }
    }
  }, [playing]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        onClick={toggle}
        className="relative w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
        aria-label={playing ? 'Pause musik' : 'Putar musik'}
      >
        {playing && (
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        {playing ? (
          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}

        <div className="absolute -top-6">
          <SoundWaveBars playing={playing} />
        </div>

        {playing && !prefersReduced && <FloatingNotes playing={playing} />}
      </motion.button>
    </div>
  );
}
