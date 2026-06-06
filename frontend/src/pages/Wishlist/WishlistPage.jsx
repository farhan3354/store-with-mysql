import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../../data/products';

export default function WishlistPage() {
  // Pre-populate with a few sample wishlist items for demo
  const [wishlist, setWishlist] = useState(
    allProducts.filter(p => [1, 8, 19, 26].includes(p.id))
  );

  const remove = (id) => setWishlist(prev => prev.filter(p => p.id !== id));
  const clearAll = () => setWishlist([]);

  return (
    <div className="min-h-screen bg-noble-bg">
      {/* Banner */}
      <div className="relative bg-noble-primary text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#c6a769_0%,transparent_60%)]"></div>
        <p className="text-noble-accent text-xs uppercase tracking-[0.35em] mb-3">My Account</p>
        <h1 className="text-5xl md:text-7xl font-serif">My Wishlist</h1>
        <div className="flex justify-center gap-2 mt-6 text-xs uppercase tracking-widest text-noble-bg/50">
          <Link to="/" className="hover:text-noble-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-noble-accent">Wishlist</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {wishlist.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-7xl mb-6">🤍</p>
            <h2 className="font-serif text-3xl text-noble-primary mb-3">Your wishlist is empty</h2>
            <p className="text-noble-secondary text-sm mb-10">Save your favourite pieces to revisit them later.</p>
            <Link to="/products" className="bg-noble-primary text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-noble-accent transition-all duration-300 rounded-sm inline-block">
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-serif text-2xl text-noble-primary">{wishlist.length} saved {wishlist.length === 1 ? 'piece' : 'pieces'}</h2>
              <button onClick={clearAll} className="text-xs uppercase tracking-widest text-noble-secondary hover:text-noble-sale transition-colors border border-noble-secondary/30 px-5 py-2 hover:border-noble-sale rounded-sm">
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
              {wishlist.map(item => (
                <article key={item.id} className="group flex flex-col font-sans cursor-pointer text-left">
                  <div className="relative bg-white overflow-hidden aspect-[3/4] mb-5 rounded-sm shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={e => { e.target.src = 'https://images.unsplash.com/photo-1599643478524-fb66fa5320e5?auto=format&fit=crop&w=600&q=80'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {item.isOnSale && (
                      <span className="absolute top-3 left-3 bg-noble-sale text-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em]">Sale</span>
                    )}
                    <button
                      onClick={() => remove(item.id)}
                      title="Remove from wishlist"
                      className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-noble-sale hover:bg-noble-sale hover:text-white transition-all duration-200 text-sm shadow-sm"
                    >
                      ✕
                    </button>
                    <div className="absolute bottom-4 inset-x-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <button className="w-full bg-white/90 backdrop-blur-sm text-noble-primary py-2.5 text-[11px] uppercase tracking-widest font-semibold hover:bg-noble-accent hover:text-white transition-colors duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1.5 px-1">
                    <h3 className="text-sm text-noble-primary tracking-wide font-medium leading-snug">{item.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-noble-secondary font-semibold">${item.price.toLocaleString()}</span>
                      <span className="text-xs text-noble-secondary/50">{item.category}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
