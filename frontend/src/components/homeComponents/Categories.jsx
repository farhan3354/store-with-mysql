import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function Categories() {
  return (
    <section className="py-24 bg-noble-bg" id="collections">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-noble-accent text-xs uppercase tracking-[0.3em] font-semibold mb-4">Browse By</p>
          <h2 className="text-5xl md:text-6xl font-serif text-noble-primary mb-5">
            Our Collections
          </h2>
          <div className="w-16 h-[1px] bg-noble-accent mx-auto"></div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/products/${cat.name}`}
              className="group relative overflow-hidden rounded-sm cursor-pointer block"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={e => {
                    e.target.src = 'https://images.unsplash.com/photo-1599643478524-fb66fa5320e5?auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Text */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                <h3 className="text-white font-serif text-xl tracking-wide mb-1">{cat.name}</h3>
                <p className="text-noble-accent text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.count} pieces →
                </p>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-0 border-2 border-noble-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* View All link */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block border border-noble-primary text-noble-primary hover:bg-noble-primary hover:text-white px-12 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 rounded-sm hover:-translate-y-1"
          >
            Browse All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
