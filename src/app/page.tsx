"use client";

import Hero from "@/components/Hero";
import AnnouncementBar from "@/components/AnnouncementBar";
import MarqueeBanner from "@/components/MarqueeBanner";
import ProductGrid from "@/components/ProductGrid";
import SaleSpotlight from "@/components/SaleSpotlight";
import NewArrivalsSlider from "@/components/NewArrivalsSlider";
import VIPClub from "@/components/VIPClub";
import MaterialShowcase from "@/components/MaterialShowcase";
import BrandPromise from "@/components/BrandPromise";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EDE6D8]">
      {/* 1. Top Luxury Announcement */}
      <AnnouncementBar />

      {/* 2. Main Hero Banner */}
      <Hero />

      {/* 3. Moving Brand Marquee */}
      <MarqueeBanner />

      {/* 4. Complete Catalog (Shows 50 pieces + "Load More" button) */}
      <ProductGrid />

      {/* 5. Rest of the lower website */}
      <SaleSpotlight />
      <NewArrivalsSlider />
      <MaterialShowcase />
      <VIPClub />
      <BrandPromise />
      <Footer />
    </div>
  );
}