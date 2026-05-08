import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 border-b border-gray-100 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 md:h-24 flex items-center justify-center relative">
        
        {/* Desktop Left Nav */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-end mr-8 lg:mr-16">
          <HashLink smooth to="/#produtos" className="text-gray-600 font-bold text-sm lg:text-base hover:text-aloe-600 transition-colors uppercase tracking-wide">Produtos</HashLink>
          <Link to="/catalogo" className="text-gray-600 font-bold text-sm lg:text-base hover:text-aloe-600 transition-colors uppercase tracking-wide">Catálogo</Link>
        </nav>

        {/* Center Logo */}
        <Link to="/" className="flex flex-col items-center justify-center z-50 flex-shrink-0">
          <span className="font-serif font-medium text-[#242424] leading-none text-2xl md:text-3xl lg:text-[2rem] tracking-[0.15em] uppercase ml-1">Forever</span>
          <span className="text-[#5a5a5a] font-sans font-bold text-[9px] md:text-[11px] uppercase tracking-[0.2em] mt-1 md:mt-1.5 ml-1">FBO Independente</span>
        </Link>
        
        {/* Desktop Right Nav */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-start ml-8 lg:ml-16">
          <Link to="/seja-fbo" className="text-gray-600 font-bold text-sm lg:text-base hover:text-aloe-600 transition-colors uppercase tracking-wide">Seja FBO</Link>
          <Link to="/blog" className="text-gray-600 font-bold text-sm lg:text-base hover:text-aloe-600 transition-colors uppercase tracking-wide">Blog</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 p-2 text-aloe-900 hover:bg-aloe-50 rounded-lg transition-colors absolute right-4"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed top-0 left-0 right-0 h-[100dvh] overflow-y-auto bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 md:hidden ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-col gap-6 text-center mt-8">
             <HashLink smooth to="/#produtos" className="text-aloe-900 font-bold text-2xl uppercase tracking-widest hover:text-aloe-600 transition-colors pb-4 border-b border-gray-100">Produtos</HashLink>
             <Link to="/catalogo" className="text-aloe-900 font-bold text-2xl uppercase tracking-widest hover:text-aloe-600 transition-colors pb-4 border-b border-gray-100">Catálogo</Link>
             <Link to="/seja-fbo" className="text-aloe-900 font-bold text-2xl uppercase tracking-widest hover:text-aloe-600 transition-colors pb-4 border-b border-gray-100">Seja FBO</Link>
             <Link to="/blog" className="text-aloe-900 font-bold text-2xl uppercase tracking-widest hover:text-aloe-600 transition-colors pb-4 border-b border-gray-100">Blog</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
