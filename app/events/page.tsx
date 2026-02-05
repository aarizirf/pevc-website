import Link from "next/link";
import { events, getTypeColor } from "../data/events";
import PastEventsCarousel from "../components/PastEventsCarousel";

export default function Events() {
  return (
    <main className="w-full">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-12 py-8 md:px-20 lg:px-32 bg-white border-b border-gray-100">
        <Link href="/" className="text-gray-900 font-semibold text-lg tracking-wide">
          Wharton PEVC
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/team" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
            Our Team
          </Link>
          <Link href="/sponsors" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
            Sponsors
          </Link>
          <Link href="/events" className="text-gray-900 text-sm font-medium">
            Events
          </Link>
          <Link href="/projects" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
            Industry Projects
          </Link>
          <Link href="/join" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
            Join Us
          </Link>
        </div>
      </nav>

      {/* Upcoming Events Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="px-12 md:px-20 lg:px-32">
          {/* Section Header */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900">
              Upcoming Events
            </h1>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Past Events Section */}
      <section className="bg-[#f5f5f5] py-12 md:py-16">
        <div className="px-12 md:px-20 lg:px-32 mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Past Events
          </h2>
        </div>
        <PastEventsCarousel />
      </section>
    </main>
  );
}
