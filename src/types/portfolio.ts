export type Theme = 'dark' | 'light';

export interface SkillItem {
  id: string;
  name: string;
  category: 'programming' | 'ai' | 'database' | 'os';
  proficiency: number; // 0-100
  iconName: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  detailedPoints: string[];
  technologies: string[];
  category: 'AI/ML' | 'Web' | 'Full Stack';
  featured: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
  hasInteractiveDemo?: boolean;
}

export interface InternshipItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skillsGained: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  score: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeColor: string;
  skillsCovered: string[];
  description: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
