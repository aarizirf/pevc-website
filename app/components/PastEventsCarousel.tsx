"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const allImages = [
  11, 12, 13, 14, 15, 16, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 50,
].map((n) => `/events/event-${String(n).padStart(2, "0")}.webp`);

const row1Images = allImages.slice(0, 10);
const row2Images = allImages.slice(10, 21);
const row3Images = allImages.slice(21);

function CarouselRow({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: reverse ? -0.05 : 0.05,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-none mx-2"
          >
            <img
              src={src}
              alt={`Past event ${index + 1}`}
              className="h-48 md:h-56 w-auto object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PastEventsCarousel() {
  return (
    <div className="space-y-4">
      <CarouselRow images={row1Images} />
      <CarouselRow images={row2Images} reverse />
      <CarouselRow images={row3Images} />
    </div>
  );
}
