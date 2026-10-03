import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterBento } from './components/RecruiterBento';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { CodingProfiles } from './components/CodingProfiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProgrammerBackground } from './components/ProgrammerBackground';
import { initGA } from './utils/analytics';

const ResumeModal = lazy(() =>
  import('./components/ResumeModal').then((mod) => ({ default: mod.ResumeModal }))
);

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    initGA();
  }, []);

  // Global Page Scroll Progress Bar (Responsive butter-smooth scroll indicator)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col selection:bg-blue-500/20 selection:text-blue-300 font-sans w-full overflow-x-clip">
        {/* Top Page Scroll Progress Loading Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 origin-left z-50 shadow-[0_0_12px_rgba(56,189,248,0.85)] pointer-events-none will-change-transform translate-z-0"
          style={{ scaleX }}
        />

        {/* Executive Ambient Canvas & Precision Mathematical Grid */}
        <ProgrammerBackground />

        {/* Global Navigation Header */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Sections */}
        <main className="flex-1 w-full relative z-10">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <RecruiterBento onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <CodingProfiles />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Recruiter-Ready ATS Interactive Resume Modal (Lazy-Loaded for Instant First Paint) */}
        {isResumeOpen && (
          <Suspense fallback={null}>
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
          </Suspense>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
