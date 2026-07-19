"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Massive initial layout dataset to fill up your front page immediately
const ALL_PRODUCTS = [
  { id: "1", name: "Aura Diamond Ring", price: 890, tag: "Rings", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600" },
  { id: "2", name: "Seoul Minimalist Drops", price: 32, tag: "Korean earrings", img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600" },
  { id: "3", name: "Heritage Kundan Choker", price: 290, tag: "Heritage jewellery", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600" },
  { id: "4", name: "Zeverse Signet Cuff", price: 45, tag: "Cuffs and bracelets", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600" },
  { id: "5", name: "Parisian Romance Hoops", price: 58, tag: "Emily In Paris Edition", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600" },
  { id: "6", name: "Anti-Tarnish Daily Band", price: 39, tag: "Anti tarnish earrings", img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600" },
  { id: "7", name: "Shraddha Luxury Drop", price: 120, tag: "Shraddha's Favourite", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600" },
  { id: "8", name: "Demifine Emerald Halo", price: 210, tag: "Demifine ® Jewellery", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600" },
  // Duplicating structures cleanly to simulate a deep inventory pool (30+ items)
  ...Array.from({ length: 32 }).map((_, index) => ({
    id: `dynamic-${index}`,
    name: `Zeverse Luxury Statement Piece ${index + 1}`,
    price: 45 + (index * 12),
    tag: index % 2 === 0 ? "NEW launches" : "Bestseller",
    img: index % 2 === 0 
      ? "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600" 
      : "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600"
  }))
];

export default function ProductGrid() {
  const [visibleCount, setVisibleCount] = useState(16); // Starts with a clean 16 pieces
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredProducts = activeTab === "ALL" 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.tag === activeTab);

  const currentItems = filteredProducts.slice(0, visibleCount);

  const loadMoreItems = () => {
    setVisibleCount((prev) => Math.min(prev + 16, filteredProducts.length));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-[#EDE6D8]">
      
      {/* Dynamic Collection Showcase Headers */}
      <div className="text-center mb-16">
        <h2 className="text-xs uppercase tracking-[0.3em] text-[#311B14] font-bold opacity-60 mb-3">
          The Vault
        </h2>
        <h3 className="font-brown-sugar text-4xl md:text-5xl text-[#311B14] mb-8">
          Explore Zeverse Masterpieces
        </h3>
        
        {/* Quick Dynamic Highlight Toggles */}
        <div className="flex flex-wrap justify-center gap-4 text-xs tracking-widest uppercase font-semibold">
          {["ALL", "NEW launches", "Bestseller", "Rings", "Cuffs and bracelets"].map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setVisibleCount(16); }}
              className={`px-4 py-2 border border-[#311B14]/10 transition-all duration-300 rounded-sm cursor-pointer ${
                activeTab === tab ? "bg-[#311B14] text-[#EDE6D8]" : "text-[#311B14] hover:bg-[#311B14]/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Container Block */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
      >
        <AnimatePresence mode="popLayout">
          {currentItems.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#311B14]/5 mb-4 rounded-sm">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] tracking-widest uppercase text-[#311B14]/50 font-bold mb-1">
                  {product.tag}
                </span>
                <h4 className="text-sm font-light tracking-wide text-[#311B14] mb-1 group-hover:opacity-70 transition-opacity">
                  {product.name}
                </h4>
                <p className="text-sm font-semibold text-[#311B14]">
                  ${product.price}.00
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Luxury "See More" Call-to-Action Trigger */}
      {visibleCount < filteredProducts.length && (
        <div className="w-full flex justify-center mt-20">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={loadMoreItems}
            className="px-12 py-4 border border-[#311B14] text-[#311B14] uppercase text-xs tracking-widest font-bold hover:bg-[#311B14] hover:text-[#EDE6D8] transition-colors duration-400 rounded-sm cursor-pointer shadow-sm"
          >
            Explore More Pieces
          </motion.button>
        </div>
      )}
    </section>
  );
}