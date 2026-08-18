"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const SERIES = [
  { key: "s1",    label: "I 進化版",   count: 24 },
  { key: "s2",    label: "II 進化版",  count: 24 },
  { key: "s3",    label: "III 進化版", count: 24 },
  { key: "s4",    label: "IV 進化版",  count: 24 },
  { key: "s5",    label: "V 進化版",   count: 24 },
  { key: "s6",    label: "VI 進化版",  count: 24 },
  { key: "s7",    label: "VII 進化版", count: 24 },
  { key: "s8bit", label: "初代 8-Bit", count: 24 },
];

function imgSrc(seriesKey: string, n: number) {
  return `/imgess/${seriesKey}/${String(n).padStart(2, "0")}.png`;
}

export function StickerGallery() {
  const [activeSeries, setActiveSeries] = useState("s1");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const currentSeries = SERIES.find((s) => s.key === activeSeries)!;
  const images = Array.from({ length: currentSeries.count }, (_, i) =>
    imgSrc(activeSeries, i + 1)
  );

  const openLightbox = useCallback((idx: number) => setLightboxIdx(idx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const navLightbox = useCallback(
    (dir: number) => {
      setLightboxIdx((prev) =>
        prev === null ? 0 : (prev + dir + images.length) % images.length
      );
    },
    [images.length]
  );

  return (
    <section id="gallery" className="py-24 px-4 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-2">
            🖼️ 貼圖圖庫
          </div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
            喵喵的{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              觀察紀錄
            </span>
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            點擊任一張可放大查看。8 個系列，192 張貼圖全覽。
          </p>
        </motion.div>

        {/* Series tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {SERIES.map((s) => (
            <button
              key={s.key}
              onClick={() => setActiveSeries(s.key)}
              className={`px-4 py-2 rounded-full text-sm font-600 border transition-all duration-200 font-semibold ${
                activeSeries === s.key
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-transparent shadow-lg shadow-indigo-500/25"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-700"
              }`}
            >
              {s.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={activeSeries}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3"
        >
          {images.map((src, idx) => (
            <motion.button
              key={src}
              onClick={() => openLightbox(idx)}
              className="aspect-square rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-indigo-500"
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Image
                src={src}
                alt={`${currentSeries.label} 貼圖 ${idx + 1}`}
                width={120}
                height={120}
                className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
              onClick={closeLightbox}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 flex items-center justify-center transition-colors z-10"
                aria-label="關閉"
              >
                <X size={18} />
              </button>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 flex items-center justify-center transition-colors z-10"
                aria-label="上一張"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Image */}
              <motion.div
                key={lightboxIdx}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative"
              >
                <Image
                  src={images[lightboxIdx]}
                  alt={`貼圖 ${lightboxIdx + 1}`}
                  width={480}
                  height={480}
                  className="max-w-[min(480px,85vw)] max-h-[80vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
                  unoptimized
                />
              </motion.div>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); navLightbox(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 flex items-center justify-center transition-colors z-10"
                aria-label="下一張"
              >
                <ChevronRight size={20} />
              </button>

              {/* Counter */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-zinc-800/90 border border-zinc-700 text-zinc-300 text-sm font-medium">
                {lightboxIdx + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
