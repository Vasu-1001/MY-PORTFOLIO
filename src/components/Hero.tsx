import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  GraduationCap,
  Trophy,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';
import { trackResumeDownload } from '../utils/analytics';

interface HeroProps {
  onOpenResume: () => void;
}

const runningRoles = [
  'Java Full Stack Developer',
  'Spring Boot & React Specialist',
  'AI / ML & RAG Engineer',
  'Cloud Architecture & DevOps',
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { isDark } = useTheme();
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % runningRoles.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-0 lg:min-h-[88vh] flex items-center justify-center pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-12 overflow-hidden"
    >
      {/* Ambient Blue Backglow Orbs */}
      <div
        className={`absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[250px] sm:h-[450px] rounded-full blur-[70px] sm:blur-[140px] pointer-events-none -z-10 animate-aurora-glow will-change-transform ${
          isDark ? 'bg-blue-600/[0.10]' : 'bg-blue-400/[0.06]'
        }`}
      />
      <div
        className={`absolute top-1/3 right-1/4 w-[280px] sm:w-[550px] h-[250px] sm:h-[450px] rounded-full blur-[70px] sm:blur-[150px] pointer-events-none -z-10 animate-aurora-glow will-change-transform ${
          isDark ? 'bg-sky-500/[0.08]' : 'bg-purple-400/[0.04]'
        }`}
        style={{ animationDelay: '3s' }}
      />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
        {/* Two-Column Responsive Layout: 60-65% Left / 35-40% Right on Mobile, 12-column Grid on Desktop */}
        <div className="grid grid-cols-[minmax(0,1.52fr)_minmax(0,1fr)] lg:grid-cols-12 gap-2.5 min-[360px]:gap-3.5 sm:gap-6 lg:gap-14 items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Clean, Focused Executive Typography          */}
          {/* ========================================================= */}
          <div className="min-w-0 lg:col-span-7 space-y-2 min-[360px]:space-y-2.5 sm:space-y-4 lg:space-y-6 text-left">
            {/* Status Pill with Blue Glow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-2 py-0.5 min-[360px]:px-2.5 min-[360px]:py-1 sm:px-4 sm:py-1.5 rounded-full backdrop-blur-md transition-colors max-w-full ${
                isDark
                  ? 'bg-slate-900/90 border border-blue-500/30 shadow-[0_0_20px_rgba(56,189,248,0.15)] text-slate-200'
                  : 'bg-blue-50/90 border border-blue-200 shadow-sm text-blue-900'
              }`}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span
                className={`text-[10px] min-[360px]:text-[11px] sm:text-xs font-mono font-semibold tracking-wide truncate ${
                  isDark ? 'text-slate-200' : 'text-blue-900'
                }`}
              >
                <span className="hidden min-[420px]:inline">Final-Year Student · </span>Open to Work
              </span>
            </motion.div>

            {/* Subtitle, Name & Primary Running Role */}
            <div className="space-y-0.5 min-[360px]:space-y-1 sm:space-y-1.5 lg:space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className={`text-[9.5px] min-[360px]:text-[11px] sm:text-xs lg:text-sm font-mono font-semibold tracking-widest uppercase flex items-center gap-1.5 sm:gap-2 ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}
              >
                <Sparkles className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                <span className="truncate">AI & Full Stack Engineer</span>
                <span
                  className={`w-6 sm:w-8 h-[1px] hidden sm:inline-block ${
                    isDark ? 'bg-cyan-500/40' : 'bg-blue-400/40'
                  }`}
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-[clamp(1.35rem,5.2vw,2.35rem)] sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-gradient-name"
              >
                {personalInfo.name}
              </motion.h1>

              {/* Role Title with Vibrant Aurora Gradient */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full min-h-[22px] min-[360px]:min-h-[28px] sm:min-h-[34px] lg:min-h-[40px] flex items-center overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIdx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-[clamp(0.78rem,2.8vw,1.18rem)] sm:text-xl lg:text-3xl font-bold text-gradient-aurora truncate inline-block max-w-full"
                  >
                    {runningRoles[roleIdx]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Concise Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`text-[clamp(0.7rem,2.2vw,0.875rem)] sm:text-sm lg:text-lg max-w-xl leading-snug min-[360px]:leading-normal sm:leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-[#334155]'
              }`}
            >
              Building{' '}
              <strong className={isDark ? 'text-white font-semibold' : 'text-[#0F172A] font-semibold'}>
                Java & Spring Boot
              </strong>{' '}
              applications,{' '}
              <strong className={isDark ? 'text-white font-semibold' : 'text-[#0F172A] font-semibold'}>
                React
              </strong>{' '}
              web applications, and enterprise{' '}
              <strong className={isDark ? 'text-white font-semibold' : 'text-[#0F172A] font-semibold'}>
                AI systems with RAG
              </strong>{' '}
              & AWS Cloud.
            </motion.p>

            {/* Primary Action Buttons & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-0.5 sm:pt-2 space-y-2 sm:space-y-3.5"
            >
              {/* Row 1: Action Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 min-[360px]:gap-2 sm:gap-3">
                {/* Primary Download Resume with Glowing Aura */}
                <button
                  onClick={() => {
                    trackResumeDownload('Resume');
                    onOpenResume();
                  }}
                  className={`inline-flex items-center justify-center gap-1 min-[360px]:gap-1.5 px-2.5 py-1.5 min-[360px]:px-3 min-[360px]:py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-3.5 rounded-lg sm:rounded-xl font-bold text-[10.5px] min-[360px]:text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0 ${
                    isDark
                      ? 'bg-white hover:bg-slate-100 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]'
                      : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)]'
                  }`}
                >
                  <Download className={`w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 sm:w-4 sm:h-4 shrink-0 ${isDark ? 'text-slate-950' : 'text-white'}`} />
                  <span>Resume<span className="hidden min-[420px]:inline"> (PDF)</span></span>
                </button>

                {/* View Projects Button */}
                <button
                  onClick={scrollToProjects}
                  className={`inline-flex items-center justify-center gap-1 px-2 py-1.5 min-[360px]:px-2.5 min-[360px]:py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-3.5 rounded-lg sm:rounded-xl font-medium text-[10.5px] min-[360px]:text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0 ${
                    isDark
                      ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-blue-500/50 shadow-sm'
                      : 'bg-white hover:bg-slate-50 text-[#0F172A] border border-[#E2E8F0] hover:border-blue-400 shadow-sm'
                  }`}
                >
                  <span>Projects</span>
                  <ArrowRight className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 sm:w-3.5 sm:h-3.5 text-blue-500 shrink-0" />
                </button>
              </div>

              {/* Row 2: 5 Social Profile Links placed directly below in one clean row */}
              <div className="flex items-center gap-1 min-[360px]:gap-1.5 sm:gap-2 pt-0.5 overflow-x-auto scrollbar-none">
                {[
                  { href: personalInfo.socials.github, icon: GithubIcon, label: 'GitHub Profile', title: 'GitHub' },
                  { href: personalInfo.socials.linkedin, icon: LinkedinIcon, label: 'LinkedIn Profile', title: 'LinkedIn' },
                  { href: personalInfo.socials.leetcode, icon: LeetCodeIcon, label: 'LeetCode Profile', title: 'LeetCode (200+ solved)' },
                  { href: personalInfo.socials.codechef, icon: CodeChefIcon, label: 'CodeChef Profile', title: 'CodeChef (250+ solved)' },
                  { href: `mailto:${personalInfo.socials.email}`, icon: Mail, label: 'Email Vasudevan', title: 'Direct Email' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.title}
                      href={s.href}
                      target={s.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className={`p-1 min-[360px]:p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl transition-all hover:scale-105 w-7 h-7 min-[360px]:w-8 min-[360px]:h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center shrink-0 ${
                        isDark
                          ? 'bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 text-slate-400 hover:text-white'
                          : 'bg-white hover:bg-slate-50 border border-[#E2E8F0] hover:border-blue-400 text-[#475569] hover:text-[#2563EB] shadow-sm'
                      }`}
                      aria-label={s.label}
                      title={s.title}
                    >
                      <Icon className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Luxury Executive Portrait Dossier Frame     */}
          {/* Vertically centered and fluidly proportioned (35-40%)     */}
          {/* ========================================================= */}
          <div className="min-w-0 lg:col-span-5 flex items-center justify-end sm:justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[125px] min-[360px]:max-w-[145px] min-[400px]:max-w-[165px] sm:max-w-[240px] lg:max-w-[305px]"
            >
              {/* Soft Ambient Blue Backglow */}
              <div
                className={`absolute inset-0 rounded-2xl lg:rounded-3xl blur-xl lg:blur-2xl -z-10 animate-aurora-glow ${
                  isDark
                    ? 'bg-gradient-to-tr from-blue-600/25 via-sky-400/20 to-transparent'
                    : 'bg-gradient-to-tr from-blue-400/20 via-sky-300/15 to-transparent'
                }`}
              />

              {/* Bespoke Executive Card Frame with Glass Highlights */}
              <div
                className={`rounded-2xl lg:rounded-3xl p-1.5 min-[360px]:p-2 sm:p-2.5 lg:p-3 backdrop-blur-xl group transition-all duration-300 ${
                  isDark
                    ? 'border border-white/10 bg-slate-900/90 shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:border-blue-500/40'
                    : 'border border-[#E2E8F0] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.08)] hover:border-blue-400'
                }`}
              >
                {/* Portrait Photo Container: 4/5 Proportioned Frame */}
                <div
                  className={`relative aspect-[4/5] rounded-xl lg:rounded-2xl overflow-hidden border ${
                    isDark ? 'border-slate-800 bg-slate-950' : 'border-[#E2E8F0] bg-slate-100'
                  }`}
                >
                  <img
                    src="/profile.jpg"
                    alt="Vasudevan R - Formal Portrait"
                    width={305}
                    height={381}
                    decoding="async"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-95 group-hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle inner gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Clean In-Photo Status Badge with Electric Blue Glow */}
                  <div
                    className={`absolute top-1.5 right-1.5 sm:top-2 sm:right-2 lg:top-2.5 lg:right-2.5 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full backdrop-blur-md flex items-center gap-1 sm:gap-1.5 ${
                      isDark
                        ? 'bg-slate-950/90 border border-blue-400/60 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                        : 'bg-white/95 border border-blue-300 shadow-md'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span
                      className={`text-[8px] min-[360px]:text-[9px] sm:text-[10px] font-mono font-bold tracking-wide ${
                        isDark ? 'text-blue-300' : 'text-blue-700'
                      }`}
                    >
                      Open to Work
                    </span>
                  </div>
                </div>

                {/* Integrated Clean Metadata Footer (Displayed on sm: screens and desktop) */}
                <div className="hidden sm:block p-2 sm:p-2.5 lg:p-3 pt-2 sm:pt-3 space-y-1.5 sm:space-y-2 text-left">
                  {/* Row 1: Name & Role */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div
                        className={`text-xs sm:text-sm font-bold tracking-tight ${
                          isDark ? 'text-white' : 'text-[#0F172A]'
                        }`}
                      >
                        Vasudevan R
                      </div>
                    </div>
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded border ${
                        isDark
                          ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                          : 'bg-slate-100 border-[#E2E8F0] text-[#475569]'
                      }`}
                    >
                      Coimbatore, TN
                    </span>
                  </div>

                  {/* Row 2: Credibility Badges */}
                  <div
                    className={`pt-1.5 sm:pt-2 border-t grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono ${
                      isDark
                        ? 'border-slate-800/80 text-slate-300'
                        : 'border-[#E2E8F0] text-[#475569]'
                    }`}
                  >
                    <div className="flex items-center gap-1 sm:gap-1.5 truncate">
                      <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500 shrink-0" />
                      <span className="truncate">Suguna CE '27</span>
                    </div>

                    <div
                      className={`flex items-center gap-1 sm:gap-1.5 truncate text-right justify-end font-semibold ${
                        isDark ? 'text-blue-300' : 'text-blue-700'
                      }`}
                    >
                      <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500 shrink-0" />
                      <span className="truncate">SIH Internal Winner</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
