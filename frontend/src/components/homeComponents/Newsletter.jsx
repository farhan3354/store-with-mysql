function Newsletter() {
  return (
    <section className="bg-[#f8fafc] py-20" id="newsletter">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-4xl bg-[linear-gradient(135deg,#0f172a_0%,#111827_55%,#1f2937_100%)] px-6 py-12 text-white shadow-2xl md:px-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
                Stay in the loop
              </p>
              <h2 className="text-3xl font-semibold md:text-5xl">
                Get first access to deals, drops, and restocks.
              </h2>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/10 bg-white px-5 py-4 text-slate-950 outline-none placeholder:text-slate-400"
              />
              <button className="w-full rounded-full bg-orange-500 px-5 py-4 font-semibold text-white transition hover:bg-orange-400">
                Subscribe now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;