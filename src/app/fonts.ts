import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Cinzel } from "next/font/google";

// 1. YOUR UNTOUCHED LOGO FONT
export const brownSugar = localFont({
  src: "./fonts/Brown-Sugar-Regular.woff2",
  variable: "--font-brown-sugar",
  display: "swap",
});

// 2. MODERN GEOMETRIC BODY & HERO FONT
export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// 3. LUXURY SERIF ACCENT FONT (For Subtitles & Category Badges)
export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700"],
});