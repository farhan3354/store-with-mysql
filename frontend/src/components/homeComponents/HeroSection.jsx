export default function HeroSection() {
  return (
    <section className="relative h-[95vh] w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Parallax & Zoome Effect */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="./herobanner.png"
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          alt="Luxury Jewelry"
        />
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 text-white max-w-4xl px-4 flex flex-col items-center mt-16">
        <span className="mb-6 uppercase tracking-[0.3em] text-sm text-noble-bg/90 font-medium animate-fade-in-up">
          Exquisite Collection
        </span>

        <h2 className="text-6xl md:text-8xl font-serif mb-8 leading-[1.1] max-w-3xl drop-shadow-2xl">
          Find Your Perfect{" "}
          <span className="italic font-light text-noble-accent">Sparkle</span>
        </h2>

        <p className="text-noble-bg/90 mb-12 text-lg md:text-xl font-sans tracking-widest max-w-xl font-light">
          Discover luxury jewelry crafted for unforgettable moments.
        </p>

        <div className="flex gap-6 flex-col sm:flex-row">
          <button className="bg-noble-accent hover:bg-white hover:text-noble-primary border border-transparent hover:border-noble-primary px-10 py-4 rounded-sm text-white font-sans uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Shop Now
          </button>

          <button className="bg-black/20 backdrop-blur-md border border-white/30 hover:bg-white/10 px-10 py-4 rounded-sm text-white font-sans uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-500 shadow-xl hover:-translate-y-1">
            View Lookbook
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-xs uppercase tracking-widest text-white">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
          <div className="w-full h-1/2 bg-white absolute top-0 animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
