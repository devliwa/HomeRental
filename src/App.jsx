import CtaSection from "./components/CtaSection";
import DiscoverSection from "./components/DiscoverSection";
import FeaturedListings from "./components/FeaturedListings";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ImageSequenceSection from "./components/ImageSequenceSection";
import NavBar from "./components/NavBar";
import QuoteSection from "./components/QuoteSection";
import TestimonialSection from "./components/TestimonialSection";

const App = () => {
  return <div className="min-h-screen bg-white text-zinc-900 antialiased">
    {/* NavBar */}
      <NavBar />

    <main>
    {/* Sections */}
    <HeroSection />
    <QuoteSection />
    <FeaturedListings />
    <CtaSection />
    <TestimonialSection />
    <ImageSequenceSection />
    <DiscoverSection />
    </main>

    {/* Footer */}
    <Footer />
  </div>;


};

export default App;