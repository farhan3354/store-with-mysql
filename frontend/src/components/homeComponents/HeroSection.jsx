const stats = [
  { value: "10k+", label: "Happy shoppers" },
  { value: "48h", label: "Fast delivery" },
  { value: "4.9/5", label: "Customer rating" },
];

function HeroSection() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(253,186,116,0.22),_transparent_34%),linear-gradient(135deg,_#0f172a_0%,_#111827_45%,_#1f2937_100%)] text-white" id="home">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-orange-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            New season arrivals are live
          </div>

          <div className="space-y-5">
            <h1 className="max-w-xl text-5xl font-semibold leading-tight md:text-7xl">
              Style that feels premium from the first click.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Shop curated essentials, trending fashion, and daily deals in one
              polished storefront built for quick browsing and confident buying.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-orange-100">
              Shop the collection
            </button>

            <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              See featured drops
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <div className="text-2xl font-semibold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-orange-400/25 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
              alt="Fashion collection"
              className="h-[460px] w-full rounded-[1.5rem] object-cover"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-white shadow-xl backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-300">Best seller</p>
                  <h2 className="text-2xl font-semibold">Weekend streetwear edit</h2>
                </div>

                <div className="rounded-2xl bg-white px-4 py-2 text-right text-slate-950">
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    From
                  </div>
                  <div className="text-lg font-semibold">$39</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;