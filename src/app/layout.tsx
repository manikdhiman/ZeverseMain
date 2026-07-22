import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";

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
      <body className="font-sans bg-[#EDE6D8] text-[#311B14] antialiased selection:bg-[#311B14] selection:text-[#EDE6D8]">
        {children}
      </body>
    </html>
  );
}