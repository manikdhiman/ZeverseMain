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

  // Query Supabase using the real table column structures
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  // If the row doesn't exist in your database table, throw 404 safely
  if (error || !product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#EDE6D8] pt-32 pb-24 text-[#311B14]">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-bold tracking-[0.25em] uppercase opacity-60 hover:opacity-100 transition-opacity mb-12 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-300 mr-2">&larr;</span> 
          Back to Curation Gallery
        </Link>

        {/* Wide Split Content Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Side: Massive Image View Frame */}
          <div className="lg:col-span-7 bg-white rounded-sm p-8 md:p-16 shadow-sm flex items-center justify-center min-h-[500px] lg:min-h-[750px]">
            <img
              src={product.image_url}
              alt={product.name}
              className="max-w-full max-h-[650px] object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Side: Luxury Detail Column */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            
            <div className="flex flex-wrap gap-2 text-[10px] font-bold tracking-widest uppercase">
              <span className="bg-white px-4 py-2 border border-[#311B14]/10 rounded-full shadow-sm">✨ Anti-Tarnish Protection</span>
              <span className="bg-white px-4 py-2 border border-[#311B14]/10 rounded-full shadow-sm">🛡️ Skin Safe Curation</span>
              <span className="bg-white px-4 py-2 border border-[#311B14]/10 rounded-full shadow-sm">👑 18K Gold Plated</span>
            </div>

            <div className="border-b border-[#311B14]/10 pb-6">
              <span className="text-xs tracking-[0.3em] font-bold opacity-40 uppercase block mb-2">
                {product.collection || "Exquisite Curation"}
              </span>
              <h1 className="font-brown-sugar text-4xl md:text-5xl leading-tight mb-4 tracking-wide">
                {product.name}
              </h1>
              <p className="text-3xl font-light tracking-wide">
                ${Number(product.price).toFixed(2)}
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-sm p-4 text-red-800 flex items-center space-x-3 text-xs font-semibold uppercase tracking-wider">
              <span className="text-base animate-pulse">⚡</span>
              <span><strong>477 Luxury items</strong> bought in the last 7 days</span>
            </div>

            <div className="text-left space-y-2">
              <h3 className="text-xs uppercase tracking-widest font-bold opacity-40">The Craft Story</h3>
              <p className="text-sm font-light leading-relaxed opacity-80">
                {product.description || "Crafted to perfection to capture light elegantly from all viewing perspectives. Engineered with anti-tarnish protective layering for regular wear longevity."}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <AddToCartButton product={{ id: String(product.id), name: product.name, price: product.price, image_url: product.image_url }} />
              <button className="w-full bg-[#1c100c] text-[#EDE6D8] uppercase tracking-widest font-bold py-5 text-xs rounded-sm hover:opacity-90 transition-opacity duration-300 tracking-[0.2em] shadow-md">
                Buy It Now
              </button>
            </div>

            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 uppercase tracking-widest pt-2">
              <span className="text-sm">✓</span>
              <span>Boutique Inventory Verified - Ready to Dispatch</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}