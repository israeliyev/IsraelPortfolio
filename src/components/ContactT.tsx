import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Loader2, CheckCircle2, AlertCircle, User, MessageSquare } from 'lucide-react';


const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string;

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', message: '' };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactT() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name';
    if (!form.email.trim()) nextErrors.email = 'Please enter your email';
    else if (!isValidEmail(form.email)) nextErrors.email = 'Enter a valid email address';
    if (!form.message.trim()) nextErrors.message = 'Write a short message';
    else if (form.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error('Request failed');

      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full py-8 space-y-6">
      <div className="sm:pl-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          Get In <span className="font-dancing-script font-bold text-rose-500">Touch</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-1.5 text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-widest"
        >
          Have a project or an opening? Let's talk
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-6"
      >
        {/* Left: quick context */}
        <div className="lg:col-span-2 flex flex-col justify-between gap-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/50 backdrop-blur-sm p-6 shadow-xl shadow-slate-200/50 dark:shadow-black/40">
          <div className="space-y-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400">
              <Mail className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-base font-medium text-slate-900 dark:text-slate-100">
              Open to full-stack roles, freelance work, and interesting problems.
            </h3>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Drop a note about your project, role, or timeline and I'll get back to you as soon as I can — usually within a day or two.
            </p>
          </div>

          <a
            href="mailto:israelaliyev36@gmail.com"
            className="group inline-flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit"
          >
            <span className="font-mono">israelaliyev36@gmail.com</span>
          </a>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-3 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm p-6 shadow-xl shadow-slate-200/50 dark:shadow-black/40 space-y-4"
        >
          <div>
            <label htmlFor="contact-name" className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-400">
              <User className="w-3 h-3" />
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={form.name}
              onChange={handleChange('name')}
              placeholder="Jane Doe"
              disabled={status === 'loading'}
              className={`w-full rounded-xl border bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-colors focus:border-blue-400 dark:focus:border-blue-500 ${errors.name ? 'border-rose-400 dark:border-rose-500' : 'border-slate-200 dark:border-slate-800'}`}
            />
            {errors.name && <p className="mt-1 text-[11px] text-rose-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-400">
              <Mail className="w-3 h-3" />
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              placeholder="jane@company.com"
              disabled={status === 'loading'}
              className={`w-full rounded-xl border bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-colors focus:border-blue-400 dark:focus:border-blue-500 ${errors.email ? 'border-rose-400 dark:border-rose-500' : 'border-slate-200 dark:border-slate-800'}`}
            />
            {errors.email && <p className="mt-1 text-[11px] text-rose-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-400">
              <MessageSquare className="w-3 h-3" />
              Message
            </label>
            <textarea
              id="contact-message"
              value={form.message}
              onChange={handleChange('message')}
              placeholder="Tell me a bit about the role or project..."
              rows={4}
              disabled={status === 'loading'}
              className={`w-full resize-none rounded-xl border bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-colors focus:border-blue-400 dark:focus:border-blue-500 ${errors.message ? 'border-rose-400 dark:border-rose-500' : 'border-slate-200 dark:border-slate-800'}`}
            />
            {errors.message && <p className="mt-1 text-[11px] text-rose-500">{errors.message}</p>}
          </div>

          <div className="flex items-center justify-between gap-3 pt-1">
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.p
                  key="success"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Message sent — I'll be in touch soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-1.5 text-[11px] font-medium text-rose-500"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  Something went wrong. Please try again.
                </motion.p>
              )}
              {status === 'idle' && <span />}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
