import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  Printer,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Trophy,
  Phone,
  Code2,
  FolderGit2,
  ShieldCheck,
} from 'lucide-react';
import { personalInfo, experiences, skillCategories, projects, certifications, achievements } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon, LeetCodeIcon, CodeChefIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';
import { trackResumeDownload, trackOutboundLink } from '../utils/analytics';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();

  const handlePrint = () => {
    trackResumeDownload('PrintResume');
    window.print();
  };

  const resumeAchievements = achievements.slice(0, 6);
  const resumeCertifications = certifications.slice(0, 6);
  const resumeProjects = projects.slice(0, 3);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md print:hidden"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-4xl rounded-2xl shadow-2xl z-10 max-h-[92vh] overflow-y-auto print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black transition-colors duration-200 ${
              isDark
                ? 'bg-slate-900 border border-slate-700/80 text-slate-100'
                : 'bg-white border border-[#E2E8F0] text-[#0F172A]'
            }`}
          >
            {/* Modal Top Action Bar */}
            <div
              className={`sticky top-0 z-20 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b print:hidden ${
                isDark
                  ? 'bg-slate-950/90 border-slate-800'
                  : 'bg-white/95 border-[#E2E8F0] shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span
                  className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                    isDark ? 'text-slate-300' : 'text-[#475569]'
                  }`}
                >
                  Candidate Profile • ATS-Optimized Brief
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    isDark
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-[#475569] hover:text-[#0F172A]'
                  }`}
                  title="Print Resume"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <a
                  href={personalInfo.resumePath}
                  download="Vasudevan_R_Resume.pdf"
                  onClick={() => trackResumeDownload('ResumeModalTop')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                    isDark
                      ? 'bg-white hover:bg-slate-100 text-slate-950'
                      : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-sm'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    isDark
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                      : 'text-slate-400 hover:text-[#0F172A] hover:bg-slate-100'
                  }`}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Body (Clean ATS Executive Resume Layout) */}
            <div className="p-6 sm:p-10 space-y-7 text-left font-sans">
              {/* Header / Contact Info */}
              <div className="border-b border-slate-800 pb-5 text-center print:border-black/30">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight print:text-black">
                  {personalInfo.name}
                </h2>
                <p className="text-sm sm:text-base font-bold text-blue-400 mt-1 print:text-black">
                  {personalInfo.title}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-mono text-slate-300 mt-2.5 print:text-gray-800">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 print:text-gray-700" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-blue-400 print:text-gray-700" />
                    <a href={`mailto:${personalInfo.socials.email}`} className="hover:underline text-blue-300 print:text-black">
                      {personalInfo.socials.email}
                    </a>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-blue-400 print:text-gray-700" />
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:underline">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Profiles row */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400 mt-2 print:text-gray-700">
                  <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundLink(personalInfo.socials.linkedin, 'LinkedIn')} className="hover:text-blue-400 underline print:text-black flex items-center gap-1">
                    <LinkedinIcon className="w-3 h-3" />
                    <span>LinkedIn</span>
                  </a>
                  <span>|</span>
                  <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundLink(personalInfo.socials.github, 'GitHub')} className="hover:text-white underline print:text-black flex items-center gap-1">
                    <GithubIcon className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                  <span>|</span>
                  <a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundLink(personalInfo.socials.leetcode, 'LeetCode')} className="hover:text-amber-400 underline print:text-black flex items-center gap-1">
                    <LeetCodeIcon className="w-3 h-3" />
                    <span>LeetCode</span>
                  </a>
                  <span>|</span>
                  <a href={personalInfo.socials.codechef} target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundLink(personalInfo.socials.codechef, 'CodeChef')} className="hover:text-amber-500 underline print:text-black flex items-center gap-1">
                    <CodeChefIcon className="w-3 h-3" />
                    <span>CodeChef</span>
                  </a>
                  <span>|</span>
                  <a href={personalInfo.socials.credly} target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundLink(personalInfo.socials.credly, 'Credly')} className="hover:text-orange-400 underline print:text-black">
                    <span>Credly</span>
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-2 pb-1 border-b border-slate-800 print:border-black/30 print:text-black">
                  PROFESSIONAL SUMMARY
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-900">
                  {personalInfo.description}
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3 pb-1 border-b border-slate-800 print:border-black/30 print:text-black flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  EDUCATION
                </h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-sm text-white print:text-black">
                        {personalInfo.about.education.degree} <span className="font-normal text-slate-300 print:text-gray-800">| {personalInfo.about.education.institution}</span>
                      </span>
                      <span className="font-mono text-slate-400 print:text-gray-700">
                        {personalInfo.about.education.period}
                      </span>
                    </div>
                    <div className="text-slate-400 italic text-[11px] mt-0.5 print:text-gray-700">
                      {personalInfo.about.education.affiliation} | CGPA: {personalInfo.about.education.cgpa}
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-sm text-white print:text-black">
                        {personalInfo.about.education.hsc.degree} <span className="font-normal text-slate-300 print:text-gray-800">| {personalInfo.about.education.hsc.institution}</span>
                      </span>
                      <span className="font-mono text-slate-400 print:text-gray-700">
                        {personalInfo.about.education.hsc.period}
                      </span>
                    </div>
                    <div className="text-slate-400 italic text-[11px] mt-0.5 print:text-gray-700">
                      {personalInfo.about.education.hsc.board} | {personalInfo.about.education.hsc.percentage}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3 pb-1 border-b border-slate-800 print:border-black/30 print:text-black flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" />
                  TECHNICAL SKILLS
                </h3>
                <div className="space-y-1.5 text-xs font-mono">
                  {skillCategories.map((cat) => (
                    <div key={cat.id} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                      <span className="font-bold text-white print:text-black sm:w-36 shrink-0">
                        {cat.title}:
                      </span>
                      <span className="text-slate-300 print:text-gray-800 text-[11px] sm:text-xs">
                        {cat.skills.join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internship Experience */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3 pb-1 border-b border-slate-800 print:border-black/30 print:text-black flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  INTERNSHIP EXPERIENCE (4 TENURES)
                </h3>

                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="relative pl-3 border-l-2 border-blue-500/60 print:border-blue-700">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-sm text-white print:text-black">
                          {exp.role} <span className="font-normal text-slate-300 print:text-gray-800">— {exp.company}</span>
                        </span>
                        <span className="text-xs font-mono text-slate-400 italic print:text-gray-700">
                          {exp.duration}
                        </span>
                      </div>

                      <ul className="space-y-1 text-xs text-slate-300 print:text-gray-800">
                        {exp.responsibilities.map((r, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-0.5 print:text-blue-700">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3 pb-1 border-b border-slate-800 print:border-black/30 print:text-black flex items-center gap-1.5">
                  <FolderGit2 className="w-4 h-4" />
                  KEY PROJECTS
                </h3>

                <div className="space-y-4">
                  {resumeProjects.map((proj) => (
                    <div key={proj.id} className="relative pl-3 border-l-2 border-indigo-500/60 print:border-indigo-700">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold text-sm text-white print:text-black">
                          {proj.title} {proj.role && <span className="text-blue-300 font-normal">({proj.role})</span>}
                        </span>
                        <span className="text-xs font-mono text-slate-400 italic print:text-gray-700">
                          {proj.badge || proj.subtitle}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 italic mb-1.5 print:text-gray-700">
                        {proj.technologies.join(', ')}
                      </div>

                      {proj.bullets && (
                        <ul className="space-y-1 text-xs text-slate-300 print:text-gray-800">
                          {proj.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-indigo-400 mt-0.5 print:text-indigo-700">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3 pb-1 border-b border-slate-800 print:border-black/30 print:text-black flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  ACHIEVEMENTS & AWARDS
                </h3>
                <div className="space-y-1.5 text-xs">
                  {resumeAchievements.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-start gap-2">
                        <span className="text-amber-400 shrink-0">•</span>
                        <span className="text-slate-200 print:text-gray-900">
                          <strong className="text-white print:text-black">{item.result.replace(/^[^\w]+/, '')}</strong> — {item.title.replace(/^.*–\s*/, '')}
                        </span>
                      </div>
                      <span className="font-mono text-slate-400 text-[11px] sm:text-xs shrink-0 print:text-gray-700">
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3 pb-1 border-b border-slate-800 print:border-black/30 print:text-black flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  CERTIFICATIONS
                </h3>
                <div className="space-y-1.5 text-xs">
                  {resumeCertifications.map((cert) => (
                    <div key={cert.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400 shrink-0">•</span>
                        <span className="text-slate-200 print:text-gray-900">
                          <strong>{cert.issuer}</strong> — {cert.name}
                        </span>
                      </div>
                      <span className="font-mono text-slate-400 text-[11px] sm:text-xs shrink-0 print:text-gray-700">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Recruiter Action Bar */}
              <div
                className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden ${
                  isDark ? 'border-slate-800' : 'border-[#E2E8F0]'
                }`}
              >
                <div
                  className={`text-xs font-mono flex items-center gap-1.5 ${
                    isDark ? 'text-slate-400' : 'text-[#64748B]'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Final-Year Student • Open to Internships & 2027 Graduate Roles</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${personalInfo.socials.email}?subject=Interview%20Invitation%20for%20Vasudevan%20R`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Schedule Interview</span>
                  </a>

                  <a
                    href={personalInfo.resumePath}
                    download="Vasudevan_R_Resume.pdf"
                    onClick={() => trackResumeDownload('ResumeModalBottom')}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm cursor-pointer ${
                      isDark
                        ? 'bg-white hover:bg-slate-100 text-slate-950'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
