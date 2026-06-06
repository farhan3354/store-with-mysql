const footerLinks = {
  Shop: ["Rings", "Necklaces", "Earrings", "Bracelets", "Bangles"],
  Company: ["About Us", "Our Story", "Sustainability", "Careers"],
  Support: ["FAQ", "Shipping & Returns", "Order Tracking", "Contact Us"],
};

export default function Footer() {
  return (
    <footer className="bg-noble-primary text-noble-bg">
      {/* Top Features Bar */}
      {/* <div className="border-b border-noble-secondary/20">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "🚚", title: "Free Delivery", desc: "On all orders over $500" },
            { icon: "🔒", title: "Secure Payment", desc: "100% encrypted checkout" },
            { icon: "💍", title: "Lifetime Warranty", desc: "On all fine jewelry" },
          ].map(f => (
            <div key={f.title} className="flex items-start gap-5 group">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <div>
                <h4 className="font-serif text-noble-accent text-lg mb-1">{f.title}</h4>
                <p className="text-sm opacity-70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="text-noble-accent text-3xl font-serif tracking-widest uppercase mb-4">Gemstone</h3>
          <p className="text-sm opacity-60 leading-relaxed max-w-xs">
            Crafting timeless moments through exquisite jewelry since 2010. Precision, elegance, and unmatched quality.
          </p>
          <div className="flex gap-4 mt-8">
            {["📘", "📸", "🐦", "📌"].map((icon, i) => (
              <button
                key={i}
                className="w-10 h-10 flex items-center justify-center border border-noble-secondary/30 hover:border-noble-accent hover:text-noble-accent transition-all duration-300 text-sm rounded-sm hover:-translate-y-1"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="font-serif text-noble-accent text-base tracking-wider mb-6 uppercase">{section}</h4>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm opacity-60 hover:opacity-100 hover:text-noble-accent transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-noble-accent group-hover:w-3 transition-all duration-300 inline-block"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-noble-secondary/20 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© {new Date().getFullYear()} Gemstone. All Rights Reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(l => (
              <a key={l} href="#" className="hover:opacity-100 hover:text-noble-accent transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
