"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useCart } from "@/utils/CartContext";
import { LOCAL_PRODUCTS } from "@/utils/localProducts"; // Read shared items

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const { addToCart } = useCart();

  const filteredProducts = activeTab === "ALL" 
    ? LOCAL_PRODUCTS 
    : LOCAL_PRODUCTS.filter(p => p.tag === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-[#EDE6D8]">
      <div className="text-center mb-16">
        <h2 className="text-xs uppercase tracking-[0.3em] text-[#311B14] font-bold opacity-60 mb-3">The Vault</h2>
        <h3 className="font-brown-sugar text-4xl md:text-5xl text-[#311B14] mb-8">Explore Zeverse Masterpieces</h3>
        
        <div className="flex flex-wrap justify-center gap-4 text-xs tracking-widest uppercase font-semibold">
          {["ALL", "Rings", "Korean earrings", "Heritage jewellery", "Cuffs and bracelets"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 border border-[#311B14]/10 transition-all duration-300 rounded-sm cursor-pointer ${
                activeTab === tab ? "bg-[#311B14] text-[#EDE6D8]" : "text-[#311B14] hover:bg-[#311B14]/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => {
            const isHovered = hoveredItemId === product.id;

            return (
              <Link
                href={`/products/${product.id}`} // Links to the product details page route
                key={product.id}
                onMouseEnter={() => setHoveredItemId(product.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                className="group cursor-pointer flex flex-col relative"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#311B14]/5 mb-4 rounded-sm">
                  <motion.img
                    src={product.img}
                    alt={product.name}
                    animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 1.03 : 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <motion.img
                    src={product.imgSecondary}
                    alt={product.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col text-left space-y-2">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[#311B14]/50 font-bold mb-1 block">{product.tag}</span>
                    <h4 className="text-sm font-light tracking-wide text-[#311B14] mb-1 opacity-90 group-hover:opacity-70 transition-opacity">{product.name}</h4>
                    <p className="text-sm font-semibold text-[#311B14]">${product.price}.00</p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevents the card link from opening the page when only clicking the button
                      e.stopPropagation();
                      addToCart({ id: product.id, name: product.name, price: product.price, img: product.img });
                    }}
                    className="w-full bg-[#311B14] text-[#EDE6D8] py-2.5 text-[11px] uppercase font-bold tracking-widest text-center rounded-sm hover:opacity-90 transition-opacity mt-2 cursor-pointer shadow-sm"
                  >
                    Add To Cart &rarr;
                  </button>
                </div>
              </Link>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}