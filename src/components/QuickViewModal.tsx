"use client";

import { motion, AnimatePresence } from "motion/react";
import { useCart } from "@/utils/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  collection: string;
  image_url: string;
  secondary_image_url?: string;
  description?: string;
}

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-3xl bg-[#EDE6D8] text-[#311B14] shadow-2xl rounded-sm overflow-hidden p-8 border border-[#311B14]/10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest hover:opacity-50"
          >
            ✕ Close
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Preview */}
            <div className="aspect-[3/4] bg-[#311B14]/5 rounded-sm overflow-hidden">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#311B14]/50">
                {product.collection || "Limited Curation"}
              </span>
              <h3 className="font-cinzel text-2xl md:text-3xl text-[#311B14]">
                {product.name}
              </h3>
              <p className="text-xl font-bold">${Number(product.price).toFixed(2)}</p>
              
              <p className="text-xs text-[#311B14]/70 leading-relaxed">
                {product.description || "Hand-finished with anti-tarnish protective sealing. Designed for everyday statement luxury."}
              </p>

              <div className="pt-4 space-y-2">
                <button
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      img: product.image_url,
                    });
                    onClose();
                  }}
                  className="w-full bg-[#311B14] text-[#EDE6D8] py-3 text-xs uppercase font-bold tracking-widest hover:opacity-90 transition-opacity rounded-sm cursor-pointer"
                >
                  Add To Bag &rarr;
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}