"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const AUTO_SWIPE_INTERVAL_MS = 6000;

const testimonials = [
  "The team had a very complicated project and they rose to the occasion. They answered all of our questions, asked insightful questions and brought new perspectives to the project.",
  "The service from the Wharton students was time efficient and effective. It was our great pleasure to work with them to determine our valuation.",
  "Masterful job, made us deep dive many financial aspects of our company, great work.",
  "Thank you so much for all your work on this and the revelations you brought to light for us in a short period of time.",
];

export default function ClientReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), AUTO_SWIPE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <div className="relative max-w-2xl mx-auto text-center">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {testimonials.map((quote, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 px-1">
              <p className="font-light text-gray-600 text-2xl md:text-3xl leading-relaxed py-3">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === selectedIndex ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === selectedIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
