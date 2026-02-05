import Link from "next/link";
import Accordion from "./components/Accordion";
import SponsorCarousel from "./components/SponsorCarousel";
import { events, getTypeColor } from "./data/events";

export default function Home() {
  return (
    <main className="w-full">
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
          <nav className="flex items-center justify-between px-12 py-8 md:px-20 lg:px-32">
            {/* Logo */}
            <Link href="/" className="text-white font-semibold text-lg tracking-wide">
              Wharton PEVC
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/" className="text-white text-sm hover:opacity-80 transition-opacity">
                Home
              </Link>
              <Link href="/team" className="text-white text-sm hover:opacity-80 transition-opacity">
                Our Team
              </Link>
              <Link href="/sponsors" className="text-white text-sm hover:opacity-80 transition-opacity">
                Sponsors
              </Link>
              <Link href="/events" className="text-white text-sm hover:opacity-80 transition-opacity">
                Events
              </Link>
              <Link href="/projects" className="text-white text-sm hover:opacity-80 transition-opacity">
                Industry Projects
              </Link>
              <Link href="/join" className="text-white text-sm hover:opacity-80 transition-opacity">
                Join Us
              </Link>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex flex-1 flex-col justify-end px-12 pb-24 md:px-20 md:pb-32 lg:px-32 lg:pb-40">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-8">
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
        <div className="px-12 md:px-20 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Main Statement */}
            <div className="flex gap-6">
              <div className="w-1 bg-blue-900 shrink-0" />
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
                PEVC is a thriving organization of bright and passionate individuals. Our mission is to cultivate connections between private market firms and Penn&apos;s students that will ultimately lead to a more professionally prepared and passionate educational community. As a PEVC member, you will acquire and hone vital financial skills, meet and interact with professionals from the industry&apos;s best firms, and work and play in a team with the most driven and interesting students Penn has to offer. We are proud to have led Wharton Council&apos;s &ldquo;Best GBM Program&rdquo; (2023), organized the &ldquo;Best Event&rdquo; (2023), and had the &ldquo;Most Outstanding Board Member&rdquo; for 2 years straight (2024, 2025).
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
      <section className="bg-[#f5f5f5] py-16 md:py-20 lg:py-24">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src="/case-comp.webp"
                alt="Case Competition"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Case Competitions
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Wharton PEVC organizes competitions with premier firms for students nationwide. These events let students apply their expertise and engage with industry professionals.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Prior partnerships have included KKR, Silver Lake, Warburg Pincus, and Altamont.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Speakers Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Industry Speakers
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                We host multiple speaking events featuring seasoned PEVC professionals, often in senior leadership roles.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Past speakers represent firms such as Apollo Global Management, KKR, Goldman Sachs, Moelis, Silver Lake, Warburg Pincus, Blackstone, Insight Partners, Apax Partners, Carlyle and more.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 aspect-[3/2] overflow-hidden">
              <img
                src="/industry-speakers.webp"
                alt="Industry Speaker Event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Projects Section */}
      <section className="bg-[#f5f5f5] py-16 md:py-20 lg:py-24">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
              Industry Projects
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Wharton PEVC offers pro-bono valuation services for businesses across the United States, regardless of size or financial profile. Our members bring substantial experience building valuation models at top private equity firms, venture capital firms, hedge funds, and investment banks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6">
                <h3 className="text-gray-900 font-medium mb-2">Valuation Services</h3>
                <p className="text-gray-600 text-sm">Building financial models for business valuations</p>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-gray-900 font-medium mb-2">Growth Acceleration</h3>
                <p className="text-gray-600 text-sm">Strategic advice to help firms expand promising products</p>
              </div>
            </div>
            <a
              href="mailto:whartonpevcweb@gmail.com"
              className="inline-block text-blue-900 text-sm font-medium border-b border-blue-900 pb-1 hover:opacity-70 transition-opacity"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-white pt-8 md:pt-12 pb-24 md:pb-32 lg:pb-40">
        <div className="px-12 md:px-20 lg:px-32">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-6">
              <div className="w-16 h-px bg-gray-300" />
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
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
      <footer className="bg-black text-white py-16 md:py-20">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Logo */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link href="/" className="text-white font-semibold text-xl tracking-wide">
                Wharton PEVC
              </Link>
            </div>

            {/* Club */}
            <div>
              <h4 className="text-gray-400 text-sm mb-4">Club</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/team" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Committees */}
            <div>
              <h4 className="text-gray-400 text-sm mb-4">Committees</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/committees" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Investment Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/committees" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Industry Projects
                  </Link>
                </li>
                <li>
                  <Link href="/committees" className="text-white text-sm hover:text-gray-300 transition-colors">
                    PEVC Academy
                  </Link>
                </li>
                <li>
                  <Link href="/committees" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Corporate Outreach
                  </Link>
                </li>
              </ul>
            </div>

            {/* Events */}
            <div>
              <h4 className="text-gray-400 text-sm mb-4">Events</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/events" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Speaker Series
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Networking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-gray-400 text-sm mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/sponsors" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Industry Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gray-400 text-sm mb-4">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-gray-300 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 <span className="text-gray-400">Wharton PEVC</span> All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Equal Opportunity Statement */}
          <p className="mt-8 text-gray-500 text-xs leading-relaxed text-center">
            As a Wharton Council-recognized student organization, Wharton PEVC adheres to the{" "}
            <a
              href="https://almanac.upenn.edu/articles/of-record-university-of-pennsylvania-policy-on-equal-opportunity-and-equal-opportunity-and-nondiscrimination-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition-colors"
            >
              University of Pennsylvania Policy on Equal Opportunity
            </a>
            . All Penn undergraduates are welcome to sign up to participate in our general body membership (GBM) events and programs.
          </p>
        </div>
      </footer>
    </main>
  );
}
