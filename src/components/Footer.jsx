import { HousePlugIcon } from "lucide-react";
import FooterLinks from "./FooterLinks.jsx";

// Data for the Footer
import { linksFooter } from "../assets/data.jsx";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-zinc-900 pt-24 pb-12 rounded-t-[40px] mt-16 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo and Tagline */}
        <div className="flex items-center mb-8 justify-between flex-wrap">
          <div className="flex items-end text-white text-4xl lg:text-5xl font-extrabold tracking-tight gap-2">
            <HousePlugIcon className="size-8 lg:size-12 " />
            BondoRu
            <sup className="font-normal text-xl ml-0 lg:text-3xl">®</sup>
          </div>
          <p className="text-zinc-400 text-sm mt-2 lg:mt-0 italic">
            Every journey deserves a unique address.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 text-zinc-400">
          {/* Subscribe Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-sm mb-4">
              Unlock unique homes. Weekly travel inspiration and early access to
              new listings.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition-shadow"
                aria-label="Email subscription"
              />
              <button
                type="submit"
                className="w-full bg-zinc-700/70 cursor-pointer text-white py-3 rounded-lg hover:bg-rose-700 transition-colors font-semibold shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation Columns */}
          {linksFooter.map(({ title, links }) => (
            <FooterLinks title={title} links={links} key={title} />
          ))}
        </div>

        {/* Copyright/Final Text */}
        <div className="mt-20 pt-8 border-t border-zinc-800 text-center text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} BondoRu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;