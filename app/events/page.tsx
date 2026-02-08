import Link from "next/link";
import { events, getTypeColor } from "../data/events";
import PastEventsCarousel from "../components/PastEventsCarousel";
import HighlightedEvents from "../components/HighlightedEvents";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Events() {
  return (
    <main className="w-full">
      {/* Navigation */}
      <Navbar activeLink="/events" />

      {/* Upcoming Events Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-8 md:mb-16 animate-page-intro">
            <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900">
              Upcoming Events
            </h1>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-page-intro">
            {events.map((event) => (
              <a
                key={event.id}
                href={event.link}
                target={event.link.startsWith("http") ? "_blank" : undefined}
                rel={event.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-900 transition-colors">
                  {event.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Events Section */}
      <section className="bg-[#fafafa] py-12 md:py-16 lg:py-20">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="animate-page-intro-delay-3">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900">
                Highlighted Events
              </h2>
            </div>
            <HighlightedEvents />
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="bg-[#f5f5f5] py-12 md:py-16">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32 mb-8 md:mb-16">
          <div className="flex items-center gap-6">
            <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900">
              Past Events
            </h2>
          </div>
        </div>
        <PastEventsCarousel />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
