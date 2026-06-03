export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">SwiftCart</h2>
          <p className="text-gray-400 leading-relaxed">
            Modern eCommerce platform for premium shopping.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl text-black outline-none mb-3"
          />

          <button className="bg-white text-black w-full py-3 rounded-xl font-semibold hover:bg-gray-200 duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}
