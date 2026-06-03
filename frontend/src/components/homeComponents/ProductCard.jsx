function ProductCard({ name, description, price, image, badge }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-sm backdrop-blur">
          {badge}
        </span>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-950">{name}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold text-slate-950">{price}</span>

          <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
