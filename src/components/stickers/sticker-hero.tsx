"use client";

import { motion } from "framer-motion";
import { Rocket, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINE_STORE_URL = "https://store.line.me/stickershop/author/6180514/zh-Hant";

const floatingEmojis = [
  { emoji: "🚀", x: "10%", y: "20%", delay: 0 },
  { emoji: "⭐", x: "85%", y: "15%", delay: 0.5 },
  { emoji: "🌙", x: "5%", y: "65%", delay: 1 },
  { emoji: "✨", x: "90%", y: "55%", delay: 0.3 },
  { emoji: "🪐", x: "15%", y: "80%", delay: 0.8 },
  { emoji: "💫", x: "80%", y: "80%", delay: 0.6 },
];

export function StickerHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Space background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-slate-950 via-indigo-950/50 to-zinc-950 dark:from-slate-950 dark:via-indigo-950/50 dark:to-zinc-950" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Starfield */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.1,
            }}
            animate={{ opacity: [null, 0.1, 0.8] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating space decorations */}
      {floatingEmojis.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl select-none pointer-events-none hidden md:block"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.9, 1.1, 0.9],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      <div className="relative w-full max-w-5xl mx-auto text-center space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
            <Rocket size={14} className="text-indigo-400" />
            LINE 貼圖系列
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {/* Cat image as main visual */}
          <motion.div
            className="mb-4 flex justify-center"
            animate={{
              y: [0, -16, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imgess/s1/main.png"
              alt="太空貓咪喵喵 MEO-07"
              className="w-40 h-40 object-contain"
              style={{ filter: "drop-shadow(0 0 40px rgba(99,102,241,.5))" }}
            />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white">
            <span className="block">太空貓咪日常</span>
            <span className="block mt-3 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl font-bold">
              Space Cat Daily
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mt-6">
            一隻來自宇宙的貓，努力理解人類。
          </p>

          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            宇宙可以跨越星系，但牠還是不懂：<br className="hidden sm:block" />
            主管說的「簡單改一下」到底是什麼意思。
          </p>
        </motion.div>

        {/* Slogan card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-block"
        >
          <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-violet-600/20 border border-indigo-500/30 backdrop-blur-sm">
            <p className="text-lg sm:text-xl font-bold text-white tracking-wide">
              🚀 宇宙很大，先撐到下班。
            </p>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 border-0 text-white shadow-lg shadow-indigo-500/25 px-8"
            asChild
          >
            <a href={LINE_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Star size={18} />
              前往 LINE 貼圖商店
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8"
            asChild
          >
            <a href="#character">
              <Zap size={18} />
              看更多角色設定
            </a>
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-slate-800"
        >
          {[
            { value: "72+", label: "貼圖數量" },
            { value: "3", label: "系列主題" },
            { value: "MEO-07", label: "主角編號" },
            { value: "2026", label: "宇宙年份" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
