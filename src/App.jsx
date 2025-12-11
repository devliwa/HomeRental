import CtaSection from "./components/CtaSection";
import FeaturedListings from "./components/FeaturedListings";
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
    </main>
  </div>;


};

export default App;