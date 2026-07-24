import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Play,
  Github,
  ExternalLink,
  ShieldAlert,
  CloudRain,
  Cpu,
  Layers,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { DisasterSystemDemoModal } from './DisasterSystemDemoModal';
import { playMicroSound } from '../../utils/helper';

export const ProjectsSection: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const featuredProject = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Engineering <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Featured full-stack software and AI projects designed and implemented by Harijith Harikumar.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Project Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold font-mono">
                  ★ FEATURED PROJECT
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs font-mono border border-slate-700">
                  {featuredProject.date}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-cyan-400 font-mono mt-1">
                  {featuredProject.subtitle}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Key Highlights Bullet points */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Core Technical Contributions:
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {featuredProject.detailedPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-700 text-cyan-200 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => {
                    playMicroSound('click');
                    setIsDemoOpen(true);
                  }}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Launch Interactive System Demo</span>
                </button>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm text-slate-200 bg-slate-900/80 border border-slate-700 hover:border-cyan-400 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right Visual Graphic Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl space-y-4">
                {/* Simulated UI Window Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    disaster-alert-app.v1.0
                  </span>
                </div>

                {/* Dashboard Graphic Elements */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-cyan-400" />
                      IP ALERT ENGINE
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                      LIVE STREAM
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Target IP Location:</span>
                      <span className="text-white font-bold">Alappuzha, Kerala</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Environmental Risk:</span>
                      <span className="text-amber-400 font-bold">Moderate Rainfall</span>
                    </div>
                  </div>

                  {/* Simulated Waveform chart */}
                  <div className="h-16 flex items-end gap-1.5 pt-2 border-t border-slate-800">
                    {[35, 45, 30, 60, 85, 70, 95, 60, 40, 50, 75, 90, 65, 40, 50].map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t"
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-violet-600/10 border border-violet-500/30 text-xs text-violet-200 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Flask REST API connected to Node.js WebSocket notification pipeline</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Demo Modal Triggered */}
        <DisasterSystemDemoModal
          isOpen={isDemoOpen}
          onClose={() => setIsDemoOpen(false)}
        />
      </div>
    </section>
  );
};
