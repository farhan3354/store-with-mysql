import React, { useState } from 'react';

export default function ProductCard({ 
  name = "Diamond Ring", 
  price = "$1,500", 
  image = "https://images.unsplash.com/photo-1599643478524-fb66fa5320e5?auto=format&fit=crop&w=600&q=80", 
  isOnSale = false 
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col font-sans cursor-pointer text-left">
      {/* Image Container */}
      <div className="relative bg-noble-bg overflow-hidden aspect-[3/4] mb-5 rounded-sm">
        <img
          src={imgError ? `https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80` : image}
          alt={name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Sale Badge */}
        {isOnSale && (
          <span className="absolute top-4 left-4 bg-noble-sale text-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] z-10">
            Sale
          </span>
        )}

        {/* Quick-add button on hover */}
        <div className="absolute bottom-4 inset-x-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 z-10">
          <button className="w-full bg-white/90 backdrop-blur-sm text-noble-primary py-3 text-[11px] uppercase tracking-widest font-semibold hover:bg-noble-accent hover:text-white transition-colors duration-300">
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5 px-1">
        <h3 className="text-sm text-noble-primary tracking-wide font-medium leading-snug group-hover:text-noble-accent transition-colors duration-300">
          {name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-sm text-noble-secondary font-semibold">{price}</span>
          {isOnSale && (
            <span className="text-[11px] text-noble-sale uppercase tracking-wide font-medium">On Sale</span>
          )}
        </div>
      </div>
    </article>
  );
}
