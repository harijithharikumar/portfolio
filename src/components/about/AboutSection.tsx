import React from 'react';
import { motion } from 'motion/react';
import {
  User,
  GraduationCap,
  Brain,
  Code,
  Globe2,
  CheckCircle,
  Sparkles,
  BookOpen,
  MapPin,
  Calendar,
  Layers,
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            About <span className="text-gradient">Harijith Harikumar</span>
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Passionate Artificial Intelligence & Data Science Engineer committed to continuous learning, core problem solving, and building practical AI-driven software.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                    Engineering Mindset & AI Focus
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">B.Tech AI & Data Science (2023–2027)</p>
                </div>
              </div>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
                I am currently pursuing my B.Tech degree in Artificial Intelligence & Data Science at{' '}
                <span className="text-cyan-400 font-semibold">Indra Ganesan College of Engineering, Tiruchirappalli</span>, maintaining a cumulative CGPA of <span className="text-white font-bold bg-blue-600/30 px-2 py-0.5 rounded border border-blue-500/40">7.60</span> (up to 6th semester).
              </p>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
                My passion lies at the intersection of <span className="text-white font-medium">Machine Learning algorithms</span>, <span className="text-white font-medium">Data Analytics</span>, and <span className="text-white font-medium">Software Development</span>. During my internship as an AI Developer Intern at Selacto Software Solutions, I worked with Python and modern AI toolchains to build real-world AI applications, debug code, and collaborate on production tasks.
              </p>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
                Whether constructing real-time disaster detection tools using Node.js, Flask, and IP geolocation, or optimizing generative AI prompts, I bring strong problem-solving discipline and a continuous learning ethos to every project.
              </p>
            </div>

            {/* Core Values / Pillar Chips */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Brain className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                <span className="font-semibold text-slate-200">AI & ML</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Code className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                <span className="font-semibold text-slate-200">Software Dev</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Layers className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                <span className="font-semibold text-slate-200">Data Science</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Sparkles className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="font-semibold text-slate-200">Problem Solving</span>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights & Areas of Interest Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            {/* Academic Summary Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  Academic Excellence
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  CGPA 7.60
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-cyan-400 font-semibold block">Indra Ganesan College of Engineering</span>
                  <span className="text-slate-400">B.Tech Artificial Intelligence & Data Science (2023 - 2027)</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-blue-400 font-semibold block">Samajam Higher Secondary School</span>
                  <span className="text-slate-400">HSC (2023) & SSLC (2021) Completed</span>
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-violet-400" />
                Primary Areas of Interest
              </h3>

              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-cyan-200 border border-cyan-500/30 text-xs font-medium flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Multilingual Abilities */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-emerald-400" />
                Multilingual Communication
              </h3>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {PERSONAL_INFO.languages.map((lang) => (
                  <div key={lang} className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center justify-between">
                    <span>{lang}</span>
                    <span className="text-[10px] font-mono text-emerald-400">Fluent</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
