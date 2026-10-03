import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Layers,
  Gavel,
  Activity,
  GraduationCap,
  Globe,
  Sparkles,
  Cpu,
  Star,
  DollarSign,
  AlertTriangle,
  Zap,
  Server,
  Users,
  ShieldAlert,
  Clock,
} from 'lucide-react';
import { featuredProject, otherProjects } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';
import { GithubIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';

const projectIconMap: Record<string, React.ElementType> = {
  'vaprideen-ai': Cpu,
  'real-time-auction': Gavel,
  'live-auction-portal': Gavel,
  'ai-health-platform': Activity,
  'college-management-system': GraduationCap,
  'dept-symposium-website': Globe,
};

const filterCategories = ['All', 'Full Stack', 'AI', 'Backend', 'Web'];

export const Projects: React.FC = () => {
  const { currentTheme } = useTheme();
  const isLight = currentTheme === 'white';
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeDashboardTab, setActiveDashboardTab] = useState<'overview' | 'metrics' | 'security'>('overview');

  const filteredOtherProjects =
    activeFilter === 'All'
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeFilter);

  const showFlagship = activeFilter === 'All' || activeFilter === 'Full Stack' || activeFilter === 'AI';

  return (
    <section id="projects" className="scroll-mt-28 py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start mb-14 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-3 ${
              isLight
                ? 'bg-blue-50 border-blue-200 text-blue-600'
                : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED SOFTWARE PROJECTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-[#0F172A]' : 'text-white'
            }`}
          >
            Featured Engineering Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className={`text-sm sm:text-base mt-2 max-w-3xl leading-relaxed ${
              isLight ? 'text-[#475569]' : 'text-slate-400'
            }`}
          >
            Software systems demonstrating full-stack engineering, Spring Boot architectures, applied generative AI, and real-time transaction processing.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* FLAGSHIP PROJECT: VAPRIDEEN AI ENTERPRISE SUITE          */}
        {/* ======================================================== */}
        {showFlagship && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl border shadow-2xl overflow-hidden mb-20 text-left transition-all ${
              isLight
                ? 'bg-white border-[#E2E8F0] shadow-[0_8px_30px_rgba(15,23,42,0.06)]'
                : 'bg-slate-900/90 border-blue-500/40 backdrop-blur-xl'
            }`}
          >
            {/* Flagship Top Ribbon */}
            <div
              className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-3 ${
                isLight
                  ? 'bg-gradient-to-r from-blue-50/80 via-slate-50 to-white border-[#E2E8F0]'
                  : 'bg-gradient-to-r from-blue-950/70 via-slate-900 to-slate-900 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/40">
                  <Star className="w-4 h-4 fill-blue-400" />
                </span>
                <div>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isLight ? 'text-blue-600' : 'text-blue-300'}`}>
                    Flagship Project Showcase
                  </span>
                  <span className="text-xs text-slate-400 ml-2 hidden sm:inline">
                    • Enterprise AI Operations & Security Prototype
                  </span>
                </div>
              </div>

              {/* Window Dot Controls */}
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-500">
                  Work in Progress
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-500 font-medium">Under Active Development</span>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="p-4 sm:p-9 lg:p-10 space-y-6 sm:space-y-8">
              {/* Title & Elevator Pitch */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="space-y-2 max-w-3xl">
                  <h3 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
                    {featuredProject.title}
                  </h3>
                  <p className={`text-base sm:text-lg font-medium ${isLight ? 'text-blue-600' : 'text-blue-400'}`}>
                    {featuredProject.subtitle}
                  </p>
                  <p className={`text-sm leading-relaxed pt-1 ${isLight ? 'text-[#475569]' : 'text-slate-300'}`}>
                    {featuredProject.description}
                  </p>
                </div>

                {/* Status & Source Code Buttons */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-600 font-mono text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>In Active Development</span>
                  </span>

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isLight
                          ? 'bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] border border-[#CBD5E1]'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                      }`}
                    >
                      <GithubIcon className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Interactive Telemetry & Mockup Tabs (Blurred with Active Development Overlay) */}
              <div className={`relative rounded-2xl border overflow-hidden shadow-2xl ${
                isLight ? 'bg-slate-50/80 border-[#E2E8F0]' : 'bg-slate-950/80 border-slate-800'
              }`}>
                {/* Background Dashboard with Blur */}
                <div className="filter blur-md opacity-25 select-none pointer-events-none">
                  {/* Tab Buttons */}
                  <div className={`flex items-center justify-between px-5 py-3 border-b ${
                    isLight ? 'bg-white border-[#E2E8F0]' : 'bg-slate-900/60 border-slate-800'
                  }`}>
                    <span className={`text-xs font-mono hidden sm:inline ${
                      isLight ? 'text-[#64748B]' : 'text-slate-400'
                    }`}>
                      telemetry.vaprideen-ai.internal
                    </span>

                    <div className={`flex items-center gap-1.5 p-1 rounded-xl border text-xs ${
                      isLight ? 'bg-[#F1F5F9] border-[#CBD5E1]' : 'bg-slate-900 border-slate-800'
                    }`}>
                      <button
                        onClick={() => setActiveDashboardTab('overview')}
                        className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                          activeDashboardTab === 'overview'
                            ? 'bg-blue-600 text-white font-semibold'
                            : isLight
                              ? 'text-[#475569] hover:text-[#0F172A]'
                              : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Model Operations
                      </button>
                      <button
                        onClick={() => setActiveDashboardTab('metrics')}
                        className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                          activeDashboardTab === 'metrics'
                            ? 'bg-blue-600 text-white font-semibold'
                            : isLight
                              ? 'text-[#475569] hover:text-[#0F172A]'
                              : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Cost & Tokens
                      </button>
                      <button
                        onClick={() => setActiveDashboardTab('security')}
                        className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                          activeDashboardTab === 'security'
                            ? 'bg-blue-600 text-white font-semibold'
                            : isLight
                              ? 'text-[#475569] hover:text-[#0F172A]'
                              : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Risk & Governance
                      </button>
                    </div>
                  </div>

                  {/* Tab Panels */}
                  <div className="p-5 sm:p-6">
                    {activeDashboardTab === 'overview' && (
                      <div className="space-y-4">
                        {/* Metric Badges Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div className={`p-3.5 rounded-xl border ${
                            isLight ? 'bg-white border-[#E2E8F0]' : 'bg-slate-900/80 border-slate-800'
                          }`}>
                            <div className={`flex items-center justify-between text-xs mb-1 ${
                              isLight ? 'text-[#64748B]' : 'text-slate-400'
                            }`}>
                              <span>Model Registry</span>
                              <Cpu className="w-3.5 h-3.5 text-blue-500" />
                            </div>
                            <div className={`text-base sm:text-lg font-bold font-mono ${
                              isLight ? 'text-[#0F172A]' : 'text-white'
                            }`}>Configured Models</div>
                            <div className={`text-[10px] mt-0.5 ${
                              isLight ? 'text-blue-700' : 'text-blue-300'
                            }`}>Spring Boot & REST APIs</div>
                          </div>

                          <div className={`p-3.5 rounded-xl border ${
                            isLight ? 'bg-white border-[#E2E8F0]' : 'bg-slate-900/80 border-slate-800'
                          }`}>
                            <div className={`flex items-center justify-between text-xs mb-1 ${
                              isLight ? 'text-[#64748B]' : 'text-slate-400'
                            }`}>
                              <span>Usage Telemetry</span>
                              <Activity className="w-3.5 h-3.5 text-indigo-500" />
                            </div>
                            <div className={`text-base sm:text-lg font-bold font-mono ${
                              isLight ? 'text-[#0F172A]' : 'text-white'
                            }`}>Token Analytics</div>
                            <div className={`text-[10px] mt-0.5 ${
                              isLight ? 'text-indigo-700' : 'text-indigo-300'
                            }`}>Prompt & Response Ingestion</div>
                          </div>

                          <div className={`p-3.5 rounded-xl border ${
                            isLight ? 'bg-white border-[#E2E8F0]' : 'bg-slate-900/80 border-slate-800'
                          }`}>
                            <div className={`flex items-center justify-between text-xs mb-1 ${
                              isLight ? 'text-[#64748B]' : 'text-slate-400'
                            }`}>
                              <span>Cost Control</span>
                              <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                            </div>
                            <div className={`text-base sm:text-lg font-bold font-mono ${
                              isLight ? 'text-[#0F172A]' : 'text-white'
                            }`}>Budget Policies</div>
                            <div className={`text-[10px] mt-0.5 ${
                              isLight ? 'text-emerald-700' : 'text-emerald-400'
                            }`}>Per-Team Usage Limits</div>
                          </div>

                          <div className={`p-3.5 rounded-xl border ${
                            isLight ? 'bg-white border-[#E2E8F0]' : 'bg-slate-900/80 border-slate-800'
                          }`}>
                            <div className={`flex items-center justify-between text-xs mb-1 ${
                              isLight ? 'text-[#64748B]' : 'text-slate-400'
                            }`}>
                              <span>Security Shield</span>
                              <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                            </div>
                            <div className={`text-base sm:text-lg font-bold font-mono ${
                              isLight ? 'text-[#0F172A]' : 'text-white'
                            }`}>Policy Enforcement</div>
                            <div className={`text-[10px] mt-0.5 ${
                              isLight ? 'text-amber-700' : 'text-amber-300'
                            }`}>Pattern & Rule Filtering</div>
                          </div>
                        </div>

                        {/* Component Endpoints */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                          <div className={`p-4 rounded-xl border text-xs ${
                            isLight ? 'bg-white border-[#E2E8F0]' : 'bg-slate-900/60 border-slate-800'
                          }`}>
                            <div className={`font-mono mb-2 flex items-center justify-between ${
                              isLight ? 'text-[#64748B]' : 'text-slate-400'
                            }`}>
                              <span>CONNECTED PROTOTYPE PIPELINES</span>
                              <span className="text-blue-600 font-bold">SPRING BOOT 3</span>
                            </div>
                            <div className="space-y-2">
                              {[
                                { name: 'Enterprise Document Embeddings', tech: 'Spring Boot & MongoDB' },
                                { name: 'Vector Similarity Ranking Engine', tech: 'Python & Embeddings' },
                              ].map((item) => (
                                <div key={item.name} className={`flex items-center justify-between p-2 rounded font-mono text-[11px] ${
                                  isLight ? 'bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0]' : 'bg-slate-800/40 text-slate-300'
                                }`}>
                                  <span>{item.name}</span>
                                  <span className={isLight ? 'text-blue-700' : 'text-blue-300'}>{item.tech}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className={`p-4 rounded-xl border text-xs ${
                            isLight ? 'bg-white border-[#E2E8F0]' : 'bg-slate-900/60 border-slate-800'
                          }`}>
                            <div className={`font-mono mb-2 flex items-center justify-between ${
                              isLight ? 'text-[#64748B]' : 'text-slate-400'
                            }`}>
                              <span>SECURITY & GOVERNANCE POLICIES</span>
                              <span className="text-emerald-600 font-bold">CONFIGURED</span>
                            </div>
                            <div className="space-y-2">
                              {[
                                { rule: 'Automated PII Prompt Redaction', status: 'Pattern Filter' },
                                { rule: 'Department Budget Throttle ($500/day)', status: 'Threshold Limit' },
                              ].map((item) => (
                                <div key={item.rule} className={`flex items-center justify-between p-2 rounded font-mono text-[11px] ${
                                  isLight ? 'bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0]' : 'bg-slate-800/40 text-slate-300'
                                }`}>
                                  <span>{item.rule}</span>
                                  <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>✓ {item.status}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeDashboardTab === 'metrics' && (
                      <div className={`p-4 rounded-xl border text-xs space-y-3 font-mono ${
                        isLight ? 'bg-white border-[#E2E8F0] text-[#334155]' : 'bg-slate-900/70 border-slate-800 text-slate-300'
                      }`}>
                        <div className={`text-sm font-bold font-sans ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
                          Token Aggregation & Cost Attribution Engine (Prototype)
                        </div>
                        <p className={`leading-relaxed font-sans ${isLight ? 'text-[#475569]' : 'text-slate-300'}`}>
                          Combines Spring Boot event handlers with database logging to calculate per-team token utilization. Designed to enable model selection tracking, usage auditing, and automated budget notifications.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                          <div className={`p-2.5 rounded border ${isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-slate-800/50 border-slate-700'}`}>
                            <span className={`block text-[10px] ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>Cost Calculation:</span>
                            <span className={`text-sm font-bold ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>Token-Based Attribution</span>
                          </div>
                          <div className={`p-2.5 rounded border ${isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-slate-800/50 border-slate-700'}`}>
                            <span className={`block text-[10px] ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>Storage Backend:</span>
                            <span className={`text-sm font-bold ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>MongoDB Aggregations</span>
                          </div>
                          <div className={`p-2.5 rounded border ${isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-slate-800/50 border-slate-700'}`}>
                            <span className={`block text-[10px] ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>Visualization:</span>
                            <span className={`text-sm font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>React Charts & Tables</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeDashboardTab === 'security' && (
                      <div className={`p-4 rounded-xl border text-xs space-y-3 font-mono ${
                        isLight ? 'bg-white border-[#E2E8F0] text-[#334155]' : 'bg-slate-900/70 border-slate-800 text-slate-300'
                      }`}>
                        <div className={`text-sm font-bold font-sans ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
                          AI Risk & LLM Guardrail Enforcement
                        </div>
                        <p className={`leading-relaxed font-sans ${isLight ? 'text-[#475569]' : 'text-slate-300'}`}>
                          Detects and blocks configured prompt-injection, sensitive-data, and policy-violation patterns before and after model inference to safeguard enterprise workflows.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                          <div className={`p-2.5 rounded border ${isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-slate-800/50 border-slate-700'}`}>
                            <span className={`block text-[10px] ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>Jailbreak Interception:</span>
                            <span className={`text-sm font-bold ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>Pattern & Keyword Rules</span>
                          </div>
                          <div className={`p-2.5 rounded border ${isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-slate-800/50 border-slate-700'}`}>
                            <span className={`block text-[10px] ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>Guideline Benchmark:</span>
                            <span className={`text-sm font-bold ${isLight ? 'text-purple-700' : 'text-purple-400'}`}>OWASP Top 10 for LLMs</span>
                          </div>
                          <div className={`p-2.5 rounded border ${isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-slate-800/50 border-slate-700'}`}>
                            <span className={`block text-[10px] ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>Sensitive Data:</span>
                            <span className={`text-sm font-bold ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>PII Masking & Redaction</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Active Engineering Glassmorphism Overlay */}
                <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px] ${
                  isLight ? 'bg-white/85' : 'bg-slate-950/75'
                }`}>
                  <div className={`max-w-lg p-6 sm:p-8 rounded-2xl border space-y-4 ${
                    isLight
                      ? 'bg-white/95 border-amber-300 shadow-[0_8px_30px_rgba(245,158,11,0.12)]'
                      : 'bg-slate-900/95 border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.15)]'
                  }`}>
                    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs ${
                      isLight
                        ? 'bg-amber-50 border border-amber-300 text-amber-700'
                        : 'bg-amber-500/10 border border-amber-500/30 text-amber-300'
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      <span>WORK IN PROGRESS • FINAL-YEAR PROJECT</span>
                    </div>

                    <h4 className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                      isLight ? 'text-[#0F172A]' : 'text-white'
                    }`}>
                      Platform Under Active Development
                    </h4>

                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isLight ? 'text-[#475569]' : 'text-slate-300'
                    }`}>
                      Vaprideen AI is currently being actively engineered as a final-year academic project. Core Spring Boot services, model ingestion APIs, and live telemetry dashboards are under active implementation.
                    </p>

                    <div className={`pt-1 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] ${
                      isLight ? 'text-[#475569]' : 'text-slate-400'
                    }`}>
                      <span className={`px-2.5 py-1 rounded-md border ${
                        isLight
                          ? 'bg-[#F8FAFC] border-[#CBD5E1] text-[#334155]'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}>
                        ⚡ Spring Boot 3 Core: In Progress
                      </span>
                      <span className={`px-2.5 py-1 rounded-md border ${
                        isLight
                          ? 'bg-[#F8FAFC] border-[#CBD5E1] text-[#334155]'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}>
                        🛡️ AI Guardrails: In Progress
                      </span>
                      <span className={`px-2.5 py-1 rounded-md border ${
                        isLight
                          ? 'bg-[#F8FAFC] border-[#CBD5E1] text-[#334155]'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}>
                        📊 React Dashboard: In Progress
                      </span>
                    </div>

                    <p className={`pt-1 text-[11px] font-mono ${
                      isLight ? 'text-[#64748B]' : 'text-slate-400'
                    }`}>
                      Live demo deployment and public telemetry will unlock upon project completion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem, Solution & Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-5 rounded-xl border ${
                  isLight ? 'bg-[#FFFBEB] border-[#FDE68A]' : 'bg-slate-950/60 border-slate-800'
                }`}>
                  <div className={`flex items-center gap-2 font-mono text-xs uppercase mb-1.5 font-semibold ${
                    isLight ? 'text-amber-800' : 'text-amber-400'
                  }`}>
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Problem Statement</span>
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isLight ? 'text-[#334155]' : 'text-slate-300'
                  }`}>
                    {featuredProject.problem}
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${
                  isLight ? 'bg-[#ECFDF5] border-[#A7F3D0]' : 'bg-slate-950/60 border-slate-800'
                }`}>
                  <div className={`flex items-center gap-2 font-mono text-xs uppercase mb-1.5 font-semibold ${
                    isLight ? 'text-emerald-800' : 'text-emerald-400'
                  }`}>
                    <Zap className="w-3.5 h-3.5" />
                    <span>Architectural Solution</span>
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isLight ? 'text-[#334155]' : 'text-slate-300'
                  }`}>
                    {featuredProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Pipeline Flow */}
              <div className={`p-6 rounded-2xl border text-center ${
                isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-slate-950/60 border-slate-800'
              }`}>
                <span className={`text-[11px] font-mono uppercase tracking-wider font-bold block mb-3 ${
                  isLight ? 'text-blue-700' : 'text-blue-400'
                }`}>
                  SYSTEM ARCHITECTURE FLOW
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className={`p-3 rounded-lg border ${
                    isLight ? 'bg-white border-[#E2E8F0] shadow-sm' : 'bg-slate-900 border-slate-800'
                  }`}>
                    <Users className={`w-5 h-5 mx-auto mb-1 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} />
                    <span className={`block font-bold font-sans ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>Enterprise Apps</span>
                    <span className={`text-[10px] ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>REST & SDK Calls</span>
                  </div>

                  <div className={`p-3 rounded-lg border ${
                    isLight ? 'bg-[#EFF6FF] border-[#BFDBFE] text-blue-900 shadow-sm' : 'bg-blue-950/60 border-blue-500/40 text-blue-200'
                  }`}>
                    <Server className={`w-5 h-5 mx-auto mb-1 ${isLight ? 'text-blue-600' : 'text-blue-300'}`} />
                    <span className={`block font-bold font-sans ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>Spring Boot Gateway</span>
                    <span className={`text-[10px] ${isLight ? 'text-blue-700 font-medium' : 'text-blue-400'}`}>High-Throughput Ingestion</span>
                  </div>

                  <div className={`p-3 rounded-lg border ${
                    isLight ? 'bg-white border-[#E2E8F0] shadow-sm' : 'bg-slate-900 border-slate-800'
                  }`}>
                    <Cpu className={`w-5 h-5 mx-auto mb-1 ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
                    <span className={`block font-bold font-sans ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>AI & RAG Engine</span>
                    <span className={`text-[10px] ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`}>Vector Search & Guardrails</span>
                  </div>

                  <div className={`p-3 rounded-lg border ${
                    isLight ? 'bg-[#F5F3FF] border-[#DDD6FE] text-indigo-900 shadow-sm' : 'bg-indigo-950/60 border-indigo-500/40 text-indigo-200'
                  }`}>
                    <Layers className={`w-5 h-5 mx-auto mb-1 ${isLight ? 'text-indigo-600' : 'text-indigo-300'}`} />
                    <span className={`block font-bold font-sans ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>React Dashboard</span>
                    <span className={`text-[10px] ${isLight ? 'text-indigo-700 font-medium' : 'text-indigo-400'}`}>Real-Time Telemetry</span>
                  </div>
                </div>
              </div>

              {/* Technologies Employed */}
              <div className={`flex flex-wrap items-center gap-2 pt-1 border-t ${
                isLight ? 'border-[#E2E8F0]' : 'border-slate-800'
              }`}>
                <span className={`text-xs font-mono uppercase font-bold mr-2 ${
                  isLight ? 'text-blue-700' : 'text-sky-400'
                }`}>
                  Stack:
                </span>
                {featuredProject.technologies.map((t) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono border ${
                      isLight
                        ? 'bg-[#F1F5F9] border-[#CBD5E1] text-[#334155]'
                        : 'bg-slate-800/80 border-slate-700 text-blue-300'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ======================================================== */}
        {/* OTHER PRODUCTION PROJECTS                                */}
        {/* ======================================================== */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className={`text-2xl font-bold tracking-tight ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
              More Engineering Projects & Award-Winning Solutions
            </h3>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === cat
                      ? (isLight ? 'bg-[#2563EB] text-white shadow-md font-bold' : 'bg-white text-slate-950 shadow-md font-bold')
                      : (isLight ? 'bg-white border border-[#CBD5E1] text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200')
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredOtherProjects.map((project: ProjectItem) => {
                const ProjectIcon = projectIconMap[project.id] || Layers;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4 }}
                    className={`group rounded-2xl p-4 sm:p-7 flex flex-col justify-between transition-all text-left backdrop-blur-md ${
                      isLight
                        ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(15,23,42,0.1)]'
                        : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:shadow-2xl'
                    }`}
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                            isLight
                              ? 'bg-[#EFF6FF] border border-[#BFDBFE] text-blue-600'
                              : 'bg-slate-800 border border-slate-700 text-blue-400'
                          }`}>
                            <ProjectIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                              {project.category} System
                            </span>
                            <h4 className={`text-lg font-bold group-hover:text-blue-500 transition-colors ${
                              isLight ? 'text-[#0F172A]' : 'text-white'
                            }`}>
                              {project.title}
                            </h4>
                          </div>
                        </div>

                        {project.badge ? (
                          <span className="px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-500 text-[10px] font-mono font-bold flex items-center gap-1 shrink-0">
                            <Sparkles className="w-3 h-3 text-amber-500" />
                            {project.badge}
                          </span>
                        ) : (
                          <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono shrink-0 ${
                            isLight
                              ? 'bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569]'
                              : 'bg-slate-800 border border-slate-700 text-slate-300'
                          }`}>
                            {project.category}
                          </span>
                        )}
                      </div>

                      {project.subtitle && (
                        <p className={`text-xs font-mono mb-2 font-medium ${isLight ? 'text-blue-600' : 'text-blue-400'}`}>
                          {project.subtitle} {project.role && <span className="text-slate-400 font-normal">({project.role})</span>}
                        </p>
                      )}

                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        isLight ? 'text-[#475569]' : 'text-slate-300'
                      }`}>
                        {project.description}
                      </p>

                      {project.bullets && project.bullets.length > 0 && (
                        <ul className={`mt-3 space-y-1.5 text-xs ${
                          isLight ? 'text-[#475569]' : 'text-slate-300'
                        }`}>
                          {project.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className={`mt-0.5 ${isLight ? 'text-blue-600' : 'text-blue-400'}`}>•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className={`mt-6 pt-5 border-t space-y-4 ${
                      isLight ? 'border-[#E2E8F0]' : 'border-slate-800/80'
                    }`}>
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                              isLight
                                ? 'bg-[#F1F5F9] text-[#334155] border border-[#CBD5E1]'
                                : 'bg-slate-800/90 text-slate-300 border border-slate-700/60'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-2.5 pt-1">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                              isLight
                                ? 'bg-[#2563EB] hover:bg-blue-700 text-white'
                                : 'bg-white hover:bg-slate-200 text-slate-950'
                            }`}
                          >
                            <span>Live System Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                              isLight
                                ? 'bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] border border-[#CBD5E1]'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700'
                            }`}
                          >
                            <GithubIcon className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} />
                            <span>Repository</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
