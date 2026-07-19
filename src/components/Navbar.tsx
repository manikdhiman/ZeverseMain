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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled 
          ? "bg-[#311B14]/90 backdrop-blur-md text-[#EDE6D8] shadow-lg border-b border-[#EDE6D8]/10" 
          : "bg-transparent text-[#311B14]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-widest uppercase">
          Zeverse
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wider uppercase">
          <Link href="/collections" className="hover:opacity-70 transition-opacity">Collections</Link>
          <Link href="/new-in" className="hover:opacity-70 transition-opacity">New In</Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">Our Story</Link>
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <button className="hover:opacity-70 transition-opacity">Search</button>
          <button className="hover:opacity-70 transition-opacity">Bag (0)</button>
        </div>
      </div>
    </motion.nav>
  );
}