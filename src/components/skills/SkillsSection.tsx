import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  BrainCircuit,
  Database,
  Monitor,
  Sparkles,
  Terminal,
  Cpu,
  CheckCircle2,
  Play,
  Layers,
} from 'lucide-react';
import { SKILLS_DATA } from '../../data/portfolioData';
import { SkillItem } from '../../types/portfolio';
import { playMicroSound } from '../../utils/helper';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(SKILLS_DATA[0]);

  // Prompt Simulator State
  const [userPrompt, setUserPrompt] = useState(
    'Analyze climate dataset and predict disaster probability using Random Forest classifier.'
  );
  const [simulatedOutput, setSimulatedOutput] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const handleSimulate = () => {
    playMicroSound('click');
    setIsSimulating(true);
    setSimulatedOutput(null);

    setTimeout(() => {
      setIsSimulating(false);
      setSimulatedOutput(
        `[STATUS]: Model Evaluation Complete\n- Selected Algorithm: Random Forest Classifier (n_estimators=100)\n- Accuracy: 94.8%\n- Precision: 93.2% | Recall: 95.6%\n- Feature Importance: Temperature (0.38), Humidity (0.29), Pressure (0.21), Wind (0.12)\n[ALERT]: High flood risk detected for IP Location sector.`
      );
    }, 1200);
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Skills & <span className="text-gradient">Core Stack</span>
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            A comprehensive overview of programming languages, machine learning frameworks, databases, and development environments.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Skills', icon: Layers },
            { id: 'programming', label: 'Programming', icon: Code },
            { id: 'ai', label: 'AI & Machine Learning', icon: BrainCircuit },
            { id: 'database', label: 'Database', icon: Database },
            { id: 'os', label: 'Operating System', icon: Monitor },
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playMicroSound('click');
                  setActiveCategory(cat.id);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.id === skill.id;
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    playMicroSound('click');
                    setSelectedSkill(skill);
                  }}
                  className={`glass-card p-6 rounded-3xl border cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)] bg-slate-900/90'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                      {skill.category === 'programming' && <Code className="w-6 h-6" />}
                      {skill.category === 'ai' && <BrainCircuit className="w-6 h-6" />}
                      {skill.category === 'database' && <Database className="w-6 h-6" />}
                      {skill.category === 'os' && <Monitor className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      {skill.proficiency}%
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Interactive ML / AI Prompt Sandbox Tool */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-violet-500/30 max-w-4xl mx-auto shadow-[0_0_30px_rgba(139,92,246,0.15)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Interactive AI & ML Prompt Engineering Workbench
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Test Harijith's Prompt Engineering & Data Science logic live
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30 text-xs font-mono">
              Python + Gemini Engine
            </span>
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-mono text-slate-400">
              Input Machine Learning Task or Prompt Instruction:
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Enter prompt e.g., Run regression analysis on climate logs..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-mono focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={handleSimulate}
                disabled={isSimulating}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs font-mono transition-all cursor-pointer shadow-lg disabled:opacity-50"
              >
                {isSimulating ? (
                  <Cpu className="w-4 h-4 animate-spin text-cyan-400" />
                ) : (
                  <Play className="w-4 h-4 fill-white" />
                )}
                <span>{isSimulating ? 'Processing...' : 'Run Pipeline'}</span>
              </button>
            </div>
          </div>

          {/* Console Output */}
          {simulatedOutput && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 space-y-2"
            >
              <div className="flex items-center gap-2 text-slate-400 border-b border-slate-800 pb-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-[11px]">Pipeline Output Console</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-slate-200">
                {simulatedOutput}
              </pre>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};
