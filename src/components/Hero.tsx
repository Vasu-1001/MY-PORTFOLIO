import React from 'react';
import { motion } from 'framer-motion';
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

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { isDark } = useTheme();

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-12 overflow-hidden"
    >
      {/* Ambient Blue Backglow Orbs */}
      <div
        className={`absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full blur-[140px] pointer-events-none -z-10 animate-aurora-glow ${
          isDark ? 'bg-blue-600/[0.10]' : 'bg-blue-400/[0.06]'
        }`}
      />
      <div
        className={`absolute top-1/3 right-1/4 w-[550px] h-[450px] rounded-full blur-[150px] pointer-events-none -z-10 animate-aurora-glow ${
          isDark ? 'bg-sky-500/[0.08]' : 'bg-purple-400/[0.04]'
        }`}
        style={{ animationDelay: '3s' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Clean, Focused Executive Typography          */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill with Blue Glow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full backdrop-blur-md transition-colors ${
                isDark
                  ? 'bg-slate-900/90 border border-blue-500/30 shadow-[0_0_20px_rgba(56,189,248,0.15)] text-slate-200'
                  : 'bg-blue-50/90 border border-blue-200 shadow-sm text-blue-900'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span
                className={`text-xs font-mono font-semibold tracking-wide ${
                  isDark ? 'text-slate-200' : 'text-blue-900'
                }`}
              >
                Final-Year Student · Open to Internships & 2027 Graduate Roles
              </span>
            </motion.div>

            {/* Name & Primary Role */}
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className={`text-xs sm:text-sm font-mono font-semibold tracking-widest uppercase flex items-center gap-2 ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                <span>AI & Full Stack Engineer</span>
                <span
                  className={`w-8 h-[1px] inline-block ${
                    isDark ? 'bg-cyan-500/40' : 'bg-blue-400/40'
                  }`}
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] text-gradient-name"
              >
                {personalInfo.name}
              </motion.h1>

              {/* Role Title with Vibrant Aurora Gradient */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-1"
              >
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-aurora">
                  AI-Enabled Java Full Stack Developer
                </span>
              </motion.div>
            </div>

            {/* Concise Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`text-base sm:text-lg max-w-xl leading-relaxed ${
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

            {/* Primary Action Buttons + Social Links (Unified in One Clean Row) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              {/* Primary Download Resume with Glowing Aura */}
              <button
                onClick={() => {
                  trackResumeDownload('Resume');
                  onOpenResume();
                }}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                  isDark
                    ? 'bg-white hover:bg-slate-100 text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.4)]'
                    : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.35)]'
                }`}
              >
                <Download className={`w-4 h-4 ${isDark ? 'text-slate-950' : 'text-white'}`} />
                <span>Download Resume (PDF)</span>
              </button>

              {/* View Projects Button */}
              <button
                onClick={scrollToProjects}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                  isDark
                    ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-blue-500/50 shadow-sm'
                    : 'bg-white hover:bg-slate-50 text-[#0F172A] border border-[#E2E8F0] hover:border-blue-400 shadow-sm'
                }`}
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-blue-500" />
              </button>

              {/* Clean Social Profiles Group */}
              <div
                className={`flex items-center gap-2 sm:pl-2 pt-2 sm:pt-0 ${
                  isDark ? 'sm:border-l sm:border-slate-800/80' : 'sm:border-l sm:border-[#E2E8F0]'
                }`}
              >
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
                      className={`p-2.5 rounded-xl transition-all hover:scale-105 ${
                        isDark
                          ? 'bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 text-slate-400 hover:text-white'
                          : 'bg-white hover:bg-slate-50 border border-[#E2E8F0] hover:border-blue-400 text-[#475569] hover:text-[#2563EB] shadow-sm'
                      }`}
                      aria-label={s.label}
                      title={s.title}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Luxury Executive Portrait Dossier Frame     */}
          {/* Sized cleanly at 80% (max-w-[270px] sm:max-w-[305px])     */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[270px] sm:max-w-[305px]"
            >
              {/* Soft Ambient Blue Backglow */}
              <div
                className={`absolute inset-0 rounded-3xl blur-2xl -z-10 animate-aurora-glow ${
                  isDark
                    ? 'bg-gradient-to-tr from-blue-600/25 via-sky-400/20 to-transparent'
                    : 'bg-gradient-to-tr from-blue-400/20 via-sky-300/15 to-transparent'
                }`}
              />

              {/* Bespoke Executive Card Frame with Glass Highlights */}
              <div
                className={`rounded-3xl p-3 backdrop-blur-xl group transition-all duration-300 ${
                  isDark
                    ? 'border border-white/10 bg-slate-900/90 shadow-[0_0_35px_rgba(56,189,248,0.12)] hover:border-blue-500/40'
                    : 'border border-[#E2E8F0] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.08)] hover:border-blue-400'
                }`}
              >
                {/* Portrait Photo Container: 80% Proportioned Frame */}
                <div
                  className={`relative aspect-[4/5] rounded-2xl overflow-hidden border ${
                    isDark ? 'border-slate-800 bg-slate-950' : 'border-[#E2E8F0] bg-slate-100'
                  }`}
                >
                  <img
                    src="/profile.jpg"
                    alt="Vasudevan R - Formal Portrait"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-95 group-hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle inner gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Clean In-Photo Status Badge with Electric Blue Glow */}
                  <div
                    className={`absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 ${
                      isDark
                        ? 'bg-slate-950/90 border border-blue-400/60 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                        : 'bg-white/95 border border-blue-300 shadow-md'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span
                      className={`text-[10px] font-mono font-bold tracking-wide ${
                        isDark ? 'text-blue-300' : 'text-blue-700'
                      }`}
                    >
                      Open to Work
                    </span>
                  </div>
                </div>

                {/* Integrated Clean Metadata Footer (Zero Overlaps, Clean Typography) */}
                <div className="p-3 pt-3.5 space-y-2 text-left">
                  {/* Row 1: Name & Role */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div
                        className={`text-sm font-bold tracking-tight ${
                          isDark ? 'text-white' : 'text-[#0F172A]'
                        }`}
                      >
                        Vasudevan R
                      </div>
                      <div className="text-xs text-gradient-aurora font-mono font-semibold">
                        Java Full Stack & AI Engineer
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        isDark
                          ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                          : 'bg-slate-100 border-[#E2E8F0] text-[#475569]'
                      }`}
                    >
                      Coimbatore, TN
                    </span>
                  </div>

                  {/* Row 2: Credibility Badges (Neatly organized) */}
                  <div
                    className={`pt-2 border-t grid grid-cols-2 gap-2 text-[11px] font-mono ${
                      isDark
                        ? 'border-slate-800/80 text-slate-300'
                        : 'border-[#E2E8F0] text-[#475569]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="truncate">Suguna CE '27</span>
                    </div>

                    <div
                      className={`flex items-center gap-1.5 truncate text-right justify-end font-semibold ${
                        isDark ? 'text-blue-300' : 'text-blue-700'
                      }`}
                    >
                      <Trophy className="w-3.5 h-3.5 text-blue-500 shrink-0" />
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
