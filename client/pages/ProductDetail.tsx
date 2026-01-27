import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import {
  Heart,
  Star,
  ShoppingCart,
  Check,
  ChevronLeft,
  Share2,
} from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id,
    name: "iPhone 15 Pro Max",
    price: 1199,
    originalPrice: 1299,
    rating: 5,
    reviews: 328,
    image: "https://images.unsplash.com/photo-1592286927505-1fed540c98f5?w=800",
    images: [
      "https://images.unsplash.com/photo-1592286927505-1fed540c98f5?w=800",
      "https://images.unsplash.com/photo-1611707267537-b85faf00021e?w=800",
      "https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=800",
    ],
    inStock: true,
    sku: "IPH15PM-256",
    category: "Mobile Phones",
    description:
      "Experience the power of innovation with the iPhone 15 Pro Max. Featuring the latest A17 Pro chip, stunning ProMotion display, and advanced camera system.",
    specs: [
      { label: "Display", value: "6.7-inch Super Retina XDR" },
      { label: "Chip", value: "A17 Pro" },
      { label: "Storage", value: "256GB" },
      { label: "Camera", value: "48MP Main + 12MP Ultra Wide" },
      { label: "Battery", value: "Up to 29 hours" },
      { label: "Water Resistance", value: "IP68" },
    ],
    features: [
      "ProMotion technology with 120Hz refresh rate",
      "Advanced Always-On display",
      "Titanium design",
      "Action button",
      "USB-C connector",
      "Magnetic charging",
    ],
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 py-8 md:py-12">
        <div className="container px-4 md:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/products"
              className="hover:text-primary transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all"
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="text-sm font-semibold text-accent ml-auto">
                    Save ${product.originalPrice - product.price}
                  </span>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 text-sm">
                {product.inStock ? (
                  <>
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-green-700 font-medium">In Stock</span>
                  </>
                ) : (
                  <span className="text-destructive font-medium">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 border-l border-r border-border">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {isAdded ? "Added to Cart!" : "Add to Cart"}
                </button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="px-6 py-3 border-2 border-border rounded-lg hover:border-primary transition-all"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      isFavorite
                        ? "fill-accent text-accent"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
                <button className="px-6 py-3 border-2 border-border rounded-lg hover:border-primary transition-all">
                  <Share2 className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Benefits */}
              <div className="bg-secondary/10 rounded-xl p-4 space-y-3">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">
                      On orders over $50
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">30-Day Returns</p>
                    <p className="text-xs text-muted-foreground">
                      Risk-free returns
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">1 Year Warranty</p>
                    <p className="text-xs text-muted-foreground">
                      Official manufacturer warranty
                    </p>
                  </div>
                </div>
              </div>

              {/* SKU */}
              <div className="text-xs text-muted-foreground border-t border-border pt-4">
                SKU: <span className="font-mono">{product.sku}</span>
              </div>
            </div>
          </div>

          {/* Specifications and Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Specifications
              </h2>
              <div className="space-y-3">
                {product.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between py-3 border-b border-border"
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-semibold text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Key Features
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Description */}
          <div className="mt-12 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              About this product
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              {product.description}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Designed with premium materials and cutting-edge technology, this
              device delivers exceptional performance, stunning visuals, and
              reliable battery life. Perfect for professionals, creators, and
              anyone who demands the best.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
