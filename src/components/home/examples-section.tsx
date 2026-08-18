"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const examples = [
  { taiwanese: "歹勢", hanzi: "Pie Say", meaning: "Sorry / Excuse me", score: 96.8 },
  { taiwanese: "離離落落", hanzi: "Lee Lee Log Log", meaning: "Scattered / Messy", score: 92.1 },
  { taiwanese: "你若受到委屈要講", hanzi: "Lina Should The We Could I Gone", meaning: "Tell me if you feel wronged", score: 87.3 },
  { taiwanese: "多謝", hanzi: "Dor Xia", meaning: "Thank you", score: 94.5 },
  { taiwanese: "袂曉", hanzi: "Bay Hiao", meaning: "Don't know how to", score: 91.2 },
  { taiwanese: "哩賀", hanzi: "Lee Ho", meaning: "Hello", score: 98.1 },
];

export function ExamplesSection() {
  return (
    <section className="py-24 px-4 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-sm font-medium dark:bg-accent-900/20 dark:border-accent-800 dark:text-accent-300">
            Community Favorites
          </div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
            See it in action
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            Real Taiwanese phrases turned into phonetic English gold
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.taiwanese}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-5 rounded-2xl border border-zinc-200 bg-white hover:border-primary-200 hover:shadow-soft transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-primary-800/50 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl font-black text-zinc-900 dark:text-white">
                  {ex.taiwanese}
                </span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-800/30">
                  {ex.score}%
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-primary-500 flex-shrink-0" />
                <span className="text-xl font-bold text-primary-600 dark:text-primary-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {ex.hanzi}
                </span>
              </div>

              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                {ex.meaning}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
