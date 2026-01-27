import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard, Product } from "@/components/ProductCard";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Products() {
  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] = useState("all");

  const allProducts: Product[] = [
    {
      id: "1",
      name: "iPhone 15 Pro Max",
      price: 1199,
      originalPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1592286927505-1fed540c98f5?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 328,
      badge: "Hot",
      inStock: true,
    },
    {
      id: "2",
      name: "Samsung Galaxy S24 Ultra",
      price: 1299,
      originalPrice: 1449,
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf373d3b7?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 256,
      badge: "New",
      inStock: true,
    },
    {
      id: "3",
      name: "Google Pixel 8 Pro",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 189,
      inStock: true,
    },
    {
      id: "4",
      name: "OnePlus 12",
      price: 799,
      originalPrice: 899,
      image:
        "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 142,
      inStock: true,
    },
    {
      id: "5",
      name: "Xiaomi 14 Pro",
      price: 749,
      image:
        "https://images.unsplash.com/photo-1478737270454-541db00be875?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 95,
      inStock: true,
    },
    {
      id: "6",
      name: "Nothing Phone 2",
      price: 599,
      originalPrice: 699,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70259b51?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 67,
      badge: "Sale",
      inStock: true,
    },
    {
      id: "7",
      name: "Motorola Edge 50 Pro",
      price: 649,
      image:
        "https://images.unsplash.com/photo-1504088077153-364cd7e3f1dd?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 112,
      inStock: true,
    },
    {
      id: "8",
      name: "Oppo Find X7 Ultra",
      price: 1099,
      originalPrice: 1199,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 78,
      inStock: true,
    },
    {
      id: "9",
      name: "Realme 13 Pro+",
      price: 549,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 54,
      badge: "Popular",
      inStock: true,
    },
    {
      id: "10",
      name: "Vivo X100 Pro",
      price: 899,
      originalPrice: 999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 91,
      inStock: true,
    },
    {
      id: "11",
      name: "Sony Xperia 1 VI",
      price: 1399,
      image:
        "https://images.unsplash.com/photo-1521961915523-f8b268192088?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 43,
      inStock: false,
    },
    {
      id: "12",
      name: "Huawei Mate 60 Pro+",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1511235670307-c200534a76d5?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 67,
      inStock: true,
    },
  ];

  const filteredProducts = allProducts.filter((product) => {
    if (priceFilter === "budget") return product.price < 600;
    if (priceFilter === "mid")
      return product.price >= 600 && product.price < 1000;
    if (priceFilter === "premium") return product.price >= 1000;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // featured
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-8 md:py-12 border-b border-border">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              All Products
            </h1>
            <p className="text-muted-foreground">
              Browse our complete selection of {allProducts.length} mobile
              phones
            </p>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="md:col-span-1">
                <div className="space-y-6">
                  {/* Price Filter */}
                  <div className="bg-white rounded-xl border border-border p-4">
                    <h3 className="font-semibold text-foreground mb-4">
                      Price Range
                    </h3>
                    <div className="space-y-3">
                      {[
                        { value: "all", label: "All Prices" },
                        { value: "budget", label: "Budget (<$600)" },
                        { value: "mid", label: "Mid-Range ($600-$1000)" },
                        { value: "premium", label: "Premium (>$1000)" },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="price"
                            value={option.value}
                            checked={priceFilter === option.value}
                            onChange={(e) => setPriceFilter(e.target.value)}
                            className="w-4 h-4 accent-primary"
                          />
                          <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="bg-white rounded-xl border border-border p-4">
                    <h3 className="font-semibold text-foreground mb-4">
                      Availability
                    </h3>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-primary rounded"
                      />
                      <span className="text-sm text-foreground">In Stock</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="md:col-span-3">
                {/* Sort Options */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-muted-foreground">
                    Showing {sortedProducts.length} products
                  </p>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none px-4 py-2 bg-white border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary pr-10"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {sortedProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No products found. Try adjusting your filters.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
