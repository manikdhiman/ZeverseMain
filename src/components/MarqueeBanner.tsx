"use client";

import { motion } from "motion/react";

const TAGS = [
  "ZEVERSE HIGH JEWELLERY",
  "•",
  "ANTI-TARNISH SEALED",
  "•",
  "HANDCRAFTED FINE SILVER",
  "•",
  "ARCHITECTURAL PACKAGING",
  "•",
  "HERITAGE CURATION",
  "•"
];

export default function MarqueeBanner() {
  return (
    <div className="bg-[#311B14] text-[#EDE6D8] py-4 overflow-hidden border-y border-[#EDE6D8]/10 select-none">
      <motion.div
        className="flex whitespace-nowrap space-x-8 text-xs tracking-[0.35em] uppercase font-bold text-[#EDE6D8]/80"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...TAGS, ...TAGS, ...TAGS, ...TAGS].map((text, index) => (
          <span key={index} className="inline-block">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}