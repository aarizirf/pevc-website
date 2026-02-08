import Link from "next/link";
import Accordion from "./components/Accordion";
import SponsorCarousel from "./components/SponsorCarousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { events, getTypeColor } from "./data/events";

export default function Home() {
  return (
    <main className="w-full">
      {/* Intro Overlay */}
      <div className="fixed inset-0 z-50 bg-white flex items-center justify-center animate-intro-overlay pointer-events-none">
        <img
          src="/wharton-logo.png"
          alt="Wharton PEVC"
          className="h-20 md:h-18 lg:h-22 brightness-0"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/wharton-bg.png')" }}
        />

        {/* Gradient Overlay - lighter at top, darker at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {/* Navigation */}
          <Navbar variant="transparent" activeLink="/" />

          {/* Hero Content */}
          <div className="flex flex-1 flex-col justify-end px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-40 xl:px-32">
            <h1 className="text-white text-3xl md:text-3xl lg:text-5xl font-light tracking-wide mb-8">
              Educating Undergraduates in Private Equity & Venture Capital since 2011
            </h1>

            <p className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed">
              The Wharton Undergraduate Private Equity and Venture Capital Club is the premier place for Penn students interested in exploring the buy-side industry.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
            {/* Left Column - Main Statement */}
            <div className="flex items-start gap-6">
              <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0 mt-5" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Cultivating the next generation of private equity and venture capital leaders.
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="flex flex-col justify-center">
              <h3 className="text-gray-900 text-lg font-medium mb-4">
                Who We Are
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                PEVC is a thriving organization of bright and passionate individuals. Our mission is to cultivate connections between private market firms and Penn&apos;s students that will ultimately lead to a more professionally prepared and passionate educational community. As a PEVC member, you will acquire and hone vital financial skills, meet and interact with professionals from the industry&apos;s best firms, and work and play in a team with the most driven and interesting students Penn has to offer. We are proud to have led Wharton Council&apos;s &ldquo;<span className="underline underline-offset-2 decoration-blue-900">Best GBM Program</span>&rdquo; (2023), organized the &ldquo;<span className="underline underline-offset-2 decoration-blue-900">Best Event</span>&rdquo; (2023), and had the &ldquo;<span className="underline underline-offset-2 decoration-blue-900">Most Outstanding Board Member</span>&rdquo; for 2 years straight (2024, 2025).
              </p>
            </div>
          </div>
        </div>

        {/* Sponsor Carousel */}
        <div className="mt-24 md:mt-32">
          <SponsorCarousel />
        </div>
      </section>

      {/* Committees Section */}
      <Accordion />

      {/* What We Do Section */}
      <section className="bg-[#111111] py-16 md:py-20 lg:py-24">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-32">
            {/* Case Competitions */}
            <div>
              <div className="aspect-[3/2] overflow-hidden mb-6">
                <img
                  src="/case-comp.webp"
                  alt="Case Competition"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
                Case Competitions
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                Wharton PEVC organizes competitions with premier firms for students nationwide. These events let students apply their expertise and engage with industry professionals.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Prior partnerships have included KKR, Silver Lake, Warburg Pincus, and Altamont.
              </p>
            </div>

            {/* Industry Speakers */}
            <div>
              <div className="aspect-[3/2] overflow-hidden mb-6">
                <img
                  src="/industry-speakers.webp"
                  alt="Industry Speaker Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
                Industry Speakers
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                We host multiple speaking events featuring seasoned PEVC professionals, often in senior leadership roles.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Past speakers represent firms such as Apollo Global Management, KKR, Goldman Sachs, Moelis, Silver Lake, Warburg Pincus, Blackstone, Insight Partners, Apax Partners, Carlyle and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-white pt-20 md:pt-28 lg:pt-36 pb-24 md:pb-32 lg:pb-40">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8 md:mb-16">
            <div className="flex items-center gap-6">
              <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900">
                Upcoming Events
              </h2>
            </div>
            <Link
              href="/events"
              className="text-gray-900 text-sm font-medium border-b border-gray-900 pb-1 hover:opacity-70 transition-opacity"
            >
              View All
            </Link>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event) => (
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

      {/* Footer */}
      <Footer />
    </main>
  );
}
