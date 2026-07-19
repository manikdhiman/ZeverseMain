import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-96 w-full flex items-center justify-center bg-[#EDE6D8]">
        <p className="tracking-widest uppercase text-sm text-[#311B14] opacity-50">
          New Collections Dropping Soon
        </p>
      </div>
    </>
  );
}