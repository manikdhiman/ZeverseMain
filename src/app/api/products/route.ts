import { NextResponse } from "next/server";

const PRODUCTS = [
  {
    id: "p1",
    name: "Embossed Paisley Bangle",
    price: 180,
    category: "9KT Gold",
    image_url: "https://images.unsplash.com/photo-1611591475171-8b2112d7f4be?q=80&w=600",
    description: "Intricately detailed 9KT fine gold bangle crafted for statement occasions."
  },
  {
    id: "p2",
    name: "Pink Diamond Solitaire Ring",
    price: 340,
    category: "Fine Silver",
    image_url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600",
    description: "Cushion-cut solitaire encased in halo micro-pave setting."
  },
  {
    id: "p3",
    name: "Dual Crescent Pendant",
    price: 95,
    category: "Under $100",
    image_url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600",
    description: "Layered fine gold chain featuring a geometric sapphire core."
  },
  {
    id: "p4",
    name: "Aura Solitaire Ring",
    price: 85,
    category: "Anti-Tarnish",
    image_url: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600",
    description: "Protective vacuum-sealed coating with high-brilliance clear zirconia."
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get("filter");

  if (!filter || filter === "All Pieces") {
    return NextResponse.json(PRODUCTS);
  }

  const filtered = PRODUCTS.filter((item) => {
    if (filter === "Under $100") return item.price < 100;
    return item.category.toLowerCase() === filter.toLowerCase();
  });

  return NextResponse.json(filtered);
}