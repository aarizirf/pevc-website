"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface HighlightedEvent {
  name: string;
  title: string;
  description: string;
  images: string[];
  youtubeId?: string;
  videoOnly?: boolean;
}

const highlightedEvents: HighlightedEvent[] = [
  {
    name: "James Gorman",
    title: "Fireside Chat",
    description: "Chairman of The Walt Disney Company & Morgan Stanley",
    images: [],
    youtubeId: "sjWhFL0pOtw",
    videoOnly: true,
  },
  {
    name: "David Rubenstein",
    title: "Fireside Chat",
    description: "Co-Founder & Co-Chairman of The Carlyle Group",
    images: [
      "/highlighted-events/rubenstein-1.jpg",
      "/highlighted-events/rubenstein-2.jpg",
    ],
  },
  {
    name: "Josh Harris",
    title: "Fireside Chat",
    description: "Co-Founder of Apollo and Harris Blitzer Entertainment",
    images: [
      "/highlighted-events/harris-1.jpg",
      "/highlighted-events/harris-2.jpg",
    ],
  },
  {
    name: "Robert Lewin",
    title: "Fireside Chat",
    description: "CFO of KKR",
    images: [
      "/highlighted-events/lewin-1.jpg",
      "/highlighted-events/lewin-2.jpg",
    ],
  },
];

function EventBlock({ event }: { event: HighlightedEvent }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [showVideo, setShowVideo] = useState(!!event.videoOnly);

  const hasMultipleImages = event.images.length > 1;
  const showImages = !event.videoOnly && event.images.length > 0;

  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-10">
      {/* Media */}
      <div className="relative aspect-[16/10] md:aspect-[4/3] md:col-span-5 bg-gray-100 overflow-hidden">
        {showVideo && event.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${event.youtubeId}${event.videoOnly ? "" : "?autoplay=1"}`}
            title={`${event.name} ${event.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : showImages ? (
          <>
            <img
              src={event.images[imgIdx]}
              alt={`${event.name} ${event.title}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            />
            {hasMultipleImages && (
              <>
                <button
                  onClick={() =>
                    setImgIdx((i) => (i - 1 + event.images.length) % event.images.length)
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 md:w-8 md:h-8 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setImgIdx((i) => (i + 1) % event.images.length)
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 md:w-8 md:h-8 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            {event.youtubeId && (
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                aria-label="Play video"
              >
                <span className="w-14 h-14 bg-red-600 group-hover:bg-red-700 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
            {hasMultipleImages && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {event.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`w-1.5 h-1.5 transition-colors ${
                      i === imgIdx ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-200" />
        )}
      </div>

      {/* Info */}
      <div className="md:col-span-7 flex flex-col justify-center pt-4 md:pt-0">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
          {event.title}
        </p>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 tracking-tight">
          {event.name}
        </h3>
        <p className="text-gray-500 mt-2 leading-relaxed">{event.description}</p>
      </div>
    </article>
  );
}

export default function HighlightedEvents() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const scrollPrev = useCallback(() => {
    stopAutoplay();
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi, stopAutoplay]);

  const scrollNext = useCallback(() => {
    stopAutoplay();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi, stopAutoplay]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => stopAutoplay();
  }, [emblaApi, stopAutoplay]);

  return (
    <div className="relative" onClickCapture={stopAutoplay}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {highlightedEvents.map((event) => (
            <div key={event.name} className="flex-[0_0_100%] min-w-0 pr-4 md:pr-6">
              <EventBlock event={event} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="w-11 h-11 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-gray-300 disabled:hover:text-gray-900"
          aria-label="Previous speaker"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="w-11 h-11 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-gray-300 disabled:hover:text-gray-900"
          aria-label="Next speaker"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
