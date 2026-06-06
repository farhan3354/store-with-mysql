import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { allProducts } from '../../data/products';
import ProductCard from './ProductCard';

const tabs = ["New Arrivals", "Featured", "Best Sellers", "On Sale"];

const tagMap = {
  "New Arrivals":  "New Arrivals",
  "Featured":      "Featured",
  "Best Sellers":  "Best Sellers",
  "On Sale":       "On Sale",
};

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("New Arrivals");
  const navigate = useNavigate();

  const displayed = allProducts
    .filter(p => {
      if (activeTab === "On Sale") return p.isOnSale;
      return p.tag === tagMap[activeTab];
    })
    .slice(0, 8);

  return (
    <section className="py-28 bg-white" id="shop">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-noble-accent text-xs uppercase tracking-[0.3em] font-semibold mb-4">Handpicked For You</p>
          <h2 className="text-5xl md:text-6xl font-serif text-noble-primary mb-5">Our Products</h2>
          <div className="w-16 h-[1px] bg-noble-accent mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium rounded-sm transition-all duration-300 ${
                activeTab === tab
                  ? "bg-noble-primary text-white shadow-lg"
                  : "bg-noble-bg text-noble-primary hover:bg-noble-primary/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
          {displayed.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={`$${item.price.toLocaleString()}`}
              image={item.image}
              isOnSale={item.isOnSale}
            />
          ))}
        </div>

        {/* View All CTA → navigates to /products with the right filter */}
        <div className="flex justify-center mt-16">
          <Link
            to={`/products`}
            className="border border-noble-primary text-noble-primary hover:bg-noble-primary hover:text-white px-14 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 rounded-sm hover:shadow-xl hover:-translate-y-1 inline-block"
          >
            View All {activeTab}
          </Link>
        </div>
      </div>
    </section>
  );
}
