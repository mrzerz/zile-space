"use client";

import { motion } from "framer-motion";
import { Shield, Star, Heart, Zap } from "lucide-react";

const traits = [
  {
    icon: "😺",
    label: "慵懶",
    desc: "能不動就不動",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: "😑",
    label: "吐槽",
    desc: "毒舌但善良",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: "😎",
    label: "嘴硬",
    desc: "說好但心裡不好",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: "❤️",
    label: "意外可靠",
    desc: "關鍵時刻不缺席",
    color: "from-rose-500 to-pink-500",
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
  { icon: Shield, label: "棕灰虎斑貓臉", desc: "圓臉・大眼・虎斑紋" },
  { icon: Star, label: "白橘太空服", desc: "最重要的品牌識別" },
  { icon: Zap, label: "大圓太空頭盔", desc: "耳朵永遠露在外面" },
  { icon: Heart, label: "MEO 任務徽章", desc: "胸口的星際身份" },
];

export function StickerCharacter() {
  return (
    <section id="character" className="py-24 px-4 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
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
          {/* Left: Character card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Big emoji display */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-900/50 p-10 text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
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
              <h3 className="text-2xl font-black text-white mb-1 mt-3">喵喵</h3>
              <p className="text-indigo-400 text-sm font-mono">MEO-07 · Space Cat</p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                現正在地球實習中
              </div>
            </div>

            {/* Profile table */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              {profile.map((item, i) => (
                <div
                  key={item.key}
                  className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                    i !== profile.length - 1
                      ? "border-b border-zinc-100 dark:border-zinc-800"
                      : ""
                  } ${i % 2 === 0 ? "bg-zinc-50/50 dark:bg-zinc-900/30" : ""}`}
                >
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium w-28 shrink-0">
                    {item.key}
                  </span>
                  <span className="text-zinc-900 dark:text-zinc-100 text-right font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Traits + Appearance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Personality traits */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                個性特質
              </h3>
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
                    <div className="font-semibold text-zinc-900 dark:text-white text-sm">
                      {trait.label}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {trait.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Appearance features */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                外型識別（Character Lock）
              </h3>
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
                        <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                          {item.label}
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                          {item.desc}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Expression range */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                表情幅度
              </h3>
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 border border-indigo-100 dark:border-indigo-800/30">
                <div className="flex flex-wrap gap-2 text-sm">
                  {["😌 平靜", "😑 無語", "😭 崩潰", "😤 暴怒", "😆 狂喜", "😶 石化", "🫠 靈魂出竅"].map(
                    (expr) => (
                      <span
                        key={expr}
                        className="px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium"
                      >
                        {expr}
                      </span>
                    )
                  )}
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
