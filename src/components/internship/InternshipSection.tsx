import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Sparkles,
  Calendar,
  MapPin,
  CheckCircle2,
  Code2,
  Bug,
  Users,
  Terminal,
  Building,
} from 'lucide-react';
import { INTERNSHIP_DATA } from '../../data/portfolioData';

export const InternshipSection: React.FC = () => {
  return (
    <section id="internship" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Internship & <span className="text-gradient">Training</span>
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Real-world software engineering and AI application development experience gained in industry settings.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glow Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-violet-600 transform -translate-x-1/2 hidden sm:block opacity-60" />

          {INTERNSHIP_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10 mb-12"
            >
              {/* Timeline Node Badge */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
              </div>

              {/* Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 relative hover:border-violet-500/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        {item.role}
                      </h3>
                    </div>
                    <p className="text-base font-bold text-cyan-300">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono space-y-1">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-violet-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Key Achievements & Responsibilities:
                  </h4>

                  <ul className="space-y-2.5">
                    {item.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Gained Pills */}
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-xs font-mono text-slate-400 block mb-2">
                    Competencies & Tools Applied:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-xl bg-violet-600/10 border border-violet-500/30 text-violet-300 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
