"use client";

import { motion } from "motion/react";

const CATEGORIES = [
  "NEW launches",
  "Bestseller",
  "Rings",
  "Neckpiece",
  "Cuffs and bracelets",
  "Western earrings",
  "Korean earrings",
  "Anti tarnish earrings",
  "Ad earrings",
  "Quirky earrings",
  "Traditional earrings",
  "Heritage jewellery"
];

interface CategoryCarouselProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryCarousel({ activeCategory, setActiveCategory }: CategoryCarouselProps) {
  return (
    <div className="w-full bg-[#EDE6D8] pt-16 pb-4 border-b border-[#311B14]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Horizontal scroll container with hidden scrollbars */}
        <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar scroll-smooth py-2 whitespace-nowrap">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative text-xs font-semibold tracking-widest uppercase cursor-pointer py-2 transition-opacity duration-300 text-[#311B14]"
                style={{ opacity: isActive ? 1 : 0.4 }}
              >
                {category}
                {/* Underline indicator animation for the active category */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#311B14]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}