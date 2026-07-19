import Hero from "@/components/Hero";
import BrandPromise from "@/components/BrandPromise";
import NewArrivalsSlider from "@/components/NewArrivalsSlider";
import MaterialShowcase from "@/components/MaterialShowcase";
import SaleSpotlight from "@/components/SaleSpotlight";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandPromise />
      <NewArrivalsSlider />
      <MaterialShowcase />
      <SaleSpotlight />
      <ProductGrid />
    </>
  );
}