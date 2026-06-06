import Categories from "../../components/homeComponents/Categories";
import FeaturedProducts from "../../components/homeComponents/FeaturedProducts";
import HeroSection from "../../components/homeComponents/HeroSection";
import Newsletter from "../../components/homeComponents/Newsletter";
import StoreHighlights from "../../components/homeComponents/StoreHighlights";
import WhyChooseUs from "../../components/homeComponents/WhyChooseUs";

function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <StoreHighlights />
      <Newsletter />
    </div>
  );
}

export default HomePage;
