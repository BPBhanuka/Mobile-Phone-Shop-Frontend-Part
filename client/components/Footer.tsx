import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-16">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground text-sm font-black">M</span>
              </div>
              <span>MobileHub</span>
            </div>
            <p className="text-sm text-gray-300">
              Your trusted destination for premium mobile phones and accessories.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Shop</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link to="/products" className="hover:text-primary transition-colors">
                All Products
              </Link>
              <a href="#" className="hover:text-primary transition-colors">
                New Arrivals
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Best Sellers
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                On Sale
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <a href="#" className="hover:text-primary transition-colors">
                Contact Us
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Shipping Info
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Returns
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Newsletter</h4>
            <p className="text-sm text-gray-300">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <p>&copy; 2024 MobileHub. All rights reserved.</p>
            </div>
            <div className="flex gap-6 md:justify-end">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
