import HeroSection      from "./components/HeroSection";
import AboutSection     from "./components/AboutSection";
import FeaturesSection  from "./components/FeaturesSection";
import PricingSection   from "./components/PricingSection";
import SupportSection   from "./components/SupportSection";
import GallerySection   from "./components/GallerySection";
import ContactSection   from "./components/ContactSection";
import AppStoreSection  from "./components/AppStoreSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PricingSection />
      <SupportSection />
      <GallerySection />
      <ContactSection />
      <AppStoreSection />
    </>
  );
}
