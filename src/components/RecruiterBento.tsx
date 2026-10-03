import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Clock,
  Code2,
  Trophy,
  CheckCircle2,
  FileText,
  Mail,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { trackResumeDownload } from '../utils/analytics';

interface RecruiterBentoProps {
  onOpenResume: () => void;
}

export const RecruiterBento: React.FC<RecruiterBentoProps> = ({ onOpenResume }) => {
  const { isDark, isLight } = useTheme();

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recruiter Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-2 ${
                isDark
                  ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                  : 'bg-blue-50 border border-blue-200 text-blue-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>RECRUITER QUICK VIEW</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
              Executive Candidate Summary
            </h2>
            <p className={`text-xs sm:text-sm mt-1 ${isLight ? 'text-[#475569]' : 'text-slate-400'}`}>
              A quick overview of my technical skills, experience, education, and key achievements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                trackResumeDownload('Resume');
                onOpenResume();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Open ATS Resume</span>
            </button>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                isDark
                  ? 'bg-slate-900 border border-slate-700/80 hover:border-slate-600 text-slate-200'
                  : 'bg-white border border-[#E2E8F0] hover:border-blue-300 text-[#0F172A] shadow-sm'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>Email Directly</span>
            </a>
          </div>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Target Roles & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 text-left backdrop-blur-md group ${
              isLight
                ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-violet-300 hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)]'
                : 'rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-violet-500 font-semibold flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-violet-500" />
                  Target Roles
                </span>
                <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-bold flex items-center gap-1 ${
                  isLight
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                    : 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to Work
                </span>
              </div>

              <div className="space-y-2">
                {[
                  'Java Backend Developer',
                  'Full-Stack Software Engineer',
                  'AI / GenAI & RAG Engineer',
                  'Cloud & DevOps Engineer',
                ].map((role) => (
                  <div key={role} className={`flex items-center gap-2 text-xs font-semibold ${isLight ? 'text-[#0F172A]' : 'text-slate-100'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-5 pt-4 border-t text-[11px] font-mono flex items-center justify-between ${
              isLight ? 'border-[#E2E8F0] text-[#64748B]' : 'border-slate-800 text-slate-400'
            }`}>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-500" />
                Final-Year Student
              </span>
              <span className={isLight ? 'text-emerald-700 font-semibold' : 'text-emerald-400'}>Open to Work</span>
            </div>
          </motion.div>

          {/* Card 2: Academic Credentials & Location */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 text-left backdrop-blur-md group ${
              isLight
                ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-indigo-300 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]'
                : 'rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-500 font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-500" />
                  Education & Location
                </span>
                <span className={`px-2 py-0.5 rounded-md border text-[10px] font-mono ${
                  isLight
                    ? 'bg-[#F1F5F9] border-[#CBD5E1] text-[#475569]'
                    : 'bg-slate-800 border-slate-700 text-slate-300'
                }`}>
                  Batch 2023–2027
                </span>
              </div>

              <div className="space-y-2">
                <div className={`text-sm font-bold leading-snug ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
                  B.E. Computer Science & Engineering
                </div>
                <div className={`text-xs ${isLight ? 'text-[#334155]' : 'text-slate-300'}`}>
                  Suguna College of Engineering
                </div>
                <div className={`text-xs font-mono ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>
                  CGPA: 8.0 / 10 (till 6th semester)
                </div>
                <div className={`text-xs font-mono ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>
                  Affiliated to Anna University, Chennai
                </div>
              </div>
            </div>

            <div className={`mt-5 pt-4 border-t text-[11px] font-mono flex items-center justify-between ${
              isLight ? 'border-[#E2E8F0] text-[#64748B]' : 'border-slate-800 text-slate-400'
            }`}>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-indigo-500" />
                Coimbatore, Tamil Nadu
              </span>
              <span className={isLight ? 'text-emerald-700 font-semibold' : 'text-emerald-400'}>Open to Relocation</span>
            </div>
          </motion.div>

          {/* Card 3: Enterprise Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 text-left backdrop-blur-md group ${
              isLight
                ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-cyan-300 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)]'
                : 'rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 font-semibold flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-cyan-600" />
                  Core Competencies
                </span>
                <span className={`px-2 py-0.5 rounded-md border text-[10px] font-mono ${
                  isLight
                    ? 'bg-[#EFF6FF] border-[#BFDBFE] text-blue-700'
                    : 'bg-slate-800 border border-slate-700 text-cyan-300'
                }`}>
                  Technical Skills
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  'Java',
                  'Spring Boot',
                  'REST APIs',
                  'Hibernate',
                  'React',
                  'TypeScript',
                  'Python',
                  'RAG / LLMs',
                  'AWS Cloud',
                  'Docker',
                  'MySQL',
                  'MongoDB',
                ].map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 rounded-md text-[11px] font-mono border ${
                      isLight
                        ? 'bg-[#F1F5F9] border-[#CBD5E1] text-[#334155]'
                        : 'bg-slate-800/80 border-slate-700 text-slate-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={`mt-5 pt-4 border-t text-[11px] font-mono flex items-center justify-between ${
              isLight ? 'border-[#E2E8F0] text-[#64748B]' : 'border-slate-800 text-slate-400'
            }`}>
              <span>REST APIs</span>
              <span className={isLight ? 'text-blue-700 font-semibold' : 'text-blue-400'}>Full-Stack Development</span>
            </div>
          </motion.div>

          {/* Card 4: Problem Solving & DSA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 text-left backdrop-blur-md group ${
              isLight
                ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-amber-300 hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)]'
                : 'rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-amber-500" />
                  Problem Solving (DSA)
                </span>
                <span className={`text-xs font-mono font-bold ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>
                  450+ Solved
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className={`p-3 rounded-xl border ${
                  isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-slate-800/50 border-slate-700/60'
                }`}>
                  <div className={`text-xs font-mono ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>LeetCode</div>
                  <div className={`text-2xl font-extrabold font-mono ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>200+</div>
                  <div className={`text-[10px] mt-0.5 ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>Problem Solving & DSA</div>
                </div>

                <div className={`p-3 rounded-xl border ${
                  isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-slate-800/50 border-slate-700/60'
                }`}>
                  <div className={`text-xs font-mono ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>CodeChef</div>
                  <div className={`text-2xl font-extrabold font-mono ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>250+</div>
                  <div className={`text-[10px] mt-0.5 ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>Rated Contests</div>
                </div>
              </div>

              <p className={`text-xs leading-relaxed ${isLight ? 'text-[#475569]' : 'text-slate-400'}`}>
                Daily algorithmic discipline with focus on optimal time & space complexity in Java & Python.
              </p>
            </div>

            <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
              isLight ? 'border-[#E2E8F0] text-[#64748B]' : 'border-slate-800 text-slate-400'
            }`}>
              <span>GitHub: 20+ Repositories</span>
            </div>
          </motion.div>

          {/* Card 5: Accreditations & Honors */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 text-left backdrop-blur-md group ${
              isLight
                ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-yellow-300 hover:shadow-[0_8px_30px_rgba(234,179,8,0.12)]'
                : 'rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-yellow-500 font-semibold flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  Key Achievements
                </span>
                <span className={`px-2 py-0.5 rounded-md border text-[10px] font-mono ${
                  isLight
                    ? 'bg-amber-50 border-amber-300 text-amber-700'
                    : 'bg-amber-950/60 border-amber-500/40 text-amber-300'
                }`}>
                  State & National
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className={`flex items-start gap-2 ${isLight ? 'text-[#334155]' : 'text-slate-200'}`}>
                  <span className="text-amber-500 shrink-0">🏆</span>
                  <span><strong className={isLight ? 'text-[#0F172A]' : 'text-white'}>SIH 2026 Internal Winner </strong> —  AI/ML Anomaly Detection for Automatic Weather Stations</span>
                </div>
                <div className={`flex items-start gap-2 ${isLight ? 'text-[#334155]' : 'text-slate-200'}`}>
                  <span className="text-amber-500 shrink-0">🌍</span>
                  <span><strong className={isLight ? 'text-[#0F172A]' : 'text-white'}>Kalam's World Records</strong> — 24-Hr Continuous Codeathon</span>
                </div>
                <div className={`flex items-start gap-2 ${isLight ? 'text-[#334155]' : 'text-slate-200'}`}>
                  <span className="text-amber-500 shrink-0">🥇</span>
                  <span><strong className={isLight ? 'text-[#0F172A]' : 'text-white'}>Gold Medalist </strong> — 16th National Jump Rope & South India Level Urban Games Championships </span>
                </div>
              </div>
            </div>

            <div className={`mt-4 pt-3 border-t text-[11px] font-mono flex items-center justify-between ${
              isLight ? 'border-[#E2E8F0] text-[#64748B]' : 'border-slate-800 text-slate-400'
            }`}>
              <span>100+ Total Certifications</span>
            </div>
          </motion.div>

          {/* Card 6: Work Track Record & Practical Impact */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.25 }}
            className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 text-left backdrop-blur-md group ${
              isLight
                ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-emerald-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)]'
                : 'rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-semibold flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-emerald-500" />
                  Industry Experience
                </span>
                <span className={`text-xs font-mono font-bold ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>
                  4 Internships
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <p className={`leading-relaxed ${isLight ? 'text-[#475569]' : 'text-slate-300'}`}>
                  Experience across Java, Spring Boot, React.js, Python, and AI/ML through hands-on internship projects.
                </p>
                <div className="pt-1 space-y-1.5 text-xs font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 shrink-0 text-sm leading-none mt-0.5">●</span>
                    <span>
                      <strong className={`font-medium ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>CodeOrbit Tech</strong>
                      <span className={isLight ? 'text-[#64748B]' : 'text-slate-400'}> — AI Intern</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 shrink-0 text-sm leading-none mt-0.5">●</span>
                    <span>
                      <strong className={`font-medium ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>QuenoXa Global Technologies</strong>
                      <span className={isLight ? 'text-[#64748B]' : 'text-slate-400'}> — Java & Full Stack Intern</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 shrink-0 text-sm leading-none mt-0.5">●</span>
                    <span>
                      <strong className={`font-medium ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>Brainery Spot Technology</strong>
                      <span className={isLight ? 'text-[#64748B]' : 'text-slate-400'}> — Full Stack Intern</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 shrink-0 text-sm leading-none mt-0.5">●</span>
                    <span>
                      <strong className={`font-medium ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>AdroitT Technologies</strong>
                      <span className={isLight ? 'text-[#64748B]' : 'text-slate-400'}> — Generative AI Intern</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-4 pt-3 border-t text-[11px] font-mono flex items-center justify-between ${
              isLight ? 'border-[#E2E8F0] text-[#64748B]' : 'border-slate-800 text-slate-400'
            }`}>
              <span>Java • Spring Boot • React.js • AI/ML</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
