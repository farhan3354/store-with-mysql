import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts, categories } from '../../data/products';
import ProductCard from '../../components/homeComponents/ProductCard';

const SORT_OPTIONS = [
  { label: 'Newest First',    value: 'newest'     },
  { label: 'Price: Low–High', value: 'price_asc'  },
  { label: 'Price: High–Low', value: 'price_desc' },
  { label: 'Name: A–Z',       value: 'name_asc'   },
];

const PRICE_RANGES = [
  { label: 'All Prices',       min: 0,    max: Infinity },
  { label: 'Under $500',       min: 0,    max: 500      },
  { label: '$500 – $1,000',    min: 500,  max: 1000     },
  { label: '$1,000 – $2,500',  min: 1000, max: 2500     },
  { label: 'Over $2,500',      min: 2500, max: Infinity },
];

export default function ProductsPage() {
  const { category: urlCategory } = useParams();

  const [search,          setSearch]          = useState('');
  const [activeCategory,  setActiveCategory]  = useState(urlCategory || 'All');
  const [priceIdx,        setPriceIdx]        = useState(0);
  const [sort,            setSort]            = useState('newest');
  const [onSaleOnly,      setOnSaleOnly]      = useState(false);
  const [sidebarOpen,     setSidebarOpen]     = useState(false);

  // Sync URL param → filter whenever the user navigates /products/:category
  useEffect(() => {
    setActiveCategory(urlCategory || 'All');
  }, [urlCategory]);

  const filtered = useMemo(() => {
    const range = PRICE_RANGES[priceIdx];
    return allProducts
      .filter(p => activeCategory === 'All' || p.category === activeCategory)
      .filter(p => p.price >= range.min && p.price <= range.max)
      .filter(p => !onSaleOnly || p.isOnSale)
      .filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sort === 'price_asc')  return a.price - b.price;
        if (sort === 'price_desc') return b.price - a.price;
        if (sort === 'name_asc')   return a.name.localeCompare(b.name);
        return b.id - a.id;
      });
  }, [activeCategory, search, priceIdx, sort, onSaleOnly]);

  const pageTitle = activeCategory === 'All' ? 'All Products' : activeCategory;

  return (
    <div className="min-h-screen bg-noble-bg">
      {/* Page Banner */}
      <div className="relative bg-noble-primary text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#c6a769_0%,transparent_60%)]"></div>
        <p className="text-noble-accent text-xs uppercase tracking-[0.35em] mb-3">Gemstone Boutique</p>
        <h1 className="text-5xl md:text-7xl font-serif">{pageTitle}</h1>
        <p className="text-noble-bg/60 text-sm mt-4 tracking-wide">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} found
        </p>
        <div className="flex justify-center gap-2 mt-6 text-xs uppercase tracking-widest text-noble-bg/50">
          <Link to="/" className="hover:text-noble-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-noble-accent transition-colors">Shop</Link>
          {urlCategory && <><span>/</span><span className="text-noble-accent">{urlCategory}</span></>}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-stretch sm:items-center">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-noble-secondary text-lg select-none">🔍</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products…"
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-noble-secondary/20 text-noble-primary placeholder-noble-secondary/50 text-sm focus:outline-none focus:border-noble-accent rounded-sm transition-colors"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-noble-secondary hover:text-noble-primary text-xl transition-colors">×</button>
            )}
          </div>

          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="bg-white border border-noble-secondary/20 text-noble-primary text-xs uppercase tracking-wider px-5 py-3.5 focus:outline-none focus:border-noble-accent rounded-sm cursor-pointer min-w-[180px]"
          >
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>

          <button
            onClick={() => setSidebarOpen(s => !s)}
            className="sm:hidden bg-noble-primary text-white px-6 py-3.5 text-xs uppercase tracking-widest rounded-sm"
          >
            Filters {sidebarOpen ? '▲' : '▼'}
          </button>
        </div>

        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className={`${sidebarOpen ? 'block' : 'hidden'} sm:block w-full sm:w-60 shrink-0`}>
            <div className="bg-white border border-noble-secondary/10 rounded-sm p-6 space-y-8 sticky top-24">
              {/* Category */}
              <div>
                <h3 className="font-serif text-noble-primary text-lg mb-4">Category</h3>
                <div className="space-y-1.5">
                  {['All', ...categories.map(c => c.name)].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left text-sm px-3 py-2 rounded-sm transition-colors ${
                        activeCategory === cat
                          ? 'bg-noble-primary text-white'
                          : 'text-noble-secondary hover:text-noble-primary hover:bg-noble-bg'
                      }`}
                    >
                      {cat}
                      <span className="float-right text-xs opacity-60">
                        {cat === 'All' ? allProducts.length : allProducts.filter(p => p.category === cat).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-serif text-noble-primary text-lg mb-4">Price Range</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((r, i) => (
                    <label key={r.label} className="flex items-center gap-3 cursor-pointer group">
                      <span
                        onClick={() => setPriceIdx(i)}
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                          priceIdx === i ? 'border-noble-accent bg-noble-accent' : 'border-noble-secondary/40 group-hover:border-noble-accent'
                        }`}
                      >
                        {priceIdx === i && <span className="w-2 h-2 rounded-full bg-white"></span>}
                      </span>
                      <span onClick={() => setPriceIdx(i)} className="text-sm text-noble-secondary group-hover:text-noble-primary transition-colors cursor-pointer">{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sale Toggle */}
              <div>
                <h3 className="font-serif text-noble-primary text-lg mb-4">Availability</h3>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    onClick={() => setOnSaleOnly(v => !v)}
                    className={`w-11 h-6 rounded-full transition-colors duration-300 relative cursor-pointer ${onSaleOnly ? 'bg-noble-accent' : 'bg-noble-secondary/30'}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${onSaleOnly ? 'left-6' : 'left-1'}`}></span>
                  </div>
                  <span className="text-sm text-noble-secondary select-none">On Sale Only</span>
                </label>
              </div>

              <button
                onClick={() => { setActiveCategory('All'); setPriceIdx(0); setOnSaleOnly(false); setSearch(''); }}
                className="w-full border border-noble-secondary/30 text-noble-secondary text-xs uppercase tracking-widest py-2.5 hover:border-noble-primary hover:text-noble-primary transition-colors rounded-sm"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-6xl mb-4">💎</p>
                <h3 className="font-serif text-2xl text-noble-primary mb-2">No pieces found</h3>
                <p className="text-noble-secondary text-sm">Try adjusting your filters or search term.</p>
                <button onClick={() => { setActiveCategory('All'); setPriceIdx(0); setOnSaleOnly(false); setSearch(''); }} className="mt-6 border border-noble-primary text-noble-primary px-8 py-3 text-xs uppercase tracking-widest hover:bg-noble-primary hover:text-white transition-all duration-300 rounded-sm">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                {filtered.map(p => (
                  <ProductCard
                    key={p.id}
                    name={p.name}
                    price={`$${p.price.toLocaleString()}`}
                    image={p.image}
                    isOnSale={p.isOnSale}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
