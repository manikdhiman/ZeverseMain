"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useCart } from "@/utils/CartContext";
import { supabase } from "@/utils/supabase";

interface Product {
  id: string;
  name: string;
  price: number;
  collection: string;
  image_url: string;           
  secondary_image_url?: string; 
  description?: string;
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(16);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("products")
          .select("id, name, price, collection, image_url, secondary_image_url, description");
        
        if (error) throw error;
        if (data) setProducts(data);
      } catch (err) {
        console.error("Error linking database rows:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const currentItems = products.slice(0, visibleCount);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center bg-[#EDE6D8]">
        <p className="text-xs uppercase tracking-widest text-[#311B14] opacity-60 animate-pulse font-cinzel">
          Opening Zeverse Showroom...
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-[#EDE6D8]">
      
      {/* Luxury Heading Stack */}
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-xs uppercase tracking-[0.4em] text-[#311B14] font-semibold opacity-60 mb-3">
          The Curation
        </h2>
        <h3 className="font-brown-sugar text-5xl md:text-6xl text-[#311B14] tracking-wide">
          Masterpieces
        </h3>
      </div>

      {/* Grid Canvas */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        <AnimatePresence mode="popLayout">
          {currentItems.map((product) => {
            const isHovered = hoveredItemId === product.id;
            
            const finalSecondaryImage = product.secondary_image_url && product.secondary_image_url.trim() !== ""
              ? product.secondary_image_url
              : "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600"; 

            return (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                onMouseEnter={() => setHoveredItemId(product.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                className="group cursor-pointer flex flex-col relative"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#311B14]/5 mb-4 rounded-sm">
                  <motion.img
                    src={product.image_url}
                    alt={product.name}
                    animate={{ 
                      opacity: isHovered ? 0 : 1, 
                      scale: isHovered ? 1.03 : 1 
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />

                  <motion.img
                    src={finalSecondaryImage}
                    alt={`${product.name} editorial look`}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      scale: isHovered ? 1 : 0.98 
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Modern Ultra-Readable Typography Info */}
                <div className="flex flex-col text-left space-y-2">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[#311B14]/50 font-bold mb-1 block font-cinzel">
                      {product.collection || "Jewellery"}
                    </span>
                    <h4 className="text-sm font-normal tracking-wide text-[#311B14] mb-1 opacity-90 group-hover:opacity-70 transition-opacity">
                      {product.name}
                    </h4>
                    <p className="text-sm font-semibold text-[#311B14]">
                      ${Number(product.price).toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        img: product.image_url,
                      });
                    }}
                    className="w-full bg-[#311B14] text-[#EDE6D8] py-2.5 text-[11px] uppercase font-semibold tracking-widest text-center rounded-sm hover:opacity-90 transition-opacity mt-2 cursor-pointer shadow-sm"
                  >
                    Add To Cart &rarr;
                  </button>
                </div>
              </Link>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Pagination View Trigger */}
      {visibleCount < products.length && (
        <div className="w-full flex justify-center mt-20">
          <button
            onClick={() => setVisibleCount((prev) => Math.min(prev + 16, products.length))}
            className="px-12 py-4 border border-[#311B14] text-[#311B14] uppercase text-xs tracking-widest font-bold hover:bg-[#311B14] hover:text-[#EDE6D8] transition-colors duration-400 rounded-sm cursor-pointer"
          >
            Explore More Pieces
          </button>
        </div>
      )}
    </section>
  );
}