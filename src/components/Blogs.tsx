import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 0,
    title: "Building Reliable Enterprise Microservices",
    excerpt: "Lessons I Learned from Developing Large-Scale B2B Systems. Why a Monolithic Architecture Wasn't Enough?. Why We Introduced RabbitMQ?. Event-Driven Processing. Handling Distributed Failures. REST for Synchronous Communication. Keeping Business Logic Maintainable. Performance Matters. Team Collaboration.",
    date: "July 15, 2026",
    readTime: "5 min read",
    link: "https://dev.to/israeliyev/building-reliable-enterprise-microservices-lessons-i-learned-from-developing-large-scale-b2b-1kdp"
  }
];

export default function Blogs() {

  return (
    <section id="blogs" className="w-full py-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div className="space-y-2 pl-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-50"
          >
            Latest <span className="font-dancing-script font-bold text-violet-500">Writings</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs text-slate-500 dark:text-slate-400 font-mono"
          >
            Thoughts on development, design, and entrepreneurship.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {blogs.map((blog, index) => (
          <motion.a 
            key={blog.id}
            href={blog.link}
            aria-label={`Read article: ${blog.title}`}
            target="_blank" 
            rel="noopener noreferrer" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col h-full bg-white dark:bg-slate-900/40 rounded-2xl overflow-hidden hover:shadow-xl shadow-sm dark:shadow-none transition-all duration-300 ease-in-out border border-slate-200 dark:border-slate-800"
          >
            <div className="absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative flex flex-col grow py-4 px-4 transition-all duration-300 ease-in-out z-10">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 mb-3 leading-snug">
                {blog.title}
              </h3>
              
              <p className="text-xs tracking-wide text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 grow leading-relaxed">
                {blog.excerpt}
              </p>
              
              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1 px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <time>{blog.date}</time>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
