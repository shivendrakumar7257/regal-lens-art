import hero from "@/assets/hero-wedding.jpg";
import w1 from "@/assets/wedding-1.jpg";
import w2 from "@/assets/wedding-2.jpg";
import w3 from "@/assets/wedding-3.jpg";
import p1 from "@/assets/prewedding-1.jpg";
import p2 from "@/assets/prewedding-2.jpg";
import c1 from "@/assets/candid-1.jpg";
import c2 from "@/assets/candid-2.jpg";
import d1 from "@/assets/details-1.jpg";
import port1 from "@/assets/portrait-1.jpg";

export const images = { hero, w1, w2, w3, p1, p2, c1, c2, d1, port1 };

export type Category = "weddings" | "pre-wedding" | "candid";

export interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
  ratio: "portrait" | "landscape" | "square";
}

export const gallery: GalleryImage[] = [
  { src: hero, alt: "Sunset Vows", category: "weddings", ratio: "landscape" },
  { src: w1, alt: "The White Veil", category: "weddings", ratio: "portrait" },
  { src: w2, alt: "Sacred Glance", category: "weddings", ratio: "landscape" },
  { src: w3, alt: "First Dance", category: "weddings", ratio: "portrait" },
  { src: port1, alt: "Royal Bride", category: "weddings", ratio: "portrait" },
  { src: d1, alt: "Candlelit Reception", category: "weddings", ratio: "landscape" },

  { src: p1, alt: "Mountain Embrace", category: "pre-wedding", ratio: "portrait" },
  { src: p2, alt: "Golden Shore", category: "pre-wedding", ratio: "landscape" },

  { src: c1, alt: "Bridesmaids' Joy", category: "candid", ratio: "square" },
  { src: c2, alt: "Tears of Joy", category: "candid", ratio: "portrait" },
];