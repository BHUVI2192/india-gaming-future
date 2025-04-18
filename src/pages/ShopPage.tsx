
import { PageHeader } from "@/components/common/PageHeader";
import { ProductCard } from "@/components/shop/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const ShopPage = () => {
  return (
    <div>
      <PageHeader 
        title="Gaming Accessories Shop"
        description="Buy gaming accessories directly from brands at great discounts"
        action={
          <Button variant="outline" className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gaming-purple text-white text-xs flex items-center justify-center">
              0
            </span>
          </Button>
        }
      />
      
      <div className="bg-gaming-card p-4 md:p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search products..." 
              className="pl-10 bg-gaming-dark border-muted w-full"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 w-full md:w-auto">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge className="bg-gaming-purple hover:bg-gaming-purple-light">All Products</Badge>
          <Badge variant="outline">Keyboards</Badge>
          <Badge variant="outline">Mice</Badge>
          <Badge variant="outline">Headsets</Badge>
          <Badge variant="outline">Chairs</Badge>
          <Badge variant="outline">Monitors</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 p-6 bg-gaming-gradient rounded-lg text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Special Offers for Gamers</h3>
            <p className="text-white/80">
              Use code <span className="font-bold">GAMERSXP10</span> for 10% off your first purchase
            </p>
          </div>
          <Button variant="outline" className="bg-white text-gaming-purple hover:bg-white/90 w-full md:w-auto">
            View All Offers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
