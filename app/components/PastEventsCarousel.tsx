"use client";

const allImages = [
  12, 13, 14, 15, 16, 30, 31, 32, 33, 34, 35, 36, 37,
  38, 39, 40, 41, 43, 44, 45, 46, 47, 50,
].map((n) => `/events/event-${String(n).padStart(2, "0")}.webp`).concat([
  "/events/ashmeet_sidana.png",
  "/events/barry_givens.png",
  "/events/chad_hutchinson.png",
  "/events/darren_cohen.png",
  "/events/derek_ho.png",
  "/events/matt_jacobson.png",
  "/events/michael_barton.png",
  "/events/oren_zeev.png",
  "/events/phillipe_laffont.png",
  "/events/vik_malhotra.png",
]);

// Hidden images due to aspect ratio issues - retain for future use
// These have inconsistent aspect ratios and don't display well in the grid
// const hiddenImages = [
//   // Event numbers 23-29 - aspect ratio issues
//   23, 24, 25, 26, 27, 28, 29,
//   // Speaker photos
//   "/events/pete_stavros.png",
//   "/events/john_singh.png",
//   "/events/steffen_pauls.png",
//   "/events/dan_zilberman.png",
//   "/events/jonathan_meltzer.png",
//   "/events/michele_miyakawa.png",
//   "/events/raj_agarwal.png",
// ];

export default function PastEventsCarousel() {
  return (
    <div className="px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
        {allImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden bg-gray-100"
          >
            <img
              src={src}
              alt={`Past event ${index + 1}`}
              className="w-full h-auto object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
