import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@shared/schema";

export default function FeaturedProducts() {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products/featured"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Medical Products</h2>
            <p className="text-xl text-gray-600">Quality medical equipment and supplies trusted by healthcare professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-10 w-24" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Medical Products</h2>
            <p className="text-xl text-red-600">Unable to load featured products. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Medical Products</h2>
          <p className="text-xl text-gray-600">Quality medical equipment and supplies trusted by healthcare professionals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product) => (
            <Card key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-medical-green text-white">
                    {product.fdaApproved === "true" ? "FDA Approved" : "Medical Grade"}
                  </Badge>
                  <span className="text-medical-yellow font-semibold">{product.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-medical-green">${product.price}</span>
                  <Button className="bg-medical-green text-white hover:bg-medical-green-dark transition-colors">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/products">
            <Button className="bg-medical-yellow text-medical-green-dark hover:bg-yellow-300 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
