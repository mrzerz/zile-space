"use client";

import { motion } from "framer-motion";
import { Heart, Cpu, HelpCircle, Mail } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const faqs = [
  {
    q: "What is Taiwanish.ai?",
    a: "Taiwanish.ai is an AI-powered phonetic meme generator. It takes Taiwanese (Taigi) phrases and converts them into English-looking words that sound like the original Taiwanese when spoken aloud.",
  },
  {
    q: "Is this a translation tool?",
    a: "No! This is NOT a translation tool. The English output has no direct meaning — it's purely phonetic. When you read the English words aloud, they sound like the Taiwanese original.",
  },
  {
    q: "What language does it support?",
    a: "Currently, Taiwanish.ai supports Taiwanese Hokkien (Taigi / Taiwanese Southern Min). We're working on adding more Chinese dialects in the future.",
  },
  {
    q: "How does the AI scoring work?",
    a: "Our AI uses phonetic similarity algorithms to compare the sound of English letter combinations with Taiwanese phonetics. A higher score means the English phrase sounds more like the original Taiwanese input.",
  },
  {
    q: "Can I use this via API?",
    a: "Yes! We offer a REST API. Check out our API Docs page for endpoints, examples, and authentication details.",
  },
  {
    q: "Is the data community-driven?",
    a: "Yes. While our AI generates the initial mappings, the community can vote, favorite, and suggest entries. Verified entries are reviewed by our team.",
  },
];

const techStack = [
  { name: "Next.js 15", desc: "Frontend framework", color: "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900" },
  { name: "FastAPI", desc: "Backend API", color: "bg-emerald-600 text-white" },
  { name: "PostgreSQL", desc: "Database", color: "bg-blue-700 text-white" },
  { name: "Prisma ORM", desc: "Database toolkit", color: "bg-indigo-600 text-white" },
  { name: "Tailwind CSS", desc: "Styling", color: "bg-cyan-600 text-white" },
  { name: "Framer Motion", desc: "Animations", color: "bg-pink-600 text-white" },
  { name: "Clerk", desc: "Authentication", color: "bg-violet-600 text-white" },
  { name: "Vercel", desc: "Hosting", color: "bg-zinc-800 text-white" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">

        {/* Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <Heart size={20} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Our Story
            </h1>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-4">
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Taiwanish.ai started as a joke that became a love letter to the Taiwanese language.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Growing up hearing Taigi at home, we noticed something funny — when you spell out the
              sounds in English letters, you get phrases that look like broken English but sound
              perfectly Taiwanese. <strong>&quot;歹勢&quot; → &quot;Pie Say&quot;</strong>. It&apos;s absurd. It&apos;s
              beautiful. It&apos;s Taiwanish.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We built an AI to do this at scale — mapping the phonetic space of Taiwanese Hokkien
              to English orthography. The result is something between a meme generator, a language
              learning tool, and a cultural archive.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Taiwanese is a living language. Every conversion here is a small act of preservation
              wrapped in humor.
            </p>
          </div>
        </motion.section>

        {/* Tech */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
          id="technology"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
              <Cpu size={20} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Technology
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 hover:-translate-y-0.5 transition-transform duration-200"
              >
                <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-bold mb-2 ${tech.color}`}>
                  {tech.name}
                </span>
                <p className="text-xs text-zinc-400">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
          id="faq"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <HelpCircle size={20} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="contact"
          className="p-8 rounded-3xl border border-zinc-200 bg-gradient-to-br from-primary-50/80 to-accent-50/50 dark:border-zinc-800 dark:from-primary-900/20 dark:to-accent-900/10 text-center"
        >
          <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
            <Mail size={22} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            Get in touch
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4">
            Questions, partnerships, press, or just want to say hi?
          </p>
          <a
            href="mailto:hello@taiwanish.ai"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-semibold hover:shadow-glow hover:scale-[1.02] transition-all duration-200"
          >
            <Mail size={16} />
            hello@taiwanish.ai
          </a>
        </motion.section>
      </div>
      <Footer />
    </main>
  );
}
