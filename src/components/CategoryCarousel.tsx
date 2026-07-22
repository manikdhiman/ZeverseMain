"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface CategoryCarouselProps {
  activeCategory?: string;
  setActiveCategory?: (category: string) => void;
}

const CATEGORIES = [
  { name: "New Launches", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=300" },
  { name: "Bestsellers", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=300" },
  { name: "Rings", img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=300" },
  { name: "Neckpieces", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=300" },
  { name: "Bracelets", img: "https://images.unsplash.com/photo-1611591475171-8b2112d7f4be?q=80&w=300" },
  { name: "Anti Tarnish", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=300" },
];

export default function CategoryCarousel({ activeCategory, setActiveCategory }: CategoryCarouselProps) {
  const [localActive, setLocalActive] = useState("New Launches");
  const selected = activeCategory ?? localActive;

  const handleSelect = (name: string) => {
    if (setActiveCategory) setActiveCategory(name);
    else setLocalActive(name);
  };

  return (
    <section className="py-12 bg-[#EDE6D8] border-b border-[#311B14]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#311B14]/60">
            Explore Curation
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#311B14]/40">
            Scroll Horizontal &rarr;
          </span>
        </div>

        {/* Visual Image Cards Slider */}
        <div className="flex space-x-5 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ y: -4 }}
              onClick={() => handleSelect(item.name)}
              className={`relative flex-shrink-0 w-40 h-52 rounded-sm overflow-hidden border cursor-pointer transition-all ${
                selected === item.name
                  ? "border-[#311B14] ring-2 ring-[#311B14]/20 shadow-xl"
                  : "border-[#311B14]/15 opacity-80 hover:opacity-100"
              }`}
            >
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#311B14]/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[#EDE6D8] font-cinzel text-xs font-semibold tracking-wider uppercase text-left">
                  {item.name}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}