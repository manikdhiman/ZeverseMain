"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#311B14] text-[#EDE6D8] shadow-lg border-b border-[#EDE6D8]/10 py-2" 
          : "bg-transparent text-[#311B14] py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
        
        {/* Left Side: Secondary Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase">
          <Link href="/collections" className="hover:opacity-60 transition-opacity">Collections</Link>
          <Link href="/new-in" className="hover:opacity-60 transition-opacity">Shop All</Link>
        </div>
        <div className="md:hidden"></div>

        {/* Center: Massive Luxury Branding Focus */}
        <div className="flex justify-center text-center">
          <Link 
            href="/" 
            className="font-brown-sugar text-5xl md:text-7xl tracking-wide normal-case transition-all duration-300 hover:scale-105"
          >
            Zeverse
          </Link>
        </div>

        {/* Right Side: Utilities */}
        <div className="flex items-center justify-end space-x-6 text-xs font-semibold tracking-widest uppercase">
          <button className="hover:opacity-60 transition-opacity hidden sm:inline-block">Search</button>
          <button className="hover:opacity-60 transition-opacity">Bag (0)</button>
        </div>

      </div>
    </motion.nav>
  );
}