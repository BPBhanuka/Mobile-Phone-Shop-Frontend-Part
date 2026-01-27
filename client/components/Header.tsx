import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  cartCount?: number;
}

export function Header({ cartCount = 0 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
      <nav className="container flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-2xl text-primary"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-black">M</span>
          </div>
          <span className="hidden sm:inline">MobileHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/products"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Shop
          </Link>
          <a
            href="#"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Deals
          </a>
          <a
            href="#"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-secondary/20 rounded-lg transition-colors md:flex hidden">
            <Search className="w-5 h-5" />
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative p-2 hover:bg-secondary/20 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary/20 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white animate-fade-in">
          <div className="container px-4 py-4 flex flex-col gap-4">
            <Link
              to="/products"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <a
              href="#"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Deals
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
