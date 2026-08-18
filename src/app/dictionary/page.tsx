"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Heart, ArrowUpDown, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { searchDictionary, type DictionaryEntry } from "@/lib/api";
import { debounce, getScoreBadgeColor, cn } from "@/lib/utils";
import { toast } from "sonner";

const SORT_OPTIONS = [
  { value: "score", label: "Score" },
  { value: "english", label: "Alphabetical" },
  { value: "created_at", label: "Newest" },
];

// Mock data for demo when API is offline
const MOCK_ENTRIES: DictionaryEntry[] = [
  { id: "1", english: "Pie Say", taiwanese: "歹勢", meaning: "Sorry / Excuse me", score: 96.8, verified: true, pronunciation: "/paɪ seɪ/", created_at: "2025-01-01" },
  { id: "2", english: "Lee Ho", taiwanese: "哩賀", meaning: "Hello / How are you", score: 98.1, verified: true, pronunciation: "/liː hoʊ/", created_at: "2025-01-02" },
  { id: "3", english: "Bay Hiao", taiwanese: "袂曉", meaning: "Don't know how to", score: 91.2, verified: true, pronunciation: "/beɪ hiaʊ/", created_at: "2025-01-03" },
  { id: "4", english: "Dor Xia", taiwanese: "多謝", meaning: "Thank you", score: 94.5, verified: true, pronunciation: "/dɔːr ʃiæ/", created_at: "2025-01-04" },
  { id: "5", english: "Lee Lee Log Log", taiwanese: "離離落落", meaning: "Scattered / Messy", score: 92.1, verified: false, pronunciation: "/liː liː lɒɡ lɒɡ/", created_at: "2025-01-05" },
  { id: "6", english: "Gone Lah", taiwanese: "去啦", meaning: "Let's go / Already gone", score: 89.3, verified: true, pronunciation: "/ɡɒn lɑː/", created_at: "2025-01-06" },
  { id: "7", english: "Come You", taiwanese: "甘有", meaning: "Really? / Is that so?", score: 85.7, verified: false, pronunciation: "/kʌm juː/", created_at: "2025-01-07" },
  { id: "8", english: "May Ann", taiwanese: "免啊", meaning: "No need / Don't bother", score: 88.4, verified: true, pronunciation: "/meɪ æn/", created_at: "2025-01-08" },
];

function DictionaryCard({ entry, index }: { entry: DictionaryEntry; index: number }) {
  const [favorited, setFavorited] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-soft transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-xl font-bold text-zinc-900 dark:text-white truncate">
              {entry.english}
            </span>
            {entry.verified && (
              <CheckCircle2 size={15} className="text-primary-500 flex-shrink-0" />
            )}
            <span className={cn(
              "text-xs font-semibold px-2 py-0.5 rounded-full border",
              getScoreBadgeColor(entry.score)
            )}>
              {entry.score.toFixed(1)}%
            </span>
          </div>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            {entry.taiwanese}
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setFavorited(!favorited);
            toast.success(favorited ? "Removed from favorites" : "Saved to favorites");
          }}
          className={cn(
            "p-2 rounded-lg transition-all duration-200 flex-shrink-0",
            favorited
              ? "text-rose-500 bg-rose-50 dark:bg-rose-900/20"
              : "text-zinc-300 hover:text-rose-400 hover:bg-zinc-100 dark:text-zinc-600 dark:hover:bg-zinc-800"
          )}
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={16} className={favorited ? "fill-current" : ""} />
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide w-24">
                  Meaning
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  {entry.meaning}
                </span>
              </div>
              {entry.pronunciation && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide w-24">
                    IPA
                  </span>
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-400">
                    {entry.pronunciation}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide w-24">
                  Status
                </span>
                <span className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded-full",
                  entry.verified
                    ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20"
                    : "bg-amber-50 text-amber-600 dark:bg-amber-900/20"
                )}>
                  {entry.verified ? "Verified" : "Community"}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function DictionaryPage() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"score" | "english" | "created_at">("score");
  const [entries, setEntries] = useState<DictionaryEntry[]>(MOCK_ENTRIES);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(MOCK_ENTRIES.length);
  const [page, setPage] = useState(1);

  const fetchEntries = useCallback(
    async (searchQuery: string, sortBy: string, pageNum: number) => {
      setLoading(true);
      try {
        const response = await searchDictionary({
          query: searchQuery || undefined,
          sort: sortBy as "score" | "english" | "created_at",
          order: sortBy === "english" ? "asc" : "desc",
          page: pageNum,
          page_size: 20,
        });
        setEntries(response.items);
        setTotal(response.total);
      } catch {
        // Use mock data when API is offline
        const filtered = MOCK_ENTRIES.filter(
          (e) =>
            !searchQuery ||
            e.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
            e.taiwanese.includes(searchQuery) ||
            e.meaning.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setEntries(filtered);
        setTotal(filtered.length);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const debouncedFetch = useCallback(
    debounce((q: string, s: string, p: number) => fetchEntries(q, s, p), 300),
    [fetchEntries]
  );

  useEffect(() => {
    debouncedFetch(query, sort, page);
  }, [query, sort, page, debouncedFetch]);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 space-y-3"
        >
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Dictionary
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Browse {total.toLocaleString()} phonetic Taiwanese-to-English mappings
          </p>
        </motion.div>

        {/* Search and filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <Input
              placeholder="Search English, Taiwanese, or meaning..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSort(opt.value as typeof sort)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-all duration-200",
                    sort === opt.value
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <Button variant="secondary" size="icon" className="h-11 w-11 rounded-xl" aria-label="Filter">
              <SlidersHorizontal size={16} />
            </Button>
          </div>
        </motion.div>

        {/* Stats bar */}
        <div className="flex items-center justify-between mb-6 text-sm text-zinc-400">
          <span>
            {loading ? "Loading..." : `${entries.length} results`}
            {query && ` for "${query}"`}
          </span>
          <div className="flex items-center gap-1">
            <ArrowUpDown size={12} />
            <span>Sorted by {SORT_OPTIONS.find((o) => o.value === sort)?.label}</span>
          </div>
        </div>

        {/* Entries grid */}
        {loading ? (
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
              No results found
            </p>
            <p className="text-zinc-400">Try a different search term</p>
          </div>
        ) : (
          <div className="space-y-3">
            {entries.map((entry, i) => (
              <DictionaryCard key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {total > 20 && !loading && (
          <div className="flex items-center justify-center gap-3 mt-10">
            <Button
              variant="secondary"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </Button>
            <span className="text-sm text-zinc-500">
              Page {page} of {Math.ceil(total / 20)}
            </span>
            <Button
              variant="secondary"
              size="sm"
              disabled={page >= Math.ceil(total / 20)}
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
