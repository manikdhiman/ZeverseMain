"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

// Structured Mega Menu Organization mapping the exact inspiration profile
const MENU_SECTIONS = {
  discover: {
    title: "Discover",
    items: [
      { name: "New Arrivals", badge: "New" },
      { name: "Best Seller", badge: "" },
      { name: "Our Special", badge: "Hot" },
      { name: "POP Collection", badge: "New" },
    ]
  },
  categories: {
    title: "Categories",
    items: [
      { name: "Rings" }, { name: "Neckpiece" }, { name: "Cuffs and bracelets" },
      { name: "Western earrings" }, { name: "Korean earrings" }, { name: "Anti tarnish earrings" },
      { name: "Ad earrings" }, { name: "Quirky earrings" }, { name: "Traditional earrings" }
    ]
  },
  materials: {
    title: "By Material & Curation",
    items: [
      { name: "Fine Silver", badge: "" },
      { name: "9KT Fine Gold", badge: "Luxe" },
      { name: "Demifine ® Jewellery", badge: "" },
      { name: "Heritage jewellery", badge: "" },
      { name: "Emily In Paris Edition", badge: "à la mode" },
      { name: "Shraddha's Favourite", badge: "" },
    ]
  },
  gifting: {
    title: "Gifting & Audience",
    items: [
      { name: "For Loved Ones" },
      { name: "Men's Collection" },
      { name: "Women's Collection" },
      { name: "Gifting Suite" }
    ]
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to color coordinate specific premium visual chips
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
          
          {/* Left Navigation anchors */}
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

          {/* Center Brand Identity Accent */}
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
            <button className="hover:opacity-60 transition-opacity">Bag (0)</button>
          </div>
        </div>

        {/* The Transformed Structured Luxury Mega-Menu Matrix */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onMouseLeave={() => setMenuOpen(false)}
              className="absolute top-full left-0 w-full bg-[#311B14] text-[#EDE6D8] border-t border-[#EDE6D8]/10 shadow-2xl px-12 py-16 grid grid-cols-4 gap-8 max-h-[85vh] overflow-y-auto"
            >
              {Object.values(MENU_SECTIONS).map((section) => (
                <div key={section.title} className="flex flex-col space-y-4">
                  <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#EDE6D8]/40 border-b border-[#EDE6D8]/10 pb-2">
                    {section.title}
                  </h4>
                  <div className="flex flex-col space-y-3">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={`/collections/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setMenuOpen(false)}
                        className="text-xs tracking-wider uppercase opacity-85 hover:opacity-100 transition-opacity font-medium flex items-center space-x-2 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {item.name}
                        </span>
                        {"badge" in item && item.badge && (
                          <span className={`text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-tighter font-bold scale-90 ${getBadgeStyles(item.badge)}`}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}