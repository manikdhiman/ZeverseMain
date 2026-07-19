"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
// 1. ADD THIS IMPORT LINE AT THE TOP TO USE THE CART SYSTEM
import { useCart } from "@/utils/CartContext";

const CATEGORIES = [
  "NEW launches", "Bestseller", "Rings", "Neckpiece", 
  "Cuffs and bracelets", "Western earrings", "Korean earrings", 
  "Anti tarnish earrings", "Ad earrings", "Quirky earrings", 
  "Traditional earrings", "Heritage jewellery"
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 2. ADD THESE LINES RIGHT HERE AT THE START OF THE COMPONENT
  const { cart, setIsCartOpen } = useCart();
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBadgeStyles = (badge: string) => {
    if (badge === "Luxe") return "bg-yellow-500 text-stone-900";
    if (badge === "à la mode") return "bg-blue-500 text-white";
    return "bg-red-700 text-white";
  };

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
          
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase">
            <button 
              onMouseEnter={() => setMenuOpen(true)}
              className="hover:opacity-60 transition-opacity cursor-pointer uppercase tracking-widest outline-none"
            >
              Collections
            </button>
            <Link href="/about" className="hover:opacity-60 transition-opacity">About Us</Link>
          </div>
          <div className="md:hidden"></div>

          {/* Center Brand Identity */}
          <div className="flex justify-center text-center">
            <Link 
              href="/" 
              onMouseEnter={() => setMenuOpen(false)}
              className="font-brown-sugar text-5xl md:text-7xl tracking-wide normal-case select-none"
            >
              Zeverse
            </Link>
          </div>

          {/* Right Controls */}
          <div className="flex items-center justify-end space-x-6 text-xs font-semibold tracking-widest uppercase">
            <button className="hover:opacity-60 transition-opacity">Search</button>
            
            {/* 3. THIS IS WHERE THE DYNAMIC CART BUTTON REPLACES THE OLD STATIC BUTTON */}
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="hover:opacity-60 transition-opacity cursor-pointer"
            >
              Bag ({cartCount})
            </button>
          </div>
        </div>

       
      </motion.nav>
    </>
  );
}