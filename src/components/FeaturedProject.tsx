import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  BarChart3,
  Cpu,
  Layers,
  ExternalLink,
  CheckCircle2,
  Users,
  Zap,
  Activity,
  DollarSign,
  AlertTriangle,
  Server,
  Star,
} from 'lucide-react';
import { featuredProject } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const FeaturedProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'security'>('overview');

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-xs font-mono font-semibold text-blue-300 mb-4 shadow-sm"
          >
            <Star className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
            <span>FLAGSHIP FINAL-YEAR PROJECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none"
          >
            {featuredProject.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-2xl font-medium text-blue-400 mt-3 max-w-3xl"
          >
            {featuredProject.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs font-mono text-slate-400"
          >
            <span className="text-blue-300 font-semibold">ROLE: Team Leader</span>
            <span>•</span>
            <span>TYPE: Final-Year Project</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">STATUS: Working Prototype / Final-Year Project</span>
          </motion.div>
        </div>

        {/* Large Flagship Interactive Mockup Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#0b0e17]/95 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden mb-16"
        >
          {/* Dashboard Window Header */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                https://vaprideen-ai.demo/dashboard
              </span>
              <span className="ml-3 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono text-blue-300">
                Demo Dashboard
              </span>
            </div>

            {/* Mockup Tabs */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Model Operations
              </button>
              <button
                onClick={() => setActiveTab('metrics')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'metrics'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Cost & Usage
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'security'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Risk & Governance
              </button>
            </div>
          </div>

          {/* Dashboard Content Mockup View */}
          <div className="p-6 sm:p-8 bg-slate-950/40">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Capabilities Overview Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                      <span>Model Registry</span>
                      <Cpu className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-xl font-bold text-white font-mono">Configured Endpoints</div>
                    <div className="text-[11px] text-blue-300 mt-1 flex items-center gap-1">
                      <span>Spring Boot Management API</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                      <span>Usage Tracking</span>
                      <Activity className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="text-xl font-bold text-white font-mono">Token Analytics</div>
                    <div className="text-[11px] text-indigo-300 mt-1">Prompt & Response Ingestion</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                      <span>Cost Control</span>
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-xl font-bold text-white font-mono">Budget Policies</div>
                    <div className="text-[11px] text-emerald-400 mt-1">Per-Team Usage Limits</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                      <span>Security Shield</span>
                      <ShieldAlert className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-xl font-bold text-white font-mono">Policy Enforcement</div>
                    <div className="text-[11px] text-amber-300 mt-1">Pattern & Rule Filtering</div>
                  </div>
                </div>

                {/* Pipeline Architecture Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
                      <span>CONNECTED PIPELINE COMPONENTS</span>
                      <span className="text-blue-400 font-bold">PROTOTYPE ARCHITECTURE</span>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        { name: 'Enterprise RAG Indexer', framework: 'Spring Boot & MongoDB' },
                        { name: 'Guardrail Policy Inspector', framework: 'Python & Rule Engine' },
                        { name: 'Cost Attribution Telemetry', framework: 'Spring Boot REST APIs' },
                      ].map((ep) => (
                        <div key={ep.name} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 text-xs">
                          <span className="text-slate-200 font-medium">{ep.name}</span>
                          <span className="text-blue-300 font-mono text-[11px]">{ep.framework}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
                      <span>POLICY DEFINITIONS</span>
                      <span className="text-emerald-400 font-bold">CONFIGURED</span>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        { rule: 'PII Redaction on Prompts', state: 'Pattern Check' },
                        { rule: 'Budget Cap Per Department', state: 'Threshold Limit' },
                        { rule: 'Prompt Injection Jailbreak Shield', state: 'Configured Filter' },
                      ].map((rule) => (
                        <div key={rule.rule} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 text-xs">
                          <span className="text-slate-300">{rule.rule}</span>
                          <span className="text-emerald-400 font-mono text-[11px]">{rule.state}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 text-left space-y-4">
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider text-blue-400">
                  Cost & Token Ingestion Analytics (Prototype Architecture)
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Aggregates input and output token volume across configured AI workflows. Designed to provide transparent cost attribution, model selection tracking, and structured usage summaries through Spring Boot REST APIs and MongoDB storage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                    <span className="text-slate-400 block mb-1">Cost Tracking:</span>
                    <span className="text-base font-bold text-emerald-400">Token-Based Attribution</span>
                  </div>
                  <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                    <span className="text-slate-400 block mb-1">Storage Backend:</span>
                    <span className="text-base font-bold text-blue-400">MongoDB Aggregations</span>
                  </div>
                  <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                    <span className="text-slate-400 block mb-1">Dashboard View:</span>
                    <span className="text-base font-bold text-indigo-400">React Interactive Charts</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 text-left space-y-4">
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  AI Risk & Governance Engine
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Detects and blocks configured prompt-injection, sensitive-data, and policy-violation patterns before and after model inference to safeguard enterprise workflows.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                    <span className="text-slate-400 block mb-1">Inspection Logic:</span>
                    <span className="text-base font-bold text-emerald-400">Configured Pattern Rules</span>
                  </div>
                  <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                    <span className="text-slate-400 block mb-1">Sensitive Data:</span>
                    <span className="text-base font-bold text-blue-400">PII Masking & Redaction</span>
                  </div>
                  <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                    <span className="text-slate-400 block mb-1">Guideline Benchmark:</span>
                    <span className="text-base font-bold text-purple-400">OWASP Top 10 for LLMs</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Problem, Solution, and Core Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-left">
          {/* Problem & Solution */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Uncontrolled AI Sprawl in Enterprise
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {featuredProject.problem}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Unified Centralized Control Plane
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {featuredProject.solution}
              </p>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="lg:col-span-6 p-7 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider mb-2">
                <BarChart3 className="w-4 h-4" />
                <span>Core Capabilities</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Enterprise AI Management Suite
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featuredProject.keyCapabilities?.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs font-medium text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                Technologies Employed:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 border border-slate-700 text-blue-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md mb-16 text-center"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-1 font-semibold">
              SYSTEM ARCHITECTURE PIPELINE
            </span>
            <h3 className="text-2xl font-bold text-white">
              End-to-End Enterprise Flow
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 text-center">
              <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white">Enterprise Users</div>
              <div className="text-xs text-slate-400 mt-1">Apps & Developers</div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-500/40 text-center shadow-lg shadow-blue-500/10">
              <Server className="w-6 h-6 text-blue-300 mx-auto mb-2" />
              <div className="text-sm font-bold text-blue-200">Vaprideen AI Gateway</div>
              <div className="text-xs text-blue-400 mt-1">Spring Boot Ingestion</div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 text-center space-y-1">
              <div className="text-xs font-bold text-white font-mono uppercase mb-2">
                4 Core Micro-Engines
              </div>
              <div className="text-[11px] text-slate-300 py-0.5 bg-slate-900 rounded">AI Operations</div>
              <div className="text-[11px] text-slate-300 py-0.5 bg-slate-900 rounded">Governance & Policy</div>
              <div className="text-[11px] text-slate-300 py-0.5 bg-slate-900 rounded">Security & Guardrails</div>
              <div className="text-[11px] text-slate-300 py-0.5 bg-slate-900 rounded">Cost Monitoring</div>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-indigo-950/60 border border-indigo-500/40 text-center shadow-lg shadow-indigo-500/10">
              <Layers className="w-6 h-6 text-indigo-300 mx-auto mb-2" />
              <div className="text-sm font-bold text-indigo-200">Enterprise AI Dashboard</div>
              <div className="text-xs text-indigo-400 mt-1">React & Analytics</div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={featuredProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-white/10 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Live Platform Demo</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href={featuredProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-blue-400" />
            <span>Repository</span>
          </a>
        </div>
      </div>
    </section>
  );
};
