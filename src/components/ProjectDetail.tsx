import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  Users,
  Flag,
  CheckCircle2,
  PlayCircle
} from 'lucide-react';
import { getSkillIcon } from '../utils/icons';
import { projects, getSkillColor, statusStyles } from './projectsData';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-24 flex flex-col items-center text-center gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">404</p>
        <h1 className="text-xl font-medium text-slate-900 dark:text-slate-50">Project not found</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
          This project may have been renamed or removed. Head back to see everything I've built.
        </p>
        <Link
          to="/#projects"
          className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to projects
        </Link>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const infoItems = [
    { label: 'Role', value: project.role, icon: Users },
    { label: 'Team', value: project.team, icon: Users },
    { label: 'Timeline', value: project.timeline, icon: Calendar },
    { label: 'Status', value: project.status, icon: Flag }
  ];

  return (
    <div className="py-8 space-y-10">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Link
          to="/#projects"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to projects
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="relative w-full aspect-video sm:aspect-[21/9] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-black/40"
      >
        <img
          alt={project.title}
          src={project.image}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 flex flex-col gap-2">
          <span
            className={`w-fit inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border ${statusStyles[project.status]}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {project.status}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
            {project.title}
          </h1>
        </div>
      </motion.div>

      {/* Info bar + links */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row lg:items-stretch gap-4"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
          {infoItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/50 p-3.5"
            >
              <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                <item.icon className="w-3 h-3" />
                <span className="font-mono text-[9px] uppercase tracking-widest">{item.label}</span>
              </div>
              <p className="mt-1.5 text-xs font-medium text-slate-800 dark:text-slate-100 leading-snug">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex sm:flex-col gap-2 shrink-0">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-md"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Site
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: overview + highlights + gallery */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
              Overview
            </h2>
            <div className="space-y-3">
              {project.longDescription.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
              Key Contributions
            </h2>
            <ul className="space-y-2.5">
              {project.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {project.media.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                {project.media.map((item, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900 aspect-video group"
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={item.caption ?? project.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <video
                        src={item.src}
                        controls
                        className="w-full h-full object-cover bg-black"
                      />
                    )}
                    {item.type === 'video' && (
                      <PlayCircle className="pointer-events-none absolute inset-0 m-auto w-8 h-8 text-white/90 drop-shadow" />
                    )}
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent px-3 py-2">
                        <p className="text-[10px] font-mono text-white/90">{item.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right: tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="lg:sticky lg:top-24 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/50 p-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => {
                const Icon = getSkillIcon(tag);
                return (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-2 py-1 text-[10px] uppercase tracking-wider font-mono rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400"
                  >
                    <Icon className={`w-3 h-3 ${getSkillColor(tag)}`} strokeWidth={1.2} />
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {otherProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-4 border-t border-slate-200 dark:border-slate-800"
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
            More Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.slug}`}
                className="group rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900/40 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
