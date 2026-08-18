"use client";

import { motion } from "framer-motion";
import { Heart, Zap } from "lucide-react";

const MISSION_PROGRESS = 67;

const discoveries: string[] = [
  "人類有一種叫「週一」的天敵",
  "「簡單改一下」實際上是最危險的五個字",
  "地球咖啡的能量密度遠低於喵喵星燃料",
  "人類在截止日前進化速度最快",
  "「下班後再說」是一種時間膠囊",
  "人類說「沒事」的機率，與真的沒事呈反比",
];

const traits = [
  {
    icon: "😺",
    label: "慵懶",
    desc: "能不動就不動",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: "😑",
    label: "吐槽",
    desc: "毒舌但善良",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: "😎",
    label: "嘴硬",
    desc: "說好但心裡不好",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: "❤️",
    label: "意外可靠",
    desc: "關鍵時刻不缺席",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

const profile = [
  { key: "正式編號", value: "MEO-07" },
  { key: "種族", value: "太空貓・喵星人" },
  { key: "來自", value: "喵喵星" },
  { key: "現職", value: "地球生活實習生" },
  { key: "最大技能", value: "面對荒謬時保持冷靜" },
  { key: "最大弱點", value: "上班" },
  { key: "最常說", value: "「嗯……」" },
  { key: "核心願望", value: "平安活到下班" },
];

const appearances = [
  { icon: Zap, label: "棕灰虎斑貓臉", desc: "圓臉・大眼・虎斑紋" },
  { icon: Heart, label: "白橘太空服", desc: "最重要的品牌識別" },
  { icon: Zap, label: "大圓太空頭盔", desc: "耳朵永遠露在外面" },
  { icon: Heart, label: "MEO 任務徽章", desc: "胸口的星際身份" },
];

export function StickerCharacter() {
  return (
    <section id="character" className="py-24 px-4 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-2">
            🐱 角色介紹
          </div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
            認識{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              喵喵
            </span>
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            正式編號 MEO-07。宇宙觀測員。意外的地球社畜。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-0 rounded-2xl overflow-hidden"
          >
            {/* Cat image */}
            <div className="relative bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-900/50 p-8 text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-30"
                    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/imgess/s1/main.png"
                  alt="喵喵 MEO-07"
                  className="w-28 h-28 object-contain mx-auto"
                  style={{ filter: "drop-shadow(0 0 24px rgba(99,102,241,.5))" }}
                />
              </motion.div>
            </div>

            {/* Mission header bar */}
            <div className="bg-gradient-to-r from-indigo-950 to-slate-900 border-x border-t border-indigo-900/60 px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-indigo-400 text-xs font-mono uppercase tracking-widest mb-0.5">
                  MISSION DATABASE · RECORD 07
                </p>
                <h3 className="text-white font-black text-lg font-mono">MEO-07 / 喵喵</h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE
              </div>
            </div>

            {/* Progress bar */}
            <div className="bg-slate-950 border-x border-slate-800 px-5 py-4">
              <div className="flex justify-between text-xs text-slate-500 font-mono mb-2">
                <span>MISSION PROGRESS</span>
                <span>{MISSION_PROGRESS}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${MISSION_PROGRESS}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                />
              </div>
            </div>

            {/* Profile rows — all 8 fields retained */}
            <div className="border-x border-slate-800 overflow-hidden">
              {profile.map((item, i) => (
                <div
                  key={item.key}
                  className={`flex items-center justify-between px-5 py-3 text-sm font-mono
                    ${i !== profile.length - 1 ? "border-b border-slate-800/60" : ""}
                    ${i % 2 === 0 ? "bg-slate-900/40" : ""}`}
                >
                  <span className="text-slate-500 uppercase tracking-wider text-xs shrink-0 w-28">
                    {item.key}
                  </span>
                  <span className="text-indigo-300 text-right text-xs">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Discoveries list */}
            <div className="rounded-b-2xl bg-slate-900 border border-slate-800 border-t-0 px-5 py-4">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
                FIELD DISCOVERIES
              </p>
              <ul className="space-y-2">
                {discoveries.map((d, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="text-indigo-400 font-mono text-xs mt-0.5 shrink-0">▸</span>
                    {d}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Traits + Appearance + Expressions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Personality traits */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">個性特質</h3>
              <div className="grid grid-cols-2 gap-3">
                {traits.map((trait, i) => (
                  <motion.div
                    key={trait.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`p-4 rounded-2xl border ${trait.bg} ${trait.border} group hover:-translate-y-0.5 transition-transform duration-200`}
                  >
                    <div className="text-2xl mb-2">{trait.icon}</div>
                    <div className="font-semibold text-zinc-900 dark:text-white text-sm">{trait.label}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{trait.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Appearance */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">外型識別（Character Lock）</h3>
              <div className="space-y-3">
                {appearances.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-900 dark:text-white">{item.label}</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">{item.desc}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Expressions */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">表情幅度</h3>
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 border border-indigo-100 dark:border-indigo-800/30">
                <div className="flex flex-wrap gap-2">
                  {["😌 平靜", "😑 無語", "😭 崩潰", "😤 暴怒", "😆 狂喜", "😶 石化", "🫠 靈魂出竅"].map((expr) => (
                    <span
                      key={expr}
                      className="px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium"
                    >
                      {expr}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
                  喵喵不是普通的可愛貓。這個表情幅度才是貼圖最重要的喜劇武器。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
