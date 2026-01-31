import Link from "next/link";
import Accordion from "./components/Accordion";

const sponsors = [
  "Blackstone",
  "KKR",
  "Apollo",
  "Carlyle",
  "TPG",
  "Warburg Pincus",
  "Advent",
  "Bain Capital",
  "Silver Lake",
  "Vista Equity",
  "Thoma Bravo",
  "General Atlantic",
];

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
          <nav className="flex items-center justify-between px-12 py-8 md:px-20 lg:px-32 animate-fade-in">
            {/* Logo */}
            <Link href="/" className="text-white font-semibold text-lg tracking-wide">
              Wharton PEVC
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/" className="text-white text-sm hover:opacity-80 transition-opacity">
                Home
              </Link>
              <Link href="/about" className="text-white text-sm hover:opacity-80 transition-opacity">
                About
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
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-8 animate-fade-in-up animate-delay-200">
              Educating Undergraduates in Private Equity & Venture Capital since 2011
            </h1>

            <p className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed animate-fade-in-up animate-delay-400">
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
            <div className="flex gap-6 animate-fade-in-left animate-delay-200">
              <div className="w-1 bg-blue-900 shrink-0" />
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-light text-gray-900 leading-tight">
                Cultivating the next generation of private equity and venture capital leaders.
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="flex flex-col justify-center animate-fade-in-right animate-delay-400">
              <h3 className="text-gray-900 text-lg font-medium mb-4">
                Who We Are
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                PEVC is a thriving organization of bright and passionate individuals. Our mission is to cultivate connections between private market firms and Penn&apos;s students that will ultimately lead to a more professionally prepared and passionate educational community. As a PEVC member, you will acquire and hone vital financial skills, meet and interact with professionals from the industry&apos;s best firms, and work and play in a team with the most driven and interesting students Penn has to offer. We are proud to have led Wharton Council&apos;s &ldquo;Best GBM Program&rdquo; (2023), organized the &ldquo;Best Event&rdquo; (2023), and had the &ldquo;Most Outstanding Board Member&rdquo; for 2 years straight (2024, 2025).
              </p>

              <Link
                href="/about"
                className="text-gray-900 text-sm font-medium border-b border-gray-900 pb-1 w-fit hover:opacity-70 transition-opacity"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Sponsor Carousel */}
        <div className="mt-24 md:mt-32 overflow-hidden">
          <div className="flex animate-scroll">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 md:px-12"
              >
                <span className="text-gray-300 text-xl md:text-2xl font-semibold tracking-wide whitespace-nowrap">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-scroll-reverse mt-6">
            {[...sponsors, ...sponsors].reverse().map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 md:px-12"
              >
                <span className="text-gray-300 text-xl md:text-2xl font-semibold tracking-wide whitespace-nowrap">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <Accordion />

      {/* Events Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
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
            {/* Event 1 - James Gorman */}
            <Link href="/events" className="group">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-6">
                <img
                  src="/event-1.png"
                  alt="James Gorman Speaker Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-900 rounded">
                  Speaker Event
                </span>
                <span className="text-sm text-gray-500">February 18, 2025</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-900 transition-colors">
                James Gorman: Chairman of Walt Disney Co. &amp; Former CEO of Morgan Stanley
              </h3>
            </Link>

            {/* Event 2 - Slava Rubin */}
            <Link href="/events" className="group">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-6">
                <img
                  src="/event-2.png"
                  alt="Slava Rubin Speaker Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-900 rounded">
                  Speaker Event
                </span>
                <span className="text-sm text-gray-500">November 20, 2024</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-900 transition-colors">
                Slava Rubin: Co-Founder of Indiegogo &amp; Fortune 40 Under 40
              </h3>
            </Link>

            {/* Event 3 - Networking */}
            <Link href="/events" className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg overflow-hidden mb-6 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <div className="text-4xl font-light mb-2">PEVC</div>
                  <div className="text-sm tracking-widest">NETWORKING NIGHT</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-3 py-1 bg-green-100 text-green-900 rounded">
                  Networking
                </span>
                <span className="text-sm text-gray-500">March 2025</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-900 transition-colors">
                Spring Networking Night with PE &amp; VC Professionals
              </h3>
            </Link>
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

            {/* About */}
            <div>
              <h4 className="text-gray-400 text-sm mb-4">About</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Our Story
                  </Link>
                </li>
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
        </div>
      </footer>
    </main>
  );
}
