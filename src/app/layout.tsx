import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" className={brownSugar.variable} suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
 
  