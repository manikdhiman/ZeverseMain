"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "@/utils/CartContext";

const LOOK_PRODUCTS = [
  {
    id: "hotspot-1",
    top: "35%",
    left: "48%",
    name: "Royal Diamond Choker",
    price: "$240.00",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400",
  },
  {
    id: "hotspot-2",
    top: "60%",
    left: "52%",
    name: "Embossed Gold Cuff",
    price: "$180.00",
    img: "https://images.unsplash.com/photo-1611591475171-8b2112d7f4be?q=80&w=400",
  },
];

export default function ShopTheLook() {
  const [activeSpot, setActiveSpot] = useState<typeof LOOK_PRODUCTS[0] | null>(null);
  const { addToCart } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="font-cinzel text-xs uppercase tracking-[0.4em] text-[#311B14]/60">
          Editorial Runway
        </span>
        <h2 className="font-brown-sugar text-3xl md:text-5xl text-[#311B14] tracking-wide mt-2">
          Shop The Look
        </h2>
      </div>

      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-sm overflow-hidden border border-[#311B14]/10 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600"
          alt="Editorial Lookbook"
          className="w-full h-full object-cover object-center"
        />

        {/* Hotspot Pins */}
        {LOOK_PRODUCTS.map((spot) => (
          <button
            key={spot.id}
            style={{ top: spot.top, left: spot.left }}
            onClick={() => setActiveSpot(activeSpot?.id === spot.id ? null : spot)}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#EDE6D8]/80 text-[#311B14] flex items-center justify-center shadow-lg backdrop-blur-md cursor-pointer hover:scale-110 transition-transform"
          >
            <span className="w-3 h-3 rounded-full bg-[#311B14] animate-ping absolute opacity-75"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#311B14] relative"></span>
          </button>
        ))}

        {/* Hotspot Popover Card */}
        <AnimatePresence>
          {activeSpot && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-6 right-6 bg-[#311B14] text-[#EDE6D8] p-4 rounded-sm shadow-2xl flex items-center space-x-4 border border-[#EDE6D8]/20 max-w-sm"
            >
              <img src={activeSpot.img} alt={activeSpot.name} className="w-16 h-20 object-cover rounded-sm" />
              <div className="flex-1">
                <h4 className="font-cinzel text-sm">{activeSpot.name}</h4>
                <p className="text-xs font-bold text-[#EDE6D8]/80">{activeSpot.price}</p>
                <button
                  onClick={() => {
                    addToCart({ id: activeSpot.id, name: activeSpot.name, price: 180, img: activeSpot.img });
                    setActiveSpot(null);
                  }}
                  className="mt-2 text-[10px] uppercase tracking-widest font-bold underline hover:opacity-70 cursor-pointer"
                >
                  Add To Bag &rarr;
                </button>
              </div>
              <button onClick={() => setActiveSpot(null)} className="text-xs text-[#EDE6D8]/40 hover:text-[#EDE6D8]">✕</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}