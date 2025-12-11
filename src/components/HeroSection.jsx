import { MapPinIcon, X } from "lucide-react";
import { FaBed } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-[95vh] bg-blue-900 overflow-hidden rounded-b-[40px] shadow-none"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/images/house-ru.png')] 
        bg-cover bg-center saturate-150"
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* Optional Light Tint Overlay */}
      <div className="absolute inset-0 bg-blue-300/10"></div>

      {/* Content Layer (Always Top) */}
      <div className="relative z-10 flex items-center justify-center text-zinc-100 text-lg">
        {/* Add your hero content here */}
       {/*Hero Content Goes Here */} 
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32
      pb-16 flex-col h-full">
        <div
        className="flex-grow flex flex-col justify-center items-center 
        lg:justify-start lg:items-start text-white pb-16 lg:px-10 pt-16">
            <h1 className="text-7xl text-white/90 lg:text-[200px]
            nt-extrabold mb-4 relative">
                LiwaRentals <div className="absolute p-2 px-4 -top-10
                lg:top-0 -right-4 text-lg font-normal rounded-full border 
                border-zinc-100 animate-border">2026</div>
            </h1>

            <h2 className="text-3xl md:text 4xl font-semibold 
            grad-text from-white to-zinc-400 mb-8 -mt-6">
            Find Your Next Rental Home
            </h2>

            <p className="text-lg-text-center lg:text-left 
            text-zinc-300 mb-10">
            Find & Make your interior ready, <br className="md:hidden"/>
            with LiwaRentals your dream home is just a few clicks away.
            </p>

            {/* Search Bar*/}
            <div className="bg-white p-4 rounded-xl lg:rounded-full
            flex flex-col md:flex-row items-center space-y-4 
            md:space-y-0 md:space-x-4 w-full max-w-fit">
                <div className="flex items-center space-y-2 border-r
                 border-zinc-200 pr-4 w-full md:w-auto">
                    <MapPinIcon size={20} className="text-zinc-500"/>
                    <input
                        type="text"
                        placeholder="Locations"
                        className="flex-grow outline-none text-zinc-800 
                        placeholder-zinc-500 text-base"
                    />
                </div>
                {/* Number of Guests */}
                <div className="flex items-center space-x-2 border-r 
                border-zinc-200 pr-4 w-full md:w-auto">
                <FaBed size={20} className="text-zinc-500"/>

                <select className="flex-grow outline-none 
                text-zinc-800 bg-transparent text-base">
                    <option>Guests</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3+</option>
                </select>
                </div>
                {/* House Type */}
                <div className="flex item-center space-x-2 pr-4 
                w-full md:w-auto">
                <FaHouse size={20} className="text-zinc-500"/>
                    <select className="flex-grow outline-none 
                    text-zinc-800 bg-transparent text-base">
                        <option>House Type</option>
                        <option>Apartment</option>
                        <option>Villa</option>
                        <option>Studio</option>
                    </select>
                </div>

                {/* Search Btn */}
                <button
                    className="w-full md:w-auto bg-blue-600 text-white font-medium 
                     px-8 py-3 rounded-full cursor-pointer 
                     hover:bg-zinc-700 transition-colors duration-300">
                         Search Now
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;