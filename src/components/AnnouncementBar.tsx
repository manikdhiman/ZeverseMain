"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const ANNOUNCEMENTS = [
  "Complimentary Architectural Packaging on Orders Over $150",
  "Anti-Tarnish Seal Included with Every Piece",
  "Free Express Shipping & 14-Day Boutique Returns"
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#311B14] text-[#EDE6D8] text-[10px] uppercase tracking-[0.25em] font-medium py-2.5 px-4 text-center overflow-hidden border-b border-[#EDE6D8]/10">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {ANNOUNCEMENTS[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}