import React from 'react';

const features = [
  {
    icon: "💎",
    title: "Certified Authenticity",
    desc: "Every gemstone comes with a certificate of authenticity from internationally recognized gemological institutes.",
  },
  {
    icon: "🚚",
    title: "Free Insured Shipping",
    desc: "Complimentary, fully insured shipping on all orders above $500. Delivered in signature gift packaging.",
  },
  {
    icon: "🔄",
    title: "30-Day Returns",
    desc: "Hassle-free returns within 30 days of purchase. Your satisfaction is our highest priority.",
  },
  {
    icon: "⭐",
    title: "Lifetime Warranty",
    desc: "All fine jewelry is backed by our lifetime warranty. We stand behind the craftsmanship of every piece.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-noble-accent text-xs uppercase tracking-[0.3em] font-semibold mb-4">The Gemstone Promise</p>
          <h2 className="text-5xl font-serif text-noble-primary mb-5">Why Choose Us</h2>
          <div className="w-16 h-[1px] bg-noble-accent mx-auto"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-8 border border-noble-bg hover:border-noble-accent/30 rounded-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 bg-white"
            >
              <div className="text-5xl mb-6 transform transition-transform duration-500 group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="font-serif text-xl text-noble-primary mb-3 tracking-wide">{f.title}</h3>
              <p className="text-noble-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
