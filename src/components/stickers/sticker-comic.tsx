"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";

type Chapter = {
  number: number;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  status: "published" | "coming";
};

const chapters: Chapter[] = [
  {
    number: 1,
    title: "初來地球的觀察員",
    subtitle: "喵喵抵達地球的第一天，發現人類每天都在做一件叫「上班」的事。",
    image: "/comics/chapter-01.png",
    date: "2026.08",
    status: "published",
  },
  {
    number: 2,
    title: "已讀不回的秘密",
    subtitle: "喵喵嘗試與人類通訊，卻遭遇了宇宙中最神秘的現象。",
    image: "",
    date: "即將推出",
    status: "coming",
  },
  {
    number: 3,
    title: "開會是什麼",
    subtitle: "喵喵被邀請參加一個叫「會議」的活動，從此再也不同了。",
    image: "",
    date: "即將推出",
    status: "coming",
  },
];

export function StickerComic() {
  const [lightbox, setLightbox] = useState(false);
  const published = chapters.filter((c) => c.status === "published");
  const coming = chapters.filter((c) => c.status === "coming");

  return (
    <section id="comic" className="py-24 px-4 bg-gradient-to-b from-indigo-950/40 to-zinc-950">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-medium mb-4">
            <BookOpen size={13} />
            四格漫畫連載中
          </div>
          <h2 className="text-4xl font-bold text-white mb-3">
            太空貓咪日常{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              漫畫版
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            喵喵的地球觀察紀錄，現在有了圖像版。
          </p>
        </motion.div>

        {/* Published chapters */}
        {published.map((ch, i) => (
          <motion.div
            key={ch.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="mb-8"
          >
            {/* Chapter label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold">
                第 {ch.number} 章
              </div>
              <h3 className="text-xl font-black text-white">{ch.title}</h3>
              <span className="text-slate-500 text-xs font-mono ml-auto">{ch.date}</span>
            </div>

            {/* Comic image — clickable to lightbox */}
            <motion.button
              onClick={() => setLightbox(true)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full rounded-2xl overflow-hidden border border-indigo-900/50 shadow-2xl shadow-indigo-900/30 group relative block focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={`放大查看第 ${ch.number} 章`}
            >
              <Image
                src={ch.image}
                alt={`太空貓咪日常 第${ch.number}章 ${ch.title}`}
                width={1200}
                height={680}
                className="w-full h-auto"
                unoptimized
                priority
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-indigo-950/0 group-hover:bg-indigo-950/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn size={22} className="text-white" />
                </div>
              </div>
            </motion.button>

            {/* Description */}
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">{ch.subtitle}</p>
          </motion.div>
        ))}

        {/* Coming soon grid */}
        {coming.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-widest">即將連載</span>
              <div className="flex-1 h-px bg-slate-800" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coming.map((ch) => (
                <div
                  key={ch.number}
                  className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-6 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 font-mono font-bold text-slate-500 text-sm">
                    {ch.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-slate-300 font-semibold text-sm">{ch.title}</p>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{ch.subtitle}</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-600 shrink-0 mt-0.5" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md"
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 flex items-center justify-center transition-colors z-10"
              aria-label="關閉"
            >
              <X size={18} />
            </button>

            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <Image
                src="/comics/chapter-01.png"
                alt="太空貓咪日常 第1章 初來地球的觀察員"
                width={1200}
                height={680}
                className="w-full h-auto rounded-2xl shadow-2xl"
                unoptimized
              />
              <p className="text-center text-slate-500 text-xs mt-3 font-mono">
                太空貓咪日常 · 第一章 END · 點擊空白處關閉
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
