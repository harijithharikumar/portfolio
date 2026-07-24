import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp, Heart, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { scrollToSection, playMicroSound } from '../../utils/helper';

export const Footer: React.FC = () => {
  const handleScrollTop = () => {
    playMicroSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-100 text-slate-400 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-300">
          {/* Column 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-600 p-0.5 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <div className="w-full h-full bg-slate-950 dark:bg-slate-950 light:bg-white rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-base">
                  HH
                </div>
              </div>
              <span className="text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                Harijith Harikumar
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              B.Tech Artificial Intelligence & Data Science Student (CGPA: 7.60). Passionate about Machine Learning, Prompt Engineering, Software Engineering, and building impactful AI solutions.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 dark:text-slate-200 light:text-slate-900 font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {['Hero', 'About', 'Skills', 'Projects', 'Internship', 'Education', 'Certifications', 'Contact'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => {
                      playMicroSound('click');
                      scrollToSection(sec.toLowerCase());
                    }}
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Connections */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 dark:text-slate-200 light:text-slate-900 font-mono">
              Connect & Reach Out
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200/60 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span className="truncate">GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200/60 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className="truncate">LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200/60 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-violet-500/50 hover:text-violet-400 transition-all"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Harijith Harikumar. Designed with
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> & AI Precision.
          </p>

          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-slate-900 light:bg-slate-200 text-slate-300 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer shadow-md"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
