"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useCart } from "@/utils/CartContext";

// Clean categories matching your exact database collection types
const COLLECTIONS = [
  { name: "Rings", path: "/collections/rings" },
  { name: "Earrings", path: "/collections/earrings" },
  { name: "Necklaces", path: "/collections/necklaces" },
  { name: "Bracelets", path: "/collections/bracelets" }
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
        onMouseLeave={() => setMenuOpen(false)} // Cleanly closes sub-box when mouse leaves navbar area
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
          
          {/* Left Navigation Matrix */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase">
            {/* Hover trigger opens the gorgeous sub-box instantly with zero click errors */}
            <button 
              onMouseEnter={() => setMenuOpen(true)}
              className="hover:opacity-60 transition-opacity cursor-pointer uppercase tracking-widest outline-none bg-transparent border-none"
            >
              Collections
            </button>
            <Link href="/about" className="hover:opacity-60 transition-opacity">About Us</Link>
          </div>
          <div className="md:hidden"></div>

          {/* Center Royal Logo */}
          <div className="flex justify-center text-center">
            <Link 
              href="/" 
              onMouseEnter={() => setMenuOpen(false)}
              className="font-brown-sugar text-4xl md:text-5xl tracking-wide normal-case select-none"
            >
              Zeverse
            </Link>
          </div>

          {/* Right Controls Bag */}
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

        {/* --- PREMIUM ROYAL SUB-BOX DROP DOWN FRAME --- */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="absolute left-0 right-0 top-full bg-[#311B14] text-[#EDE6D8] border-t border-[#EDE6D8]/10 py-12 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
                <div className="flex flex-col space-y-4">
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#EDE6D8]/40 mb-2">
                    Shop Categories
                  </h4>
                  {COLLECTIONS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setMenuOpen(false)} // Closes sub-box cleanly on click
                      className="text-sm font-light tracking-wide hover:text-[#EDE6D8]/60 transition-colors w-max"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Aesthetic Editorial Panels to fill out the luxurious space */}
                <div className="col-span-3 flex justify-end space-x-8 pr-6">
                  <div className="relative w-64 aspect-[4/3] bg-[#EDE6D8]/5 rounded-sm overflow-hidden flex items-center justify-center border border-[#EDE6D8]/10">
                    <span className="text-[10px] tracking-widest uppercase font-bold opacity-30">
                      The Edit Lookbook
                    </span>
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