import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard, Product } from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, ShieldCheck, Truck } from "lucide-react";

export default function Index() {
  const featuredProducts: Product[] = [
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
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header cartCount={0} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Content */}
              <div className="flex flex-col gap-6 md:gap-8 animate-slide-up">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                    Discover the Future of Mobile
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                    Explore the latest flagship phones with unbeatable prices.
                    Premium quality, fast shipping, and hassle-free returns.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/products"
                    className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Shop Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300">
                    Learn More
                  </button>
                </div>

                {/* Stats */}
                <div className="flex gap-6 pt-4">
                  <div>
                    <p className="font-bold text-2xl text-primary">10K+</p>
                    <p className="text-sm text-muted-foreground">
                      Happy Customers
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Products</p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-primary">4.9★</p>
                    <p className="text-sm text-muted-foreground">Avg Rating</p>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative h-96 md:h-full min-h-96 hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=600&h=600&fit=crop"
                  alt="Featured Phone"
                  className="relative w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-secondary/5">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    Fast Shipping
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Free shipping on orders over $50. Delivery in 2-5 days.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    Secure & Safe
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    100% authentic products with official warranty.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/20">
                    <Zap className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    Best Prices
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Price match guarantee on all popular models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Featured Products
                </h2>
                <p className="text-muted-foreground">
                  Check out our best-selling and newest arrivals
                </p>
              </div>
              <Link
                to="/products"
                className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                View All
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex md:hidden mt-8">
              <Link
                to="/products"
                className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                View All Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for exclusive deals and new
                arrivals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
