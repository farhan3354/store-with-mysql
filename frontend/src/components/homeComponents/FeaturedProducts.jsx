import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    name: "Astra Runner",
    description: "Lightweight sneakers designed for all-day wear and movement.",
    price: "$120",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Studio Tote",
    description: "Structured everyday bag with room for work and weekend plans.",
    price: "$86",
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Minimal Watch",
    description: "Clean lines, refined materials, and a sharp finishing touch.",
    price: "$148",
    badge: "Best value",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
  },
];

function FeaturedProducts() {
  return (
    <section className="bg-white py-20" id="featured">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              Featured picks
            </p>
            <h2 className="text-3xl font-semibold text-slate-950 md:text-5xl">
              Products styled to sell themselves.
            </h2>
          </div>

          <button className="w-fit rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white">
            View all products
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
