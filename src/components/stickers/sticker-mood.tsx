"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const LINE_STORE_URL = "https://store.line.me/stickershop/author/6180514/zh-Hant";

const moods = [
  {
    key: "calm",
    emoji: "😎",
    label: "穩住",
    desc: "一切都在掌控中（假的）",
    stickers: [{ s: "s1", i: 1 }, { s: "s2", i: 3 }, { s: "s3", i: 5 }],
    color: "from-blue-600 to-cyan-600",
  },
  {
    key: "silent",
    emoji: "😑",
    label: "無言",
    desc: "說什麼都多餘",
    stickers: [{ s: "s1", i: 4 }, { s: "s2", i: 7 }, { s: "s3", i: 2 }],
    color: "from-zinc-600 to-slate-600",
  },
  {
    key: "collapse",
    emoji: "😭",
    label: "崩潰",
    desc: "今天到底發生了什麼",
    stickers: [{ s: "s1", i: 9 }, { s: "s2", i: 11 }, { s: "s3", i: 6 }],
    color: "from-rose-600 to-pink-600",
  },
  {
    key: "noPower",
    emoji: "🫠",
    label: "沒電",
    desc: "靈魂已部分出竅",
    stickers: [{ s: "s1", i: 13 }, { s: "s2", i: 15 }, { s: "s3", i: 8 }],
    color: "from-violet-600 to-purple-600",
  },
  {
    key: "watching",
    emoji: "😂",
    label: "看戲",
    desc: "這個跟我沒關係（才怪）",
    stickers: [{ s: "s2", i: 17 }, { s: "s3", i: 19 }, { s: "s1", i: 21 }],
    color: "from-amber-500 to-orange-500",
  },
  {
    key: "escape",
    emoji: "🚀",
    label: "想逃",
    desc: "宇宙飛船在哪裡",
    stickers: [{ s: "s1", i: 23 }, { s: "s2", i: 20 }, { s: "s3", i: 24 }],
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
              <div className={`bg-gradient-to-r ${mood.color} px-7 py-5 flex items-center gap-3`}>
                <span className="text-3xl">{mood.emoji}</span>
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">今天的你是</p>
                  <h3 className="text-white text-xl font-black">{mood.label}型喵喵</h3>
                </div>
                <p className="ml-auto text-white/60 text-sm hidden sm:block">喵喵幫你推薦 3 張</p>
              </div>
              <div className="bg-slate-900 px-7 py-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
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
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Button size="sm" className={`gap-2 bg-gradient-to-r ${mood.color} border-0 text-white`} asChild>
                    <a href={LINE_STORE_URL} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} />
                      去 LINE 商店取得貼圖
                    </a>
                  </Button>
                  <button onClick={() => setSelected(null)} className="text-sm text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5">
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
