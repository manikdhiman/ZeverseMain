"use client";

import { motion } from "motion/react";

const NEW_DROPS = [
  { name: "Ad Earrings Edition", price: 85, img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=500" },
  { name: "Quirky Pearl Drops", price: 42, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=500" },
  { name: "Western Hoop Signature", price: 60, img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=500" },
  { name: "Minimalist Link Chain", price: 110, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=500" }
];

export default function NewArrivalsSlider() {
  return (
    <section className="bg-[#EDE6D8] pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="text-left">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#311B14]/60 uppercase block mb-2">Just In</span>
          <h2 className="font-brown-sugar text-4xl md:text-5xl text-[#311B14]">The Latest Arrivals</h2>
        </div>
        <p className="text-xs uppercase tracking-widest font-semibold border-b border-[#311B14] pb-1 text-[#311B14] cursor-pointer opacity-80 hover:opacity-100 transition-opacity mt-4 md:mt-0">
          View All New Drops &rarr;
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar flex space-x-6 py-4">
        {NEW_DROPS.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="min-w-[280px] md:min-w-[320px] group cursor-pointer flex flex-col flex-shrink-0"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#311B14]/5 rounded-sm mb-4">
              <span className="absolute top-4 left-4 z-10 bg-[#311B14] text-[#EDE6D8] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">New</span>
              <img src={item.img} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out" />
            </div>
            <h4 className="text-sm font-light tracking-wide text-[#311B14] mb-1">{item.name}</h4>
            <p className="text-sm font-semibold text-[#311B14]">${item.price}.00</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}