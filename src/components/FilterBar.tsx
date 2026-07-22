"use client";

import { useState } from "react";

const FILTERS = ["All Pieces", "9KT Gold", "Fine Silver", "Anti-Tarnish", "Under $100"];

export default function FilterBar({ onSelectFilter }: { onSelectFilter?: (filter: string) => void }) {
  const [active, setActive] = useState("All Pieces");

  return (
    <div className="bg-[#311B14] text-[#EDE6D8] border-y border-[#EDE6D8]/10 py-4 px-6 my-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar space-x-6">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#EDE6D8]/50 whitespace-nowrap hidden sm:inline">
          Filter Curation:
        </span>
        <div className="flex items-center space-x-3 sm:space-x-4">
          {FILTERS.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                if (onSelectFilter) onSelectFilter(item);
              }}
              className={`px-4 py-1.5 text-[11px] uppercase tracking-widest transition-all rounded-full whitespace-nowrap cursor-pointer ${
                active === item
                  ? "bg-[#EDE6D8] text-[#311B14] font-bold shadow-sm"
                  : "text-[#EDE6D8]/70 hover:text-[#EDE6D8] border border-[#EDE6D8]/20"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}