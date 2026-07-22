import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/utils/CartContext";
import Navbar from "@/components/Navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeverse | High Jewellery Curation",
  description: "Modern luxury handcrafted jewellery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${cinzel.variable}`}>
      <body className="bg-[#EDE6D8] text-[#311B14] antialiased selection:bg-[#311B14] selection:text-[#EDE6D8]">
        <CartProvider>
          <Navbar />
          <main className="pt-24">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}