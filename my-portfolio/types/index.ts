export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Chip {
  label: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  tags: string[];
  bullets: string[];
}

export interface ModuleItem {
  icon: string;
  name: string;
  description: string;
  scale: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export interface CompanyItem {
  emoji: string;
  name: string;
  type: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
}
