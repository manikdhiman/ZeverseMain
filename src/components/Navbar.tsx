"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useCart } from "@/utils/CartContext";

const CATEGORIES_MATRIX = [
  { name: "New Launches", path: "/collections/new-launches", badge: "New", badgeColor: "bg-emerald-600" },
  { name: "Bestseller", path: "/collections/bestseller", badge: "Popular", badgeColor: "bg-[#D4AF37]" },
  { name: "Rings", path: "/collections/rings" },
  { name: "Neckpiece", path: "/collections/neckpiece" },
  { name: "Cuffs and Bracelets", path: "/collections/cuffs-bracelets" },
  { name: "Western Earrings", path: "/collections/western-earrings" },
  { name: "Korean Earrings", path: "/collections/korean-earrings" },
  { name: "Anti Tarnish Earrings", path: "/collections/anti-tarnish-earrings", badge: "Luxe", badgeColor: "bg-amber-600" },
  { name: "AD Earrings", path: "/collections/ad-earrings" },
  { name: "Quirky Earrings", path: "/collections/quirky-earrings" },
  { name: "Traditional Earrings", path: "/collections/traditional-earrings" },
  { name: "Heritage Jewellery", path: "/collections/heritage-jewellery" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, setIsCartOpen } = useCart();
  
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? "bg-[#311B14] text-[#EDE6D8] shadow-lg py-4" : "bg-[#EDE6D8] text-[#311B14] py-6"
        }`}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
          
          {/* Left Navigation Matrix */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase">
            <button 
              onMouseEnter={() => setMenuOpen(true)}
              className="hover:opacity-60 transition-opacity cursor-pointer uppercase tracking-widest outline-none bg-transparent border-none font-bold"
            >
              Collections
            </button>
            <Link href="/about" className="hover:opacity-60 transition-opacity">About Us</Link>
          </div>
          <div className="md:hidden"></div>

          {/* Center Royal Logo (Untouched BrownSugar) */}
          <div className="flex justify-center text-center">
            <Link 
              href="/" 
              onMouseEnter={() => setMenuOpen(false)} 
              className="font-brown-sugar text-3xl md:text-4xl tracking-wider uppercase select-none"
            >
              ZEVERSE
            </Link>
          </div>

          {/* Right Controls */}
          <div className="flex items-center justify-end space-x-6 text-xs font-semibold tracking-widest uppercase">
            <button className="hover:opacity-60 transition-opacity">Search</button>
            <button onClick={() => setIsCartOpen(true)} className="hover:opacity-60 transition-opacity cursor-pointer font-bold">
              Bag ({cartCount})
            </button>
          </div>
        </div>

        {/* MEGA-MENU SUB-BOX */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full bg-[#311B14] text-[#EDE6D8] border-t border-[#EDE6D8]/10 py-10 shadow-2xl"
            >
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
                <div className="col-span-8 flex flex-col space-y-4">
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#EDE6D8]/40 mb-2">
                    The Curation Matrix
                  </h4>
                  
                  {/* Category Matrix Grid */}
                  <div className="grid grid-cols-3 gap-x-6 gap-y-3.5 max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
                    {CATEGORIES_MATRIX.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="text-xs font-light tracking-wide hover:text-[#EDE6D8]/60 transition-colors flex items-center space-x-2 py-0.5"
                      >
                        <span className="uppercase text-[11px] tracking-wider">{item.name}</span>
                        {item.badge && (
                          <span className={`text-[8px] px-2 py-0.5 rounded-full text-white font-bold ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="col-span-4 flex justify-end items-center">
                  <div className="w-full max-w-[280px] aspect-[4/3] bg-[#EDE6D8]/5 rounded-sm border border-[#EDE6D8]/10 p-6 flex flex-col justify-end">
                    <span className="text-[9px] tracking-[0.2em] font-bold text-[#EDE6D8]/40 uppercase mb-1">New Collection</span>
                    <p className="text-xs font-light text-[#EDE6D8]/80">Handcrafted statement configurations engineered for all identities.</p>
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