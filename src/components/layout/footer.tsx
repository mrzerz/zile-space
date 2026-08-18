import Link from "next/link";

const LINE_STORE_URL = "https://store.line.me/stickershop/author/6180514/zh-Hant";

const footerLinks = {
  貼圖系列: [
    { label: "Vol.1 上班生存指南", href: LINE_STORE_URL },
    { label: "Vol.2 社交黑洞", href: LINE_STORE_URL },
    { label: "Vol.3 宇宙觀察報告", href: LINE_STORE_URL },
    { label: "全部系列", href: LINE_STORE_URL },
  ],
  角色世界: [
    { label: "認識喵喵", href: "/stickers#character" },
    { label: "世界觀架構", href: "/stickers#universe" },
    { label: "人類語言解碼器", href: "/stickers#universe" },
    { label: "社畜進化史", href: "/stickers#universe" },
  ],
  關於: [
    { label: "太空貓咪日常", href: "/stickers" },
    { label: "LINE 貼圖商店", href: LINE_STORE_URL },
    { label: "即將推出", href: "/stickers#upcoming" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-base shadow-lg">
                🐱
              </div>
              <span className="font-bold text-lg">
                <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  太空貓咪
                </span>
                <span className="text-zinc-400 text-sm font-normal ml-1">日常</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              一隻來自宇宙的貓，努力理解人類。<br />
              宇宙很大，先撐到下班。
            </p>
            <div className="space-y-2">
              <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                MEO-07 · Space Cat Daily
              </p>
              <a
                href={LINE_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-indigo-500 hover:text-indigo-400 transition-colors duration-200 font-medium"
              >
                🛍️ LINE 貼圖商店 →
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">
            © 2026 太空貓咪日常 Space Cat Daily. All rights reserved.
          </p>
          <p className="text-sm text-zinc-400">
            宇宙很大，先撐到下班。🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
