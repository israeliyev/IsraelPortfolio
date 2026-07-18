import {motion} from 'motion/react';
import {Link} from 'react-router-dom';
import {ArrowUpRight, ExternalLink, Github} from 'lucide-react';
import {getSkillIcon} from '../utils/icons';
import {projects, getSkillColor} from './projectsData';

export default function Projects() {
    return (
        <section id="projects" className="space-y-4 py-8">
            <div className="mb-6 sm:pl-4">
                <motion.h2
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
                >
                    My <span className="font-dancing-script font-bold text-emerald-500">Projects</span> Featured.
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.1}}
                    className="mt-1.5 text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-widest"
                >
                    Some of my latest works
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: index * 0.1}}
                        className="group relative flex flex-col
                        bg-slate-50
                        dark:bg-slate-900/40
                        border border-slate-200/60 dark:border-slate-800/60 rounded-2xl
                        overflow-hidden hover:-translate-y-2
                        hover:shadow-2xl
                      hover:border-blue-300
                      dark:hover:border-blue-700 hover:shadow-slate-200/50 dark:hover:shadow-black/50
                        transition-all duration-500 ease-out h-full"
                    >
                        <Link to={`/projects/${project.slug}`} className="relative w-full aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0 block">
                            <div
                                className="absolute inset-0 opacity-40 dark:opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <img
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 opacity-90 group-hover:opacity-100"
                                src={project.image}
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/60 sm:from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-white/90 dark:bg-slate-950/90 text-slate-800 dark:text-slate-100 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                                View Details
                                <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </Link>

                        <div className="flex flex-col grow p-4 sm:p-5 space-y-2 justify-start">
                            <div className="flex items-start justify-between gap-3">
                                <Link to={`/projects/${project.slug}`}>
                                    <h3 className="cursor-pointer font-mono text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </Link>
                                <div className="flex items-center gap-2">

                                    {project.githubLink && (
                                        <a target="_blank" aria-label={`View ${project.title} on GitHub`}
                                           href={project.githubLink}
                                           className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0">
                                            <Github className="w-3.5 h-3.5"/>
                                        </a>
                                    )}
                                    {project.link && (
                                        <a target="_blank" aria-label={`View ${project.title}`} href={project.link}
                                           className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0">
                                            <ExternalLink className="w-3.5 h-3.5"/>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="pt-1.5 flex flex-wrap gap-1.5">
                                {project.tags.map((tag, i) => {
                                    const Icon = getSkillIcon(tag);
                                    return (
                                        <span key={i}
                                              className="flex items-center gap-1 px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                      <Icon className={`w-3 h-3 ${getSkillColor(tag)}`} strokeWidth={1.2}/>
                                            {tag}
                    </span>
                                    );
                                })}
                            </div>

                            <Link
                                to={`/projects/${project.slug}`}
                                className="pt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:gap-1.5 transition-all w-fit"
                            >
                                View project details
                                <ArrowUpRight className="w-3 h-3" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
