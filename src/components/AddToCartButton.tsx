"use client";

import { useCart } from "@/utils/CartContext";

// Define the exact product details we need to pass into the cart
interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image_url: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        img: product.image_url
      })}
      className="w-full bg-[#311B14] text-[#EDE6D8] uppercase tracking-widest font-semibold py-4 text-sm rounded-sm hover:opacity-95 transition-opacity duration-300 mb-8"
    >
      Add To Bag
    </button>
  );
}