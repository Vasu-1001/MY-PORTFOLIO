import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ResumeCTAProps {
  onOpenResume: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResume }) => {
  const { isDark } = useTheme();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className={`relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden text-center sm:text-left flex flex-col lg:flex-row lg:items-center justify-between gap-8 backdrop-blur-md transition-colors duration-300 ${
            isDark
              ? 'bg-gradient-to-r from-slate-900 via-[#0c101c] to-slate-900 border border-slate-800 shadow-2xl'
              : 'bg-gradient-to-r from-[#EFF6FF] via-[#FFFFFF] to-[#F5F3FF] border border-[#E2E8F0] shadow-[0_8px_30px_rgba(15,23,42,0.06)]'
          }`}
        >
          {/* Subtle gradient glow effects */}
          <div
            className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
              isDark ? 'bg-blue-600/10' : 'bg-blue-400/10'
            }`}
          />
          <div
            className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
              isDark ? 'bg-indigo-600/10' : 'bg-purple-400/10'
            }`}
          />

          {/* Left Column: Heading and Text */}
          <div className="relative z-10 max-w-2xl space-y-3">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono ${
                isDark
                  ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                  : 'bg-blue-50 border border-blue-200 text-blue-700'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RECRUITER READY CANDIDATE BRIEF</span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-[#0F172A]'
              }`}
            >
              Looking for a High-Impact Java & AI Engineer?
            </h2>

            <p
              className={`text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-[#334155]'
              }`}
            >
              Equipped with hands-on Java & Spring Boot experience, applied AI/RAG projects, national hackathon recognition, and open to internships and 2027 graduate roles.
            </p>

            <div
              className={`pt-2 flex flex-wrap gap-4 text-xs font-mono ${
                isDark ? 'text-slate-400' : 'text-[#475569]'
              }`}
            >
              <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Open to Internships & 2027 Roles
              </span>
              <span className="flex items-center gap-1.5 text-blue-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                4+ Industry Internships
              </span>
              <span className="flex items-center gap-1.5 text-purple-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                450+ DSA Solved
              </span>
            </div>
          </div>

          {/* Right Column: CTA Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={onOpenResume}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                isDark
                  ? 'bg-white hover:bg-slate-100 text-slate-950 shadow-xl shadow-white/10'
                  : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-[0_4px_16px_rgba(37,99,235,0.25)]'
              }`}
            >
              <Download className={`w-4 h-4 ${isDark ? 'text-slate-950' : 'text-white'}`} />
              <span>Download Resume (PDF)</span>
            </button>

            <a
              href={`mailto:${personalInfo.socials.email}?subject=Interview%20Invitation%20for%20Vasudevan%20R`}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600'
                  : 'bg-white hover:bg-slate-50 text-[#0F172A] border border-[#CBD5E1] shadow-sm hover:border-blue-400'
              }`}
            >
              <Mail className="w-4 h-4 text-blue-500" />
              <span>Schedule Interview</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
