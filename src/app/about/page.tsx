export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#EDE6D8] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Editorial Subheader */}
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#311B14]/60 mb-4 block">
          Our Philosophy
        </span>
        
        {/* Large Statement Branding */}
        <h1 className="font-brown-sugar text-5xl md:text-7xl text-[#311B14] mb-12 tracking-wide">
          The Zeverse Manifestation
        </h1>

        {/* Narrative Columns Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-sm font-light leading-relaxed text-[#311B14]/90 mb-16">
          <p>
            Zeverse was born out of a desire to break the boundaries of conventional fine jewelry distribution models. We believe that true luxury shouldn’t be locked away in vaults or strictly reserved for special occasions—it should be lived in, worn proudly, and integrated into every layer of your daily aesthetic layout.
          </p>
          <p>
            By sourcing superior anti-tarnish compositions, utilizing meticulous 18k plating, and matching it with avant-garde custom fonts like Brown Sugar, we construct statements that feel altogether out of this world while maintaining perfect structural longevity.
          </p>
        </div>

        {/* Cinematic Imagery Section Intersect */}
        <div className="w-full aspect-video overflow-hidden rounded-sm bg-stone-200 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200" 
            alt="Jewelry artisan workbench curation" 
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </div>

      </div>
    </div>
  );
}