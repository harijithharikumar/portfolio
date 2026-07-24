import React, { useState } from 'react';
import { ThemeProvider } from './utils/themeContext';
import { ScrollProgress } from './components/common/ScrollProgress';
import { CustomCursor } from './components/common/CustomCursor';
import { ParticleBackground } from './components/common/ParticleBackground';
import { LoadingScreen } from './components/common/LoadingScreen';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ResumeModal } from './components/common/ResumeModal';
import { AIChatBotModal } from './components/common/AIChatBotModal';

import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { InternshipSection } from './components/internship/InternshipSection';
import { EducationSection } from './components/education/EducationSection';
import { CertificationsSection } from './components/certifications/CertificationsSection';
import { ContactSection } from './components/contact/ContactSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ThemeProvider>
      {/* Loading Splash */}
      {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}

      <div className="relative min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 transition-colors duration-300">
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Custom Glowing Cursor */}
        <CustomCursor />

        {/* Ambient Particle Canvas Background */}
        <ParticleBackground />

        {/* Sticky Glass Navbar */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />

        {/* Page Main Content */}
        <main className="relative z-10">
          <HeroSection
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenChat={() => setIsChatOpen(true)}
          />

          <AboutSection />

          <SkillsSection />

          <ProjectsSection />

          <InternshipSection />

          <EducationSection />

          <CertificationsSection />

          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        <AIChatBotModal
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
