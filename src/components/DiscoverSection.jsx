import { imageDiscover } from "../assets/data";

const DiscoverSection = () => {
  return (
    <section id="locations" className="max-w-7xl mx-auto px-6 py-24">
      <div className="bg-white rounded-[30px] border border-zinc-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-5xl font-bold leading-tight text-zinc-900 mb-8">
              Come and visit our amazing homes today!
            </h2>

            <button
              className="bg-blue-500 cursor-pointer text-white px-8 py-4 rounded-full
              hover:bg-transparent border-2 border-transparent hover:border-zinc-500 
              hover:text-zinc-700 transition-colors duration-300 text-lg font-medium w-fit">
              Explore Rentals
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="aspect-video lg:aspect-auto min-h-[450px] bg-zinc-300 
            bg-cover bg-bottom lg:bg-center saturate-130 cursor-pointer
            flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-105"
            style={{
              backgroundImage: `url(${imageDiscover})`,
              willChange: "transform",
            }}
          ></div>

        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;