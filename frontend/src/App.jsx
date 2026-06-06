import { Route, Routes } from "react-router-dom";
import Layout from "./components/commanLayout/Layout";
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Products/ProductsPage";
import WishlistPage from "./pages/Wishlist/WishlistPage";
import CartPage from "./pages/Cart/CartPage";
import AboutPage from "./pages/About/AboutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:category" element={<ProductsPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
