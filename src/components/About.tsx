import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Building2,
  Code,
  Briefcase,
  FolderGit2,
  Trophy,
  Award,
  Sparkles,
} from 'lucide-react';
import { personalInfo, statistics } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const statIcons = [Briefcase, FolderGit2, Trophy, Award];

export const About: React.FC = () => {
  const { currentTheme } = useTheme();
  const isLight = currentTheme === 'white';

  return (
    <section id="about" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className={`flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono mb-3 ${
              isLight ? 'bg-[#EFF6FF] border-[#BFDBFE] text-blue-600' : 'bg-slate-900 border border-slate-800 text-blue-400'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & ENGINEERING ETHOS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-[#0F172A]' : 'text-white'
            }`}
          >
            About Me
          </motion.h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: About Text & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className={`space-y-4 text-base sm:text-lg leading-relaxed font-normal ${
              isLight ? 'text-[#334155]' : 'text-slate-300'
            }`}>
              <p className={`border-l-2 border-blue-500 pl-4 py-1 ${
                isLight ? 'text-[#1E293B]' : 'text-slate-200'
              }`}>
                {personalInfo.about.p1}
              </p>
              <p className={isLight ? 'text-[#475569]' : 'text-slate-400'}>
                {personalInfo.about.p2}
              </p>
            </div>

            {/* Engineering Pillars */}
            <div className="pt-4">
              <h3 className={`text-xs font-mono uppercase tracking-wider mb-3.5 ${
                isLight ? 'text-blue-700 font-semibold' : 'text-slate-400'
              }`}>
                Core Engineering Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className={`p-4 rounded-xl border transition-colors ${
                  isLight ? 'bg-white border-[#E2E8F0] shadow-sm hover:border-blue-300' : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}>
                  <div className={`font-semibold text-sm mb-1 flex items-center gap-2 ${
                    isLight ? 'text-[#0F172A]' : 'text-slate-100'
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    Enterprise Java Systems
                  </div>
                  <p className={`text-xs leading-normal ${isLight ? 'text-[#475569]' : 'text-slate-400'}`}>
                    Spring Boot applications, JPA/Hibernate persistence, REST APIs, and relational databases.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border transition-colors ${
                  isLight ? 'bg-white border-[#E2E8F0] shadow-sm hover:border-blue-300' : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}>
                  <div className={`font-semibold text-sm mb-1 flex items-center gap-2 ${
                    isLight ? 'text-[#0F172A]' : 'text-slate-100'
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    Full-Stack React Applications
                  </div>
                  <p className={`text-xs leading-normal ${isLight ? 'text-[#475569]' : 'text-slate-400'}`}>
                    React.js interfaces with REST API integration and end-to-end full-stack development.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border transition-colors ${
                  isLight ? 'bg-white border-[#E2E8F0] shadow-sm hover:border-blue-300' : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}>
                  <div className={`font-semibold text-sm mb-1 flex items-center gap-2 ${
                    isLight ? 'text-[#0F172A]' : 'text-slate-100'
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    Applied AI, GenAI & RAG
                  </div>
                  <p className={`text-xs leading-normal ${isLight ? 'text-[#475569]' : 'text-slate-400'}`}>
                   Generative AI, LLMs, RAG, prompt engineering, and AI-powered application development.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border transition-colors ${
                  isLight ? 'bg-white border-[#E2E8F0] shadow-sm hover:border-blue-300' : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}>
                  <div className={`font-semibold text-sm mb-1 flex items-center gap-2 ${
                    isLight ? 'text-[#0F172A]' : 'text-slate-100'
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    Cloud Architecture & DevOps
                  </div>
                  <p className={`text-xs leading-normal ${isLight ? 'text-[#475569]' : 'text-slate-400'}`}>
                    AWS and Docker for cloud and application deployment workflows.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 w-full"
          >
            <div className={`relative rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all ${
              isLight
                ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
                : 'bg-slate-900/80 border border-slate-800 shadow-xl'
            }`}>
              {/* Profile Card Header */}
              <div className={`flex items-center justify-between pb-5 border-b ${
                isLight ? 'border-[#E2E8F0]' : 'border-slate-800'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    isLight ? 'bg-blue-50 border border-blue-200 text-blue-600' : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className={`text-xs font-mono uppercase tracking-wider font-medium ${
                      isLight ? 'text-blue-700' : 'text-blue-400'
                    }`}>
                      Academic Profile
                    </div>
                    <div className={`text-base font-bold ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
                      Vasudevan R
                    </div>
                  </div>
                </div>

                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono ${
                  isLight
                    ? 'bg-[#F1F5F9] border-[#CBD5E1] text-[#475569]'
                    : 'bg-slate-800 border border-slate-700 text-slate-300'
                }`}>
                  <Calendar className="w-3 h-3 text-blue-500" />
                  <span>{personalInfo.about.education.period}</span>
                </div>
              </div>

              {/* Education details */}
              <div className="py-5 space-y-4 text-left">
                <div>
                  <span className={`text-xs font-mono uppercase font-semibold block mb-1 ${
                    isLight ? 'text-blue-700' : 'text-sky-400'
                  }`}>
                    Degree & Specialization
                  </span>
                  <div className={`text-base font-semibold flex items-center gap-2 ${
                    isLight ? 'text-[#0F172A]' : 'text-slate-100'
                  }`}>
                    <span>{personalInfo.about.education.degree}</span>
                  </div>
                  <div className={`text-xs font-mono mt-1 font-semibold ${
                    isLight ? 'text-blue-700' : 'text-blue-400'
                  }`}>
                    {personalInfo.about.education.affiliation} • CGPA: {personalInfo.about.education.cgpa}
                  </div>
                </div>

                <div>
                  <span className={`text-xs font-mono uppercase font-semibold block mb-1 ${
                    isLight ? 'text-blue-700' : 'text-sky-400'
                  }`}>
                    Institution
                  </span>
                  <div className={`text-sm font-medium flex items-center gap-2 ${
                    isLight ? 'text-[#334155]' : 'text-slate-200'
                  }`}>
                    <Building2 className="w-4 h-4 text-blue-500" />
                    <span>{personalInfo.about.education.institution}</span>
                  </div>
                </div>

                <div>
                  <span className={`text-xs font-mono uppercase font-semibold block mb-1 ${
                    isLight ? 'text-blue-700' : 'text-sky-400'
                  }`}>
                    Higher Secondary (12th)
                  </span>
                  <div className={`text-xs font-medium ${isLight ? 'text-[#334155]' : 'text-slate-200'}`}>
                    {personalInfo.about.education.hsc.institution}
                  </div>
                  <div className={`text-[11px] font-mono mt-0.5 ${isLight ? 'text-[#64748B]' : 'text-slate-300'}`}>
                    {personalInfo.about.education.hsc.board} • {personalInfo.about.education.hsc.percentage} ({personalInfo.about.education.hsc.period})
                  </div>
                </div>

                <div>
                  <span className={`text-xs font-mono uppercase font-semibold block mb-2 ${
                    isLight ? 'text-blue-700' : 'text-sky-400'
                  }`}>
                    Primary Focus Pillars
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.about.education.focusAreas.map((area) => (
                      <span
                        key={area}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium ${
                          isLight
                            ? 'bg-[#F1F5F9] border-[#CBD5E1] text-[#334155]'
                            : 'bg-slate-800/80 border border-slate-700 text-slate-200'
                        }`}
                      >
                        <Code className="w-3 h-3 text-blue-500" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verification watermark */}
              <div className={`pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                isLight ? 'border-[#E2E8F0] text-[#64748B]' : 'border-slate-800 text-slate-500'
              }`}>
                <span>CSE STUDENT PROFILE</span>
                <span className={isLight ? 'text-blue-700 font-semibold' : 'text-blue-400'}>COIMBATORE, TN</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-12 border-t border-slate-800/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {statistics.map((stat, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
                <div
                  key={stat.label}
                  className={`group relative rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                    isLight
                      ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(15,23,42,0.1)]'
                      : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 group-hover:scale-105 transition-transform ${
                    isLight
                      ? 'bg-[#EFF6FF] border border-[#BFDBFE] text-blue-600'
                      : 'bg-slate-800/80 border border-slate-700 text-blue-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 font-mono">
                    <span className={isLight ? 'text-[#2563EB] font-extrabold' : 'bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent'}>
                      {stat.value}
                    </span>
                  </div>
                  <div className={`text-sm font-semibold mb-1 ${isLight ? 'text-[#0F172A]' : 'text-slate-200'}`}>
                    {stat.label}
                  </div>
                  <p className={`text-[11px] hidden sm:block leading-normal ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
