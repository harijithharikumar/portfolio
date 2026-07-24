import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle2, ExternalLink, Sparkles, X, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { CertificationItem } from '../../types/portfolio';
import { playMicroSound, triggerCelebration } from '../../utils/helper';

export const CertificationsSection: React.FC = () => {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Certifications & <span className="text-gradient">Badges</span>
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Industry-recognized credentials from Google, Microsoft, LinkedIn Learning, and Selacto Software Solutions.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                playMicroSound('click');
                setActiveCert(cert);
                triggerCelebration();
              }}
              className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between hover:border-cyan-400 cursor-pointer relative group overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${cert.badgeColor} text-white shadow-lg`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                    {cert.date}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                    {cert.issuer}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[11px] text-cyan-400 font-semibold group-hover:underline pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Click to view credential details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Detail Modal */}
        <AnimatePresence>
          {activeCert && (
            <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-slate-100"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${activeCert.badgeColor} text-white`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold block uppercase">
                        {activeCert.issuer}
                      </span>
                      <h3 className="text-lg font-extrabold text-white">
                        {activeCert.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveCert(null)}
                    className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 block font-mono mb-1">CREDENTIAL DESCRIPTION</span>
                    <p className="text-slate-200 leading-relaxed text-sm">{activeCert.description}</p>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-mono mb-2">COMPETENCIES VERIFIED</span>
                    <div className="flex flex-wrap gap-2">
                      {activeCert.skillsCovered.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700 font-mono text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Official verified certification completed in {activeCert.date}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
