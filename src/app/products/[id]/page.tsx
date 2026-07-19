import { supabase } from "@/utils/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#EDE6D8] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Luxury Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-[#311B14] opacity-60 hover:opacity-100 transition-opacity mb-8 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-200 mr-2">&larr;</span> 
          Back to Curation
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Massive Image View Frame (Takes 7 Cols) */}
          <div className="lg:col-span-7 relative aspect-[4/3] w-full overflow-hidden bg-white rounded-sm shadow-sm flex items-center justify-center">
            <img
              src={product.image_url}
              alt={product.name}
              className="max-h-full object-contain p-4"
            />
          </div>

          {/* Right Side: High-End Details & Conversions (Takes 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col text-left space-y-6">
            
            {/* Row 1: Premium Feature Badges */}
            <div className="flex flex-wrap gap-2 text-[10px] font-bold tracking-wider uppercase text-[#311B14]/80">
              <span className="bg-white/60 border border-[#311B14]/10 rounded-full px-3 py-1.5 flex items-center">
                ✨ Anti-Tarnish
              </span>
              <span className="bg-white/60 border border-[#311B14]/10 rounded-full px-3 py-1.5 flex items-center">
                🛡️ Skin Safe Jewellery
              </span>
              <span className="bg-white/60 border border-[#311B14]/10 rounded-full px-3 py-1.5 flex items-center">
                👑 18K Gold Tone Plated
              </span>
            </div>

            {/* Title & Price Meta */}
            <div>
              <span className="text-xs tracking-[0.25em] font-bold text-[#311B14]/40 uppercase block mb-1">
                {product.collection || "Fine Curation"}
              </span>
              <h1 className="font-brown-sugar text-3xl md:text-4xl text-[#311B14] tracking-wide mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-[#311B14]">
                ${Number(product.price).toFixed(2)}
              </p>
            </div>

            {/* Social Proof High-Conversion Banner */}
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-sm p-3 flex items-center space-x-2 text-xs font-medium">
              <span>⚡</span>
              <span><strong>477</strong> quantity sold in last 7 days</span>
            </div>

            {/* Micro-Deal Card Box */}
            <div className="border border-[#311B14]/10 rounded-sm bg-white/40 p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#311B14] mb-2 flex items-center">
                🏷️ Deals Available
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-sm border border-dashed border-emerald-600">
                <div className="text-left">
                  <p className="text-xs font-bold text-[#311B14]">Special Bundle Pricing</p>
                  <p className="text-[10px] text-[#311B14]/60">Buy 4 premium pieces for maximum value.</p>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                  MONSOON4
                </span>
              </div>
            </div>

            {/* Delivery Status Indicator */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-800">
              <span className="text-sm">✓</span>
              <span>In stock - ready to ship beautifully</span>
            </div>

            {/* Action Group Intersections */}
            <div className="space-y-3 pt-4">
              {/* Add To Bag Client Integration Wrapper */}
              <AddToCartButton product={product} />

              {/* Instant Checkout Buy Now Button */}
              <button className="w-full bg-[#1c100c] text-[#EDE6D8] uppercase tracking-widest font-bold py-4 text-xs rounded-sm hover:opacity-90 transition-opacity duration-300">
                Buy It Now
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}