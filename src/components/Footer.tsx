import React from 'react';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-14 relative z-10 text-left transition-colors duration-300 ${
        isDark ? 'border-slate-800/80 bg-[#06080e]' : 'border-[#E2E8F0] bg-[#F1F5F9]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b ${
            isDark ? 'border-slate-800/80' : 'border-[#E2E8F0]'
          }`}
        >
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs font-mono ${
                  isDark
                    ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                    : 'bg-white border border-blue-200 text-[#2563EB] shadow-sm'
                }`}
              >
                VR
              </span>
              <span
                className={`text-xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-[#0F172A]'
                }`}
              >
                {personalInfo.name}
              </span>
            </div>
            <p
              className={`text-xs font-medium ${
                isDark ? 'text-slate-400' : 'text-[#475569]'
              }`}
            >
              {personalInfo.title} <br></br> Suguna College of Engineering (2023–2027)
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`flex flex-wrap items-center justify-center gap-6 text-xs font-medium ${
              isDark ? 'text-slate-400' : 'text-[#475569]'
            }`}
          >
            {['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors ${
                  isDark ? 'hover:text-blue-400' : 'hover:text-[#2563EB]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            {[
              { href: personalInfo.socials.github, icon: GithubIcon, label: 'GitHub Profile', title: 'GitHub', hover: 'hover:text-[#2563EB]' },
              { href: personalInfo.socials.linkedin, icon: LinkedinIcon, label: 'LinkedIn Profile', title: 'LinkedIn', hover: 'hover:text-[#2563EB]' },
              { href: personalInfo.socials.leetcode, icon: LeetCodeIcon, label: 'LeetCode Profile', title: 'LeetCode', hover: 'hover:text-[#2563EB]' },
              { href: personalInfo.socials.codechef, icon: CodeChefIcon, label: 'CodeChef Profile', title: 'CodeChef', hover: 'hover:text-[#2563EB]' },
              { href: `mailto:${personalInfo.socials.email}`, icon: Mail, label: 'Direct Email', title: 'Email', hover: 'hover:text-[#2563EB]' },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.title}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className={`p-2 rounded-xl transition-all duration-200 min-w-[38px] min-h-[38px] flex items-center justify-center ${social.hover} ${
                    isDark
                      ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      : 'bg-white border border-[#E2E8F0] text-[#475569] hover:border-blue-300 shadow-sm'
                  }`}
                  aria-label={social.label}
                  title={social.title}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-xl transition-all duration-200 cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center ${
                isDark
                  ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  : 'bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#2563EB] hover:border-blue-300 shadow-sm'
              }`}
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Verification Watermark */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isDark ? 'text-slate-500' : 'text-[#64748B]'
          }`}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>© 2026 Vasudevan R • Candidate Portfolio</span>
          </div>
          <div className={isDark ? 'text-slate-400' : 'text-[#64748B]'}>
            Engineered with React 19, TypeScript, Tailwind CSS & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
};
