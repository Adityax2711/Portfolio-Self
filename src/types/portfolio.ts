export interface SocialLinks {
  github?: string;
  instagram?: string;
  linkedin?: string;
  leetcode?: string;
  email?: string;
  phone?: string;
  website?: string;
}

export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  yearsOfExperience: number | string;
  bio: string;
  avatarSvg: string;
  social: SocialLinks;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  link?: string;
  linkText?: string;
  tech?: string[];
}

export interface LeadershipRole {
  id?: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  badge?: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link: string;
  github?: string;
  image: string;
  highlight: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  specialization?: string;
  period: string;
  location: string;
  details?: string;
  coursework?: string[];
  highlights?: string[];
}

export interface ResearchMetric {
  label: string;
  traditional: string;
  proposed: string;
  subtext?: string;
}

export interface ResearchArchitectureStep {
  step: string;
  title: string;
  description: string;
  badge: string;
  layer: 'input' | 'ai' | 'decision' | 'blockchain' | 'audit';
}

export interface ResearchReference {
  citation: string;
  focus: string;
  limitationAddressed: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  topic: string;
  status: string;
  period: string;
  author: string;
  regNo?: string;
  affiliation: string;
  abstract: string;
  problemStatement: string;
  keyContributions: string[];
  architectureSteps: ResearchArchitectureStep[];
  comparativeMetrics: ResearchMetric[];
  literatureReferences: ResearchReference[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  badge?: string;
  url?: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: SkillsData;
  experience: Experience[];
  leadership: LeadershipRole[];
  projects: Project[];
  research: ResearchItem[];
  education: Education[];
  certifications: Certification[];
  testimonials: Testimonial[];
}

