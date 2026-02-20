import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StyleCarousel from "@/components/StyleCarousel";
import ParallaxBanner from "@/components/ParallaxBanner";
import BarberCards from "@/components/BarberCards";
import ProductsSection from "@/components/ProductsSection";
import Testimonials from "@/components/Testimonials";
import BookingSection from "@/components/BookingSection";
import MapSection from "@/components/MapSection";
import DonationSection from "@/components/DonationSection";
import GroveFooter from "@/components/GroveFooter";
import StickyBookingButton from "@/components/StickyBookingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StyleCarousel />
      <ParallaxBanner />
      <BarberCards />
      <ProductsSection />
      <Testimonials />
      <BookingSection />
      <MapSection />
      <DonationSection />
      <GroveFooter />
      <StickyBookingButton />
    </div>
  );
};

export default Index;
