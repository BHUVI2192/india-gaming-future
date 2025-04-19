
import { PageHeader } from "@/components/common/PageHeader";
import { ProductCard } from "@/components/shop/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSource, setSelectedSource] = useState<"Flipkart" | "Amazon" | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = mockProducts.filter(product => {
    // Apply category filter
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    
    // Apply source filter
    if (selectedSource && product.source !== selectedSource) {
      return false;
    }
    
    // Apply search term
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const categories = Array.from(new Set(mockProducts.map(p => p.category)));

  return (
    <div>
      <PageHeader 
        title="Gaming Accessories Shop"
        description="Gaming accessories from Amazon and Flipkart at great prices"
        action={
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className={selectedSource === 'Amazon' ? 'bg-[#FF9900]/20' : ''}
              onClick={() => setSelectedSource(selectedSource === 'Amazon' ? null : 'Amazon')}
            >
              Amazon
            </Button>
            <Button 
              variant="outline" 
              className={selectedSource === 'Flipkart' ? 'bg-[#2874f0]/20' : ''}
              onClick={() => setSelectedSource(selectedSource === 'Flipkart' ? null : 'Flipkart')}
            >
              Flipkart
            </Button>
          </div>
        }
      />
      
      <div className="bg-gaming-card p-4 md:p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search products..." 
              className="pl-10 bg-gaming-dark border-muted w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge 
            className={`cursor-pointer ${selectedCategory === null ? 'bg-gaming-purple hover:bg-gaming-purple-light' : 'variant-outline'}`}
            variant={selectedCategory === null ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(null)}
          >
            All Products
          </Badge>
          
          {categories.map(category => (
            <Badge
              key={category}
              className="cursor-pointer"
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gaming-card rounded-lg">
          <h3 className="text-lg font-semibold mb-2">No Products Found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search term.
          </p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSelectedCategory(null);
              setSelectedSource(null);
              setSearchTerm("");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

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
