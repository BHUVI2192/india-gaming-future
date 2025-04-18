
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
    brand: "GamerGear",
    rating: 4.5,
    inStock: true
  },
  {
    id: "2",
    name: "Ultra Precision Gaming Mouse",
    description: "16000 DPI optical sensor with 8 programmable buttons",
    price: 3499,
    discountedPrice: 2999,
    imageUrl: "/placeholder.svg",
    category: "Peripherals",
    brand: "PixelPoint",
    rating: 4.8,
    inStock: true
  },
  {
    id: "3",
    name: "HD Gaming Headset with Noise Cancellation",
    description: "7.1 surround sound with detachable mic",
    price: 5999,
    discountedPrice: 4499,
    imageUrl: "/placeholder.svg",
    category: "Audio",
    brand: "SoundStrike",
    rating: 4.6,
    inStock: true
  },
  {
    id: "4",
    name: "Gaming Chair with Lumbar Support",
    description: "Ergonomic design with adjustable armrests and reclining function",
    price: 12999,
    discountedPrice: 10999,
    imageUrl: "/placeholder.svg",
    category: "Furniture",
    brand: "ComfortPlay",
    rating: 4.3,
    inStock: false
  },
  {
    id: "5",
    name: "High-Performance Gaming Monitor",
    description: "27-inch 165Hz 1ms response time IPS panel",
    price: 24999,
    discountedPrice: 21999,
    imageUrl: "/placeholder.svg",
    category: "Monitors",
    brand: "VisualPro",
    rating: 4.7,
    inStock: true
  }
];
