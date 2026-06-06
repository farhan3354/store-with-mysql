import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); }
  };

  return (
    <section className="relative bg-noble-primary overflow-hidden py-28">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-noble-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-noble-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <p className="text-noble-accent text-xs uppercase tracking-[0.35em] font-semibold mb-5">
            Stay In The Know
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-5 leading-tight">
            Join Our <span className="italic font-light text-noble-accent">Newsletter</span>
          </h2>
          <p className="text-noble-bg/70 text-sm leading-relaxed max-w-md">
            Be the first to know about exclusive offers, new arrivals, and curated gemstone updates delivered straight to your inbox.
          </p>

          <div className="flex items-center gap-8 mt-10">
            {[{ value: "10k+", label: "Members" }, { value: "20%", label: "Exclusive Discounts" }, { value: "Weekly", label: "New Arrivals" }].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-noble-accent text-2xl font-serif font-medium">{s.value}</p>
                <p className="text-noble-bg/60 text-xs uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div>
          {submitted ? (
            <div className="text-center py-12 border border-noble-accent/30 rounded-sm bg-noble-accent/10 backdrop-blur">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-serif text-white mb-2">You're In!</h3>
              <p className="text-noble-bg/70 text-sm">Thank you for subscribing. Watch your inbox for exclusive offers.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-noble-secondary/30 text-white placeholder-white/40 px-5 py-4 text-sm focus:outline-none focus:border-noble-accent transition-colors rounded-sm"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full bg-white/5 border border-noble-secondary/30 text-white placeholder-white/40 px-5 py-4 text-sm focus:outline-none focus:border-noble-accent transition-colors rounded-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-noble-accent hover:bg-white hover:text-noble-primary text-white py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-2"
              >
                Subscribe Now
              </button>
              <p className="text-noble-bg/40 text-xs text-center pt-2">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
