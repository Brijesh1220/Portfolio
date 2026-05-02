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
  { value: '6+', label: 'Platform Modules' },
  { value: '4', label: 'Years Experience' },
  { value: '3.5K+', label: 'Users Impacted' },
];

export const TYPEWRITER_PHRASES: string[] = [
  'building scalable React apps',
  'shipping enterprise modules',
  'solving complex UI problems',
  'designing clean REST APIs',
  'mentoring junior engineers',
  'levelling up for FAANG',
];

export const ABOUT_CHIPS: string[] = [
  'React.js', 'Next.js', 'Node.js', 'TypeScript',
  'JavaScript', 'PostgreSQL', 'MongoDB', 'Redux',
  'REST APIs', 'MUI', 'Tailwind CSS', 'Jest',
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'April 2024 — Present · Gurugram',
    role: 'Senior Software Engineer',
    company: 'Incedo Technology Solutions Limited',
    tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MUI', 'Redux', 'JWT', 'GitHub Actions'],
    bullets: [
      'Spearheaded end-to-end development of 6 core enterprise modules — Timesheet, Global Mobility, Expense Management, Performance Management, Leave Expert, and Offboarding (TheBridge Portal) — serving 3,500+ employees',
      'Architected TheBridge Portal, a comprehensive employee offboarding system with configurable multi-department approval chains and automated notifications, reducing manual coordination time by ~50%',
      'Designed and engineered secure RESTful APIs using Node.js/Express.js with role-based access control, validation middleware, and PostgreSQL integration to support audit trails and enterprise compliance',
      'Redesigned UI/UX for Leave Expert and Performance Review modules — reduced form completion time by 40% and decreased HR intervention tickets by 30% through workflow automation',
      'Applied code splitting and lazy loading across modules, improving Lighthouse performance score from 54 to 91 and reducing initial page load time by 60%',
      'Introduced a component-driven reusable UI library (React.js + MUI), standardising design patterns and reducing new feature development time by 25% across teams',
      'Mentored 5 junior engineers via code reviews and pair programming — 2 engineers independently delivered full-stack production features within 3 months',
      'Collaborated with QA, Backend, and DevOps in Agile/Scrum sprints to deliver 4 major releases on schedule with zero critical post-release defects',
    ],
  },
  {
    period: 'July 2022 — April 2024 · Gurugram',
    role: 'Software Engineer',
    company: 'Incedo Technology Solutions Limited',
    tags: ['React.js', 'Node.js', 'REST APIs', 'MUI', 'PostgreSQL', 'Agile'],
    bullets: [
      'Built and maintained Timesheet and Expense Management modules using React.js and REST APIs, enhancing usability for 3,500+ employees',
      'Refactored legacy UI into reusable React components, reducing code duplication by 25% and improving long-term maintainability',
      'Developed interactive dashboards and data filters using Material UI, increasing data accessibility for HR operations by 35%',
      'Collaborated with backend and QA teams in Agile sprints, ensuring on-time quality releases with unit testing and peer code reviews',
    ],
  },
];

export const MODULES: ModuleItem[] = [
  {
    icon: '🔄',
    name: 'Offboarding: TheBridge Portal',
    description: 'Comprehensive employee offboarding system with configurable multi-department clearance workflows, approval chains, and automated notifications — reducing manual coordination by 50%.',
    scale: 'React · Node.js · PostgreSQL · RBAC',
  },
  {
    icon: '⏱️',
    name: 'Timesheet Management',
    description: 'Enterprise-grade time tracking with project allocation, manager approvals, and export pipelines for payroll reconciliation serving 3,500+ employees.',
    scale: 'React · REST APIs · Reporting',
  },
  {
    icon: '✈️',
    name: 'Global Mobility',
    description: 'End-to-end cross-border employee assignment workflows — handling international logistics, documentation, and multi-step approvals at enterprise scale.',
    scale: 'React · PostgreSQL · Multi-step Flows',
  },
  {
    icon: '💸',
    name: 'Expense Management',
    description: 'Claim submission, multi-tier approval routing, category-wise budget tracking, and reimbursement status dashboards with interactive MUI filters.',
    scale: 'React · MUI · Dynamic Forms',
  },
  {
    icon: '🏆',
    name: 'Performance Management',
    description: 'Goal-setting, review cycles, rating calibration, and 360° feedback loops — UI/UX redesign reduced form completion time by 40% and HR tickets by 30%.',
    scale: 'React · Redux · Workflow Automation',
  },
  {
    icon: '🌿',
    name: 'Leave Expert Portal',
    description: 'Intelligent leave management with accrual engine, carryover rules, policy-based leave types, and configurable approval workflows — UI redesigned to cut completion time by 40%.',
    scale: 'React · Node.js · Rules Engine',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', percentage: 93 },
      { name: 'Next.js', percentage: 85 },
      { name: 'JavaScript (ES6+)', percentage: 90 },
      { name: 'TypeScript', percentage: 78 },
      { name: 'Redux / Context API', percentage: 85 },
      { name: 'MUI / Tailwind CSS', percentage: 88 },
      { name: 'HTML5 / CSS3', percentage: 90 },
    ],
  },
  {
    title: 'Backend, Data & Tools',
    skills: [
      { name: 'Node.js / Express.js', percentage: 80 },
      { name: 'PostgreSQL', percentage: 75 },
      { name: 'MongoDB', percentage: 68 },
      { name: 'REST API Design / JWT', percentage: 82 },
      { name: 'Jest / React Testing Library', percentage: 70 },
      { name: 'Git / GitHub / CI-CD', percentage: 85 },
      { name: 'Webpack / Performance Opt.', percentage: 78 },
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
  { icon: '📧', label: 'bs121297@gmail.com', href: 'mailto:bs121297@gmail.com' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/brijesh-12' },
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/Brijesh1220/Portfolio' },
  { icon: '📞', label: '+91 7007265236', href: 'tel:+917007265236' },
];