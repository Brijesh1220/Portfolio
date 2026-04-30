import type {
  NavLink,
  Stat,
  ExperienceItem,
  ModuleItem,
  SkillGroup,
  CompanyItem,
  ContactLink,
} from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#modules' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS: Stat[] = [
  { value: '5+', label: 'Platform Modules' },
  { value: '3+', label: 'Years Experience' },
  { value: '100K+', label: 'Users Impacted' },
];

export const TYPEWRITER_PHRASES: string[] = [
  'building scalable React apps',
  'shipping enterprise modules',
  'solving complex UI problems',
  'designing clean REST APIs',
  'levelling up for FAANG',
];

export const ABOUT_CHIPS: string[] = [
  'React.js', 'Node.js', 'JavaScript', 'TypeScript',
  'PostgreSQL', 'MongoDB', 'REST APIs', 'MUI', 'Redux',
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Jan 2022 — Present · Gurugram',
    role: 'Full Stack Engineer',
    company: 'Incedo Technology Solutions Limited',
    tags: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'MUI', 'Redux', 'REST APIs'],
    bullets: [
      'Architected and delivered 5+ enterprise HR platform modules end-to-end, from database schema to pixel-perfect React UI',
      'Built a multi-step employee exit clearance system with HRBP, L2, and L2 Additional approval chains — supporting waive-off workflows, send-back states, and real-time department coordination',
      'Developed a Benefits Enrollment module with dynamic premium tables, PDF generation (jsPDF), and base64 form-submission pipelines',
      'Engineered Global Mobility workflows handling cross-border assignment logistics at enterprise scale',
      'Maintained SPFx intranet portal (TypeScript + React) for internal employee engagement — "TheHub"',
      'Collaborated directly with business stakeholders to translate complex HR policies into clean, maintainable code',
    ],
  },
];

export const MODULES: ModuleItem[] = [
  {
    icon: '🔄',
    name: 'Exit Clearance System',
    description: 'Multi-department approval workflow with HRBP, L2, L2-Additional chains, waive-off flows, send-back states, and real-time leave reset logic.',
    scale: 'React · Node.js · Complex State',
  },
  {
    icon: '⏱️',
    name: 'Timesheet Management',
    description: 'Enterprise-grade time tracking with project allocation, manager approvals, and export pipelines for payroll reconciliation.',
    scale: 'React · REST APIs · Reporting',
  },
  {
    icon: '✈️',
    name: 'Global Mobility',
    description: 'End-to-end cross-border employee assignment workflows — handling international logistics, documentation, and multi-step approvals.',
    scale: 'React · PostgreSQL · Multi-step Flows',
  },
  {
    icon: '💸',
    name: 'Expense Management',
    description: 'Claim submission, multi-tier approval routing, category-wise budget tracking, and reimbursement status dashboards.',
    scale: 'React · MUI · Dynamic Forms',
  },
  {
    icon: '🏆',
    name: 'Performance Management',
    description: 'Goal-setting, review cycles, rating calibration, and 360° feedback loops integrated with the broader HR platform.',
    scale: 'React · Redux · Complex UX',
  },
  {
    icon: '🌿',
    name: 'Leave Expert',
    description: 'Intelligent leave management with accrual engine, carryover rules, policy-based leave types, and approvals — all driven by configurable business logic.',
    scale: 'React · Node.js · Rules Engine',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', percentage: 92 },
      { name: 'JavaScript (ES6+)', percentage: 88 },
      { name: 'HTML / CSS', percentage: 90 },
      { name: 'Redux / Context API', percentage: 82 },
      { name: 'MUI / Tailwind CSS', percentage: 85 },
      { name: 'TypeScript', percentage: 72 },
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'Node.js / Express', percentage: 75 },
      { name: 'PostgreSQL', percentage: 70 },
      { name: 'MongoDB', percentage: 68 },
      { name: 'REST API Design', percentage: 80 },
      { name: 'Git / GitHub', percentage: 85 },
      { name: 'SharePoint (SPFx)', percentage: 65 },
    ],
  },
];

export const TARGET_COMPANIES: CompanyItem[] = [
  { emoji: '⚡', name: 'Razorpay', type: 'Fintech · Payments' },
  { emoji: '💳', name: 'CRED', type: 'Fintech · Consumer' },
  { emoji: '🛒', name: 'Zepto', type: 'Quick Commerce' },
  { emoji: '📱', name: 'PhonePe', type: 'Fintech · UPI' },
];

export const CONTACT_LINKS: ContactLink[] = [
  { icon: '📧', label: 'brijesh@email.com', href: 'mailto:brijesh@email.com' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/brijesh' },
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/brijesh' },
  { icon: '📞', label: '+91 XXXXXXXXXX', href: 'tel:+91XXXXXXXXXX' },
];
