import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Shop" },
    { to: "/about", label: "About" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-noble-secondary/10"
          : "bg-white/80 backdrop-blur-xl border-b border-noble-secondary/10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-serif tracking-widest text-noble-primary uppercase relative group"
        >
          Gemstone
          <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-noble-accent transition-all duration-500 group-hover:w-full"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.15em] text-noble-primary font-medium">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `relative group transition-colors hover:text-noble-accent ${isActive ? "text-noble-accent" : ""}`
              }
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-noble-accent transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}

          {/* Collections dropdown-style link */}
          <a
            href="/#collections"
            className="relative group transition-colors hover:text-noble-accent"
          >
            Collections
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-noble-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-noble-primary">
          {/* Search */}
          <Link
            to="/products"
            title="Search"
            className="hover:text-noble-accent transition-all hover:scale-110 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            title="Wishlist"
            className="hover:text-noble-accent transition-all hover:scale-110 duration-200 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-noble-accent text-white rounded-full text-[9px] flex items-center justify-center font-semibold">
              4
            </span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            title="Cart"
            className="hover:text-noble-accent transition-all hover:scale-110 duration-200 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-noble-accent text-white rounded-full text-[9px] flex items-center justify-center font-semibold">
              3
            </span>
          </Link>

          {/* Account */}
          <button
            title="Account"
            className="hover:text-noble-accent transition-all hover:scale-110 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden hover:text-noble-accent transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-noble-secondary/10 px-6 py-6 space-y-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `block text-sm uppercase tracking-widest py-2 transition-colors ${isActive ? "text-noble-accent" : "text-noble-primary hover:text-noble-accent"}`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="/#collections"
            className="block text-sm uppercase tracking-widest py-2 text-noble-primary hover:text-noble-accent transition-colors"
          >
            Collections
          </a>
          <div className="border-t border-noble-secondary/10 pt-4 flex gap-6">
            <Link
              to="/wishlist"
              className="text-sm uppercase tracking-widest text-noble-primary hover:text-noble-accent transition-colors"
            >
              Wishlist
            </Link>
            <Link
              to="/cart"
              className="text-sm uppercase tracking-widest text-noble-primary hover:text-noble-accent transition-colors"
            >
              Cart (3)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
