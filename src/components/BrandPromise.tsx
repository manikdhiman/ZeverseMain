"use client";

import { motion } from "motion/react";

const PROMISES = [
  { title: "Anti-Tarnish Wear", desc: "Premium protection for lifetime shine" },
  { title: "18K Gold Plated Luxury", desc: "Bespoke handcrafted excellence" },
  { title: "Water-Resistant Build", desc: "Designed for effortless everyday use" },
  { title: "Ethically Sourced Jewels", desc: "Stunning lab-grown curation" }
];

export default function BrandPromise() {
  return (
    <div className="w-full bg-[#311B14] text-[#EDE6D8] py-8 border-b border-[#EDE6D8]/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {PROMISES.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-1 px-2"
          >
            <h4 className="text-xs uppercase tracking-widest font-bold">{item.title}</h4>
            <p className="text-[10px] tracking-wide uppercase opacity-60 font-light">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}