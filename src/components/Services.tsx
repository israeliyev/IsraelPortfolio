import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Network,
  Server,
  LayoutTemplate,
  Database,
  Cloud,
  Workflow,
  GitBranch,
  ArrowRight,
  type LucideIcon
} from 'lucide-react';

interface CategoryColor {
  text: string;
  bg: string;
  border: string;
  ring: string;
  glow: string;
  bar: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  color: CategoryColor;
  skills: string[];
}

interface CoreSkill {
  name: string;
  level: number;
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: Server,
    color: {
      text: 'text-blue-500 dark:text-blue-400',
      bg: 'bg-blue-500',
      border: 'border-blue-500/30',
      ring: 'ring-blue-500/20',
      glow: 'group-hover:shadow-blue-500/20',
      bar: 'from-blue-600 to-blue-400'
    },
    skills: [
      'Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate',
      'REST APIs', 'RabbitMQ', 'Microservices', 'Hexagonal Architecture', 'Event-Driven Architecture'
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: LayoutTemplate,
    color: {
      text: 'text-violet-500 dark:text-violet-400',
      bg: 'bg-violet-500',
      border: 'border-violet-500/30',
      ring: 'ring-violet-500/20',
      glow: 'group-hover:shadow-violet-500/20',
      bar: 'from-violet-600 to-violet-400'
    },
    skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    color: {
      text: 'text-emerald-500 dark:text-emerald-400',
      bg: 'bg-emerald-500',
      border: 'border-emerald-500/30',
      ring: 'ring-emerald-500/20',
      glow: 'group-hover:shadow-emerald-500/20',
      bar: 'from-emerald-600 to-emerald-400'
    },
    skills: ['PostgreSQL', 'MySQL', 'SQL']
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: {
      text: 'text-amber-500 dark:text-amber-400',
      bg: 'bg-amber-500',
      border: 'border-amber-500/30',
      ring: 'ring-amber-500/20',
      glow: 'group-hover:shadow-amber-500/20',
      bar: 'from-amber-600 to-amber-400'
    },
    skills: ['Docker', 'Jenkins', 'Git', 'GitHub', 'Render', 'Netlify', 'Vercel', 'Cloudflare', 'Linux']
  },
  {
    id: 'engineering',
    title: 'Software Engineering',
    icon: Workflow,
    color: {
      text: 'text-rose-500 dark:text-rose-400',
      bg: 'bg-rose-500',
      border: 'border-rose-500/30',
      ring: 'ring-rose-500/20',
      glow: 'group-hover:shadow-rose-500/20',
      bar: 'from-rose-600 to-rose-400'
    },
    skills: [
      'System Design', 'API Design', 'Database Modeling', 'Problem Solving',
      'Clean Code', 'Performance Optimization', 'Debugging', 'CI/CD', 'Agile'
    ]
  }
];

const coreStack: CoreSkill[] = [
  { name: 'Java', level: 95, color: 'from-blue-600 to-blue-400' },
  { name: 'Spring Boot', level: 90, color: 'from-blue-600 to-blue-400' },
  { name: 'PostgreSQL', level: 85, color: 'from-emerald-600 to-emerald-400' },
  { name: 'Angular', level: 80, color: 'from-violet-600 to-violet-400' },
  { name: 'Docker', level: 78, color: 'from-amber-600 to-amber-400' },
  { name: 'RabbitMQ', level: 72, color: 'from-blue-600 to-blue-400' }
];

function CategoryRow({ category, index }: { category: SkillCategory; index: number }) {
  const [isOpen, setIsOpen] = useState(true);
  const Icon = category.icon;

  return (
      <div className="relative flex">
        {/* trunk dot */}
        <div className="relative z-10 flex w-10 sm:w-12 flex-shrink-0 justify-center pt-1">
          <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 300, damping: 18 }}
              className={`size-3 rounded-full ${category.color.bg} ring-4 ring-white dark:ring-slate-950 shadow-sm`}
          />
        </div>

        {/* content */}
        <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.25, duration: 0.4 }}
            className="flex-1 pb-8 pl-1"
        >
          <button
              onClick={() => setIsOpen((v) => !v)}
              className={`group inline-flex items-center gap-2.5 rounded-xl border ${category.color.border} bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm px-3.5 py-2 shadow-sm transition-all hover:shadow-lg ${category.color.glow}`}
          >
            <Icon className={`w-4 h-4 ${category.color.text}`} />
            <span className="text-xs font-semibold tracking-wide text-slate-800 dark:text-slate-100">
            {category.title}
          </span>
            <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">
            {category.skills.length}
          </span>
          </button>

          <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
          >
            <div className="mt-3 flex flex-wrap gap-2 pl-0.5">
              {category.skills.map((skill, i) => (
                  <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.35 + i * 0.03, duration: 0.3 }}
                      className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  >
                    {skill}
                  </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
  );
}

export default function Services() {
  return (
      <section id="skills" className="min-h-[50vh] w-full flex flex-col py-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
            >
              My <span className="font-dancing-script font-bold text-amber-500">Engineering</span> Skills.
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-1.5 text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-widest"
            >
              3+ years · Java Full Stack · 60+ microservices at SalesArt
            </motion.p>
          </div>
        </div>

        {/* Hub node */}
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center sm:justify-start sm:pl-0"
        >
          <div className="relative inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm px-5 py-3.5 shadow-xl shadow-slate-200/50 dark:shadow-black/40">
            <motion.span
                animate={{ boxShadow: ['0 0 0 0 rgba(59,130,246,0.35)', '0 0 0 8px rgba(59,130,246,0)'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                className="flex size-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400"
            >
              <Network className="w-4.5 h-4.5" />
            </motion.span>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Engineering Skills</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
                5 domains
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trunk + branches */}
        <div className="relative pl-0 sm:pl-4">
          <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top' }}
              className="absolute left-[19px] sm:left-[23px] top-0 bottom-8 w-px bg-gradient-to-b from-blue-400 via-slate-200 dark:via-slate-800 to-transparent"
          />

          <div className="flex flex-col">
            {skillCategories.map((category, index) => (
                <CategoryRow key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>

        {/* Core stack proficiency */}
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/50 backdrop-blur-sm p-5 sm:p-6 shadow-xl shadow-slate-200/50 dark:shadow-black/40"
        >
          <div className="mb-5 flex items-center gap-2">
            <GitBranch className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Core stack · daily driver
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {coreStack.map((skill, i) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-200/80 dark:bg-slate-800 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.8, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
            ))}
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
        >
          <a
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-md"
              href="#contact"
          >
            <span>Let's work together</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>
  );
}
