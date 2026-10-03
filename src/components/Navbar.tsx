import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight, Palette, Check } from 'lucide-react';
import { navItems, personalInfo } from '../data/portfolioData';
import { useTheme, type ThemeMode } from '../context/ThemeContext';
import { trackResumeDownload } from '../utils/analytics';

interface NavbarProps {
  onOpenResume: () => void;
}

const themeOptions: { id: ThemeMode; label: string; dotColor: string }[] = [
  { id: 'dark', label: 'This Color (Dark & Blue)', dotColor: 'bg-blue-500' },
  { id: 'white', label: 'White Color (Light Theme)', dotColor: 'bg-white border border-slate-300' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { theme, setTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md shadow-sm transition-colors duration-300 py-3.5 ${
        isDark
          ? 'bg-[#040711]/90 border-b border-white/[0.08]'
          : 'bg-white/90 border-b border-[#E2E8F0] shadow-[0_2px_12px_rgba(15,23,42,0.04)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Vasudevan R - Home"
        >
          <div
            className={`relative w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 shadow-sm ${
              isDark
                ? 'bg-slate-900 border border-slate-700/80 text-slate-100 group-hover:border-blue-500/80'
                : 'bg-white border border-[#E2E8F0] text-slate-900 group-hover:border-blue-500 shadow-[0_2px_8px_rgba(15,23,42,0.06)]'
            }`}
          >
            <span
              className={
                isDark
                  ? 'bg-gradient-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-[#0F172A] to-[#2563EB] bg-clip-text text-transparent font-extrabold'
              }
            >
              VR
            </span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border border-slate-950" />
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <span
              className={`text-sm font-semibold tracking-tight transition-colors ${
                isDark
                  ? 'text-slate-100 group-hover:text-blue-400'
                  : 'text-[#0F172A] group-hover:text-[#2563EB]'
              }`}
            >
              {personalInfo.name}
            </span>
            <span
              className={`text-[10px] font-mono tracking-wider uppercase ${
                isDark ? 'text-slate-400' : 'text-[#64748B]'
              }`}
            >
              Full Stack & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-md transition-colors duration-200 ${
            isDark
              ? 'bg-slate-900/60 border border-slate-800/90'
              : 'bg-[#F1F5F9]/90 border border-[#E2E8F0]'
          }`}
        >
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'text-white'
                      : 'text-[#2563EB] font-bold'
                    : isDark
                    ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                    : 'text-[#475569] hover:text-[#0F172A] hover:bg-white/80'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute inset-0 rounded-full ${
                      isDark
                        ? 'bg-blue-500/15 border border-blue-500/30'
                        : 'bg-[#EFF6FF] border border-[#BFDBFE] shadow-sm'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right actions: Theme Palette Switcher + Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Palette Switcher (Two Options: This Color and White Color) */}
          <div className="relative">
            <button
              onClick={() => setPaletteOpen(!paletteOpen)}
              className={`p-2 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer ${
                isDark
                  ? 'border border-slate-800 bg-slate-900/70 text-slate-300 hover:text-white hover:border-slate-700'
                  : 'border border-[#E2E8F0] bg-white text-[#475569] hover:text-[#2563EB] hover:border-blue-200 shadow-sm'
              }`}
              aria-label="Select color theme"
              title="Theme Style"
            >
              <Palette className="w-4 h-4 text-blue-500" />
            </button>

            <AnimatePresence>
              {paletteOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className={`absolute right-0 mt-2 w-56 rounded-xl border p-1.5 z-50 text-xs shadow-2xl ${
                    isDark
                      ? 'bg-slate-900 border-slate-700/80 text-slate-200'
                      : 'bg-white border-[#E2E8F0] text-[#0F172A] shadow-[0_10px_30px_rgba(15,23,42,0.12)]'
                  }`}
                >
                  <div
                    className={`px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider border-b mb-1 ${
                      isDark
                        ? 'text-slate-400 border-slate-800'
                        : 'text-[#64748B] border-[#F1F5F9]'
                    }`}
                  >
                    Theme Style
                  </div>
                  {themeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setTheme(opt.id);
                        setPaletteOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg transition-colors cursor-pointer text-left ${
                        theme === opt.id
                          ? isDark
                            ? 'bg-blue-600/15 text-blue-300 font-semibold'
                            : 'bg-[#EFF6FF] text-[#2563EB] font-bold'
                          : isDark
                          ? 'text-slate-300 hover:bg-slate-800'
                          : 'text-[#475569] hover:bg-[#F8FAFC]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-3 h-3 rounded-full ${opt.dotColor}`} />
                        <span>{opt.label}</span>
                      </div>
                      {theme === opt.id && <Check className="w-3.5 h-3.5 text-blue-500" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resume Button */}
          <button
            onClick={() => {
              trackResumeDownload('Resume');
              onOpenResume();
            }}
            className={`group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm cursor-pointer ${
              isDark
                ? 'bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700/80 hover:border-slate-600'
                : 'bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 shadow-[0_2px_10px_rgba(37,99,235,0.25)]'
            }`}
          >
            <FileText className={`w-3.5 h-3.5 ${isDark ? 'text-blue-400' : 'text-white'}`} />
            <span className={isDark ? 'text-slate-100' : 'text-white'}>Resume</span>
            <ArrowUpRight className={`w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
              isDark ? 'text-slate-400 group-hover:text-white' : 'text-white/90 group-hover:text-white'
            }`} />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setPaletteOpen(!paletteOpen)}
            className={`p-2 rounded-xl border ${
              isDark
                ? 'border-slate-800 bg-slate-900/60 text-blue-400'
                : 'border-[#E2E8F0] bg-white text-blue-600 shadow-sm'
            }`}
            aria-label="Theme palette"
          >
            <Palette className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border ${
              isDark
                ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white'
                : 'border-[#E2E8F0] bg-white text-slate-700 hover:text-[#0F172A] shadow-sm'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 overflow-hidden backdrop-blur-xl ${
              isDark
                ? 'border-slate-800 bg-slate-950/95'
                : 'border-[#E2E8F0] bg-white/95 shadow-xl'
            }`}
          >
            <div className="grid grid-cols-2 gap-1.5 py-2">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-xs font-medium flex items-center justify-between ${
                    activeSection === item.href.substring(1)
                      ? isDark
                        ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                        : 'bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] font-bold'
                      : isDark
                      ? 'text-slate-300 hover:bg-slate-900'
                      : 'text-[#475569] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>

            <div
              className={`pt-3 border-t flex items-center justify-between ${
                isDark ? 'border-slate-800' : 'border-[#E2E8F0]'
              }`}
            >
              <button
                onClick={() => {
                  setTheme(theme === 'white' ? 'dark' : 'white');
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-200'
                    : 'bg-white border-[#E2E8F0] text-[#0F172A] shadow-sm'
                }`}
              >
                <Palette className="w-4 h-4 text-blue-500" />
                <span>Theme: {theme === 'white' ? 'White Color' : 'This Color'}</span>
              </button>

              <button
                onClick={() => {
                  trackResumeDownload('Resume');
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
