function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-2xl font-semibold tracking-tight text-slate-950">
            SwiftCart
          </p>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Modern ecommerce
          </p>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#home" className="transition hover:text-slate-950">
            Home
          </a>
          <a href="#categories" className="transition hover:text-slate-950">
            Categories
          </a>
          <a href="#featured" className="transition hover:text-slate-950">
            Featured
          </a>
          <a href="#newsletter" className="transition hover:text-slate-950">
            Newsletter
          </a>
        </nav>

        <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
