"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, TrendingUp, Crown, Medal, Award } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { getRanking, type RankingEntry } from "@/lib/api";
import { getScoreBadgeColor, cn } from "@/lib/utils";

const MOCK_RANKING: RankingEntry[] = [
  { id: "1", english: "Lee Ho", taiwanese: "哩賀", score: 98.1, uses: 4821, favorites: 1293, rank: 1 },
  { id: "2", english: "Pie Say", taiwanese: "歹勢", score: 96.8, uses: 4203, favorites: 1187, rank: 2 },
  { id: "3", english: "Dor Xia", taiwanese: "多謝", score: 94.5, uses: 3876, favorites: 986, rank: 3 },
  { id: "4", english: "Lee Lee Log Log", taiwanese: "離離落落", score: 92.1, uses: 3241, favorites: 872, rank: 4 },
  { id: "5", english: "Bay Hiao", taiwanese: "袂曉", score: 91.2, uses: 2987, favorites: 734, rank: 5 },
  { id: "6", english: "Gone Lah", taiwanese: "去啦", score: 89.3, uses: 2654, favorites: 621, rank: 6 },
  { id: "7", english: "May Ann", taiwanese: "免啊", score: 88.4, uses: 2341, favorites: 578, rank: 7 },
  { id: "8", english: "Come You", taiwanese: "甘有", score: 85.7, uses: 2103, favorites: 493, rank: 8 },
  { id: "9", english: "Lina Should The We Could I Gone", taiwanese: "你若受到委屈要講", score: 87.3, uses: 1987, favorites: 456, rank: 9 },
  { id: "10", english: "Ho Jia Boh", taiwanese: "好食無", score: 83.2, uses: 1743, favorites: 389, rank: 10 },
];

function RankIcon({ rank }: { rank: number }) {
  if (rank === 1) return <Crown size={20} className="text-amber-400" />;
  if (rank === 2) return <Medal size={20} className="text-zinc-400" />;
  if (rank === 3) return <Award size={20} className="text-amber-700" />;
  return <span className="text-sm font-bold text-zinc-400 w-5 text-center">{rank}</span>;
}

function RankingRow({ entry, index }: { entry: RankingEntry; index: number }) {
  const isTop3 = entry.rank <= 3;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn(
        "flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft",
        isTop3
          ? "border-amber-200 bg-gradient-to-r from-amber-50/80 to-orange-50/80 dark:border-amber-800/40 dark:from-amber-900/10 dark:to-orange-900/10"
          : "border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-900/60"
      )}
    >
      {/* Rank */}
      <div className="w-8 flex justify-center flex-shrink-0">
        <RankIcon rank={entry.rank} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
          <span className="font-bold text-zinc-900 dark:text-white truncate">
            {entry.english}
          </span>
          <span className={cn(
            "text-xs font-semibold px-2 py-0.5 rounded-full border flex-shrink-0",
            getScoreBadgeColor(entry.score)
          )}>
            {entry.score.toFixed(1)}%
          </span>
        </div>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {entry.taiwanese}
        </span>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 flex-shrink-0 text-right">
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
            {entry.uses.toLocaleString()}
          </p>
          <p className="text-xs text-zinc-400">uses</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-rose-500">
            ♥ {entry.favorites.toLocaleString()}
          </p>
          <p className="text-xs text-zinc-400">favorites</p>
        </div>
      </div>
    </motion.div>
  );
}

function RankingList({ period }: { period: "today" | "week" | "month" | "all_time" }) {
  const [entries, setEntries] = useState<RankingEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await getRanking(period);
        setEntries(response.items);
      } catch {
        // Shuffle mock data slightly for different periods
        const shuffled = [...MOCK_RANKING].sort(() => Math.random() - 0.3).slice(0, 10);
        setEntries(shuffled.map((e, i) => ({ ...e, rank: i + 1 })));
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [period]);

  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800">
            <Skeleton className="w-8 h-8 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-10 w-20" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {entries.map((entry, i) => (
        <RankingRow key={entry.id} entry={entry} index={i} />
      ))}
    </div>
  );
}

export default function RankingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <Trophy size={20} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Rankings
            </h1>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <TrendingUp size={16} />
            Top 10 most used and loved phonetic phrases
          </p>
        </motion.div>

        <Tabs defaultValue="today">
          <TabsList className="mb-8">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
            <TabsTrigger value="all_time">All Time</TabsTrigger>
          </TabsList>

          {(["today", "week", "month", "all_time"] as const).map((period) => (
            <TabsContent key={period} value={period}>
              <RankingList period={period} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <Footer />
    </main>
  );
}
