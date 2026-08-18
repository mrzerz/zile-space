import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatScore(score: number): string {
  return score.toFixed(1);
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function shareText(text: string, title = "Taiwanish.ai"): void {
  if (navigator.share) {
    navigator.share({ title, text });
  } else {
    copyToClipboard(text);
  }
}

export function debounce<T extends (...args: Parameters<T>) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "…";
}

export const SCORE_COLORS = {
  high: "text-emerald-500",
  medium: "text-amber-500",
  low: "text-rose-500",
} as const;

export function getScoreColor(score: number): string {
  if (score >= 90) return SCORE_COLORS.high;
  if (score >= 70) return SCORE_COLORS.medium;
  return SCORE_COLORS.low;
}

export function getScoreBadgeColor(score: number): string {
  if (score >= 90) return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
  if (score >= 70) return "bg-amber-500/10 text-amber-500 border-amber-500/20";
  return "bg-rose-500/10 text-rose-500 border-rose-500/20";
}
