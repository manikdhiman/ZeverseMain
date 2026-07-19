"use client";

import { motion } from "motion/react";
import Image from "next/image";

// Pre-defining our data structure to keep our layout structurally solid
interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
  collection: string;
}

// Temporary layout data matching our Supabase schema until your dynamic fetch is pulled live
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Aura Diamond Ring",
    price: 890.00,
    image_url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop",
    collection: "Rings",
  },
  {
    id: "2",
    name: "Verdant Emerald Pendant",
    price: 1250.00,
    image_url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop",
    collection: "Necklaces",
  },
  {
    id: "3",
    name: "Classic Gold Hoop Earrings",
    price: 450.00,
    image_url: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop",
    collection: "Earrings",
  },
  {
    id: "4",
    name: "Minimalist Chain Bracelet",
    price: 380.00,
    image_url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop",
    collection: "Bracelets",
  },
];

// Parent motion container configurations to orchestrate cascading item animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Cascades animations one after the other
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-[#EDE6D8]">
      <div className="text-center mb-16">
        <h2 className="text-xs uppercase tracking-[0.3em] text-[#311B14] font-semibold opacity-80 mb-2">
          Curated Elegance
        </h2>
        <h3 className="text-3xl md:text-4xl font-light tracking-wide text-[#311B14]">
          The Zeverse Essentials
        </h3>
      </div>

      {/* Grid container with Motion bindings */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }} // Triggers smoothly when scrolling into focus
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
      >
        {MOCK_PRODUCTS.map((product) => (
          <motion.div 
            key={product.id} 
            variants={itemVariants}
            className="group cursor-pointer flex flex-col"
          >
            {/* High-Quality Picture Showcase Frame */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 mb-4 rounded-sm">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#311B14]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Typography Details */}
            <div className="flex flex-col text-left mt-2">
              <span className="text-[10px] tracking-widest uppercase text-[#311B14]/60 font-medium mb-1">
                {product.collection}
              </span>
              <h4 className="text-sm font-light text-[#311B14] tracking-wide mb-1 group-hover:opacity-70 transition-opacity">
                {product.name}
              </h4>
              <p className="text-sm font-medium text-[#311B14]">
                ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}