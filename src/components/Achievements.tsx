import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Trophy,
  Mic,
  Medal,
  Calendar,
  MapPin,
  Building2,
  FolderGit2,
  Activity,
  Award,
  Globe,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { achievements } from '../data/portfolioData';
import type { AchievementItem } from '../types/portfolio';
import { useTheme } from '../context/ThemeContext';

interface CategoryTab {
  id: 'All' | 'Hackathons' | 'Symposiums' | 'Sports' | 'World Records & Special Achievements';
  label: string;
  icon: React.ElementType;
  count: number;
}

const categories: CategoryTab[] = [
  { id: 'All', label: '🌟 All Achievements', icon: Award, count: achievements.length },
  { id: 'Hackathons', label: '🏆 Hackathons', icon: Trophy, count: 2 },
  { id: 'Symposiums', label: '🎤 Symposiums', icon: Mic, count: 4 },
  { id: 'Sports', label: '🥇 Sports', icon: Medal, count: 6 },
  {
    id: 'World Records & Special Achievements',
    label: '🌍 World Records',
    icon: Globe,
    count: 1,
  },
];

// Curated interleaved order so consecutive cards showcase different domains
const getInterleavedAchievements = (): AchievementItem[] => {
  const hackathons = achievements.filter((a) => a.category === 'Hackathons');
  const worldRecords = achievements.filter((a) => a.category === 'World Records & Special Achievements');
  const symposiums = achievements.filter((a) => a.category === 'Symposiums');
  const sports = achievements.filter((a) => a.category === 'Sports');

  return [
    hackathons[0], // SIH 2026 Winner
    worldRecords[0], // Kalam's World Records 24-Hour Codeathon
    hackathons[1], // HACKATHISA 2K26 2nd Prize
    symposiums[2], // Techfest AI Persona Battle 1st Prize
    sports[0], // 16th National Jump Rope Gold Medal
    symposiums[3], // Techfest Chatbot 3rd Prize
    sports[4], // 1st South India Urban Games 1st Place
    symposiums[1], // ZYNTH 2026 Prompt Forge 2nd Prize
    sports[2], // 1st State Jump Rope Speed Relay Gold Medal
    symposiums[0], // ZYNTH 2026 Dumb Charades 2nd Prize
    sports[1], // 1st District Jump Rope Triple Under Gold Medal
    sports[3], // 1st District Jump Rope 30s Speed Gold Medal
    sports[5], // Invitational Inter-School Table Tennis Silver Medal
  ].filter(Boolean);
};

export const Achievements: React.FC = () => {
  const { currentTheme } = useTheme();
  const isLight = currentTheme === 'white';
  const [activeTab, setActiveTab] = useState<CategoryTab['id']>('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number>(0);

  // All 13 interleaved items for the main awards showcase
  const allInterleaved = useMemo(() => getInterleavedAchievements(), []);

  // Filter items based on active tab
  const displayedCards = useMemo(() => {
    if (activeTab === 'All') {
      return allInterleaved;
    }
    return achievements.filter((item: AchievementItem) => item.category === activeTab);
  }, [activeTab, allInterleaved]);

  // Recalculate horizontal scroll distance dynamically
  const updateScrollDistance = () => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const rightPadding = viewportWidth < 640 ? 32 : 96;
      const distance = trackWidth - viewportWidth + rightPadding;
      setScrollDistance(Math.max(0, distance));
    }
  };

  useEffect(() => {
    updateScrollDistance();
    window.addEventListener('resize', updateScrollDistance);
    const timer = setTimeout(updateScrollDistance, 250);
    return () => {
      window.removeEventListener('resize', updateScrollDistance);
      clearTimeout(timer);
    };
  }, [displayedCards]);

  // Bind Framer Motion scroll to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Map 0 -> 1 progress to 0 -> -scrollDistance
  const x = useTransform(smoothProgress, [0, 1], [0, -scrollDistance]);

  // Calculate container height so scrolling through is natural and comfortable
  // Roughly 1px vertical scroll per 1px horizontal scroll + 1 viewport height
  const containerHeight = scrollDistance > 0 ? scrollDistance * 1.15 + (typeof window !== 'undefined' ? window.innerHeight : 900) : 'auto';

  const handlePrev = () => {
    window.scrollBy({ top: -400, behavior: 'smooth' });
  };

  const handleNext = () => {
    window.scrollBy({ top: 400, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="achievements"
      style={{ height: typeof containerHeight === 'number' ? `${containerHeight}px` : containerHeight }}
      className="relative select-none"
    >
      {/* Pinned Sticky Viewport (Locks in view while user scrolls through all cards) */}
      <div className="sticky top-0 h-screen max-h-screen overflow-hidden flex flex-col justify-between py-6 sm:py-8 z-10">
        {/* Background Ambience Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/[0.05] blur-3xl pointer-events-none rounded-full" />

        {/* TOP HEADER: Title, Category Tabs & Quick Controls */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-2 shadow-inner w-fit ${
                  isLight
                    ? 'bg-[#EFF6FF] border-[#BFDBFE] text-blue-600'
                    : 'bg-slate-900/90 border-slate-800 text-blue-400'
                }`}
              >
                <Trophy className="w-3.5 h-3.5 text-blue-400" />
                <span className="tracking-wide uppercase">Honors & Recognition</span>
              </motion.div>

              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                isLight ? 'text-[#0F172A]' : 'text-white'
              }`}>
                Achievements & Recognition
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-2xl text-left ${
                isLight ? 'text-[#475569]' : 'text-slate-400'
              }`}>
                Scroll through to explore all hackathon victories, engineering challenges, world records, and sports championships.
              </p>
            </div>

            {/* Step Controls & Progress Pill */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <div className={`flex items-center gap-1.5 border p-1 rounded-xl shadow-sm ${
                isLight ? 'bg-white border-[#E2E8F0]' : 'bg-slate-900/80 border-slate-800'
              }`}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous achievement card"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer active:scale-95 ${
                    isLight ? 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  title="Scroll backward"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className={`w-[1px] h-4 ${isLight ? 'bg-[#E2E8F0]' : 'bg-slate-800'}`} />
                <button
                  onClick={handleNext}
                  aria-label="Next achievement card"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer active:scale-95 ${
                    isLight ? 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  title="Scroll forward"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Progress bar inside header */}
              <div className="hidden sm:flex flex-col gap-1 w-28">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>PROGRESS</span>
                  <span>{displayedCards.length} ITEMS</span>
                </div>
                <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-[#E2E8F0]' : 'bg-slate-800'}`}>
                  <motion.div
                    style={{ scaleX: smoothProgress }}
                    className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 origin-left"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Category Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-1">
            {categories.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? (isLight ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-md' : 'bg-white text-slate-950 border-white shadow-md')
                      : (isLight ? 'bg-white border-[#CBD5E1] text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]' : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700')
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full transition-colors ${
                      isActive
                        ? (isLight ? 'bg-white/20 text-white font-bold' : 'bg-slate-900 text-white font-bold')
                        : (isLight ? 'bg-[#F1F5F9] text-[#64748B] group-hover:text-[#0F172A]' : 'bg-slate-800/90 text-slate-400 group-hover:text-slate-200')
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MIDDLE SECTION: Horizontal Moving Cards Track (Tied directly to vertical scroll) */}
        <div className="relative w-full overflow-hidden flex-1 flex items-center my-auto">
          {/* Subtle Edge Vignettes */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[var(--bg-main)] via-[var(--bg-main)]/70 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[var(--bg-main)] via-[var(--bg-main)]/70 to-transparent z-20" />

          {/* Gliding Horizontal Track */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-stretch gap-5 sm:gap-6 px-4 sm:px-12 w-max"
          >
            {displayedCards.map((item: AchievementItem, idx: number) => (
              <EvenAchievementCard
                key={`${item.id}-${idx}`}
                item={item}
                isLight={isLight}
              />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM FOOTER: Scroll guidance note and visual status cue */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0 flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">
              Scroll down to glide horizontally through all {displayedCards.length} awards • Continue scrolling to advance
            </span>
            <span className="sm:hidden">
              Scroll down to view all awards
            </span>
          </div>

          <div className="text-[11px] text-sky-400 font-semibold">
            {scrollDistance > 0 ? 'Pinned Scroll Active ↓' : 'All Visible'}
          </div>
        </div>
      </div>
    </section>
  );
};

// Clean helpers to guarantee 100% EVEN, symmetrical cards
const getCleanPrizeBadge = (result: string, prizeType: AchievementItem['prizeType']): string => {
  if (prizeType === 'record') return '🏆 Record Participant';
  if (prizeType === 'winner') return '🏆 Winner';
  if (prizeType === 'gold') {
    if (result.includes('1st Place')) return '🥇 1st Place';
    return '🥇 Gold Medal';
  }
  if (prizeType === 'silver') return '🥈 2nd Prize / Silver';
  if (prizeType === 'bronze') return '🥉 3rd Prize';
  if (result.includes('Finalist')) return '🎯 Finalist';
  return '🎖️ Awardee';
};

const getShortLevelBadge = (level: string): string => {
  const l = level.toLowerCase();
  if (l.includes('world record')) return 'World Record';
  if (l.includes('national')) return 'National';
  if (l.includes('south india')) return 'South India';
  if (l.includes('state')) return 'State';
  if (l.includes('district')) return 'District';
  if (l.includes('inter-school')) return 'Inter-School';
  return level;
};

const getPrizeStyle = (prizeType: AchievementItem['prizeType'], isLight = false) => {
  if (isLight) {
    switch (prizeType) {
      case 'record':
      case 'winner':
      case 'gold':
        return {
          badge: 'bg-amber-50 text-amber-700 border-amber-300 shadow-sm',
          glowHover: '',
          accentColor: 'text-amber-700',
        };
      case 'silver':
        return {
          badge: 'bg-slate-100 text-slate-700 border-slate-300 shadow-sm',
          glowHover: '',
          accentColor: 'text-slate-700',
        };
      case 'bronze':
        return {
          badge: 'bg-orange-50 text-orange-700 border-orange-300 shadow-sm',
          glowHover: '',
          accentColor: 'text-orange-700',
        };
      default:
        return {
          badge: 'bg-blue-50 text-blue-700 border-blue-200 shadow-sm',
          glowHover: '',
          accentColor: 'text-blue-700',
        };
    }
  }

  switch (prizeType) {
    case 'record':
      return {
        badge: 'bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-600/20 text-amber-200 border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.25)]',
        glowHover: 'group-hover:border-amber-400/60 group-hover:shadow-[0_0_35px_rgba(245,158,11,0.2)]',
        accentColor: 'text-amber-400',
      };
    case 'winner':
    case 'gold':
      return {
        badge: 'bg-gradient-to-r from-amber-500/20 to-yellow-500/10 text-amber-300 border-amber-400/50 shadow-[0_0_16px_rgba(245,158,11,0.2)]',
        glowHover: 'group-hover:border-amber-400/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
        accentColor: 'text-yellow-400',
      };
    case 'silver':
      return {
        badge: 'bg-gradient-to-r from-slate-200/20 to-slate-400/10 text-slate-100 border-slate-300/50 shadow-[0_0_16px_rgba(226,232,240,0.18)]',
        glowHover: 'group-hover:border-slate-400/40 group-hover:shadow-[0_0_30px_rgba(226,232,240,0.1)]',
        accentColor: 'text-slate-200',
      };
    case 'bronze':
      return {
        badge: 'bg-gradient-to-r from-orange-600/25 to-amber-700/10 text-orange-300 border-orange-500/50 shadow-[0_0_16px_rgba(249,115,22,0.2)]',
        glowHover: 'group-hover:border-orange-500/40 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.12)]',
        accentColor: 'text-orange-400',
      };
    default:
      return {
        badge: 'bg-blue-500/20 text-blue-300 border-blue-400/40 shadow-[0_0_14px_rgba(59,130,246,0.2)]',
        glowHover: 'group-hover:border-blue-500/40',
        accentColor: 'text-blue-400',
      };
  }
};

const getLevelStyle = (level: string, isLight = false) => {
  const l = level.toLowerCase();
  if (isLight) {
    if (l.includes('world record')) {
      return 'bg-amber-50 border-amber-300 text-amber-700';
    }
    if (l.includes('national')) {
      return 'bg-indigo-50 border-indigo-200 text-indigo-700';
    }
    if (l.includes('south india')) {
      return 'bg-cyan-50 border-cyan-200 text-cyan-700';
    }
    if (l.includes('state')) {
      return 'bg-blue-50 border-blue-200 text-blue-700';
    }
    if (l.includes('district')) {
      return 'bg-purple-50 border-purple-200 text-purple-700';
    }
    if (l.includes('inter-school')) {
      return 'bg-rose-50 border-rose-200 text-rose-700 font-medium';
    }
    return 'bg-amber-50 border-amber-200 text-amber-700';
  }

  if (l.includes('world record')) {
    return 'bg-amber-950/70 border-amber-400/50 text-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.2)]';
  }
  if (l.includes('national')) {
    return 'bg-indigo-950/60 border-indigo-500/40 text-indigo-300';
  }
  if (l.includes('south india')) {
    return 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300';
  }
  if (l.includes('state')) {
    return 'bg-blue-950/60 border-blue-500/40 text-blue-300';
  }
  if (l.includes('district')) {
    return 'bg-purple-950/60 border-purple-500/40 text-purple-300';
  }
  if (l.includes('inter-school')) {
    return 'bg-rose-950/60 border-rose-500/40 text-rose-300';
  }
  return 'bg-amber-950/60 border-amber-500/40 text-amber-300';
};

const getCategoryMeta = (category: AchievementItem['category']) => {
  switch (category) {
    case 'Hackathons':
      return { icon: Trophy, label: 'Hackathon' };
    case 'Symposiums':
      return { icon: Mic, label: 'Tech Symposium' };
    case 'Sports':
      return { icon: Medal, label: 'Athletics & Sports' };
    case 'World Records & Special Achievements':
      return { icon: Globe, label: 'World Record Event' };
  }
};

const getCardFocus = (item: AchievementItem): string => {
  if (item.project) return item.project;
  if (item.event) return item.event;
  if (item.title.includes('Dumb Charades')) return 'Dumb Charades & Technical Logic Contest';
  if (item.title.includes('Prompt Forge')) return 'Prompt Forge (GenAI & LLM Optimization)';
  if (item.title.includes('AI Persona Battle')) return 'AI Persona Battle (Agent Prompting)';
  if (item.title.includes('Chatbot')) return 'Intelligent Conversational Bot Engineering';
  if (item.title.includes('Triple Under')) return 'Triple Under Speed & Endurance Event';
  if (item.title.includes('Speed Relay')) return 'U18 Speed Relay Championship';
  if (item.title.includes('30s Speed')) return '30s Speed Sprint Championship';
  if (item.title.includes('Table Tennis')) return 'Invitational Table Tennis Singles Tournament';
  if (item.sport) return `${item.sport} Championship`;
  return item.title;
};

const getCardOrganizer = (item: AchievementItem): string => {
  if (item.organizer) return item.organizer;
  if (item.recognition) return `${item.recognition} • Suguna Innovation`;
  if (item.category === 'Sports') {
    if (item.level.includes('National')) return 'Jump Rope Federation of India';
    if (item.level.includes('South India')) return 'Urban Games Association of India';
    if (item.level.includes('State')) return 'Tamil Nadu Jump Rope Association';
    if (item.level.includes('District')) return 'District Jump Rope Sports Association';
    return 'Sports Authority of India Partner';
  }
  if (item.category === 'World Records & Special Achievements') {
    return "Kalam's World Records Global Jury";
  }
  return 'Technical Symposium Committee';
};

const getCardVenue = (item: AchievementItem): string => {
  if (item.venue) return item.venue;
  if (item.organizer && item.organizer.includes('Coimbatore')) return 'Coimbatore, TN';
  if (item.category === 'World Records & Special Achievements') return 'Tamil Nadu, IN';
  return 'Tamil Nadu, IN';
};

interface EvenCardProps {
  item: AchievementItem;
  isLight?: boolean;
}

const EvenAchievementCard: React.FC<EvenCardProps> = ({ item, isLight = false }) => {
  const isWorldRecord = item.category === 'World Records & Special Achievements';
  const prizeBadgeText = getCleanPrizeBadge(item.result, item.prizeType);
  const shortLevelText = getShortLevelBadge(item.level);
  const { badge: prizeBadgeClass, glowHover } = getPrizeStyle(item.prizeType, isLight);
  const levelBadgeClass = getLevelStyle(item.level, isLight);
  const { icon: CategoryIcon, label: categoryLabel } = getCategoryMeta(item.category);
  const focusDetail = getCardFocus(item);
  const organizerDetail = getCardOrganizer(item);
  const venueDetail = getCardVenue(item);

  return (
    <div
      className={`group relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 text-left shrink-0 w-[300px] sm:w-[340px] md:w-[360px] h-[330px] sm:h-[340px] ${
        isLight
          ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(15,23,42,0.1)]'
          : `bg-slate-900/90 backdrop-blur-md border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] ${glowHover} ${
              isWorldRecord ? 'border-amber-500/40 bg-gradient-to-b from-slate-900/95 to-amber-950/20' : ''
            }`
      }`}
    >
      <div className="flex flex-col h-full justify-between">
        {/* TOP SECTION: Header badges, Title, and Domain Tag */}
        <div>
          {/* Row 1: Badges */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold border whitespace-nowrap leading-none ${prizeBadgeClass}`}
            >
              {prizeBadgeText}
            </span>

            <span
              className={`px-2 py-0.5 rounded-md border text-[11px] font-mono font-medium whitespace-nowrap leading-none ${levelBadgeClass}`}
            >
              {shortLevelText}
            </span>
          </div>

          {/* Row 2: Title */}
          <h3
            className={`text-base sm:text-lg font-bold tracking-tight line-clamp-2 leading-snug transition-colors ${
              isLight ? 'text-[#0F172A] group-hover:text-blue-600' : 'text-white group-hover:text-blue-200'
            }`}
            title={item.title}
          >
            {item.title}
          </h3>

          {/* Row 3: Domain & Category Tags */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-mono ${
              isLight
                ? 'bg-[#EFF6FF] text-blue-700 border-blue-200'
                : 'bg-slate-800/80 text-blue-300 border-slate-700/80'
            }`}>
              <CategoryIcon className={`w-3 h-3 ${isLight ? 'text-blue-600' : 'text-sky-400'}`} />
              <span>{categoryLabel}</span>
            </span>

            {item.teamHighlight && (
              <span className={`px-2 py-0.5 rounded-md border text-[10px] font-mono font-semibold ${
                isLight
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300'
              }`}>
                {item.teamHighlight}
              </span>
            )}
            {!item.teamHighlight && item.sport && (
              <span className={`px-2 py-0.5 rounded-md border text-[10px] font-mono ${
                isLight
                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                  : 'bg-blue-950/60 border-blue-800/50 text-blue-300'
              }`}>
                {item.sport}
              </span>
            )}
            {!item.teamHighlight && !item.sport && item.ageCategory && (
              <span className={`px-2 py-0.5 rounded-md border text-[10px] font-mono ${
                isLight
                  ? 'bg-[#F1F5F9] text-[#475569] border-[#E2E8F0]'
                  : 'bg-slate-800 text-slate-300 border-slate-700/70'
              }`}>
                {item.ageCategory}
              </span>
            )}
          </div>
        </div>

        {/* MIDDLE SECTION: Uniform Frosted Detail Box */}
        <div className={`my-2 p-3 rounded-xl border flex flex-col justify-center gap-2 ${
          isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-slate-950/70 border-slate-700/80'
        }`}>
          {/* Detail Line 1: Focus / Project / Discipline */}
          <div className="flex items-start gap-2 text-xs">
            {item.project ? (
              <FolderGit2 className={`w-4 h-4 mt-0.5 shrink-0 ${isLight ? 'text-blue-600' : 'text-sky-400'}`} />
            ) : (
              <Activity className={`w-4 h-4 mt-0.5 shrink-0 ${isLight ? 'text-blue-600' : 'text-sky-400'}`} />
            )}
            <div className="leading-tight overflow-hidden">
              <span className={`text-[10px] font-mono uppercase font-bold tracking-wider block ${
                isLight ? 'text-blue-700' : 'text-sky-400'
              }`}>
                {item.project ? 'Project' : 'Discipline / Event'}
              </span>
              <span className={`font-bold text-xs sm:text-[13px] line-clamp-1 mt-0.5 ${
                isLight ? 'text-[#0F172A]' : 'text-white'
              }`} title={focusDetail}>
                {focusDetail}
              </span>
            </div>
          </div>

          {/* Detail Line 2: Organizer / Authority */}
          <div className="flex items-start gap-2 text-xs">
            <Building2 className={`w-4 h-4 mt-0.5 shrink-0 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} />
            <div className="leading-tight overflow-hidden">
              <span className={`text-[10px] font-mono uppercase font-bold tracking-wider block ${
                isLight ? 'text-blue-700' : 'text-blue-300'
              }`}>
                Organizer / Host
              </span>
              <span className={`font-medium text-xs line-clamp-1 mt-0.5 ${
                isLight ? 'text-[#475569]' : 'text-slate-100'
              }`} title={organizerDetail}>
                {organizerDetail}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Date & Venue Footer */}
        <div className={`pt-2 border-t flex items-center justify-between gap-2 text-xs font-mono ${
          isLight ? 'border-[#E2E8F0] text-[#64748B]' : 'border-slate-800 text-slate-300'
        }`}>
          <div className="flex items-center gap-1.5 shrink-0">
            <Calendar className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} />
            <span className={`font-medium ${isLight ? 'text-[#475569]' : 'text-slate-200'}`}>{item.date}</span>
          </div>

          <div
            className={`flex items-center gap-1 font-medium text-right truncate max-w-[150px] ${
              isLight ? 'text-[#475569]' : 'text-slate-200'
            }`}
            title={venueDetail}
          >
            <MapPin className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} />
            <span className="truncate">{venueDetail}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
