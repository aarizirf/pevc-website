"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const sponsorLogos = [
  { name: "Apax", logo: "/sponsors/apax.png" },
  { name: "Warburg Pincus", logo: "/sponsors/warburg-pincus.svg.webp" },
  { name: "American Securities", logo: "/sponsors/american-securities.png" },
  { name: "Grata", logo: "/sponsors/grata.png" },
  { name: "Insight Partners", logo: "/sponsors/insight-partners.png" },
  { name: "KKR", logo: "/sponsors/kkr.png" },
  { name: "Silver Lake", logo: "/sponsors/silver-lake.png" },
  { name: "Altamont", logo: "/sponsors/altamont.jpg" },
  { name: "LLR Partners", logo: "/sponsors/llr-partners.webp" },
  { name: "General Atlantic", logo: "/sponsors/general-atlantic.jpg" },
  { name: "Ares", logo: "/sponsors/ares.jpg" },
  { name: "GTCR", logo: "/sponsors/gtcr.jpg" },
];

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
        {sponsorLogos.map((sponsor, index) => (
          <div
            key={index}
            className="flex-none mx-8 md:mx-12 flex items-center justify-center h-10 md:h-12"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-full w-auto max-w-[140px] md:max-w-[160px] object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
