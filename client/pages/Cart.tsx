import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "iPhone 15 Pro Max",
      price: 1199,
      image:
        "https://images.unsplash.com/photo-1592286927505-1fed540c98f5?w=200",
      quantity: 1,
    },
    {
      id: "2",
      name: "Samsung Galaxy S24 Ultra",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf373d3b7?w=200",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const isEmpty = cartItems.length === 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <main className="flex-1 py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Shopping Cart
          </h1>

          {isEmpty ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-20 h-20 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any items yet. Start shopping to
                see products here!
              </p>
              <Link
                to="/products"
                className="inline-flex px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 gap-2 items-center"
              >
                Continue Shopping
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-border rounded-xl overflow-hidden">
                  <div className="border-b border-border px-6 py-4">
                    <h2 className="font-semibold text-foreground">
                      {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
                    </h2>
                  </div>

                  <div className="divide-y divide-border">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="px-4 md:px-6 py-6 flex gap-4 md:gap-6 animate-fade-in"
                      >
                        {/* Image */}
                        <Link
                          to={`/products/${item.id}`}
                          className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </Link>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <Link
                              to={`/products/${item.id}`}
                              className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 text-sm md:text-base"
                            >
                              {item.name}
                            </Link>
                            <p className="text-xs md:text-sm text-muted-foreground mt-1">
                              SKU: {Math.random().toString(36).substr(2, 9)}
                            </p>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            {/* Quantity */}
                            <div className="flex items-center border border-border rounded-lg w-fit">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="px-2 md:px-3 py-1 hover:bg-gray-100 transition-colors text-sm"
                              >
                                −
                              </button>
                              <span className="px-3 md:px-4 py-1 border-l border-r border-border text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="px-2 md:px-3 py-1 hover:bg-gray-100 transition-colors text-sm"
                              >
                                +
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-right sm:ml-auto">
                              <p className="font-bold text-foreground text-sm md:text-base">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                ${item.price.toFixed(2)} each
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex-shrink-0 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Continue Shopping
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-border rounded-xl p-4 md:p-6 lg:sticky lg:top-24 lg:h-fit">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">
                    Order Summary
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground font-medium">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground font-medium">
                        {shipping === 0 ? (
                          <span className="text-accent">Free</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="text-foreground font-medium">
                        ${tax.toFixed(2)}
                      </span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-xs text-accent font-medium">
                        ✓ Free shipping - you qualify!
                      </p>
                    )}
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-bold text-foreground">Total</span>
                      <span className="text-xl md:text-2xl font-bold text-primary">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 mb-3 text-sm md:text-base">
                    Checkout
                  </button>

                  <button className="w-full px-6 py-3 border-2 border-border text-foreground font-semibold rounded-lg hover:border-primary transition-all duration-300 text-sm md:text-base">
                    Continue Shopping
                  </button>

                  {/* Promo Code */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Promo Code
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
                      />
                      <button className="px-4 py-2 bg-gray-100 text-foreground rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
