"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { allSponsors } from "../data/sponsors";

// At the carousel's larger display size, full-bleed wordmark logos (no
// internal padding) read as oversized next to padded ones — shrink them.
const carouselSmaller = new Set(["Grata", "Insight Partners", "KKR", "Silver Lake", "TA Associates"]);

// Fixed (not randomized) shuffle so the strip doesn't read as an
// alphabetized list — randomizing per render would mismatch server/client.
const carouselOrder = [
  "Warburg Pincus",
  "Jane Street",
  "Silver Lake",
  "American Securities",
  "OceanSound Partners",
  "KKR",
  "Grata",
  "CD&R",
  "TA Associates",
  "Insight Partners",
];

const carouselSponsors = carouselOrder
  .map((name) => allSponsors.find((sponsor) => sponsor.name === name))
  .filter((sponsor): sponsor is NonNullable<typeof sponsor> => Boolean(sponsor));

export default function SponsorCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: 0.3,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex items-center">
        {carouselSponsors.map((sponsor, index) => {
          const smaller = sponsor.size === "sm" || carouselSmaller.has(sponsor.name);
          return (
            <div
              key={index}
              className={`flex-none mx-4 md:mx-8 lg:mx-12 flex items-center justify-center ${smaller ? "h-7 md:h-8" : "h-12 md:h-16"}`}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className={`h-full w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${smaller ? "max-w-[70px] md:max-w-[90px]" : "max-w-[110px] md:max-w-[165px]"}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
