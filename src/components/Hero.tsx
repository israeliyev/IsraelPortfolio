import { motion } from 'motion/react';
import {
  TbCoffee,
  TbBrandAngular,
  TbBrandReact,
  TbBrandDocker,
  TbBrandAws,
  TbBrandGithub,
  TbApi,
  TbDatabase,
  TbCloud,
  TbBrain,
  TbServer,
  TbTopologyStar3
} from "react-icons/tb";

const techStack = [
  { name: "Java", icon: TbCoffee, color: "text-[#F89820]" },
  { name: "Spring Boot", icon: TbServer, color: "text-[#6DB33F]" },
  { name: "Microservices", icon: TbTopologyStar3, color: "text-cyan-500" },
  { name: "REST APIs", icon: TbApi, color: "text-blue-500" },
  { name: "PostgreSQL", icon: TbDatabase, color: "text-[#4169E1]" },
  { name: "Hibernate", icon: TbDatabase, color: "text-[#59666C]" },
  { name: "Docker", icon: TbBrandDocker, color: "text-[#2496ED]" },
  { name: "Kubernetes", icon: TbCloud, color: "text-[#326CE5]" },
  { name: "RabbitMQ", icon: TbTopologyStar3, color: "text-[#FF6600]" },
  { name: "Angular", icon: TbBrandAngular, color: "text-[#DD0031]" },
  { name: "React", icon: TbBrandReact, color: "text-[#61DAFB]" },
  { name: "Git", icon: TbBrandGithub, color: "text-white" },
  { name: "AI Integration", icon: TbBrain, color: "text-purple-500" }
];

export default function Hero() {
  return (
    <div className="space-y-4 pt-6 pb-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <h1 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50">
          <span className="font-dancing-script font-bold text-blue-600 dark:text-blue-400 relative">
            Building
          </span> engineering <br className="hidden md:block" />
          <span className="font-dancing-script font-bold text-emerald-600 dark:text-emerald-400 relative">
            for
          </span> <span className="relative inline-block"><span className="relative z-10">Scalable</span></span> Software <br className="hidden md:block" />
          <span className="font-dancing-script font-bold text-indigo-600 dark:text-indigo-400 relative">
            from
          </span> Idea to <span className="font-dancing-script font-bold text-amber-600 dark:text-amber-400 relative">
             Production
            <motion.svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-500/60 dark:text-amber-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <motion.path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              />
            </motion.svg>
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
          Full Stack Software Engineer with <span className="relative z-0 whitespace-nowrap"><span
            className="relative z-10 font-medium text-slate-800 dark:text-slate-200">3+ years of professional experience</span></span> building
          <span className="relative z-0 whitespace-nowrap"><span
              className="relative z-10 font-medium text-slate-800 dark:text-slate-200"> Java, Spring Boot, Angular, React, PostgreSQL, Docker,</span></span>
          and <span className="relative z-0 whitespace-nowrap"><span
            className="relative z-10 font-medium text-slate-800 dark:text-slate-200">cloud-based applications</span></span>.
          Passionate about designing <span className="relative z-0 whitespace-nowrap"><span
            className="relative z-10 font-medium text-slate-800 dark:text-slate-200">scalable software architectures</span><span
            className="absolute bottom-0 left-0 w-full h-1.5 bg-emerald-400/40 dark:bg-emerald-500/40 -z-10"></span></span>,
          solving complex engineering problems, and building reliable software from architecture to production.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full overflow-hidden relative pt-4"
      >
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-slate-950 z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-slate-950 z-10 pointer-events-none"></div>
        
        <style>{`
          @keyframes slide-marquee {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }
          .animate-slide-marquee {
            animation: slide-marquee 20s linear infinite;
          }
          .group:hover .animate-slide-marquee {
            animation-play-state: paused !important;
          }
        `}</style>
        <div className="flex overflow-hidden group">
          <div 
            className="flex gap-3 items-center py-2 whitespace-nowrap animate-slide-marquee"
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 shadow-sm hover:scale-105 transition-transform cursor-default">
                <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} strokeWidth={1.2} />
                <span className="font-medium text-[11px] font-mono">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
