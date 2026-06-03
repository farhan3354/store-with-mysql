const categories = [
  {
    title: "Fashion",
    description: "Fresh looks, elevated basics, and seasonal drops.",
  },
  {
    title: "Electronics",
    description: "Smart gadgets and daily tech essentials.",
  },
  {
    title: "Shoes",
    description: "Comfort-first sneakers and statement pairs.",
  },
  {
    title: "Accessories",
    description: "Bags, jewelry, and finishing touches.",
  },
];

function Categories() {
  return (
    <section className="bg-[#f8fafc] py-20" id="categories">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Browse by category
          </p>
          <h2 className="text-3xl font-semibold text-slate-950 md:text-5xl">
            Find what you need faster.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
            >
              <div className="mb-16 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white transition group-hover:bg-orange-500">
                {category.title.slice(0, 2).toUpperCase()}
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-slate-950">
                {category.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
