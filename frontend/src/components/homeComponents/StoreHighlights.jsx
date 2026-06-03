const highlights = [
  {
    title: "Curated selection",
    text: "Only the most useful, wearable, and giftable products make the front page.",
  },
  {
    title: "Fast checkout",
    text: "A simple buying flow keeps the path from browse to purchase friction-light.",
  },
  {
    title: "Trusted delivery",
    text: "Clear shipping and support expectations make the store feel reliable.",
  },
];

function StoreHighlights() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
            Why customers stay
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Built for people who want shopping to feel simple.
          </h2>
          <p className="max-w-xl text-base leading-8 text-slate-300">
            The home page combines clear offers, strong visuals, and quick entry
            points so visitors can move from curiosity to checkout without
            friction.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-8 h-12 w-12 rounded-2xl bg-orange-500/20" />
              <h3 className="mb-3 text-xl font-semibold">{highlight.title}</h3>
              <p className="text-sm leading-7 text-slate-300">
                {highlight.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StoreHighlights;