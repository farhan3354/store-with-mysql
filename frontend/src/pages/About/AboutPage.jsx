import React from 'react';
import { Link } from 'react-router-dom';

const team = [
  { name: 'Sophia Laurent',  role: 'Founder & Creative Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
  { name: 'Marcus Chen',     role: 'Master Jeweler',               image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Aisha Patel',     role: 'Gemologists & Curator',        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80' },
];

const values = [
  { icon: '💎', title: 'Authenticity',  desc: 'Every gem is independently certified by internationally recognised gemological institutes.' },
  { icon: '🌿', title: 'Sustainability', desc: 'We source only ethically mined stones and use recycled precious metals wherever possible.' },
  { icon: '✋', title: 'Craftsmanship', desc: 'Each piece is hand-finished by master artisans with decades of experience.' },
  { icon: '🤝', title: 'Trust',          desc: 'Over 10,000 happy customers and a lifetime warranty on every creation.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="relative bg-noble-primary text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#c6a769_0%,transparent_60%)]"></div>
        <p className="text-noble-accent text-xs uppercase tracking-[0.35em] mb-3">Our Story</p>
        <h1 className="text-5xl md:text-7xl font-serif">About Gemstone</h1>
        <div className="flex justify-center gap-2 mt-6 text-xs uppercase tracking-widest text-noble-bg/50">
          <Link to="/" className="hover:text-noble-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-noble-accent">About</span>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-noble-accent text-xs uppercase tracking-[0.3em] font-semibold mb-5">Since 2010</p>
            <h2 className="text-5xl font-serif text-noble-primary mb-6 leading-tight">
              Born From a Passion <br /><span className="italic font-light">For Beauty</span>
            </h2>
            <p className="text-noble-secondary text-sm leading-relaxed mb-5">
              Gemstone was founded with a singular vision: to bring the world's most exquisite gemstones to people who appreciate true beauty and unparalleled craftsmanship. What began as a small atelier in Paris has grown into a globally recognised name in fine jewellery.
            </p>
            <p className="text-noble-secondary text-sm leading-relaxed mb-10">
              Each piece in our collection is a testament to the artistry of our master jewellers, who spend hundreds of hours perfecting every setting, every curve, and every facet, ensuring that the gemstone's natural brilliance is showcased at its absolute finest.
            </p>
            <Link to="/products" className="bg-noble-primary text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-noble-accent transition-all duration-500 rounded-sm inline-block shadow-lg hover:-translate-y-1">
              Explore Collection
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=900&q=85"
              alt="Our atelier"
              className="w-full rounded-sm shadow-2xl object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-noble-accent text-white p-8 rounded-sm shadow-xl">
              <p className="text-4xl font-serif font-bold">15+</p>
              <p className="text-xs uppercase tracking-widest mt-1">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-noble-bg" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-noble-accent text-xs uppercase tracking-[0.3em] font-semibold mb-4">What We Stand For</p>
            <h2 className="text-5xl font-serif text-noble-primary mb-5">Our Values</h2>
            <div className="w-16 h-[1px] bg-noble-accent mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(v => (
              <div key={v.title} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center group">
                <div className="text-5xl mb-6 transform transition-transform duration-500 group-hover:scale-110">{v.icon}</div>
                <h3 className="font-serif text-xl text-noble-primary mb-3">{v.title}</h3>
                <p className="text-noble-secondary text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-noble-accent text-xs uppercase tracking-[0.3em] font-semibold mb-4">The People Behind It</p>
            <h2 className="text-5xl font-serif text-noble-primary mb-5">Meet Our Team</h2>
            <div className="w-16 h-[1px] bg-noble-accent mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {team.map(t => (
              <div key={t.name} className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-5 shadow-lg ring-4 ring-noble-bg group-hover:ring-noble-accent transition-all duration-500">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h3 className="font-serif text-xl text-noble-primary mb-1">{t.name}</h3>
                <p className="text-noble-accent text-xs uppercase tracking-widest">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-noble-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '10k+', label: 'Happy Customers' },
            { value: '500+', label: 'Unique Designs'  },
            { value: '15+',  label: 'Years in Business'},
            { value: '4.9★', label: 'Average Rating'  },
          ].map(s => (
            <div key={s.label}>
              <p className="text-4xl font-serif text-noble-accent mb-2">{s.value}</p>
              <p className="text-noble-bg/60 text-xs uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-noble-bg">
        <p className="text-noble-accent text-xs uppercase tracking-[0.3em] font-semibold mb-5">Ready to Find Your Piece?</p>
        <h2 className="text-5xl font-serif text-noble-primary mb-8">Start Your Journey</h2>
        <Link to="/products" className="bg-noble-primary text-white px-12 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-noble-accent transition-all duration-500 rounded-sm inline-block shadow-lg hover:-translate-y-1">
          Shop Now
        </Link>
      </section>
    </div>
  );
}
