
import { Product } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.discountedPrice 
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100) 
    : 0;

  const handleBuy = () => {
    window.open(product.externalUrl, '_blank');
  };

  return (
    <div className="bg-gaming-card rounded-lg overflow-hidden border border-muted hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-gaming-purple px-2 py-1 rounded-md text-white text-xs font-bold">
            -{discount}%
          </div>
        )}
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-md text-white text-xs font-bold ${product.source === 'Amazon' ? 'bg-[#FF9900]' : 'bg-[#2874f0]'}`}>
          {product.source}
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <div className="bg-gaming-dark px-3 py-1 rounded-md text-white font-medium">
              Out of Stock
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-muted-foreground">{product.brand}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gaming-purple text-gaming-purple" />
            <span className="text-sm">{product.rating}</span>
          </div>
        </div>
        <h3 className="font-bold mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          {product.discountedPrice ? (
            <>
              <span className="text-lg font-bold">₹{product.discountedPrice}</span>
              <span className="text-sm text-muted-foreground line-through">₹{product.price}</span>
            </>
          ) : (
            <span className="text-lg font-bold">₹{product.price}</span>
          )}
        </div>
        <Button 
          className="w-full flex items-center justify-center gap-2"
          variant="outline"
          onClick={handleBuy}
          disabled={!product.inStock}
        >
          <ExternalLink className="w-4 h-4" />
          <span>Buy on {product.source}</span>
        </Button>
      </div>
    </div>
  );
}
