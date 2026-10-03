export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
  stats?: string;
}

export interface StatItem {
  value: string;
  numeric: number;
  suffix: string;
  label: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  iconName?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  type: string;
  technologies: string[];
  description: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  role?: string;
  badge?: string;
  category: 'Full Stack' | 'AI' | 'Web' | 'Backend';
  technologies: string[];
  description: string;
  featured?: boolean;
  problem?: string;
  solution?: string;
  keyCapabilities?: string[];
  bullets?: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  image?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathons' | 'Symposiums' | 'Sports' | 'World Records & Special Achievements';
  result: string;
  prizeType: 'winner' | 'gold' | 'silver' | 'bronze' | 'record';
  level: string;
  organizer?: string;
  recognition?: string;
  teamHighlight?: string;
  project?: string;
  event?: string;
  sport?: string;
  date: string;
  venue?: string;
  ageCategory?: string;
  type?: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: 'AI / ML' | 'Full Stack Development' | 'Cloud Computing' | 'Programming' | 'Data / Analytics';
  date: string;
  credentialUrl?: string;
  featured?: boolean;
}

export interface CodingProfile {
  platform: 'GitHub' | 'LeetCode' | 'CodeChef';
  statistic: string;
  metricLabel: string;
  description: string;
  url: string;
  badge: string;
  details?: { label: string; value: string }[];
}
