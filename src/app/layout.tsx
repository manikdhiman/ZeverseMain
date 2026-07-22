import type { Metadata } from "next";
import "./globals.css";
import { brownSugar, jakarta, cinzel } from "./fonts";
import { CartProvider } from "@/utils/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "ZEVERSE | High Jewellery Curation",
  description: "Modern luxury handcrafted jewellery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${brownSugar.variable} ${jakarta.variable} ${cinzel.variable}`} 
      suppressHydrationWarning
    >
      <body className="bg-[#EDE6D8] text-[#311B14] font-sans antialiased" suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="pt-20 md:pt-24">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}