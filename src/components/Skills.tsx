import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  Server,
  BrainCircuit,
  Layout,
  Cloud,
  CheckCircle2,
  Search,
  Layers,
  X,
  Sparkles,
  Cpu,
  Lock,
  Database,
  Network,
  Package,
  Terminal,
  Workflow,
  FileCode,
  Activity,
  Binary,
  Sliders,
  Zap,
  Braces,
  Code2,
  Palette,
  Globe,
  Box,
  GitBranch,
  Send,
  Wrench,
} from 'lucide-react';

interface SkillItem {
  name: string;
  context: string;
  featured?: boolean;
}

interface ArchitectureTier {
  id: string;
  tierNumber: string;
  title: string;
  role: string;
  tagline: string;
  icon: React.ElementType;
  isFullWidth?: boolean;
  accent: {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    glow: string;
    hoverBorder: string;
    bulletColor: string;
    iconBg: string;
  };
  skills: SkillItem[];
  standards: string[];
}

const getSkillIcon = (name: string): React.ElementType => {
  switch (name) {
    case 'Java':
      return Terminal;
    case 'Spring Boot':
      return Cpu;
    case 'Spring MVC':
      return Layers;
    case 'Spring Data JPA':
      return Database;
    case 'REST APIs':
      return Network;
    case 'Spring Security (JWT)':
      return Lock;
    case 'JDBC':
      return Database;
    case 'Hibernate':
      return Database;
    case 'Hibernate & JPA':
      return Database;
    case 'Maven':
      return Package;
    case 'Generative AI':
      return Sparkles;
    case 'LLMs':
      return BrainCircuit;
    case 'RAG':
      return Workflow;
    case 'Python':
      return FileCode;
    case 'Machine Learning':
      return Activity;
    case 'Deep Learning':
      return Binary;
    case 'Scikit-learn':
      return Sliders;
    case 'OpenCV':
      return Zap;
    case 'NumPy & Pandas':
      return Layers;
    case 'React.js':
      return Layout;
    case 'TypeScript':
      return Braces;
    case 'JavaScript':
      return Code2;
    case 'Tailwind CSS':
      return Palette;
    case 'HTML5 & CSS3':
      return Globe;
    case 'Bootstrap':
      return Layout;
    case 'AWS':
      return Cloud;
    case 'Docker':
      return Box;
    case 'Docker Desktop':
      return Box;
    case 'MySQL':
      return Database;
    case 'MongoDB':
      return Layers;
    case 'SQL':
      return Database;
    case 'Git':
      return GitBranch;
    case 'GitHub':
      return GitBranch;
    case 'Git & GitHub':
      return GitBranch;
    case 'Postman':
      return Send;
    case 'Vercel & Render':
      return Globe;
    case 'IntelliJ IDEA':
      return Wrench;
    case 'VS Code':
      return Code2;
    case 'IntelliJ & VS Code':
      return Wrench;
    case 'JUnit':
      return CheckCircle2;
    default:
      return CheckCircle2;
  }
};

const architectureTiers: ArchitectureTier[] = [
  {
    id: 'backend',
    tierNumber: '01',
    title: 'Java Backend & API Development',
    role: 'Core Business Logic & API Layer',
    tagline:
      'Spring Boot services, REST APIs, database integration, and application security.',
    icon: Server,
    accent: {
      badgeBg: 'bg-blue-500/10',
      badgeText: 'text-blue-400',
      badgeBorder: 'border-blue-500/30',
      glow: 'hover:shadow-[0_0_35px_rgba(59,130,246,0.12)]',
      hoverBorder: 'hover:border-blue-500/50',
      bulletColor: 'text-blue-400',
      iconBg: 'bg-blue-500/15 border-blue-500/30 text-blue-400',
    },
    skills: [
      { name: 'Java', context: 'Multithreading, OOP, Streams, Virtual Threads', featured: true },
      { name: 'Spring Boot', context: 'REST APIs, Actuator, Profiles, Microservices', featured: true },
      { name: 'Spring MVC', context: 'Controllers, RequestMapping, Model/View' },
      { name: 'Spring Data JPA', context: 'Repositories, Custom Queries, Pagination', featured: true },
      { name: 'REST APIs', context: 'CRUD Endpoints, OpenAPI/Swagger Documentation', featured: true },
      { name: 'Spring Security (JWT)', context: 'Role-Based Access Control, Stateless Tokens', featured: true },
      { name: 'JDBC', context: 'Connection Pooling, PreparedStatements, Transactions' },
      { name: 'Hibernate & JPA', context: 'ORM Entity Mapping, Lazy Loading, ACID Caching' },
    ],
    standards: [
      'RESTful Architecture',
      'Spring Ecosystem',
      'API Design & Modular Architecture',
      'Zero-Trust JWT Auth',
    ],
  },
  {
    id: 'aiml',
    tierNumber: '02',
    title: 'Applied AI & Cognitive Systems',
    role: 'Intelligence & Inference Layer',
    tagline:
      'LLM orchestration, retrieval-augmented generation (RAG), computer vision, and machine learning pipelines.',
    icon: BrainCircuit,
    accent: {
      badgeBg: 'bg-purple-500/10',
      badgeText: 'text-purple-400',
      badgeBorder: 'border-purple-500/30',
      glow: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.12)]',
      hoverBorder: 'hover:border-purple-500/50',
      bulletColor: 'text-purple-400',
      iconBg: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
    },
    skills: [
      { name: 'Generative AI', context: 'Prompt Engineering, Evaluation, AI Agent Workflows', featured: true },
      { name: 'LLMs', context: 'Inference Pipelines, Context Windows, Model Fine-Tuning', featured: true },
      { name: 'RAG', context: 'Vector Embeddings, Top-K Retrieval, Chunking Strategy', featured: true },
      { name: 'Python', context: 'Data Manipulation, Automation, AI Scripting', featured: true },
      { name: 'Machine Learning', context: 'Supervised & Unsupervised Modeling, Validation' },
      { name: 'Deep Learning', context: 'Neural Network Architectures, Optimization' },
      { name: 'Scikit-learn', context: 'Classification, Regression, Feature Pipelines' },
      { name: 'OpenCV', context: 'Computer Vision, Image Filtering & Transformation' },
      { name: 'NumPy & Pandas', context: 'Vectorized Processing, Tabular Data Cleaning' },
    ],
    standards: [
      'SIH 2026 Winner AI Architecture',
      'Context-Aware RAG',
      'Vector Similarity Search',
      'Automated Telemetry Detection',
    ],
  },
  {
    id: 'frontend',
    tierNumber: '03',
    title: 'Modern Client & Presentation',
    role: 'Presentation & Interaction Layer',
    tagline:
      'High-performance reactive user interfaces built with modular components, type safety, and responsive UX.',
    icon: Layout,
    accent: {
      badgeBg: 'bg-cyan-500/10',
      badgeText: 'text-cyan-400',
      badgeBorder: 'border-cyan-500/30',
      glow: 'hover:shadow-[0_0_35px_rgba(6,182,212,0.12)]',
      hoverBorder: 'hover:border-cyan-500/50',
      bulletColor: 'text-cyan-400',
      iconBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
    },
    skills: [
      { name: 'React.js', context: 'Hooks, Custom State Architecture, Virtual DOM Optimization', featured: true },
      { name: 'TypeScript', context: 'Strict Typing, Interface Contracts, Enterprise Scalability', featured: true },
      { name: 'JavaScript', context: 'Modern ES6+, Asynchronous Patterns, Event Handling' },
      { name: 'Tailwind CSS', context: 'Responsive Layouts, Glassmorphism, Design Tokens', featured: true },
      { name: 'HTML5 & CSS3', context: 'Semantic Document Structure, Animations, Flex/Grid' },
      { name: 'Bootstrap', context: 'Rapid Layout Prototyping, Grid Utility Classes' },
    ],
    standards: [
      'Component-Driven Design',
      'Strict TypeScript Safety',
      'Mobile-First Responsive UX',
      'Sub-100ms Interactions',
    ],
  },
  {
    id: 'infra',
    tierNumber: '04',
    title: 'Data Persistence & Cloud Infrastructure',
    role: 'Persistence & Infrastructure Layer',
    tagline:
      'Relational and NoSQL schemas, containerized Docker environments, and cloud deployment pipelines.',
    icon: Cloud,
    accent: {
      badgeBg: 'bg-emerald-500/10',
      badgeText: 'text-emerald-400',
      badgeBorder: 'border-emerald-500/30',
      glow: 'hover:shadow-[0_0_35px_rgba(16,185,129,0.12)]',
      hoverBorder: 'hover:border-emerald-500/50',
      bulletColor: 'text-emerald-400',
      iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    },
    skills: [
      { name: 'AWS', context: 'EC2, S3, IAM Security, Cloud Deployment Workflows', featured: true },
      { name: 'Docker', context: 'Containerization, Multi-Stage Builds, Compose Consistency', featured: true },
      { name: 'MySQL', context: 'Relational Schemas, Index Tuning, ACID Transactions', featured: true },
      { name: 'MongoDB', context: 'Document Models, Aggregation Pipelines, NoSQL Queries' },
      { name: 'SQL', context: 'Complex Join Optimization, Queries, Aggregations', featured: true },
    ],
    standards: [
      'Docker Containerization',
      'ACID Data Integrity',
      'Relational Normalization',
      'Cloud Deployment Pipelines',
    ],
  },
  {
    id: 'tools',
    tierNumber: '05',
    title: 'Developer Tools, Testing & Environments',
    role: 'Tooling, Testing & DevOps Toolchain',
    tagline:
      'Industry-standard IDEs, version control workflows, dependency management, and API testing suites.',
    icon: Wrench,
    isFullWidth: true,
    accent: {
      badgeBg: 'bg-amber-500/10',
      badgeText: 'text-amber-400',
      badgeBorder: 'border-amber-500/30',
      glow: 'hover:shadow-[0_0_35px_rgba(245,158,11,0.12)]',
      hoverBorder: 'hover:border-amber-500/50',
      bulletColor: 'text-amber-400',
      iconBg: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
    },
    skills: [
      { name: 'Git', context: 'Version Control, Branching Strategy, Merge Conflicts', featured: true },
      { name: 'GitHub', context: 'Pull Requests, Code Review, Remote Repositories', featured: true },
      { name: 'Postman', context: 'API Test Suites, Collections, Contract Testing', featured: true },
      { name: 'IntelliJ IDEA', context: 'JVM Profiling, Diagnostics, Spring Tooling', featured: true },
      { name: 'VS Code', context: 'Full-Stack TypeScript & React Development' },
      { name: 'Maven', context: 'POM Dependencies, Multi-Module Builds, Packaging', featured: true },
      { name: 'JUnit', context: 'Unit Testing, Assertions, Test Lifecycle Automation' },
      { name: 'Docker Desktop', context: 'Local Containers, Compose Environments' },
      { name: 'Vercel & Render', context: 'Cloud Hosting, Automated CI/CD Webhooks' },
    ],
    standards: [
      'Git-Flow Branching Workflows',
      'API Contract & Assertion Testing',
      'Automated Build Lifecycles',
      'Automated Test Coverage',
    ],
  },
];

export const Skills: React.FC = () => {
  const { currentTheme } = useTheme();
  const isLight = currentTheme === 'white';
  const [searchQuery, setSearchQuery] = useState<string>('');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-3 ${
                isLight ? 'bg-[#EFF6FF] border-[#BFDBFE] text-blue-600' : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>SYSTEM ARCHITECTURE & CAPABILITIES</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isLight ? 'text-[#0F172A]' : 'text-white'}`}
            >
              Technical Competencies & Stack
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className={`text-sm sm:text-base mt-2 max-w-2xl leading-relaxed ${isLight ? 'text-[#475569]' : 'text-slate-400'}`}
            >
              Architected across core Java backend, applied AI & RAG systems, reactive client interfaces, and cloud DevOps infrastructure.
            </motion.p>
          </div>

          {/* Quick Filter Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${isLight ? 'text-[#64748B]' : 'text-slate-400'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter stack e.g., Spring, Docker, RAG, Postman..."
              className={`w-full pl-10 pr-9 py-2.5 text-xs rounded-xl border font-mono transition-all focus:outline-none focus:ring-2 ${
                isLight
                  ? 'bg-white border-[#CBD5E1] text-[#0F172A] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-blue-100 shadow-sm'
                  : 'bg-slate-900/90 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500/60 focus:ring-blue-500/20'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer ${
                  isLight ? 'text-[#64748B] hover:text-[#0F172A]' : 'text-slate-400 hover:text-white'
                }`}
                title="Clear filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Complete Matrix View with 4 Core Tiers + 5th Full-Width Developer Tools Tier */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left"
        >
          {architectureTiers.map((tier) => {
            const TierIcon = tier.icon;

            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 flex flex-col justify-between ${
                  tier.isFullWidth ? 'col-span-1 lg:col-span-2' : ''
                } ${
                  isLight
                    ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(15,23,42,0.1)]'
                    : `bg-slate-900/80 border border-slate-800 shadow-xl ${tier.accent.hoverBorder} ${tier.accent.glow}`
                }`}
              >
                <div>
                  {/* Tier Top Header */}
                  <div className={`flex items-start justify-between gap-3 pb-4 border-b ${
                    isLight ? 'border-[#E2E8F0]' : 'border-slate-800'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${tier.accent.iconBg}`}
                      >
                        <TierIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                              isLight
                                ? 'bg-blue-50 border-blue-200 text-blue-700'
                                : `${tier.accent.badgeBg} ${tier.accent.badgeText} ${tier.accent.badgeBorder}`
                            }`}
                          >
                            Tier {tier.tierNumber} • {tier.role}
                          </span>
                        </div>
                        <h3 className={`text-lg sm:text-xl font-bold tracking-tight mt-0.5 ${
                          isLight ? 'text-[#0F172A]' : 'text-white'
                        }`}>
                          {tier.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className={`text-xs mt-3 leading-relaxed ${isLight ? 'text-[#475569]' : 'text-slate-400'}`}>
                    {tier.tagline}
                  </p>

                  {/* Skill Badges Matrix */}
                  <div
                    className={`grid gap-2.5 pt-5 ${
                      tier.isFullWidth
                        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                        : 'grid-cols-1 sm:grid-cols-2'
                    }`}
                  >
                    {tier.skills.map((skill) => {
                      const SkillIcon = getSkillIcon(skill.name);
                      const isMatched =
                        normalizedQuery &&
                        (skill.name.toLowerCase().includes(normalizedQuery) ||
                          skill.context.toLowerCase().includes(normalizedQuery));

                      return (
                        <div
                          key={skill.name}
                          title={skill.context}
                          className={`p-2.5 rounded-lg border transition-all flex items-center justify-between gap-2 ${
                            isMatched
                              ? isLight
                                ? 'bg-blue-50 border-blue-400 shadow-sm'
                                : 'bg-blue-500/20 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.35)]'
                              : isLight
                                ? 'bg-[#F8FAFC] border-[#E2E8F0] hover:bg-white hover:border-[#CBD5E1]'
                                : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/80 hover:border-slate-600'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <SkillIcon
                              className={`w-3.5 h-3.5 shrink-0 ${
                                isMatched
                                  ? (isLight ? 'text-blue-600' : 'text-blue-300')
                                  : tier.accent.bulletColor
                              }`}
                            />
                            <span
                              className={`text-xs font-semibold truncate ${
                                isMatched
                                  ? (isLight ? 'text-blue-700 font-bold' : 'text-white font-bold')
                                  : (isLight ? 'text-[#0F172A]' : 'text-slate-200')
                              }`}
                            >
                              {skill.name}
                            </span>
                          </div>
                          {skill.featured && (
                            <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded shrink-0 ${
                              isLight
                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                : 'bg-slate-700/60 text-slate-300'
                            }`}>
                              Core
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Architectural Standards Footnote */}
                <div className={`mt-5 pt-3 border-t flex flex-wrap items-center gap-1.5 ${
                  isLight ? 'border-[#E2E8F0]' : 'border-slate-800/60'
                }`}>
                  {tier.standards.map((std) => (
                    <span
                      key={std}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        isLight
                          ? 'bg-[#F1F5F9] border-[#CBD5E1] text-[#475569]'
                          : 'bg-slate-800/80 border-slate-700/50 text-slate-300'
                      }`}
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
