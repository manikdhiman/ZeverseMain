"use client";

export default function VIPClub() {
  return (
    <section className="bg-[#311B14] text-[#EDE6D8] py-20 px-6 my-16 rounded-sm max-w-7xl mx-auto text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="font-cinzel text-xs uppercase tracking-[0.4em] text-[#EDE6D8]/60">
          Private Access
        </span>
        <h2 className="font-brown-sugar text-3xl md:text-5xl tracking-wide">
          Join The Zeverse Vault
        </h2>
        <p className="text-xs font-light tracking-wide text-[#EDE6D8]/80 max-w-md mx-auto">
          Receive priority allocation on new launches, invitations to private showroom exhibitions, and exclusive seasonal codes.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-80 px-4 py-3 bg-[#EDE6D8]/10 border border-[#EDE6D8]/20 text-xs text-[#EDE6D8] placeholder-[#EDE6D8]/40 focus:outline-none focus:border-[#EDE6D8] rounded-sm"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-[#EDE6D8] text-[#311B14] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors rounded-sm cursor-pointer"
          >
            Request Access
          </button>
        </form>
      </div>
    </section>
  );
}