import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickerHero } from "@/components/stickers/sticker-hero";
import { StickerMood } from "@/components/stickers/sticker-mood";
import { StickerCharacter } from "@/components/stickers/sticker-character";
import { StickerQuotes } from "@/components/stickers/sticker-quotes";
import { StickerSeries } from "@/components/stickers/sticker-series";
import { StickerGallery } from "@/components/stickers/sticker-gallery";
import { StickerUniverse } from "@/components/stickers/sticker-universe";
import { StickerDiary } from "@/components/stickers/sticker-diary";
import { StickerCTA } from "@/components/stickers/sticker-cta";

export default function StickersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <StickerHero />
      <StickerMood />
      <StickerCharacter />
      <StickerQuotes />
      <StickerSeries />
      <StickerGallery />
      <StickerUniverse />
      <StickerDiary />
      <StickerCTA />
      <Footer />
    </main>
  );
}
