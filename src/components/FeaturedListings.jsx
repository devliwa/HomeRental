import ListingCard from "./ListingCard";
import { listings } from "../assets/data"; // make sure it's 'listings'

const FeaturedListings = () => {
  return (
    <section id="spaces" className="max-w-7xl mx-auto px-6 pb-24">
      {/* Listings Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>

      {/* Explore Button */}
      <div className="text-center mt-16">
        <button
          className="text-lg font-medium text-zinc-50 
                     bg-blue-500 py-4 px-6 rounded-full 
                     cursor-pointer border-2 border-transparent 
                     hover:bg-transparent hover:text-zinc-500 
                     hover:border-zinc-500 transition-all 
                     duration-200 ease-in"
        >
          Explore All Listings
        </button>
      </div>
    </section>
  );
};

export default FeaturedListings;