"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Share2, Heart, Check, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type GenerateResult } from "@/lib/api";
import { copyToClipboard, shareText, getScoreBadgeColor, cn } from "@/lib/utils";
import { toast } from "sonner";

interface ResultCardProps {
  result: GenerateResult;
  index: number;
  input: string;
}

export function ResultCard({ result, index, input }: ResultCardProps) {
  const [copied, setCopied] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(result.english);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    shareText(
      `"${input}" in Taiwanese sounds like "${result.english}" in English! 😄\n\nTry it at Taiwanish.ai`
    );
    toast.success("Shared!");
  };

  const handleFavorite = () => {
    setFavorited(!favorited);
    toast.success(favorited ? "Removed from favorites" : "Added to favorites!");
  };

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(result.english);
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const isTopResult = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "group relative flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5",
        isTopResult
          ? "border-primary-200 bg-gradient-to-r from-primary-50/80 to-accent-50/80 shadow-glow dark:border-primary-800/50 dark:from-primary-900/20 dark:to-accent-900/20"
          : "border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-soft dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
      )}
    >
      {isTopResult && (
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-semibold">
            Best Match
          </span>
        </div>
      )}

      <div className="flex-1 min-w-0 pr-4">
        <p
          className={cn(
            "font-bold tracking-wide truncate",
            isTopResult
              ? "text-2xl text-zinc-900 dark:text-white"
              : "text-xl text-zinc-800 dark:text-zinc-100"
          )}
        >
          {result.english}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className={cn(
            "text-xs font-semibold px-2 py-0.5 rounded-full border",
            getScoreBadgeColor(result.score)
          )}>
            {result.score.toFixed(1)}% match
          </span>
          {result.romanization && (
            <span className="text-xs text-zinc-400">{result.romanization}</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={handleSpeak}
          className="p-2 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200"
          title="Listen"
          aria-label="Listen to pronunciation"
        >
          <Volume2 size={15} />
        </button>
        <button
          onClick={handleFavorite}
          className={cn(
            "p-2 rounded-lg transition-all duration-200",
            favorited
              ? "text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20"
              : "text-zinc-400 hover:text-rose-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          )}
          title="Favorite"
          aria-label="Add to favorites"
        >
          <Heart size={15} className={favorited ? "fill-current" : ""} />
        </button>
        <button
          onClick={handleShare}
          className="p-2 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200"
          title="Share"
          aria-label="Share"
        >
          <Share2 size={15} />
        </button>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200"
          title="Copy"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check size={15} className="text-emerald-500" />
          ) : (
            <Copy size={15} />
          )}
        </button>
      </div>
    </motion.div>
  );
}
