"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const row1Images = Array.from({ length: 17 }, (_, i) => `/events/event-${String(i + 1).padStart(2, "0")}.webp`);
const row2Images = Array.from({ length: 17 }, (_, i) => `/events/event-${String(i + 18).padStart(2, "0")}.webp`);
const row3Images = Array.from({ length: 16 }, (_, i) => `/events/event-${String(i + 35).padStart(2, "0")}.webp`);

function CarouselRow({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: reverse ? -0.15 : 0.15,
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
              className="h-48 md:h-56 w-auto object-cover"
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
