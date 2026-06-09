import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="register.avif"
          alt="Luxury Jewelry"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-16 text-white">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-300 mb-4">
            Exclusive Collection
          </p>

          <h1 className="text-5xl font-serif mb-6">Create Your Account</h1>

          <p className="text-lg text-gray-200 max-w-md">
            Join our luxury gemstone community and discover rare collections,
            exclusive offers, and timeless elegance.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F8F5F0] px-6 py-10">
        <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-2xl">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif text-[#1F1A17]">GemAura</h2>

            <p className="text-gray-500 mt-2">Create Your Account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" required className="mt-1" />

              <span className="text-gray-600">
                I agree to the Terms & Conditions and Privacy Policy.
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition duration-300"
            >
              Create Account
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-1 border-t"></div>
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t"></div>
          </div>
          <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition">
            Continue with Google
          </button>
          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-amber-600 font-medium hover:text-amber-700"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
