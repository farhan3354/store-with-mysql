import { Route, Routes } from "react-router-dom";
import Layout from "./components/commanLayout/Layout";
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Products/ProductsPage";
import WishlistPage from "./pages/Wishlist/WishlistPage";
import CartPage from "./pages/Cart/CartPage";
import AboutPage from "./pages/About/AboutPage";
import RegisterForm from "./pages/Forms/RegisterForm";
import LoginForm from "./pages/Forms/LoginForm";
import useAuthStore from "./store/loginStore";
import { useEffect } from "react";
import ProtectedRoute from "./services/ProtectedRoute";
import AdminLayout from "./components/commanLayout/admincomman/AdminLayout";
import AllProducts from "./pages/Admin/Products/AllProducts";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
// import Categories from "./components/adminDashoard/Category/CreateCategory";
import AllCategories from "./pages/Admin/Categories";
import PostCategories from "./pages/Admin/PostCategories";

function App() {
  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="products/:category" element={<ProductsPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        {/* <Route element={<ProtectedRoute allowedRoles={["admin"]} />}> */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<AllProducts />} />
          {/* <Route path="orders" element={<Orders />} /> */}
          {/* <Route path="users" element={<Users />} /> */}
          <Route path="add-category" element={<PostCategories />} />
          <Route path="categories" element={<AllCategories />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
