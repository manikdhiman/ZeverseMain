import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import { LOCAL_PRODUCTS } from "@/utils/localProducts"; // Import local catalog array

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Search the array file matching the clicked route ID parameters
  const product = LOCAL_PRODUCTS.find((p) => p.id === id);

  // If someone manual types an invalid string into URL, safe exit
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#EDE6D8] pt-32 pb-24 text-[#311B14]">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        
        {/* Back navigation button row */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-bold tracking-[0.25em] uppercase opacity-60 hover:opacity-100 transition-opacity mb-12 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-300 mr-2">&larr;</span> 
          Back to Curation Gallery
        </Link>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Large Showcase Product Image Block (Takes 7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-sm p-8 md:p-16 shadow-sm flex items-center justify-center min-h-[500px] lg:min-h-[750px]">
            <img
              src={product.img}
              alt={product.name}
              className="max-w-full max-h-[650px] object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* RIGHT SIDE: Product Information & Action Panel (Takes 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            
            {/* Visual Quality Assurance Badges */}
            <div className="flex flex-wrap gap-2 text-[10px] font-bold tracking-widest uppercase">
              <span className="bg-white px-4 py-2 border border-[#311B14]/10 rounded-full shadow-sm">✨ Anti-Tarnish Protection</span>
              <span className="bg-white px-4 py-2 border border-[#311B14]/10 rounded-full shadow-sm">🛡️ Skin Safe Curation</span>
              <span className="bg-white px-4 py-2 border border-[#311B14]/10 rounded-full shadow-sm">👑 18K Gold Plated</span>
            </div>

            {/* Product Meta Header */}
            <div className="border-b border-[#311B14]/10 pb-6">
              <span className="text-xs tracking-[0.3em] font-bold opacity-40 uppercase block mb-2">{product.collection}</span>
              <h1 className="font-brown-sugar text-4xl md:text-5xl leading-tight mb-4 tracking-wide">{product.name}</h1>
              <p className="text-3xl font-light tracking-wide">${product.price}.00</p>
            </div>

            {/* Premium Social Proof Banner */}
            <div className="bg-red-50 border border-red-200 rounded-sm p-4 text-red-800 flex items-center space-x-3 text-xs font-semibold uppercase tracking-wider">
              <span className="text-base animate-pulse">⚡</span>
              <span><strong>477 items</strong> sold out in the last 7 days</span>
            </div>

            {/* About & Craft Story Descriptions */}
            <div className="text-left space-y-2">
              <h3 className="text-xs uppercase tracking-widest font-bold opacity-40">The Craft Story</h3>
              <p className="text-sm font-light leading-relaxed opacity-80">{product.description}</p>
            </div>

            {/* Primary Call-to-Actions Stack */}
            <div className="space-y-4 pt-4">
              {/* Dynamic Add to Cart Button */}
              <AddToCartButton product={{ id: product.id, name: product.name, price: product.price, image_url: product.img }} />
              
              {/* Buy Now Button (Reserved for future connection) */}
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