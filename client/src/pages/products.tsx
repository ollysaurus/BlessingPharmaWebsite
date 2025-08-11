import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart, Zap, Pill, ClipboardList } from "lucide-react";
import type { Product } from "@shared/schema";

const categories = [
  { name: "Cardiology", icon: Heart, count: "45" },
  { name: "Surgery", icon: Zap, count: "78" },
  { name: "Pharmacy", icon: Pill, count: "156" },
  { name: "General Supplies", icon: ClipboardList, count: "89" },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: selectedCategory ? ["/api/products/category", selectedCategory] : ["/api/products"],
  });

  const filteredProducts = selectedCategory
    ? products?.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase())
    : products;

  return (
    <main className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical Products & Equipment</h1>
          <p className="text-xl text-gray-600">Comprehensive range of FDA-certified medical supplies organized by specialty</p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border-2 ${
              selectedCategory === null ? "border-medical-green" : "border-transparent hover:border-medical-green"
            }`}
          >
            <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardList className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">All Products</h3>
            <p className="text-sm text-gray-600 mt-2">{products?.length || 0} Products</p>
          </button>
          
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.name;
            
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(isSelected ? null : category.name)}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border-2 ${
                  isSelected ? "border-medical-green" : "border-transparent hover:border-medical-green"
                }`}
              >
                <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {products?.filter(p => p.category.toLowerCase() === category.name.toLowerCase()).length || 0} Products
                </p>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-12 w-full mb-3" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            <p className="text-xl">Unable to load products. Please try again later.</p>
          </div>
        ) : filteredProducts?.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-xl">
              {selectedCategory 
                ? `No products found in ${selectedCategory} category.` 
                : "No products available at this time."
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts?.map((product) => (
              <Card key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-48 object-cover" 
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-medical-green text-white text-xs font-medium">
                      {product.fdaApproved === "true" ? "FDA Approved" : "Medical Grade"}
                    </Badge>
                    <span className="text-medical-yellow font-semibold text-sm">{product.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-medical-green">${product.price}</span>
                    <Button 
                      size="sm"
                      className="bg-medical-green text-white hover:bg-medical-green-dark transition-colors"
                    >
                      Add to Cart
                    </Button>
                  </div>
                  {product.inStock > 0 && (
                    <p className="text-xs text-gray-500 mt-2">In Stock: {product.inStock}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
