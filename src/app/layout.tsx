import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "太空貓咪日常 — Space Cat Daily | MEO-07",
  description:
    "一隻來自宇宙的貓，努力理解人類。宇宙很大，先撐到下班。LINE 貼圖現已上架，讓喵喵替你說出那些說不出口的話。",
  keywords: ["太空貓咪", "LINE貼圖", "Space Cat", "MEO-07", "喵喵", "職場貼圖", "社畜", "搞笑貼圖"],
  authors: [{ name: "太空貓咪日常 Space Cat Daily" }],
  openGraph: {
    title: "太空貓咪日常 — Space Cat Daily",
    description: "宇宙很大，先撐到下班。",
    type: "website",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "太空貓咪日常 Space Cat Daily",
    description: "宇宙很大，先撐到下班。",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                borderRadius: "12px",
                fontFamily: "Inter, sans-serif",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
