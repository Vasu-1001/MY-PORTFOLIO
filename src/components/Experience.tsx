import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Experience: React.FC = () => {
  const { currentTheme } = useTheme();
  const isLight = currentTheme === 'white';
  const timelineRef = useRef<HTMLDivElement>(null);

  // Vertical Timeline Scroll Progress ("loading line" that fills down as you scroll through internships)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 65%', 'end 75%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-24 relative bg-slate-950/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start mb-16 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-3 ${
              isLight ? 'bg-[#EFF6FF] border-[#BFDBFE] text-blue-600' : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span className="tracking-wide uppercase">INDUSTRY TRACK RECORD</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isLight ? 'text-[#0F172A]' : 'text-white'}`}
          >
            Work Experience & Internships
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className={`text-sm sm:text-base mt-2 max-w-2xl leading-relaxed ${isLight ? 'text-[#475569]' : 'text-slate-400'}`}
          >
            4 internship tenures building Java & Spring Boot backend services, real-time React applications, applied AI pipelines, and cloud DevOps infrastructure.
          </motion.p>
        </div>

        {/* Executive Timeline Container with Dynamic Scroll Loading Line */}
        <div ref={timelineRef} className="relative">
          {/* Static Background Guide Track (Desktop & Mobile) */}
          <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-[3px] rounded-full ${
            isLight ? 'bg-[#E2E8F0]' : 'bg-slate-800/80'
          }`} />
          <div className={`block md:hidden absolute left-5 -translate-x-1/2 top-6 bottom-6 w-[3px] rounded-full ${
            isLight ? 'bg-[#E2E8F0]' : 'bg-slate-800/80'
          }`} />

          {/* Dynamic Animated Scroll Progress Loading Line (Desktop) */}
          <motion.div
            style={{ scaleY }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-[3px] origin-top bg-gradient-to-b from-blue-500 via-sky-400 to-cyan-300 shadow-[0_0_16px_rgba(56,189,248,0.9)] rounded-full z-0 will-change-transform translate-z-0"
          />

          {/* Dynamic Animated Scroll Progress Loading Line (Mobile) */}
          <motion.div
            style={{ scaleY }}
            className="block md:hidden absolute left-5 -translate-x-1/2 top-6 bottom-6 w-[3px] origin-top bg-gradient-to-b from-blue-500 via-sky-400 to-cyan-300 shadow-[0_0_16px_rgba(56,189,248,0.9)] rounded-full z-0 will-change-transform translate-z-0"
          />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Milestone Indicator (Illuminates when scrolled to) */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-8 z-10">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0.6 }}
                      whileInView={{
                        scale: 1.1,
                        opacity: 1,
                      }}
                      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                      transition={{ duration: 0.3 }}
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        isLight
                          ? 'bg-white border-2 border-blue-600 shadow-[0_0_14px_rgba(37,99,235,0.4)]'
                          : 'bg-slate-950 border-2 border-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${isLight ? 'bg-blue-600' : 'bg-sky-300'}`} />
                    </motion.div>
                  </div>

                  {/* Content Card Container */}
                  <div className="w-full pl-12 md:pl-0 md:w-1/2 md:px-10">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 35 : -35 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`group rounded-2xl p-4 sm:p-8 backdrop-blur-md transition-all duration-300 text-left hover:-translate-y-1 ${
                        isLight
                          ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(15,23,42,0.1)]'
                          : 'bg-slate-900/85 border border-slate-800 hover:border-blue-500/50 shadow-xl hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]'
                      }`}
                    >
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                          isLight
                            ? 'bg-blue-50 border-blue-200 text-blue-700'
                            : 'bg-blue-950/70 border-blue-800/60 text-blue-300'
                        }`}>
                          <Sparkles className="w-3 h-3 text-sky-400" />
                          {exp.type}
                        </span>

                        <div className={`flex items-center gap-1.5 text-xs font-mono font-medium ${
                          isLight ? 'text-[#64748B]' : 'text-slate-300'
                        }`}>
                          <Calendar className="w-3.5 h-3.5 text-blue-500" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                        isLight ? 'text-[#0F172A]' : 'text-white group-hover:text-blue-200'
                      }`}>
                        {exp.role}
                      </h3>
                      <div className={`text-sm font-semibold mt-1 flex items-center gap-1.5 ${
                        isLight ? 'text-[#334155]' : 'text-slate-200'
                      }`}>
                        <Building2 className="w-4 h-4 text-blue-500" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${
                        isLight ? 'text-[#475569]' : 'text-slate-300'
                      }`}>
                        {exp.description}
                      </p>

                      {/* Key Responsibilities / Measurable Impact */}
                      <div className={`mt-4 space-y-2 pt-3 border-t ${
                        isLight ? 'border-[#E2E8F0]' : 'border-slate-800/80'
                      }`}>
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className={`flex items-start gap-2 text-xs leading-normal ${
                            isLight ? 'text-[#334155]' : 'text-slate-300'
                          }`}>
                            <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Employed */}
                      <div className={`mt-5 pt-3 border-t flex flex-wrap gap-1.5 ${
                        isLight ? 'border-[#E2E8F0]' : 'border-slate-800/60'
                      }`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2.5 py-0.5 rounded text-[11px] font-mono border font-medium ${
                              isLight
                                ? 'bg-[#F1F5F9] text-[#334155] border-[#CBD5E1]'
                                : 'bg-slate-800/90 text-blue-300 border-slate-700/80'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Verification Watermark */}
                      <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                        isLight ? 'border-[#E2E8F0] text-[#64748B]' : 'border-slate-800/50 text-slate-400'
                      }`}>
                        <span className={`flex items-center gap-1 font-semibold ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Verified Industry Experience
                        </span>
                        <span>Internship Track</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
