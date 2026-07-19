import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load Brown Sugar locally
const brownSugar = localFont({
  src: "./fonts/BrownSugar.ttf", // Adjust extension (.ttf/.woff2) to match your file exactly
  variable: "--font-brown-sugar",
});

export const metadata: Metadata = {
  title: "Zeverse | Luxury Jewelry",
  description: "Out of this world fine jewelry designed for the modern era.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={brownSugar.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}