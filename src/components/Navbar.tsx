"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const CATEGORIES = [
  "NEW launches", "Bestseller", "Rings", "Neckpiece", 
  "Cuffs and bracelets", "Western earrings", "Korean earrings", 
  "Anti tarnish earrings", "Ad earrings", "Quirky earrings", 
  "Traditional earrings", "Heritage jewellery"
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Safely hook window event tracking inside an isolated lifecycle anchor
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#311B14] text-[#EDE6D8] shadow-lg py-2" 
            : "bg-transparent text-[#311B14] py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
          
          {/* Left Navigation links */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase">
            <button 
              onMouseEnter={() => setMenuOpen(true)}
              className="hover:opacity-60 transition-opacity cursor-pointer uppercase tracking-widest"
            >
              Collections
            </button>
            <Link href="/shop-all" className="hover:opacity-60 transition-opacity">Shop All</Link>
          </div>
          <div className="md:hidden"></div>

          {/* Majestic Center Logo */}
          <div className="flex justify-center text-center">
            <Link 
              href="/" 
              onMouseEnter={() => setMenuOpen(false)}
              className="font-brown-sugar text-5xl md:text-7xl tracking-wide normal-case"
            >
              Zeverse
            </Link>
          </div>

          {/* Right Controls */}
          <div className="flex items-center justify-end space-x-6 text-xs font-semibold tracking-widest uppercase">
            <button className="hover:opacity-60 transition-opacity">Search</button>
            <button className="hover:opacity-60 transition-opacity">Bag (0)</button>
          </div>
        </div>

        {/* Dynamic Full-Width Mega Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onMouseLeave={() => setMenuOpen(false)}
              className="absolute top-full left-0 w-full bg-[#311B14] text-[#EDE6D8] border-t border-[#EDE6D8]/10 shadow-xl px-12 py-12 grid grid-cols-4 gap-8"
            >
              <div className="col-span-3 grid grid-cols-3 gap-y-4 gap-x-6">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    href={`/collections/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs tracking-wider uppercase opacity-80 hover:opacity-100 transition-opacity font-medium"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
              {/* Premium Promo Image inside Menu */}
              <div className="relative h-40 w-full bg-stone-800 rounded-sm overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  alt="Mega menu feature"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-[#EDE6D8]">Heritage Edition</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}