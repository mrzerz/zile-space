"use client";

import { motion } from "framer-motion";

type QuoteItem = {
  text: string;
  tag?: string;
};

const QUOTES: QuoteItem[] = [
  { text: "今天又跨越了整個銀河系，但我還是遲到了。", tag: "上班中" },
  { text: "宇宙觀測報告：地球人類在每週一集體進入低能量模式。", tag: "週一早晨" },
  { text: "在開會第三個小時的時候，我短暫靈魂出竅前往喵喵星。", tag: "開會時" },
  { text: "研究發現：人類用「沒問題」表示有大問題。", tag: "工作日誌" },
  { text: "任務目標：活到下班。進度：47%。", tag: "下午三點" },
  { text: "地球的咖啡試圖幫助我，但效果僅持續二十分鐘。", tag: "下班後" },
  { text: "今天有人說「快速確認一下」，這件事花了九十分鐘。", tag: "無言日記" },
  { text: "這不是擺爛，是低功耗模式。", tag: "自我介紹" },
  { text: "我不是不努力，我只是正在省電。", tag: "週五下午" },
];

export function StickerQuotes() {
  return (
    <section id="quotes" className="py-24 px-4 bg-gradient-to-b from-zinc-950 to-slate-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-medium mb-4">
            💬 喵喵說
          </div>
          <h2 className="text-4xl font-bold text-white mb-3">
            MEO-07{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              任務語錄
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            直接從太空貓通訊紀錄解密的第一手觀察。
          </p>
        </motion.div>

        {/* Quote cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {QUOTES.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col gap-3 hover:border-violet-500/40 transition-colors duration-200"
            >
              <p className="text-slate-200 text-sm leading-relaxed flex-1">
                <span className="text-violet-400 font-bold text-lg mr-1 not-italic">"</span>
                {q.text}
                <span className="text-violet-400 font-bold text-lg ml-1 not-italic">"</span>
              </p>
              {q.tag && (
                <span className="self-start px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
                  {q.tag}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-600 text-xs font-mono mt-10"
        >
          MEO-07 通訊紀錄 · 解密日期：2026 · 部分訊號仍在傳輸中
        </motion.p>
      </div>
    </section>
  );
}
