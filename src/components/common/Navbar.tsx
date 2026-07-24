import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sun,
  Moon,
  Menu,
  X,
  FileText,
  Bot,
  Sparkles,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Send,
  Home,
} from 'lucide-react';
import { useTheme } from '../../utils/themeContext';
import { scrollToSection, playMicroSound } from '../../utils/helper';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenChat: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Sparkles },
  { id: 'internship', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'contact', label: 'Contact', icon: Send },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenChat }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy detection
      const sectionIds = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    playMicroSound('click');
    scrollToSection(id);
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/70 dark:bg-slate-950/70 light:bg-white/80 backdrop-blur-xl border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-600 p-0.5 shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 dark:bg-slate-950 light:bg-white rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              HH
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-slate-900 dark:text-white text-base group-hover:text-cyan-400 transition-colors">
              Harijith Harikumar
            </span>
            <span className="text-[10px] text-cyan-500 font-mono tracking-widest uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
              AI & DS ENGINEER
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/80 p-1.5 rounded-full border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => playMicroSound('hover')}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white dark:text-white light:text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 dark:hover:text-white light:text-slate-600'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.5)] -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* AI Chat Bot Modal Trigger */}
          <button
            onClick={() => {
              playMicroSound('click');
              onOpenChat();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-violet-600/20 text-violet-300 dark:text-violet-300 light:text-violet-700 border border-violet-500/30 hover:bg-violet-600/30 hover:border-violet-400 transition-all cursor-pointer shadow-[0_0_12px_rgba(139,92,246,0.2)]"
          >
            <Bot className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
            <span>AI Assistant</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              playMicroSound('click');
              toggleTheme();
            }}
            className="p-2 rounded-full bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200/80 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors cursor-pointer"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={() => {
              playMicroSound('click');
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => {
              playMicroSound('click');
              toggleTheme();
            }}
            className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => {
              playMicroSound('click');
              setIsMobileOpen(!isMobileOpen);
            }}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-2xl border-b border-slate-800 dark:border-slate-800 light:border-slate-200 px-4 pt-3 pb-6"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold'
                        : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-900 dark:hover:bg-slate-900 light:hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <div className="pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    onOpenChat();
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-violet-600/20 text-violet-300 border border-violet-500/40"
                >
                  <Bot className="w-4 h-4 text-violet-400" />
                  <span>AI Assistant Chat</span>
                </button>

                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500"
                >
                  <FileText className="w-4 h-4" />
                  <span>View / Download Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
