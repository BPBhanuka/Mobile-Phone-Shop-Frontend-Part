import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg animate-slide-up">
          <div className="mb-6">
            <h1 className="text-7xl md:text-8xl font-bold text-primary mb-4">
              404
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Oops! Page not found
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist yet. Let us know what you'd like to see and we'll build it for you!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
