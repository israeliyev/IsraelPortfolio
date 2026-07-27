import realEstate1 from '../../assets/real-estate/1.png';
import realEstate2 from '../../assets/real-estate/2.png';
import realEstate3 from '../../assets/real-estate/3.png';
import realEstate4 from '../../assets/real-estate/4.png';
import realEstate5 from '../../assets/real-estate/5.png';
import realEstate6 from '../../assets/real-estate/6.png';
import realEstate7 from '../../assets/real-estate/7.png';
import realEstate8 from '../../assets/real-estate/8.png';
import realEstate9 from '../../assets/real-estate/9.png';
import realEstate10 from '../../assets/real-estate/10.png';
import realEstate11 from '../../assets/real-estate/11.png';
import metbix from '../../assets/metbix/1.png';
import corona from '../../assets/corona/1.png';
import electronics from '../../assets/electronics/1.png';

export type ProjectStatus = 'Live' | 'In Progress' | 'Completed' | 'Archived';

export interface ProjectMedia {
  type: 'image' | 'video';
  src: string;
  caption?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  image: string;
  media: ProjectMedia[];
  link: string;
  githubLink: string;
  tags: string[];
  status: ProjectStatus;
  role: string;
  team: string;
  timeline: string;
  highlights: string[];
}


export const projects: Project[] = [
  {
    id: 1,
    slug: 'real-estate-platform',
    title: 'Real Estate Platform',
    description:
      'A full-stack real estate site and management platform developed for a local real estate agency in Azerbaijan.',
    longDescription: [
      "Designed and developed a complete full-stack real estate platform from scratch, including a public website, an advanced administration panel, REST APIs, and a PostgreSQL database.",
      "The system consists of two Angular applications (Public Website & Admin Dashboard) and a Spring Boot backend deployed with Docker containers.",
      "The public website allows users to search and filter property listings, browse property details, manage favorite properties, submit new property requests with photos/videos, and contact the agency.",
      "The administration panel provides complete control over the platform, enabling dynamic management of property listings, categories, hierarchical filters, sections, agency information, user-generated requests, and website content without requiring code changes.",
      "I designed the platform to be highly configurable, allowing administrators to create new property categories, custom parameters, dropdown values, homepage sections, and filtering logic entirely through the admin interface.",
      "The system also includes analytical dashboards that track:",
      "• User activity over multiple time periods",
      "• Most viewed properties",
      "• Most favorited properties",
      "• Popular search categories",
      "• Property statistics",
      "Images and videos are automatically optimized before being uploaded to Cloudflare storage to reduce bandwidth and storage costs while maintaining a smooth user experience."
    ],
    image: realEstate1,
    media: [
      { type: 'image', src: realEstate1, caption: 'Home Page, Choosing Category' },
      { type: 'image', src: realEstate2, caption: 'Sending Request Post and Sections' },
      { type: 'image', src: realEstate3, caption: 'Basket and Footer' },
      { type: 'image', src: realEstate4, caption: 'Real Estate Detail' },
      { type: 'image', src: realEstate5, caption: 'Post List' },
      { type: 'image', src: realEstate6, caption: 'Admin Panel Statistics' },
      { type: 'image', src: realEstate7, caption: 'Admin Category Management' },
      { type: 'image', src: realEstate8, caption: 'Admin Parameter Management' },
      { type: 'image', src: realEstate9, caption: 'Post Create' },
      { type: 'image', src: realEstate10, caption: 'Manage Post Requests' },
      { type: 'image', src: realEstate11, caption: 'Manage Site Sections' }

    ],
    link: 'https://www.mingeceviremlak.az/',
    githubLink: 'https://github.com/israeliyev/real-estate-agency-mingachevir',
    tags: ['Java', 'Spring', 'Hibernate', 'Angular', 'REST APIs', 'PostgreSQL', 'Git', 'Docker', 'Render', 'Netlify', 'Vercel', 'Full Stack'],
    status: 'Live',
    role: 'Full Stack Developer (Solo)',
    team: 'Solo project',
    timeline: 'Jan 2025 — Mar 2025',
    highlights: [
      'Designed the PostgreSQL schema and REST API for listings, agents, and media',
      'Built a separate Angular admin panel for content and listing management',
      'Integrated Cloudflare for media storage and set up multi-provider deployment (Render, Netlify, Vercel)'
    ]
  },
  {
    id: 2,
    slug: 'metbix-b2b-marketplace',
    title: 'Metbix Global B2B Marketplace Platform',
    description:
      'Built a full-stack global B2B marketplace using Spring Boot and React with secure authentication, product management, quotation workflows, messaging, notifications, and enterprise business processes.',
    longDescription: [
      'Metbix is a global B2B marketplace connecting buyers and suppliers, built around real enterprise workflows: product catalogs, RFQ/quotation exchanges, buyer-supplier messaging, and notifications.',
      'The backend uses Spring Boot with Hibernate/JPA over MySQL and PostgreSQL, exposing REST APIs for authentication, product management, and quotation workflows. The frontend is a React application consuming those APIs with a focus on clear, enterprise-grade UX.'
    ],
    image: metbix,
    media: [{ type: 'image', src: metbix, caption: 'Marketplace overview' }],
    link: '',
    githubLink: 'https://github.com/israeliyev/metbix-marketplace-platform',
    tags: ['Java', 'Spring', 'Hibernate', 'React.js', 'REST APIs', 'PostgreSQL', 'Mysql', 'Git', 'Full Stack'],
    status: 'Completed',
    role: 'Full Stack Developer',
    team: 'Solo project',
    timeline: 'May 2022 - July 2022',
    highlights: [
      'Implemented secure authentication and role-based access for buyers and suppliers',
      'Built quotation (RFQ) workflows connecting product listings to buyer requests',
      'Added in-app messaging and notification systems for buyer-supplier communication'
    ]
  },
  {
    id: 3,
    slug: 'corona-tracker',
    title: 'Corona Tracker and Diagnostic',
    description:
      'A full-stack COVID-19 monitoring platform with real-time global statistics, interactive maps, country analytics, and a symptom-based self-assessment tool.',
    longDescription: [
      'A full-stack COVID-19 monitoring platform built with React.js and Node.js that surfaces real-time global pandemic statistics, interactive maps, and country-specific analytics.',
      'The app integrates external REST APIs for live case data and visualizes it with charts and geospatial maps, alongside a symptom-based self-assessment tool. It was primarily a project to sharpen frontend architecture, third-party API integration, and data visualization skills.'
    ],
    image: corona,
    media: [{ type: 'image', src: corona, caption: 'Global statistics dashboard' }],
    link: '',
    githubLink: 'https://github.com/israeliyev/covid-tracker-self-assessment',
    tags: ['React.js', 'Node.Js', 'Html', 'Css', 'Bootstrap', 'MySql'],
    status: 'Completed',
    role: 'Frontend Developer',
    team: 'Solo project',
    timeline: 'Feb 2021 - Mar 2021',
    highlights: [
      'Integrated live COVID-19 data from external REST APIs',
      'Built interactive geospatial maps and charts for country-level analytics',
      'Implemented a symptom-based self-assessment tool'
    ]
  },
  {
    id: 4,
    slug: 'electronics-store',
    title: 'Electronics Store E-Commerce Platform',
    description:
      'A full-stack electronics e-commerce application with product browsing, cart management, authentication, category management, and order processing.',
    longDescription: [
      'A full-stack e-commerce application for an electronics store, built with Java Spring MVC, JSP, JavaScript, HTML, CSS, and MySQL.',
      'Covers the core e-commerce flow end to end: product browsing and category filtering, shopping cart management, user authentication, and order processing, with a server-rendered JSP frontend on top of a Spring MVC backend.'
    ],
    image: electronics,
    media: [{ type: 'image', src: electronics, caption: 'Storefront' }],
    link: '',
    githubLink: 'https://github.com/israeliyev/Electronics-E-Commerce_Spring-MVC',
    tags: ['Java', 'JSP', 'REST APIs', 'Html', 'Css', 'MySql'],
    status: 'Completed',
    role: 'Full Stack Developer',
    team: 'Solo project',
    timeline: 'Aug 2020 - Sem 2020',
    highlights: [
      'Built product browsing and category management with Spring MVC + JSP',
      'Implemented shopping cart and order processing flows',
      'Added user authentication and session management'
    ]
  }
];

export const getSkillColor = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('node')) return 'text-emerald-500';
  if (s.includes('react')) return 'text-[#61DAFB]';
  if (s.includes('mongo')) return 'text-green-500';
  if (s.includes('redux')) return 'text-purple-500';
  if (s.includes('ios')) return 'text-slate-500 dark:text-slate-200';
  if (s.includes('android')) return 'text-emerald-400';
  if (s.includes('tailwind')) return 'text-cyan-400';
  if (s.includes('motion')) return 'text-pink-500';
  if (s.includes('full stack')) return 'text-fuchsia-500';
  if (s.includes('api')) return 'text-indigo-400';
  return 'text-slate-500 dark:text-slate-400';
};

export const statusStyles: Record<ProjectStatus, string> = {
  Live: 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-300',
  'In Progress': 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/30 dark:border-amber-800 dark:text-amber-300',
  Completed: 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300',
  Archived: 'bg-slate-100 border-slate-200 text-slate-600 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-400'
};