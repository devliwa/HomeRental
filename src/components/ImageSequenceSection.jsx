import { useState, useEffect, useRef, useCallback } from "react";
import { HousePlug, X } from "lucide-react";

const ImageSequenceSection = () => {
  // CONFIG
  const TOTAL_FRAMES = 101;
  const IMAGE_BASE_PATH = "/frames/frame-";

  const scrubberRef = useRef(null);

  // State
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSetupNeeded, setIsSetupNeeded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1);

  // Utility: turn 1 → "001"
  const getFrameName = (num) => String(num).padStart(3, "0");

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      let loaded = 0;
      const tasks = [];

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const path = `${IMAGE_BASE_PATH}${getFrameName(i)}.png`;

        tasks.push(
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              loaded++;
              resolve();
            };
            img.onerror = () => resolve();
            img.src = path;
          })
        );
      }

      await Promise.all(tasks);

      if (loaded === 0) {
        setIsSetupNeeded(true);
      } else {
        setIsLoaded(true);
      }
    };

    preloadImages();
  }, []);

  // Scroll animation
  const handleScroll = useCallback(() => {
    if (!scrubberRef.current || !isLoaded) return;

    const rect = scrubberRef.current.getBoundingClientRect();

    const scrollDistance = 2.0; // how long animation lasts
    const stickyDuration = 3.0;

    const totalScrollDistance = window.innerHeight * scrollDistance;

    const scrolled = -rect.top;
    let progress = 0;

    if (scrolled < 0) {
      progress = 0;
    } else if (scrolled < totalScrollDistance) {
      progress = scrolled / totalScrollDistance;
    } else if (scrolled < window.innerHeight * stickyDuration) {
      progress = 1;
    } else {
      progress = 1;
    }

    progress = Math.max(0, Math.min(1, progress));

    const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1)) + 1;

    setCurrentFrame(frameIndex);
  }, [isLoaded]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const currentImagePath = `${IMAGE_BASE_PATH}${getFrameName(
    currentFrame
  )}.png`;

  // SETUP WARNING UI
  if (isSetupNeeded) {
    return (
      <section
        id="scrubber-animation-setup-warning"
        className="bg-blue-600 h-screen flex items-center justify-center text-white p-6"
      >
        <div className="flex flex-col items-center max-w-lg text-center p-10 bg-blue-700/80 rounded-xl shadow-2xl backdrop-blur-sm border border-blue-500">
          <X className="w-16 h-16 text-white mb-6" />

          <p className="text-3xl font-extrabold mb-3">SETUP REQUIRED</p>

          <p className="text-lg text-blue-200 mt-2">
            No image frames were loaded. To activate the cinematic scroll, upload:
          </p>

          <div className="text-base font-mono bg-blue-800/50 rounded-md mt-4 p-2">
            /frames/frame-001.png → /frames/frame-101.png
          </div>
        </div>
      </section>
    );
  }

  // MAIN UI
  return (
    <div ref={scrubberRef} className="relative min-h-[380vh]">
      {/* Sticky Image */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* MARKETING OVERLAY */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none px-6"
          style={{
            opacity: currentFrame >= TOTAL_FRAMES - 6 ? 1 : 0,
            transform: `translateY(${currentFrame >= TOTAL_FRAMES - 6 ? "0px" : "20px"})`,
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-blue-600 tracking-tight relative">
            <HousePlug className="size-16 lg:size-32 text-zinc-800/80 mx-auto" />
            LiwaRental
            <sup className="text-3xl lg:text-5xl top-0 right-0 text-white font-normal absolute">
              ®
            </sup>
          </h1>

          <p className="mt-4 border lg:border-2 animate-border md:text-2xl bg-zinc-800/60 backdrop-blur-xs p-2 px-4 rounded-full text-white/90 max-w-2xl mx-auto">
            Extraordinary Homes, Extraordinary Moments
          </p>
        </div>

        {/* FRAME IMAGE */}
        <div className="absolute inset-0 bg-black">
          <img
            src={currentImagePath}
            alt="image-frame"
            className="w-full h-full object-cover"
            key={currentFrame}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSequenceSection;