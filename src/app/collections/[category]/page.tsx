import { supabase } from "@/utils/supabase";
import ProductGrid from "@/components/ProductGrid";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

// Helper to convert URL slug back to clean luxury titles
function cleanCategoryTitle(slug: string) {
  return decodeURIComponent(slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category;
  const cleanTitle = cleanCategoryTitle(rawCategory);

  // Fetch real-time items from Supabase filtered by this category line
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .ilike("collection", cleanTitle); // Case-insensitive matching

  if (error) {
    console.error("Supabase Error:", error);
  }

  return (
    <div className="min-h-screen bg-[#EDE6D8] pt-32 pb-20">
      {/* Editorial Header Section */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="font-brown-sugar text-5xl md:text-6xl text-[#311B14] mb-4">
          {cleanTitle}
        </h1>
        <p className="text-xs uppercase tracking-[0.2em] text-[#311B14]/60 max-w-xl mx-auto font-medium">
          Exquisite curation of fine jewelry crafted meticulously to accentuate your everyday style signature.
        </p>
      </div>

      {/* Dynamic Grid Rendering */}
      <div className="max-w-7xl mx-auto px-6">
        {!products || products.length === 0 ? (
          <div className="text-center py-20 border border-[#311B14]/10 rounded-sm">
            <p className="tracking-widest uppercase text-sm opacity-50">
              No pieces available in this collection yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 mb-4 rounded-sm">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col text-left mt-2">
                  <h4 className="text-sm font-light text-[#311B14] tracking-wide mb-1">
                    {product.name}
                  </h4>
                  <p className="text-sm font-medium text-[#311B14]">
                    ${Number(product.price).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}