import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const api = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// --- Types ---

export interface GenerateResult {
  english: string;
  score: number;
  romanization?: string;
}

export interface GenerateResponse {
  results: GenerateResult[];
  input: string;
  processing_time_ms: number;
}

export interface DictionaryEntry {
  id: string;
  english: string;
  taiwanese: string;
  meaning: string;
  score: number;
  verified: boolean;
  pronunciation?: string;
  created_at: string;
}

export interface DictionarySearchResponse {
  items: DictionaryEntry[];
  total: number;
  page: number;
  page_size: number;
}

export interface RankingEntry {
  id: string;
  english: string;
  taiwanese: string;
  score: number;
  uses: number;
  favorites: number;
  rank: number;
}

export interface RankingResponse {
  items: RankingEntry[];
  period: "today" | "week" | "month" | "all_time";
}

// --- API Calls ---

export async function generatePhrase(text: string): Promise<GenerateResponse> {
  const { data } = await api.post<GenerateResponse>("/generate", { text });
  return data;
}

export async function searchDictionary(params: {
  query?: string;
  sort?: "score" | "created_at" | "english";
  order?: "asc" | "desc";
  page?: number;
  page_size?: number;
  verified?: boolean;
}): Promise<DictionarySearchResponse> {
  const { data } = await api.post<DictionarySearchResponse>("/dictionary/search", params);
  return data;
}

export async function getRanking(
  period: "today" | "week" | "month" | "all_time" = "today"
): Promise<RankingResponse> {
  const { data } = await api.post<RankingResponse>("/rank", { period });
  return data;
}

export async function toggleFavorite(entry_id: string, user_id?: string): Promise<{ favorited: boolean }> {
  const { data } = await api.post("/favorite", { entry_id, user_id });
  return data;
}

// Interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 429) {
      throw new Error("Too many requests. Please slow down.");
    }
    if (error.response?.status >= 500) {
      throw new Error("Server error. Please try again later.");
    }
    throw error;
  }
);
