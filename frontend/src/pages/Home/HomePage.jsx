import Categories from "../../components/homeComponents/Categories";
import FeaturedProducts from "../../components/homeComponents/FeaturedProducts";
import HeroSection from "../../components/homeComponents/HeroSection";
import Newsletter from "../../components/homeComponents/Newsletter";
import StoreHighlights from "../../components/homeComponents/StoreHighlights";

function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <StoreHighlights />
      <Newsletter />
    </div>
  );
}

export default HomePage;
