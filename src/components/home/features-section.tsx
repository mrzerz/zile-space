"use client";

import { motion } from "framer-motion";
import { Sparkles, BookOpen, Trophy, Zap, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Phonetic Matching",
    description:
      "Our AI analyzes the phonetic sound of Taiwanese words and finds the closest-sounding English phrases.",
    color: "from-blue-500 to-primary-600",
    bg: "bg-blue-50 dark:bg-blue-900/10",
    border: "border-blue-100 dark:border-blue-800/30",
  },
  {
    icon: BookOpen,
    title: "Curated Dictionary",
    description:
      "Browse thousands of verified Taiwanese-to-English phonetic mappings, scored by accuracy.",
    color: "from-violet-500 to-accent-600",
    bg: "bg-violet-50 dark:bg-violet-900/10",
    border: "border-violet-100 dark:border-violet-800/30",
  },
  {
    icon: Trophy,
    title: "Daily Rankings",
    description:
      "See what phrases are trending today, this week, and all time. Community-driven discovery.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50 dark:bg-amber-900/10",
    border: "border-amber-100 dark:border-amber-800/30",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Get multiple phonetic variations ranked by accuracy score in milliseconds.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/10",
    border: "border-emerald-100 dark:border-emerald-800/30",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description:
      "Build your personal collection of the funniest and most accurate phonetic phrases.",
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50 dark:bg-rose-900/10",
    border: "border-rose-100 dark:border-rose-800/30",
  },
  {
    icon: Globe,
    title: "Open API",
    description:
      "Full REST API access. Build apps, extensions, and integrations on top of Taiwanish.ai.",
    color: "from-sky-500 to-cyan-500",
    bg: "bg-sky-50 dark:bg-sky-900/10",
    border: "border-sky-100 dark:border-sky-800/30",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Everything you need to{" "}
            <span className="gradient-text">speak Taiwanese</span>
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            A complete platform for phonetic humor, language learning, and cultural connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${feature.bg} ${feature.border} hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
