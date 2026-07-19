"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useCart } from "@/utils/CartContext";

// The full multi-category listing brought back for high-end curation mapping
const CATEGORIES_MATRIX = [
  { name: "New Arrivals", path: "/collections/new-launches" },
  { name: "Best Seller", path: "/collections/bestseller" },
  { name: "Fine Silver", path: "/collections/fine-silver" },
  { name: "9KT Fine Gold", path: "/collections/9kt-fine-gold" },
  { name: "Earrings", path: "/collections/earrings" },
  { name: "Heritage Jewellery", path: "/collections/heritage-jewellery" },
  { name: "Cuffs & Bracelets", path: "/collections/cuffs-and-bracelets" },
  { name: "Rings", path: "/collections/rings" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, setIsCartOpen } = useCart();
  
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#311B14] text-[#EDE6D8] shadow-lg py-4" 
            : "bg-transparent text-[#311B14] py-6"
        }`}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
          
          {/* Left Navigation Matrix */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase">
            <button 
              onMouseEnter={() => setMenuOpen(true)}
              className="hover:opacity-60 transition-opacity cursor-pointer uppercase tracking-widest outline-none bg-transparent border-none font-bold text-[#EDE6D8]/90"
            >
              Collections
            </button>
            <Link href="/about" className="hover:opacity-60 transition-opacity">About Us</Link>
          </div>
          <div className="md:hidden"></div>

          {/* Center Logo */}
          <div className="flex justify-center text-center">
            <Link 
              href="/" 
              onMouseEnter={() => setMenuOpen(false)}
              className="font-brown-sugar text-4xl md:text-5xl tracking-wide normal-case select-none"
            >
              Zeverse
            </Link>
          </div>

          {/* Right Controls */}
          <div className="flex items-center justify-end space-x-6 text-xs font-semibold tracking-widest uppercase">
            <button className="hover:opacity-60 transition-opacity">Search</button>
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="hover:opacity-60 transition-opacity cursor-pointer"
            >
              Bag ({cartCount})
            </button>
          </div>
        </div>

        {/* BROAD EDITORIAL MEGA-MENU BOX */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="absolute left-0 right-0 top-full bg-[#311B14] text-[#EDE6D8] border-t border-[#EDE6D8]/10 py-16 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-12">
                
                {/* Columns 1 & 2: Broad Category Matrix Layout */}
                <div className="col-span-2 flex flex-col space-y-4">
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#EDE6D8]/40 mb-2">
                    The Curation Catalog
                  </h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {CATEGORIES_MATRIX.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="text-sm font-light tracking-wide hover:text-[#EDE6D8]/60 transition-colors block w-max"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Columns 3 & 4: High-End Visual Promos */}
                <div className="col-span-2 flex justify-end space-x-6 pr-4">
                  <div className="relative w-56 aspect-[4/5] bg-[#EDE6D8]/5 rounded-sm overflow-hidden flex flex-col justify-end p-4 border border-[#EDE6D8]/10 group cursor-pointer">
                    <span className="text-[9px] tracking-widest uppercase font-bold text-[#EDE6D8]/40 mb-1">Seasonal Drop</span>
                    <span className="text-xs tracking-wide font-light">Fine Gold Selection &rarr;</span>
                  </div>
                  <div className="relative w-56 aspect-[4/5] bg-[#EDE6D8]/5 rounded-sm overflow-hidden flex flex-col justify-end p-4 border border-[#EDE6D8]/10 group cursor-pointer">
                    <span className="text-[9px] tracking-widest uppercase font-bold text-[#EDE6D8]/40 mb-1">Timeless Edit</span>
                    <span className="text-xs tracking-wide font-light">Heritage Collection &rarr;</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}