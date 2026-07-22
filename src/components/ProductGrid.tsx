"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/utils/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image_url: string;
  description: string;
}

export default function ProductGrid({ activeFilter = "All Pieces" }: { activeFilter?: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(50); // Initial 50 products
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch(`/api/products?filter=${encodeURIComponent(activeFilter)}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed fetching product catalog", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [activeFilter]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 50);
  };

  const displayedProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#311B14]/60">Loading Masterpieces...</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Title */}
      <div className="text-center mb-10">
        <span className="font-cinzel text-xs uppercase tracking-[0.4em] text-[#311B14]/60">The Full Catalog</span>
        <h2 className="font-brown-sugar text-3xl md:text-5xl text-[#311B14] mt-1 tracking-wide">Masterpieces</h2>
      </div>

      {/* Main Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayedProducts.map((item) => (
          <div key={item.id} className="group flex flex-col space-y-3">
            <div className="aspect-[3/4] bg-[#311B14]/5 rounded-sm overflow-hidden relative">
              <img
                src={item.image_url}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button
                onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, img: item.image_url })}
                className="absolute bottom-4 left-4 right-4 bg-[#311B14] text-[#EDE6D8] py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-opacity rounded-sm cursor-pointer"
              >
                Add To Bag
              </button>
            </div>
            <div className="flex justify-between items-start pt-1">
              <div>
                <h3 className="font-cinzel text-sm text-[#311B14]">{item.name}</h3>
                <span className="text-[10px] uppercase tracking-widest text-[#311B14]/50">{item.category}</span>
              </div>
              <span className="text-xs font-bold text-[#311B14]">${item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="px-8 py-3.5 bg-[#311B14] text-[#EDE6D8] border border-[#311B14] text-xs font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-[#311B14] transition-colors rounded-sm cursor-pointer"
          >
            Load More Masterpieces ({products.length - visibleCount} Remaining) &rarr;
          </button>
        </div>
      )}
    </section>
  );
}