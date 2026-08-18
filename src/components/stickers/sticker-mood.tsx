"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const LINE_STORE_URL = "https://store.line.me/stickershop/author/6180514/zh-Hant";

type MoodCardData = {
  packName: string;
  scenario: string;
  stars: number;
};

type MoodEntry = {
  key: string;
  emoji: string;
  label: string;
  desc: string;
  stickers: { s: string; i: number }[];
  cards: MoodCardData[];
  color: string;
};

function MoodCard({ card, color }: { card: MoodCardData; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileFocus={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="shrink-0 w-52 rounded-2xl border border-slate-700 bg-slate-900 p-4 flex flex-col gap-2 cursor-pointer focus:outline-none hover:border-indigo-500/60 transition-colors"
      tabIndex={0}
    >
      <p className="text-white text-sm font-semibold leading-snug">{card.packName}</p>
      <p className="text-slate-400 text-xs leading-relaxed">{card.scenario}</p>
      <div className="flex gap-0.5 mt-auto pt-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < card.stars ? "text-amber-400 fill-amber-400" : "text-slate-600"}
          />
        ))}
      </div>
      <a
        href={LINE_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={`mt-1 text-xs font-semibold text-center py-2 rounded-xl bg-gradient-to-r ${color} text-white flex items-center justify-center gap-1.5`}
      >
        <ExternalLink size={11} />
        LINE 商店
      </a>
    </motion.div>
  );
}

const moods: MoodEntry[] = [
  {
    key: "calm",
    emoji: "😎",
    label: "穩住",
    desc: "一切都在掌控中（假的）",
    stickers: [{ s: "s1", i: 1 }, { s: "s2", i: 3 }, { s: "s3", i: 5 }],
    cards: [
      { packName: "太空貓咪日常 Vol.1", scenario: "面對挑戰時裝作沒問題", stars: 4 },
      { packName: "太空貓咪日常 Vol.2", scenario: "被問到有沒有問題時", stars: 4 },
      { packName: "太空貓咪日常 Vol.3", scenario: "宇宙崩塌但我很穩", stars: 5 },
    ],
    color: "from-blue-600 to-cyan-600",
  },
  {
    key: "silent",
    emoji: "😑",
    label: "無言",
    desc: "說什麼都多餘",
    stickers: [{ s: "s1", i: 4 }, { s: "s2", i: 7 }, { s: "s3", i: 2 }],
    cards: [
      { packName: "太空貓咪日常 Vol.1", scenario: "主管說又要開會的瞬間", stars: 5 },
      { packName: "太空貓咪日常 Vol.2", scenario: "聽到「簡單改一下」時", stars: 5 },
      { packName: "太空貓咪日常 Vol.3", scenario: "無法回應人類邏輯時", stars: 4 },
    ],
    color: "from-zinc-600 to-slate-600",
  },
  {
    key: "collapse",
    emoji: "😭",
    label: "崩潰",
    desc: "今天到底發生了什麼",
    stickers: [{ s: "s1", i: 9 }, { s: "s2", i: 11 }, { s: "s3", i: 6 }],
    cards: [
      { packName: "太空貓咪日常 Vol.1", scenario: "截止日前一小時", stars: 5 },
      { packName: "太空貓咪日常 Vol.2", scenario: "已讀不回了三天之後", stars: 4 },
      { packName: "太空貓咪日常 Vol.3", scenario: "靈魂準備離體的時候", stars: 5 },
    ],
    color: "from-rose-600 to-pink-600",
  },
  {
    key: "noPower",
    emoji: "🫠",
    label: "沒電",
    desc: "靈魂已部分出竅",
    stickers: [{ s: "s1", i: 13 }, { s: "s2", i: 15 }, { s: "s3", i: 8 }],
    cards: [
      { packName: "太空貓咪日常 Vol.1", scenario: "下午三點後的每一刻", stars: 5 },
      { packName: "太空貓咪日常 Vol.2", scenario: "第五個小時的會議中", stars: 5 },
      { packName: "太空貓咪日常 Vol.3", scenario: "精神電量 1% 時", stars: 5 },
    ],
    color: "from-violet-600 to-purple-600",
  },
  {
    key: "watching",
    emoji: "😂",
    label: "看戲",
    desc: "這個跟我沒關係（才怪）",
    stickers: [{ s: "s2", i: 17 }, { s: "s3", i: 19 }, { s: "s1", i: 21 }],
    cards: [
      { packName: "太空貓咪日常 Vol.1", scenario: "別人的麻煩終於來了", stars: 4 },
      { packName: "太空貓咪日常 Vol.2", scenario: "群組發生衝突時", stars: 4 },
      { packName: "太空貓咪日常 Vol.3", scenario: "宇宙審判降臨他人", stars: 3 },
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    key: "escape",
    emoji: "🚀",
    label: "想逃",
    desc: "宇宙飛船在哪裡",
    stickers: [{ s: "s1", i: 23 }, { s: "s2", i: 20 }, { s: "s3", i: 24 }],
    cards: [
      { packName: "太空貓咪日常 Vol.1", scenario: "逃離星球的瞬間", stars: 5 },
      { packName: "太空貓咪日常 Vol.2", scenario: "中途放棄的藝術", stars: 4 },
      { packName: "太空貓咪日常 Vol.3", scenario: "最後的宇宙逃脫", stars: 4 },
    ],
    color: "from-indigo-600 to-violet-600",
  },
];

export function StickerMood() {
  const [selected, setSelected] = useState<string | null>(null);
  const mood = moods.find((m) => m.key === selected);

  return (
    <section id="mood" className="py-24 px-4 bg-gradient-to-b from-slate-950 to-indigo-950/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-4">
            🎯 今日情緒偵測
          </div>
          <h2 className="text-4xl font-bold text-white mb-3">
            你今天是哪種{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              喵？
            </span>
          </h2>
          <p className="text-slate-400 text-lg">選一個最像你現在狀態的，喵喵幫你找對應貼圖。</p>
        </motion.div>

        {/* Mood buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {moods.map((m, i) => (
            <motion.button
              key={m.key}
              onClick={() => setSelected(m.key === selected ? null : m.key)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`rounded-2xl p-4 text-center border-2 transition-all duration-200 focus:outline-none
                ${selected === m.key
                  ? `bg-gradient-to-br ${m.color} border-transparent shadow-xl`
                  : "bg-slate-900/60 border-slate-700 hover:border-slate-500"}`}
            >
              <span className="text-3xl block mb-2">{m.emoji}</span>
              <span className={`text-sm font-bold block ${selected === m.key ? "text-white" : "text-slate-200"}`}>{m.label}</span>
              <span className={`text-xs mt-1 block ${selected === m.key ? "text-white/80" : "text-slate-500"}`}>{m.desc}</span>
            </motion.button>
          ))}
        </div>

        {/* Result panel */}
        <AnimatePresence mode="wait">
          {mood ? (
            <motion.div
              key={mood.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden border border-slate-700"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${mood.color} px-7 py-5 flex items-center gap-3`}>
                <span className="text-3xl">{mood.emoji}</span>
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">今天的你是</p>
                  <h3 className="text-white text-xl font-black">{mood.label}型喵喵</h3>
                </div>
                <p className="ml-auto text-white/60 text-sm hidden sm:block">喵喵幫你推薦 3 張</p>
              </div>

              <div className="bg-slate-900 px-7 py-6 space-y-6">
                {/* Sticker preview grid */}
                <div className="grid grid-cols-3 gap-4">
                  {mood.stickers.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="aspect-square rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center hover:border-indigo-500 transition-colors"
                    >
                      <Image
                        src={`/imgess/${s.s}/${String(s.i).padStart(2, "0")}.png`}
                        alt={`${mood.label} 貼圖`}
                        width={160}
                        height={160}
                        className="w-full h-full object-contain p-3"
                        unoptimized
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Task 2.2 — MoodCard horizontal scroll strip */}
                <div className="overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                  <div className="flex gap-3" style={{ width: "max-content" }}>
                    {mood.cards.map((card, i) => (
                      <MoodCard key={i} card={card} color={mood.color} />
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-slate-800">
                  <Button size="sm" className={`gap-2 bg-gradient-to-r ${mood.color} border-0 text-white`} asChild>
                    <a href={LINE_STORE_URL} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} />
                      去 LINE 商店取得貼圖
                    </a>
                  </Button>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5"
                  >
                    <Shuffle size={13} />
                    重新選擇
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border-2 border-dashed border-slate-700 py-14 text-center"
            >
              <p className="text-slate-500 text-sm">← 選一個上面的心情，喵喵幫你找貼圖</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
