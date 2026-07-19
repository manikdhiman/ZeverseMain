import { supabase } from "@/utils/supabase";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Fetch product from Supabase by ID
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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Side: Premium High-Quality Imagery Frame */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 rounded-sm">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side: Editorial Information & Actions */}
        <div className="flex flex-col justify-center text-left">
          <span className="text-xs tracking-[0.25em] font-bold text-[#311B14]/60 uppercase mb-2">
            {product.collection}
          </span>
          <h1 className="font-brown-sugar text-4xl md:text-5xl text-[#311B14] mb-4 tracking-wide">
            {product.name}
          </h1>
          <p className="text-2xl font-medium text-[#311B14] mb-6">
            ${Number(product.price).toFixed(2)}
          </p>
          
          <hr className="border-[#311B14]/10 mb-6" />

          <p className="text-sm font-light leading-relaxed text-[#311B14]/80 mb-8">
            {product.description || "A masterclass in design, this Zeverse signature piece brings timeless luxury elements directly into your modern wardrobe signature layout."}
          </p>

          {/* Luxury CTA Button */}
          <button className="w-full bg-[#311B14] text-[#EDE6D8] uppercase tracking-widest font-semibold py-4 text-sm rounded-sm hover:opacity-95 transition-opacity duration-300 mb-8">
            Add To Bag
          </button>

          {/* Premium Accordion Specifications Preview */}
          <div className="border-t border-[#311B14]/10 pt-4 space-y-4 text-xs tracking-wide uppercase text-[#311B14]">
            <div className="flex justify-between font-bold opacity-80">
              <span>Materials</span>
              <span className="font-normal normal-case text-right opacity-60">Anti-Tarnish Wear Protected</span>
            </div>
            <div className="flex justify-between font-bold opacity-80">
              <span>Shipping</span>
              <span className="font-normal normal-case text-right opacity-60">Complimentary Global Insured Delivery</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}