
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  imageUrl: string;
  category: string;
  brand: string;
  rating: number;
  inStock: boolean;
  externalUrl: string;
  source: "Flipkart" | "Amazon";
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Pro Gaming Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with customizable keys",
    price: 4999,
    discountedPrice: 3999,
    imageUrl: "/placeholder.svg",
    category: "Peripherals",
    brand: "Cosmic Byte",
    rating: 4.5,
    inStock: true,
    externalUrl: "https://www.amazon.in/Cosmic-Byte-CB-GK-16-Firefly-Mechanical/dp/B08VWGDQZS/",
    source: "Amazon"
  },
  {
    id: "2",
    name: "Ultra Precision Gaming Mouse",
    description: "16000 DPI optical sensor with 8 programmable buttons",
    price: 3499,
    discountedPrice: 2999,
    imageUrl: "/placeholder.svg",
    category: "Peripherals",
    brand: "Logitech",
    rating: 4.8,
    inStock: true,
    externalUrl: "https://www.flipkart.com/logitech-g102-wired-optical-gaming-mouse/p/itm8c79ef9d8b4f3",
    source: "Flipkart"
  },
  {
    id: "3",
    name: "HD Gaming Headset with Noise Cancellation",
    description: "7.1 surround sound with detachable mic",
    price: 5999,
    discountedPrice: 4499,
    imageUrl: "/placeholder.svg",
    category: "Audio",
    brand: "HyperX",
    rating: 4.6,
    inStock: true,
    externalUrl: "https://www.amazon.in/HyperX-Cloud-Stinger-Core-Lightweight/dp/B08HPZQRX2/",
    source: "Amazon"
  },
  {
    id: "4",
    name: "Gaming Chair with Lumbar Support",
    description: "Ergonomic design with adjustable armrests and reclining function",
    price: 12999,
    discountedPrice: 10999,
    imageUrl: "/placeholder.svg",
    category: "Furniture",
    brand: "Green Soul",
    rating: 4.3,
    inStock: true,
    externalUrl: "https://www.flipkart.com/green-soul-monster-ultimate-series-s-multi-functional-ergonomic-gaming-chair-gm-seating-furniture/p/itm4b2db6d4e1b42",
    source: "Flipkart"
  },
  {
    id: "5",
    name: "High-Performance Gaming Monitor",
    description: "27-inch 165Hz 1ms response time IPS panel",
    price: 24999,
    discountedPrice: 21999,
    imageUrl: "/placeholder.svg",
    category: "Monitors",
    brand: "Acer",
    rating: 4.7,
    inStock: true,
    externalUrl: "https://www.amazon.in/Acer-Nitro-VG271U-Gaming-Monitor/dp/B07SHPYZV7/",
    source: "Amazon"
  },
  {
    id: "6",
    name: "Gaming Finger Sleeves",
    description: "Anti-sweat breathable finger sleeves for mobile gaming",
    price: 299,
    discountedPrice: 199,
    imageUrl: "/placeholder.svg",
    category: "Accessories",
    brand: "GameXpert",
    rating: 4.2,
    inStock: true,
    externalUrl: "https://www.flipkart.com/tukzer-mobile-gaming-finger-sleeve-touch-sensitive-breathable-anti-sweat-universal/p/itm2fa14e2d6fd1e",
    source: "Flipkart"
  },
  {
    id: "7",
    name: "Cooling Fan for Gaming Phone",
    description: "USB powered phone cooler that reduces device temperature while gaming",
    price: 1499,
    discountedPrice: 1199,
    imageUrl: "/placeholder.svg",
    category: "Cooling",
    brand: "Black Shark",
    rating: 4.0,
    inStock: true,
    externalUrl: "https://www.amazon.in/Black-Shark-Magnetic-Cooling-Smartphones/dp/B08LNYWPN9/",
    source: "Amazon"
  },
  {
    id: "8",
    name: "RGB Cooling Pad for Laptop",
    description: "Laptop cooling pad with 6 fans and RGB lighting",
    price: 1999,
    discountedPrice: 1799,
    imageUrl: "/placeholder.svg",
    category: "Cooling",
    brand: "Zebronics",
    rating: 4.5,
    inStock: true,
    externalUrl: "https://www.flipkart.com/zebronics-nc9100-cooling-pad/p/itm53082953e4704",
    source: "Flipkart"
  }
];
