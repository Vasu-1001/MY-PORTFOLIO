import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { codingProfiles } from '../data/portfolioData';
import { GithubIcon, LeetCodeIcon, CodeChefIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';

const platformIconMap: Record<string, React.ElementType> = {
  GitHub: GithubIcon,
  LeetCode: LeetCodeIcon,
  CodeChef: CodeChefIcon,
};

export const CodingProfiles: React.FC = () => {
  const { currentTheme } = useTheme();
  const isLight = currentTheme === 'white';

  return (
    <section className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className={`flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono mb-3 ${
              isLight ? 'bg-[#EFF6FF] border-[#BFDBFE] text-blue-600' : 'bg-slate-900 border border-slate-800 text-blue-400'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>ALGORITHMIC PROBLEM SOLVING</span>
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
            Code. Build. Solve.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className={`text-sm sm:text-base mt-2 max-w-2xl text-center sm:text-left ${
              isLight ? 'text-[#475569]' : 'text-slate-400'
            }`}
          >
            Rigorous daily discipline across algorithmic competitive platforms and open-source version control.
          </motion.p>
        </div>

        {/* 3 Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingProfiles.map((profile, idx) => {
            const Icon = platformIconMap[profile.platform] || Code2;

            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 text-left ${
                  isLight
                    ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(15,23,42,0.1)]'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:shadow-2xl'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                      isLight
                        ? 'bg-[#EFF6FF] border border-[#BFDBFE] text-blue-600'
                        : 'bg-slate-800/90 border border-slate-700 text-blue-400'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${
                      isLight
                        ? 'bg-[#F1F5F9] border-[#E2E8F0] text-[#475569]'
                        : 'bg-slate-800 border border-slate-700 text-slate-300'
                    }`}>
                      {profile.badge}
                    </span>
                  </div>

                  {/* Platform Name */}
                  <h3 className={`text-xl font-bold tracking-tight ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
                    {profile.platform}
                  </h3>

                  {/* Highlight Statistic */}
                  <div className="mt-3 flex items-baseline gap-2 font-mono">
                    <span className={`text-4xl font-extrabold ${isLight ? 'text-[#2563EB]' : 'text-blue-400'}`}>
                      {profile.statistic}
                    </span>
                    <span className={`text-sm font-semibold ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>
                      {profile.metricLabel}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${isLight ? 'text-[#475569]' : 'text-slate-300'}`}>
                    {profile.description}
                  </p>

                  {/* Detail Bullet Points */}
                  {profile.details && (
                    <div className={`mt-5 space-y-2.5 pt-4 border-t ${isLight ? 'border-[#E2E8F0]' : 'border-slate-800/80'}`}>
                      {profile.details.map((d) => (
                        <div key={d.label} className="flex items-start justify-between gap-3 text-xs font-mono">
                          <span className={`shrink-0 ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>{d.label}:</span>
                          <span className={`font-medium text-right leading-snug ${isLight ? 'text-[#0F172A]' : 'text-slate-200'}`}>{d.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom CTA Action Button */}
                <div className={`mt-6 pt-5 border-t flex items-center justify-between ${isLight ? 'border-[#E2E8F0]' : 'border-slate-800'}`}>
                  <span className={`text-[11px] font-mono font-semibold ${isLight ? 'text-blue-600' : 'text-blue-400'}`}>PROFILE</span>

                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-xs transition-all duration-200 ${
                      isLight
                        ? 'bg-[#EFF6FF] hover:bg-[#2563EB] text-[#2563EB] hover:text-white border border-[#BFDBFE] hover:border-[#2563EB] shadow-sm'
                        : 'bg-slate-800 hover:bg-white text-slate-200 hover:text-slate-950'
                    }`}
                  >
                    <span>Visit Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
