"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Terminal, Key, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

function CodeBlock({ code, language = "json" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className={cn(
        "rounded-2xl p-5 text-sm font-mono overflow-x-auto",
        "bg-zinc-950 text-zinc-100 border border-zinc-800",
        "dark:bg-zinc-900 dark:border-zinc-700"
      )}>
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  );
}

const endpoints = [
  {
    method: "POST",
    path: "/api/v1/generate",
    description: "Convert Taiwanese text to English-looking phonetic phrases",
    requestBody: `{
  "text": "歹勢"
}`,
    response: `{
  "results": [
    { "english": "Pie Say", "score": 96.8 },
    { "english": "By Say", "score": 88.2 },
    { "english": "Pee Say", "score": 79.4 }
  ],
  "input": "歹勢",
  "processing_time_ms": 124
}`,
  },
  {
    method: "POST",
    path: "/api/v1/dictionary/search",
    description: "Search the Taiwanese-English phonetic dictionary",
    requestBody: `{
  "query": "hello",
  "sort": "score",
  "order": "desc",
  "page": 1,
  "page_size": 20
}`,
    response: `{
  "items": [
    {
      "id": "abc123",
      "english": "Lee Ho",
      "taiwanese": "哩賀",
      "meaning": "Hello",
      "score": 98.1,
      "verified": true,
      "pronunciation": "/liː hoʊ/",
      "created_at": "2025-01-01T00:00:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "page_size": 20
}`,
  },
  {
    method: "POST",
    path: "/api/v1/rank",
    description: "Get top-ranked phonetic phrases by time period",
    requestBody: `{
  "period": "today"
}`,
    response: `{
  "items": [
    {
      "id": "abc123",
      "english": "Lee Ho",
      "taiwanese": "哩賀",
      "score": 98.1,
      "uses": 4821,
      "favorites": 1293,
      "rank": 1
    }
  ],
  "period": "today"
}`,
  },
  {
    method: "POST",
    path: "/api/v1/favorite",
    description: "Toggle favorite status for a dictionary entry",
    requestBody: `{
  "entry_id": "abc123",
  "user_id": "user_xyz"
}`,
    response: `{
  "favorited": true
}`,
  },
];

const methodColors: Record<string, string> = {
  GET: "bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:border-emerald-800",
  POST: "bg-blue-500/10 text-blue-600 border-blue-200 dark:border-blue-800",
  PUT: "bg-amber-500/10 text-amber-600 border-amber-200 dark:border-amber-800",
  DELETE: "bg-rose-500/10 text-rose-600 border-rose-200 dark:border-rose-800",
};

export default function DocsPage() {
  const [activeEndpoint, setActiveEndpoint] = useState(0);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <Terminal size={20} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
              API Documentation
            </h1>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            Integrate Taiwanish.ai into your apps with our simple REST API.
          </p>
        </motion.div>

        {/* Base URL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 p-5 rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} className="text-primary-500" />
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              Base URL
            </span>
          </div>
          <code className="text-sm font-mono text-primary-600 dark:text-primary-400">
            https://api.taiwanish.ai/api/v1
          </code>
        </motion.div>

        {/* Authentication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
          id="auth"
        >
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            <Key size={20} />
            Authentication
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4">
            Include your API key in the request header:
          </p>
          <CodeBlock
            code={`Authorization: Bearer your_api_key_here`}
            language="bash"
          />
        </motion.div>

        {/* Endpoints */}
        <div id="rest">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
            Endpoints
          </h2>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="lg:w-56 flex-shrink-0">
              <div className="sticky top-24 space-y-1">
                {endpoints.map((ep, i) => (
                  <button
                    key={ep.path}
                    onClick={() => setActiveEndpoint(i)}
                    className={cn(
                      "w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all duration-200",
                      activeEndpoint === i
                        ? "bg-primary-50 text-primary-700 font-medium dark:bg-primary-900/20 dark:text-primary-300"
                        : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "text-xs font-bold px-1.5 py-0.5 rounded border",
                        methodColors[ep.method]
                      )}>
                        {ep.method}
                      </span>
                    </div>
                    <span className="block mt-1 text-xs font-mono truncate">
                      {ep.path.split("/").pop()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 space-y-6">
              {endpoints.map((ep, i) => (
                <motion.div
                  key={ep.path}
                  id={`endpoint-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeEndpoint === i ? 1 : 0.4 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={cn(
                      "text-sm font-bold px-2.5 py-1 rounded-lg border",
                      methodColors[ep.method]
                    )}>
                      {ep.method}
                    </span>
                    <code className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
                      {ep.path}
                    </code>
                  </div>

                  <p className="text-zinc-500 dark:text-zinc-400">{ep.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                        Request Body
                      </h4>
                      <CodeBlock code={ep.requestBody} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                        Response
                      </h4>
                      <CodeBlock code={ep.response} />
                    </div>
                  </div>

                  {i < endpoints.length - 1 && (
                    <div className="border-b border-zinc-100 dark:border-zinc-800 pt-2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
