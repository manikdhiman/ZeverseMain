export interface Product {
  id: string;
  name: string;
  price: number;
  tag: string;
  img: string;
  imgSecondary: string;
  collection: string;
  description: string;
}

export const LOCAL_PRODUCTS: Product[] = [
  { 
    id: "aura-diamond-ring", 
    name: "Aura Diamond Ring", 
    price: 890, 
    tag: "Rings", 
    collection: "Rings",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600",
    imgSecondary: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600",
    description: "A breathtaking statement ring featuring a meticulously cut central diamond aura. Handcrafted to perfection."
  },
  { 
    id: "seoul-minimalist-drops", 
    name: "Seoul Minimalist Drops", 
    price: 32, 
    tag: "Korean earrings", 
    collection: "Korean earrings",
    img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600",
    imgSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600",
    description: "Sleek, featherlight drop earrings reflecting modern South Korean high-fashion streetwear signatures."
  },
  { 
    id: "heritage-kundan-choker", 
    name: "Heritage Kundan Choker", 
    price: 290, 
    tag: "Heritage jewellery", 
    collection: "Heritage jewellery",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600",
    imgSecondary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600",
    description: "An imperial micro-plated masterpiece drawing deep historical inspiration from ancestral royal wear configurations."
  },
  { 
    id: "zeverse-signet-cuff", 
    name: "Zeverse Signet Cuff", 
    price: 45, 
    tag: "Cuffs and bracelets", 
    collection: "Cuffs & Bracelets",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600",
    imgSecondary: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600",
    description: "A structurally bold, anti-tarnish premium everyday cuff engineered to accentuate casual and formal silhouettes alike."
  }
];