import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#311B14] text-[#EDE6D8] border-t border-[#EDE6D8]/10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col space-y-4">
          <span className="font-brown-sugar text-4xl tracking-wide">Zeverse</span>
          <p className="text-xs opacity-60 tracking-wide font-light max-w-xs">
            Crafting timeless premium jewelry signatures designed out of this world for the modern wardrobe.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3 text-xs tracking-widest uppercase">
          <h4 className="font-bold mb-1 opacity-40">Boutique</h4>
          <Link href="/shop-all" className="hover:opacity-60 transition-opacity">Shop All</Link>
          <Link href="/about" className="hover:opacity-60 transition-opacity">Our Story</Link>
          <Link href="/care" className="hover:opacity-60 transition-opacity">Jewelry Care</Link>
        </div>

        {/* Customer Care */}
        <div className="flex flex-col space-y-3 text-xs tracking-widest uppercase">
          <h4 className="font-bold mb-1 opacity-40">Assistance</h4>
          <Link href="/shipping" className="hover:opacity-60 transition-opacity">Shipping & Returns</Link>
          <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact Us</Link>
        </div>

        {/* Newsletter Capture */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-xs tracking-widest uppercase font-bold opacity-40">The Zeverse Club</h4>
          <p className="text-xs font-light opacity-60">Subscribe to receive premier launch notifications and curated drops.</p>
          <div className="flex items-center border-b border-[#EDE6D8]/30 pb-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-none text-xs w-full focus:outline-none placeholder-[#EDE6D8]/40 uppercase tracking-widest text-[#EDE6D8]"
            />
            <button className="text-xs tracking-widest font-bold hover:opacity-60 transition-opacity ml-2">JOIN</button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#EDE6D8]/5 flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-widest uppercase opacity-40">
        <p>&copy; {new Date().getFullYear()} Zeverse Inc. All Rights Reserved.</p>
        <p>Out of this world luxury curation.</p>
      </div>
    </footer>
  );
}