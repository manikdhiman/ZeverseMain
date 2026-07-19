"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1740&auto=format&fit=crop",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#EDE6D8]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGES[currentIndex]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#311B14]/60 via-transparent to-[#311B14]/30" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[#EDE6D8] tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-3"
        >
          The Fine Jewelry Collection
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[#EDE6D8] text-4xl md:text-7xl font-light tracking-wide max-w-4xl lowercase first-letter:uppercase mb-8"
        >
          Crafting timeless elegance for the modern era.
        </motion.h1>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05, backgroundColor: "#EDE6D8", color: "#311B14" }}
          className="px-8 py-3 border border-[#EDE6D8] text-[#EDE6D8] text-sm uppercase tracking-widest font-medium transition-colors duration-300 backdrop-blur-sm"
        >
          Explore Zeverse
        </motion.button>
      </div>
    </section>
  );
}