import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Sparkles, Terminal } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing AI Core...');

  useEffect(() => {
    const statuses = [
      'Initializing AI Core...',
      'Loading Neural Models...',
      'Syncing Climate & IP Detection Services...',
      'Rendering Portfolio Workspace...',
      'System Ready.',
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 8;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoaded();
          }, 300);
          return 100;
        }

        if (next < 25) setStatusText(statuses[0]);
        else if (next < 50) setStatusText(statuses[1]);
        else if (next < 75) setStatusText(statuses[2]);
        else if (next < 95) setStatusText(statuses[3]);
        else setStatusText(statuses[4]);

        return next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      <motion.div
        key="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5 } }}
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-slate-950 text-white font-mono"
      >
        {/* Glow ambient background */}
        <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
          {/* Animated Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="p-4 rounded-2xl bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-violet-600/30 border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.3)] mb-6"
          >
            <Cpu className="w-10 h-10 text-cyan-400" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-xl font-bold text-white tracking-wider flex items-center gap-2 mb-1">
            HARIJITH HARIKUMAR
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
          </h2>
          <p className="text-xs text-slate-400 font-sans tracking-wide mb-6">
            AI & DATA SCIENCE ENGINEER
          </p>

          {/* Progress bar container */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3 border border-slate-700/50">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 shadow-[0_0_10px_#38bdf8]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status info */}
          <div className="w-full flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 truncate text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              {statusText}
            </span>
            <span className="font-bold text-cyan-400 shrink-0">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
