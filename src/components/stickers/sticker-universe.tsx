"use client";

import { motion } from "framer-motion";

const worldLayers = [
  {
    icon: "🌌",
    layer: "宇宙層",
    items: ["喵喵星", "太空站", "星際旅行", "外星文明"],
    color: "from-slate-800 to-indigo-900",
    border: "border-indigo-800/40",
  },
  {
    icon: "🚀",
    layer: "任務層",
    items: ["MEO-07 地球觀察任務", "宇宙觀測員身份", "飛船故障事件", "喵星觀察局"],
    color: "from-indigo-900 to-violet-900",
    border: "border-violet-800/40",
  },
  {
    icon: "🏢",
    layer: "日常層",
    items: ["上班", "開會", "加班", "已讀不回", "社交黑洞"],
    color: "from-violet-900 to-purple-900",
    border: "border-purple-800/40",
  },
];

const humanLanguageDecoder = [
  { say: "收到", means: "我不一定會做" },
  { say: "沒事", means: "有事" },
  { say: "可以", means: "不一定可以" },
  { say: "哈哈", means: "我不知道要說什麼" },
  { say: "簡單改一下", means: "完全重做" },
  { say: "最後一次", means: "不是最後一次" },
  { say: "辛苦了", means: "今天又活下來了" },
  { say: "有空再約", means: "沒有下文" },
];

const evolutionLevels = [
  { level: "Level 1", phrase: "「好的。」" },
  { level: "Level 2", phrase: "「收到。」" },
  { level: "Level 3", phrase: "「了解。」" },
  { level: "Level 4", phrase: "「我確認一下。」" },
  { level: "Level 5", phrase: "「我晚點回覆。」" },
  { level: "最終型態", phrase: "已讀不回", isFinal: true },
];

export function StickerUniverse() {
  return (
    <section id="universe" className="py-24 px-4 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* World architecture */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">
              🌍 世界觀架構
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
              三層宇宙，一隻社畜貓
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
              最好笑的地方在於：宇宙級科技 × 人類級煩惱。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {worldLayers.map((layer, i) => (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`rounded-3xl bg-gradient-to-br ${layer.color} border ${layer.border} p-7 text-white`}
              >
                <div className="text-4xl mb-4">{layer.icon}</div>
                <h3 className="text-lg font-bold mb-4 text-white/90">{layer.layer}</h3>
                <ul className="space-y-2">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-white/70 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 p-5 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 text-center"
          >
            <p className="text-amber-800 dark:text-amber-300 font-medium">
              🚀 喵喵可以駕駛跨星系飛船，
              <span className="text-amber-600 dark:text-amber-400">
                但不知道主管說「方便聊一下嗎？」到底代表什麼。
              </span>
            </p>
          </motion.div>
        </div>

        {/* Two columns: Decoder + Evolution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Human language decoder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
                🔍 地球語言解碼器
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                人類說話翻譯機
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">
                喵喵花了整本報告研究這個。最終結論：「我不懂，但我也不想懂了。」
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-2 bg-zinc-100 dark:bg-zinc-800 px-5 py-2.5">
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  人類說
                </span>
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  真正意思
                </span>
              </div>
              {humanLanguageDecoder.map((row, i) => (
                <div
                  key={row.say}
                  className={`grid grid-cols-2 px-5 py-3.5 text-sm border-t border-zinc-100 dark:border-zinc-800 ${
                    i % 2 === 0 ? "bg-zinc-50/50 dark:bg-zinc-900/30" : ""
                  }`}
                >
                  <span className="font-medium text-zinc-900 dark:text-white">
                    「{row.say}」
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400">{row.means}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social skills evolution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-3">
                📈 喵喵進化史
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                社畜技能解鎖
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">
                從新人喵喵到最終型態，這是一段令人動容的成長故事。
              </p>
            </div>

            <div className="space-y-2">
              {evolutionLevels.map((item, i) => (
                <motion.div
                  key={item.level}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
                    item.isFinal
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 border-indigo-500 text-white"
                      : "bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800"
                  }`}
                >
                  <div
                    className={`text-xs font-mono font-bold shrink-0 w-20 ${
                      item.isFinal ? "text-indigo-200" : "text-zinc-400 dark:text-zinc-500"
                    }`}
                  >
                    {item.level}
                  </div>
                  <div className="flex-1">
                    <span
                      className={`font-semibold ${
                        item.isFinal
                          ? "text-white text-base"
                          : "text-zinc-800 dark:text-zinc-200 text-sm"
                      }`}
                    >
                      {item.phrase}
                    </span>
                  </div>
                  {item.isFinal && (
                    <span className="text-lg">🏆</span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-4 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 text-center">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                這個成長弧線，每一張貼圖都是你的日常。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
