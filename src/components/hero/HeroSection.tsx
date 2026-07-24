import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  ArrowRight,
  BrainCircuit,
  Award,
  GraduationCap,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { scrollToSection, playMicroSound } from '../../utils/helper';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenChat }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentFullText = PERSONAL_INFO.roleTitles[titleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.roleTitles.length);
        }
      }
    };

    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Main Intro Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <span className="text-sm sm:text-base text-slate-400 font-mono tracking-wider uppercase block">
                Welcome to my portfolio
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-gradient drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
            </div>

            {/* Cycling Role Title */}
            <div className="h-10 sm:h-12 flex items-center">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 dark:text-slate-300 light:text-slate-700 font-mono flex items-center gap-2">
                <span className="text-cyan-400">&gt;</span>
                <span>{displayText}</span>
                <span className="w-2.5 h-6 bg-cyan-400 animate-pulse inline-block" />
              </p>
            </div>

            {/* Short Engaging Narrative */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
              B.Tech Artificial Intelligence & Data Science Engineer (CGPA: 7.60).
              Building intelligent Machine Learning models, location-based disaster alert systems, and modern AI tools with Python, Node.js, and Flask.
            </p>

            {/* Location & Quick Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <MapPin className="w-4 h-4 shrink-0" />
                {PERSONAL_INFO.location}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:inline-block" />
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                CGPA: {PERSONAL_INFO.cgpa}
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  playMicroSound('click');
                  onOpenResume();
                }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>

              <button
                onClick={() => {
                  playMicroSound('click');
                  scrollToSection('contact');
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  playMicroSound('click');
                  onOpenChat();
                }}
                className="flex items-center gap-2 px-4 py-3.5 rounded-2xl font-semibold text-xs text-violet-300 bg-violet-600/20 border border-violet-500/40 hover:bg-violet-600/30 transition-all cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.2)]"
              >
                <Sparkles className="w-4 h-4 text-violet-400 animate-spin" />
                <span>Ask AI Bot</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="pt-4 flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 border border-slate-800 hover:border-blue-400 hover:text-blue-400 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 border border-slate-800 hover:border-violet-400 hover:text-violet-400 transition-all"
                title="Email Direct"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glowing Background Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-violet-600/30 rounded-3xl blur-2xl transform rotate-3" />

              {/* Main Card Frame */}
              <div className="relative glass-card p-6 rounded-3xl border border-slate-700/80 space-y-6">
                {/* Avatar Visual with Radial Rings */}
                <div className="relative flex justify-center">
                  <div className="relative w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-600 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                    <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                      <BrainCircuit className="w-16 h-16 text-cyan-400 mb-1 animate-pulse" />
                      <span className="font-extrabold text-white text-base tracking-wide">
                        HARIJITH
                      </span>
                      <span className="text-[10px] text-cyan-300 font-mono tracking-wider">
                        AI DEVELOPER
                      </span>
                    </div>
                  </div>

                  {/* Floating Metric Badges */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-2 -right-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold shadow-lg flex items-center gap-1.5 backdrop-blur-md"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>CGPA 7.60</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-violet-500/40 text-violet-300 text-xs font-mono font-bold shadow-lg flex items-center gap-1.5 backdrop-blur-md"
                  >
                    <Sparkles className="w-4 h-4 text-violet-400" />
                    <span>Selacto AI Intern</span>
                  </motion.div>
                </div>

                {/* Quick Stats Ticker Grid */}
                <div className="grid grid-cols-3 gap-3 pt-2 text-center border-t border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="block text-xl font-extrabold text-cyan-400 font-mono">4+</span>
                    <span className="text-[11px] text-slate-400 font-sans">Certifications</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="block text-xl font-extrabold text-blue-400 font-mono">2027</span>
                    <span className="text-[11px] text-slate-400 font-sans">B.Tech Batch</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="block text-xl font-extrabold text-violet-400 font-mono">100%</span>
                    <span className="text-[11px] text-slate-400 font-sans">Dedication</span>
                  </div>
                </div>

                {/* Direct Highlight */}
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Featured: Disaster Detection & Alert System (June 2025)</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
