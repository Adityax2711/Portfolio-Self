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
  period: string;
  location: string;
  details?: string;
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
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  testimonials: Testimonial[];
}

