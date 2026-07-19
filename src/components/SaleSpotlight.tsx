"use client";

import { motion } from "motion/react";

export default function SaleSpotlight() {
  return (
    <section className="bg-[#311B14] text-[#EDE6D8] py-20 px-6 my-16 border-y border-[#EDE6D8]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left text message framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#EDE6D8]/60 uppercase mb-3">Limited Curation</span>
          <h2 className="font-brown-sugar text-4xl md:text-6xl mb-6 leading-tight">The Privé Collection Sale</h2>
          <p className="text-sm font-light opacity-75 max-w-md mb-8 leading-relaxed">
            Elevate your personal curation layout with exclusive values. Enjoy complimentary architectural packaging and up to <span className="font-bold border-b border-[#EDE6D8]">20% Off</span> on select premium anti-tarnish jewelry essentials.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-[#EDE6D8] text-[#311B14] text-xs font-bold uppercase tracking-widest rounded-sm transition-all"
          >
            Access The Sale
          </motion.button>
        </motion.div>

        {/* Right contextual aesthetic picture display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/3] w-full bg-[#EDE6D8]/5 rounded-sm overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800" 
            className="w-full h-full object-cover contrast-[1.05]"
            alt="Sale showcase collection item" 
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        </motion.div>

      </div>
    </section>
  );
}