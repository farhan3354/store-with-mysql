import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginMutation = useLogin();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    loginMutation.mutate(form, {
      onSuccess: (data) => {
        console.log("Login successful:", data);
        navigate("/");
      },
      onError: (error) => {
        console.error("Login failed:", error);
      },
    });
  };
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="login.avif"
          alt="Gemstone"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-16 text-white">
          <h1 className="text-5xl font-serif mb-4">Timeless Elegance</h1>

          <p className="text-lg text-gray-200 max-w-md">
            Discover handcrafted gemstone jewelry designed for unforgettable
            moments.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F8F5F0] px-6">
        <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif text-[#1F1A17]">GemAura</h2>

            <p className="text-gray-500 mt-2">Welcome Back</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-amber-600 hover:text-amber-700"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition"
            >
              Sign In
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
            Don't have an account?{" "}
            <Link to="/register" className="text-amber-600 font-medium">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
