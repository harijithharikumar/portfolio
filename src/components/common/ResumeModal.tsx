import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Copy, Check, Printer, Sparkles, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, EDUCATION_DATA, INTERNSHIP_DATA, PROJECTS_DATA, CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { triggerCelebration, playMicroSound } from '../../utils/helper';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    playMicroSound('click');
    const resumeText = `
HARIJITH HARIKUMAR
B.Tech - Artificial Intelligence & Data Science
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

EDUCATION
${EDUCATION_DATA.map(e => `- ${e.degree} | ${e.institution} | ${e.period} | ${e.score}`).join('\n')}

TECHNICAL SKILLS
- Programming: Python, C, SQL
- AI & Machine Learning: Machine Learning, Prompt Engineering, Data Analysis
- Database: MySQL
- Operating Systems: Windows

PROJECTS
${PROJECTS_DATA.map(p => `${p.title} (${p.date})\n${p.description}\nTech Stack: ${p.technologies.join(', ')}`).join('\n\n')}

INTERNSHIP
${INTERNSHIP_DATA.map(i => `${i.role} at ${i.company} (${i.period})\n- ${i.highlights.join('\n- ')}`).join('\n\n')}

CERTIFICATIONS
${CERTIFICATIONS_DATA.map(c => `- ${c.title} (${c.issuer} | ${c.date})`).join('\n')}

PERSONAL DETAILS
- DOB: ${PERSONAL_INFO.dob}
- Languages: ${PERSONAL_INFO.languages.join(', ')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    triggerCelebration();
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    playMicroSound('click');
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl text-slate-200 overflow-hidden my-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 bg-slate-950/80 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-bold text-white tracking-wide">Harijith Harikumar — Curriculum Vitae</h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Resume' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md transition-all cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={() => {
                  playMicroSound('click');
                  onClose();
                }}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document View */}
          <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto text-slate-300 font-sans leading-relaxed">
            {/* Header */}
            <div className="text-center border-b border-slate-800 pb-6 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-cyan-400">
                B.Tech – Artificial Intelligence & Data Science (CGPA: {PERSONAL_INFO.cgpa})
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.email}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.location}</span>
              </div>
              <div className="flex justify-center gap-4 text-xs text-blue-400 pt-1">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1 mb-3">
                PROFESSIONAL SUMMARY
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1 mb-3">
                EDUCATION
              </h3>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white">
                      <span>{edu.degree} — {edu.score}</span>
                      <span className="text-xs text-slate-400 font-mono">{edu.period}</span>
                    </div>
                    <p className="text-xs text-cyan-300">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1 mb-3">
                TECHNICAL SKILLS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div><strong className="text-white">Programming Languages:</strong> Python, C, SQL</div>
                <div><strong className="text-white">AI & Machine Learning:</strong> Machine Learning, Prompt Engineering, Data Analysis</div>
                <div><strong className="text-white">Database:</strong> MySQL</div>
                <div><strong className="text-white">Operating System:</strong> Windows</div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1 mb-3">
                PROJECTS
              </h3>
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="space-y-2 text-xs mb-4">
                  <div className="flex justify-between font-bold text-white text-sm">
                    <span>{p.title}</span>
                    <span className="text-slate-400 font-mono">{p.date}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {p.detailedPoints.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <p className="text-slate-400"><strong>Tech Stack:</strong> {p.technologies.join(', ')}</p>
                </div>
              ))}
            </div>

            {/* Internship */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1 mb-3">
                INTERNSHIP & TRAINING
              </h3>
              {INTERNSHIP_DATA.map((i) => (
                <div key={i.id} className="space-y-2 text-xs">
                  <div className="flex justify-between font-bold text-white text-sm">
                    <span>{i.role} — {i.company}</span>
                    <span className="text-slate-400 font-mono">{i.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {i.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1 mb-3">
                CERTIFICATIONS
              </h3>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                {CERTIFICATIONS_DATA.map((c) => (
                  <li key={c.id}>
                    <strong className="text-white">{c.title}</strong> — {c.issuer} ({c.date})
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Details */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1 mb-3">
                PERSONAL DETAILS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div><strong className="text-white">Father's Name:</strong> R. Harikumar</div>
                <div><strong className="text-white">DOB:</strong> {PERSONAL_INFO.dob}</div>
                <div><strong className="text-white">Languages:</strong> {PERSONAL_INFO.languages.join(', ')}</div>
                <div><strong className="text-white">Location:</strong> {PERSONAL_INFO.location}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
