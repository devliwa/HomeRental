import { HousePlugIcon, MenuIcon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = ["About", "Spaces", "Locations", "Contact"];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-5 left-1/2 -translate-x-1/2
        z-50 transition-all duration-300 ease-in rounded-full
        text-zinc-800 shadow-lg px-6
        flex items-center justify-between
        ${isScrolled
          ? "h-14 bg-zinc-200/40 backdrop-blur-xl border border-white/10 scale-95 w-[85%] max-w-4xl"
          : "bg-zinc-100 w-[90%] max-w-5xl"
        }
      `}
    >
      {/* Left Nav Links */}
      <div className="hidden md:flex gap-8 font-medium text-sm">
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="
              transition-all duration-200 ease-out
              hover:-translate-y-0.5 hover:uppercase
              hover:text-rose-600 hover:font-bold
            "
          >
            {item}
          </a>
        ))}
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl cursor-pointer text-blue-600 font-extrabold tracking-tight">
        <HousePlugIcon />
        LiwaRentals
        <sup className="font-normal -ml-1">®</sup>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center space-x-4">

        {/* List Your Home */}
        <button
          className="
            hidden sm:block cursor-pointer
            bg-blue-500 text-zinc-100
            px-4 py-2 rounded-full text-sm font-semibold
            transition-colors
            hover:bg-zinc-900
          "
        >
          List Your Home
        </button>

        {/* Search Button */}
        <button
          className="
            hidden sm:block cursor-pointer
            p-2 rounded-full
            bg-zinc-800/10 text-zinc-800
            transition-colors
            hover:bg-zinc-50
          "
        >
          <SearchIcon size={20} />
        </button>

        {/* Mobile Menu */}
        <button
          className="
            md:hidden text-zinc-800
            hover:text-white transition-colors
          "
        >
          <MenuIcon size={24} />
        </button>
      </div>
    </header>
  );
};

export default NavBar;