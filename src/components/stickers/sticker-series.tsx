"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINE_STORE_URL = "https://store.line.me/stickershop/author/6180514/zh-Hant";

const series = [
  {
    number: "Vol.1",
    title: "上班生存指南",
    subtitle: "職場篇",
    emoji: "💼",
    count: 24,
    desc: "從「好的」到已讀不回，每一張都是你今天的心情。",
    tags: ["加班", "開會", "收到", "了解", "辛苦了"],
    color: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50 dark:bg-blue-900/10",
    border: "border-blue-200 dark:border-blue-800/30",
    badge: "最受歡迎",
    badgeColor: "bg-blue-500",
    previews: ["😺", "😑", "😭", "🫠", "😤", "😶"],
  },
  {
    number: "Vol.2",
    title: "社交黑洞",
    subtitle: "人際關係篇",
    emoji: "💬",
    count: 24,
    desc: "「有空再約」「沒事」「哈哈」。喵喵試圖解讀人類語言，徹底失敗。",
    tags: ["已讀不回", "有空再約", "沒事", "哈哈", "收到"],
    color: "from-violet-600 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-900/10",
    border: "border-violet-200 dark:border-violet-800/30",
    badge: "黑色幽默",
    badgeColor: "bg-violet-500",
    previews: ["😌", "😅", "🙄", "😑", "😶", "🫣"],
  },
  {
    number: "Vol.3",
    title: "宇宙觀察報告",
    subtitle: "無厘頭・崩潰篇",
    emoji: "🔭",
    count: 24,
    desc: "喵喵把所有觀察寫成報告，最後整本只剩一句：「我不懂，但我也不想懂了。」",
    tags: ["崩潰", "放棄", "靈魂出竅", "無語", "搞笑"],
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50 dark:bg-rose-900/10",
    border: "border-rose-200 dark:border-rose-800/30",
    badge: "新上架",
    badgeColor: "bg-emerald-500",
    previews: ["😭", "🤯", "😵", "🫠", "😆", "😤"],
  },
];

export function StickerSeries() {
  return (
    <section id="series" className="py-24 px-4 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-2">
            📦 貼圖系列
          </div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
            三套系列，72 張貼圖
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            全部都是喵喵的《地球人類觀察日記》。同一個世界觀，不同的荒謬日常。
          </p>
        </motion.div>

        {/* Series cards */}
        <div className="space-y-6">
          {series.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl border ${s.bg} ${s.border} overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300`}
            >
              <div className="p-7 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Left: Icon + number */}
                  <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:text-center sm:w-24 shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-105 transition-transform duration-300`}
                    >
                      {s.emoji}
                    </div>
                    <div>
                      <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                        {s.number}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {s.count} 張
                      </div>
                    </div>
                  </div>

                  {/* Center: Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        {s.title}
                      </h3>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {s.subtitle}
                      </span>
                      <span
                        className={`${s.badgeColor} text-white text-xs font-medium px-2.5 py-0.5 rounded-full`}
                      >
                        {s.badge}
                      </span>
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {s.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Preview emojis + button */}
                  <div className="flex flex-row sm:flex-col items-center gap-4">
                    {/* Emoji preview grid */}
                    <div className="grid grid-cols-3 gap-1.5">
                      {s.previews.map((emoji, j) => (
                        <motion.div
                          key={j}
                          className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center text-xl"
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {emoji}
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      size="sm"
                      className={`gap-1.5 bg-gradient-to-r ${s.color} border-0 text-white shadow-md whitespace-nowrap`}
                      asChild
                    >
                      <a href={LINE_STORE_URL} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={13} />
                        前往商店
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
