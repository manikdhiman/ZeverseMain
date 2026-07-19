"use client";

import { motion } from "motion/react";
import Link from "next/link";

const VISUAL_COLLECTIONS = [
  {
    title: "9KT Fine Gold",
    tag: "LUXE",
    desc: "100% solid, elegant, and designed for daily luxury wear.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600",
    link: "/collections/9kt-fine-gold",
    gridClass: "md:col-span-2"
  },
  {
    title: "Emily In Paris",
    tag: "À LA MODE",
    desc: "Chic, global aesthetic directly inspired by Parisian style.",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600",
    link: "/collections/emily-in-paris-edition",
    gridClass: "md:col-span-1"
  },
  {
    title: "Fine Silver Collection",
    tag: "PURE ESSENTIALS",
    desc: "High-grade tarnish-resistant sterling silver statements.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600",
    link: "/collections/fine-silver",
    gridClass: "md:col-span-1"
  },
  {
    title: "Heritage Masterpieces",
    tag: "TRADITIONAL TRADITION",
    desc: "Royal micro-plated traditional pieces built to bridge generations.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600",
    link: "/collections/heritage-jewellery",
    gridClass: "md:col-span-2"
  }
];

export default function MaterialShowcase() {
  return (
    <section className="bg-[#EDE6D8] py-24 px-6 max-w-7xl mx-auto border-t border-[#311B14]/10">
      <div className="mb-16 max-w-xl text-left">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#311B14]/60 mb-3">
          The Craftsmanship
        </h2>
        <h3 className="font-brown-sugar text-4xl md:text-5xl text-[#311B14] leading-tight">
          Shop by Material & Limited Editions
        </h3>
      </div>

      {/* Luxury Asymmetric Grid Configuration */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {VISUAL_COLLECTIONS.map((col, idx) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
            className={`relative group h-[500px] overflow-hidden rounded-sm bg-stone-900 ${col.gridClass}`}
          >
            {/* Background Image Zoom Transition */}
            <img
              src={col.image}
              alt={col.title}
              className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.2s] ease-out opacity-85"
            />
            
            {/* Cinematic Gradient Tint Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#311B14]/90 via-[#311B14]/30 to-transparent" />

            {/* Premium Meta Content Typography Layout */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-left">
              <span className="text-[10px] tracking-[0.25em] font-bold text-[#EDE6D8] bg-[#311B14]/40 backdrop-blur-sm px-2.5 py-1 rounded-sm mb-3">
                {col.tag}
              </span>
              <h4 className="font-brown-sugar text-2xl md:text-3xl text-[#EDE6D8] mb-2 tracking-wide">
                {col.title}
              </h4>
              <p className="text-xs text-[#EDE6D8]/70 max-w-sm mb-6 font-light tracking-wide line-clamp-2">
                {col.desc}
              </p>
              
              <Link
                href={col.link}
                className="text-xs uppercase tracking-widest text-[#EDE6D8] font-semibold group-hover:border-b border-[#EDE6D8] pb-1 transition-all duration-300"
              >
                Explore Collection &rarr;
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}