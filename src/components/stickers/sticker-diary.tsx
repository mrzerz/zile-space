"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Satellite } from "lucide-react";

const entries = [
  {
    id: "001", emoji: "😑", tag: "社交語言",
    title: "關於「沒事」",
    observation: "人類明明很累，卻會說「沒事」。",
    detail: "觀察到人類在說「沒事」時，眼角下垂、嘴角微抿、呼吸比平時淺 0.3 倍。",
    conclusion: "「沒事」= 有事。確定度：99.7%。",
  },
  {
    id: "002", emoji: "🫠", tag: "通訊行為",
    title: "已讀不回現象",
    observation: "收到訊息 → 看訊息 → 放下手機 → 再看一次 → 不回覆。",
    detail: "此行為在工作日下午 3–5 點發生頻率最高。重複觀察 47 次，結果一致。",
    conclusion: "這是一種地球防禦機制。喵喵尚未破解。",
  },
  {
    id: "003", emoji: "😤", tag: "職場生態",
    title: "「簡單改一下」事件",
    observation: "主管說：「這個很簡單，改一下就好。」",
    detail: "實際工時：14.5 小時。涉及修改檔案：37 個。重做次數：3 次。心理損耗：無法計算。",
    conclusion: "「簡單」是人類最危險的形容詞之一。",
  },
  {
    id: "004", emoji: "😶", tag: "社交協議",
    title: "「有空再約」協議",
    observation: "人類 A 說「改天一起吃飯」，人類 B 說「好啊！」",
    detail: "持續追蹤 6 個地球月。後續約定：0 次。雙方見面：0 次。關係狀態：「朋友」。",
    conclusion: "「有空再約」是一種友善的拒絕儀式，而非真實邀請。",
  },
  {
    id: "005", emoji: "😭", tag: "職場危機",
    title: "下班前五分鐘法則",
    observation: "下班前五分鐘，主管發來：「方便聊一下嗎？」",
    detail: "此訊息造成的腎上腺素分泌量相當於中型星爆事件的 0.0001%，但對地球人影響力等同於直接碰撞。",
    conclusion: "「方便聊一下」= 今晚不能回家了。",
  },
  {
    id: "006", emoji: "🤔", tag: "日常謎題",
    title: "午餐選擇悖論",
    observation: "人類花費 47 分鐘決定要吃什麼，然後選了昨天吃的。",
    detail: "選項討論：「都可以」×5、「你決定」×3、「隨便」×8。最終決策耗時超過準備食物本身。",
    conclusion: "人類的決策系統有根本性漏洞。喵喵決定不理解這件事。",
  },
  {
    id: "007", emoji: "😌", tag: "通訊行為",
    title: "「收到」現象",
    observation: "人類傳送「收到」後，沒有執行對應任務。",
    detail: "追蹤 23 個案例，「收到」後實際執行率：34%。其中 12% 在截止日前一小時才執行。",
    conclusion: "「收到」是確認訊息的格式，不是承諾。喵喵已更新資料庫。",
  },
  {
    id: "008", emoji: "🫥", tag: "職場生態",
    title: "加班的悖論",
    observation: "人類說「不想加班」，但下班後仍繼續工作。",
    detail: "觀察到人類在加班時，同時抱怨加班。此行為持續發生，未見終止。喵喵嘗試理解，系統過熱。",
    conclusion: "人類對「下班」的定義，與喵星宇宙字典完全不同。",
  },
];

const tagColors: Record<string, string> = {
  "社交語言": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "通訊行為": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "職場生態": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "社交協議": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "職場危機": "bg-rose-500/10 text-rose-400 border-rose-500/20",
  "日常謎題": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export function StickerDiary() {
  const [expanded, setExpanded] = useState<string | null>("001");

  return (
    <section id="diary" className="py-24 px-4 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <Satellite size={13} />
            地球觀察紀錄
          </div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            喵喵的{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              人類觀察日記
            </span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">MEO-07 正在努力理解人類。進度：1.3%。</p>
        </motion.div>

        <div className="space-y-3">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <button
                onClick={() => setExpanded(expanded === entry.id ? null : entry.id)}
                className="w-full text-left rounded-2xl border transition-all duration-200
                  bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800
                  hover:border-indigo-300 dark:hover:border-indigo-700
                  focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              >
                <div className="flex items-center gap-4 px-5 py-4">
                  <span className="text-2xl shrink-0">{entry.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">🛰️ 觀察紀錄 {entry.id}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${tagColors[entry.tag] ?? ""}`}>{entry.tag}</span>
                    </div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white truncate">
                      {entry.title}：{entry.observation}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: expanded === entry.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-zinc-400 shrink-0 text-lg"
                  >
                    ↓
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {expanded === entry.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-zinc-100 dark:border-zinc-800">
                        <div className="grid sm:grid-cols-2 gap-4 mt-3">
                          <div className="rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 p-4">
                            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">觀察細節</p>
                            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{entry.detail}</p>
                          </div>
                          <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 border border-indigo-100 dark:border-indigo-800/30 p-4">
                            <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-2">喵喵結論</p>
                            <p className="text-sm font-medium text-zinc-900 dark:text-white leading-relaxed">{entry.conclusion}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center"
        >
          <p className="text-sm text-zinc-400 font-mono">
            MEO-07 任務日誌 · 人類理解進度：1.3% · 預計完成時間：不明
          </p>
        </motion.div>
      </div>
    </section>
  );
}
