"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResultCard } from "@/components/home/result-card";
import { Skeleton } from "@/components/ui/skeleton";
import { generatePhrase, type GenerateResult } from "@/lib/api";
import { toast } from "sonner";

const EXAMPLES = [
  { taiwanese: "歹勢", english: "Pie Say" },
  { taiwanese: "哩賀", english: "Lee Ho" },
  { taiwanese: "袂曉", english: "Bay Hiao" },
  { taiwanese: "離離落落", english: "Lee Lee Log Log" },
];

const PLACEHOLDER_EXAMPLES = [
  "Type Taiwanese... e.g. 歹勢",
  "試試看... e.g. 你好",
  "Enter Taigi... e.g. 多謝",
  "什麼都可以輸入...",
];

export function Hero() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<GenerateResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % PLACEHOLDER_EXAMPLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGenerate = async () => {
    if (!input.trim()) {
      toast.error("Please enter some Taiwanese text first.");
      return;
    }
    setLoading(true);
    setHasGenerated(true);
    try {
      const response = await generatePhrase(input.trim());
      setResults(response.results);
    } catch {
      toast.error("Failed to generate. Make sure the backend is running.");
      // Show mock results for demo
      setResults([
        { english: "Pie Say", score: 96.8 },
        { english: "By Say", score: 88.2 },
        { english: "Pee Say", score: 79.4 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      handleGenerate();
    }
  };

  const handleExample = (taiwanese: string) => {
    setInput(taiwanese);
    textareaRef.current?.focus();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative w-full max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-300">
            <Zap size={14} className="text-primary-500" />
            AI-Powered Phonetic Generator
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
            <span className="block text-zinc-900 dark:text-white">Looks</span>
            <span className="block gradient-text">English.</span>
            <span className="block text-zinc-900 dark:text-white">
              Sounds{" "}
              <span className="relative">
                Taiwanese.
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 gradient-bg rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </span>
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Type any Taiwanese phrase and our AI converts it into{" "}
            <span className="text-zinc-900 dark:text-white font-semibold">
              English-looking words
            </span>{" "}
            that sound exactly like Taigi when spoken aloud.
          </p>
        </motion.div>

        {/* Input area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-2xl mx-auto"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 gradient-bg rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500" />

            <div className="relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-soft overflow-hidden transition-all duration-300 group-focus-within:border-primary-400 group-focus-within:shadow-glow">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={PLACEHOLDER_EXAMPLES[placeholderIndex]}
                className="w-full bg-transparent px-5 pt-5 pb-3 text-lg text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 resize-none focus:outline-none min-h-[120px]"
                maxLength={500}
              />

              <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-100 dark:border-zinc-800">
                <span className="text-xs text-zinc-400">
                  {input.length}/500 · Press{" "}
                  <kbd className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-500 text-xs font-mono">
                    Ctrl+Enter
                  </kbd>{" "}
                  to generate
                </span>
                <Button
                  onClick={handleGenerate}
                  loading={loading}
                  size="default"
                  className="gap-2"
                >
                  <Sparkles size={16} />
                  Generate
                  <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick examples */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2"
        >
          <span className="text-sm text-zinc-400 self-center">Try:</span>
          {EXAMPLES.map((ex) => (
            <button
              key={ex.taiwanese}
              onClick={() => handleExample(ex.taiwanese)}
              className="px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-sm text-zinc-700 dark:text-zinc-300 font-medium transition-all duration-200 hover:scale-105 flex items-center gap-1.5"
            >
              <span className="text-zinc-500 dark:text-zinc-400">{ex.taiwanese}</span>
              <ArrowRight size={10} className="text-zinc-400" />
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                {ex.english}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {hasGenerated && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl mx-auto space-y-3"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Results
                </h2>
                {!loading && results.length > 0 && (
                  <span className="text-sm text-zinc-400">
                    {results.length} variations
                  </span>
                )}
              </div>

              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800"
                    >
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-7 w-40" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-10 w-16 rounded-xl" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {results.map((result, index) => (
                    <ResultCard
                      key={index}
                      result={result}
                      index={index}
                      input={input}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
