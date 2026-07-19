import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Update the source to point exactly to the copied woff2 file name
const brownSugar = localFont({
  src: "./fonts/Brown-Sugar-Regular.woff2",
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