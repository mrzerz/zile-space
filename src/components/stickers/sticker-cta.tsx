"use client";

import { motion } from "framer-motion";
import { Rocket, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINE_STORE_URL = "https://store.line.me/stickershop/author/6180514/zh-Hant";

const upcomingThemes = [
  { emoji: "💝", title: "戀愛觀察篇", desc: "喵喵試圖理解人類戀愛行為，徹底失敗。" },
  { emoji: "🛍️", title: "購物觀察篇", desc: "「這個我不需要，但我要買。」" },
  { emoji: "🍜", title: "飲食觀察篇", desc: "為什麼人類要花一小時決定要吃什麼。" },
];

export function StickerCTA() {
  return (
    <section id="upcoming" className="py-24 px-4 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Upcoming series */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-3">
              🔭 即將推出
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              喵喵的下一份觀察報告
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingThemes.map((theme, i) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {theme.emoji}
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">
                  {theme.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {theme.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  開發中
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="relative px-8 py-16 text-center space-y-6">
            <motion.div
              className="flex justify-center"
              animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imgess/s1/main.png"
                alt="喵喵"
                className="w-24 h-24 object-contain"
                style={{ filter: "drop-shadow(0 0 30px rgba(99,102,241,.5))" }}
              />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-black text-white">
              宇宙很大，先撐到下班。
            </h2>

            <p className="text-slate-400 max-w-lg mx-auto text-lg">
              LINE 貼圖現已上架。讓喵喵替你說出那些你說不出口的話。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                size="lg"
                className="gap-2 bg-white text-indigo-900 hover:bg-zinc-100 border-0 font-bold px-8 shadow-xl"
                asChild
              >
                <a href={LINE_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <Star size={18} />
                  前往 LINE 貼圖商店
                  <ChevronRight size={16} />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8"
                asChild
              >
                <a href="#character">
                  <Rocket size={18} />
                  查看完整 IP 設定
                </a>
              </Button>
            </div>

            <p className="text-slate-600 text-sm">
              MEO-07 · Space Cat Daily · 喵喵星出品
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
