import {motion} from 'motion/react';
import {Calendar, ExternalLink} from 'lucide-react';
import {getSkillIcon} from '../utils/icons';
import salesart from '../../assets/bilgel_yazilim_logo.jpeg';

const experiences = [
  {
    id: 1,
    role: "Full Stack Java Developer",
    company: "SalesArt",
    companyUrl: "https://salesart.io/",
    date: "Oct 2024 - May 2026",
    location: "Remote / Istanbul, Turkiye",
    current: false,
    logo: salesart,
    description: [
      "Developed and maintained Java Spring Boot microservices within a 60+ service B2B ecosystem, contributing to products including SalesArt, SDO, SalesEye, and mobile-related platforms.",

      "Designed and enhanced RESTful APIs, integration services, and PostgreSQL data models using Hibernate/JPA and Criteria API.",

      "Built integration microservices using Hexagonal Architecture (Ports & Adapters), supporting synchronization of customer, product, warehouse, payment, and distributor data with external enterprise systems.",

      "Implemented event-driven communication using RabbitMQ and participated in CI/CD pipelines with Jenkins, Docker, and Portainer across development, staging, and production environments.",

      "Delivered new features, resolved production issues, performed code reviews, and collaborated with cross-functional teams in Agile development processes, including occasional Angular frontend contributions."
    ],
    skills: ["Java", "Spring", "Hibernate", "Angular", "PostgreSQL", "RabbitMq", "Docker", "Jenkins", "Porainer"]
  },
  {
    id: 2,
    role: "Full Stack Java Developer",
    company: "SalesArt",
    companyUrl: "https://salesart.io/",
    date: "June 2022 - July 2023",
    location: "Remote / Istanbul, Turkiye",
    current: false,
    logo: salesart,
    description: [
      "Contributed to backend development of the SalesArt B2B platform using Java, Spring Boot, PostgreSQL, and Hibernate/JPA.",

      "Developed and maintained REST APIs, supported sales channel, CRM, and inventory management services, and participated in Agile planning, estimation, and delivery activities.",

      "Worked within Docker-based environments, supported deployment workflows, resolved defects, and contributed to feature releases through collaborative development and code reviews.",
    ],
    skills: ["Java", "Spring", "Hibernate", "Angular", "PostgreSQL"]
  }
];

export default function Experience() {

  return (
    <section id="experience" className="w-full relative mt-8 mb-8">
      <div className="mb-6 sm:pl-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          My <span className="font-dancing-script font-bold text-blue-500">Work</span> History.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-1.5 text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-widest"
        >
          Some of my latest works
        </motion.p>
      </div>

      <div className="relative">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative pl-8 border-l-2 border-transparent ml-4 sm:ml-6 ${index !== experiences.length - 1 ? 'pb-6' : ''}`}
          >
            <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
            <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-blue-500" />
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full ring-4 ring-white dark:ring-slate-950 bg-blue-500" />

            <div className="group -ml-2">
              <div 
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 select-none"
              >
                <div className="flex items-start gap-3">
                  <img alt={exp.company} loading="lazy" className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 object-cover mt-0.5" src={exp.logo} />
                  <div>
                    <h3 className="text-base font-medium font-inter text-slate-900 dark:text-slate-100 flex flex-wrap items-center gap-2 leading-tight">
                      {exp.role}
                      {exp.current && (
                        <span className="inline-flex gap-1 items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-emerald-50 border-emerald-200 border text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-300">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                          Current
                        </span>
                      )}
                    </h3>
                    {exp.companyUrl ? (
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 font-medium text-xs mt-1 flex items-center gap-1 w-fit transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.company}
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ) : (
                      <div className="text-slate-600 dark:text-slate-400 font-medium text-xs mt-1 flex items-center gap-1">
                        {exp.company}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto text-[11px] text-slate-600 dark:text-slate-400 font-mono gap-1 mt-2 sm:mt-0">
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                      📍
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:ml-14 pt-1">

                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 list-disc list-outside ml-4 mb-3">
                  {exp.description.map((desc, i) => (
                      <li key={i} className="leading-relaxed">
                        {desc}
                      </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, i) => {
                    const Icon = getSkillIcon(skill);

                    return (
                        <span
                            key={i}
                            className="flex items-center gap-1 px-2 py-0.5 text-[9px] font-mono rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50"
                        >
                    <Icon className="w-3 h-3" strokeWidth={1.2} />
                          {skill}
                </span>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
