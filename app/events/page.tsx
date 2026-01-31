import Link from "next/link";

interface Event {
  title: string;
  date: string;
  time?: string;
  location: string;
  type: "Speaker Event" | "Networking" | "Workshop" | "Competition";
  description: string;
  speaker?: string;
  speakerTitle?: string;
  image?: string;
  status: "upcoming" | "past";
  registrationLink?: string;
}

const events: Event[] = [
  {
    title: "James Gorman: Chairman of Walt Disney Co. & Former CEO of Morgan Stanley",
    date: "February 18, 2025", 
    time: "7:00 PM - 8:30 PM",
    location: "Huntsman Hall, Room G12",
    type: "Speaker Event",
    description: "Join us for an exclusive fireside chat with James Gorman, Chairman of The Walt Disney Company and Former Chairman and CEO of Morgan Stanley. Mr. Gorman will share insights on leadership, strategic decision-making, and the evolution of financial services.",
    speaker: "James Gorman",
    speakerTitle: "Chairman, The Walt Disney Company",
    image: "/event-1.png",
    status: "upcoming",
    registrationLink: "/join"
  },
  {
    title: "Spring Networking Night with PE & VC Professionals",
    date: "March 15, 2025",
    time: "6:00 PM - 9:00 PM", 
    location: "The Union, Hall of Flags",
    type: "Networking",
    description: "Connect with professionals from leading private equity and venture capital firms. This is an exclusive opportunity for PEVC members to build relationships and learn about career paths in private markets.",
    status: "upcoming",
    registrationLink: "/join"
  },
  {
    title: "Private Equity Modeling Workshop",
    date: "March 28, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Huntsman Hall, Room G90",
    type: "Workshop", 
    description: "Hands-on workshop covering LBO modeling, precedent transaction analysis, and investment memo writing. Led by PEVC alumni currently working at top-tier PE firms.",
    status: "upcoming"
  },
  {
    title: "Annual Stock Pitch Competition Finals",
    date: "April 12, 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Huntsman Hall, Colloquy Room",
    type: "Competition",
    description: "Watch PEVC members present their best investment ideas to a panel of industry professionals. Top pitches will receive cash prizes and potential internship interviews.",
    status: "upcoming"
  },
  {
    title: "Slava Rubin: Co-Founder of Indiegogo & Fortune 40 Under 40", 
    date: "November 20, 2024",
    time: "7:00 PM - 8:30 PM",
    location: "Huntsman Hall, Room G12",
    type: "Speaker Event",
    description: "Slava Rubin, Co-Founder and former CEO of Indiegogo, shared his entrepreneurial journey and insights on building and scaling technology companies. Mr. Rubin discussed the evolution of crowdfunding and his current ventures.",
    speaker: "Slava Rubin",
    speakerTitle: "Co-Founder, Indiegogo",
    image: "/event-2.png", 
    status: "past"
  },
  {
    title: "Fall Networking Reception",
    date: "October 15, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "The Ritz-Carlton Philadelphia",
    type: "Networking",
    description: "Our fall networking reception brought together over 100 students and 30 professionals from leading PE and VC firms for an evening of relationship building and career insights.",
    status: "past"
  },
  {
    title: "Venture Capital Deep Dive Workshop",
    date: "September 28, 2024", 
    time: "1:00 PM - 4:00 PM",
    location: "Huntsman Hall, Room G28",
    type: "Workshop",
    description: "Interactive workshop covering venture capital fundamentals, startup evaluation frameworks, and term sheet negotiation. Led by VCs from Bessemer Venture Partners and First Round Capital.",
    status: "past"
  },
  {
    title: "Private Debt Markets Panel",
    date: "September 10, 2024",
    time: "7:00 PM - 8:30 PM", 
    location: "Huntsman Hall, Colloquy Room",
    type: "Speaker Event",
    description: "Panel discussion featuring professionals from leading private credit funds discussing the growth of private debt markets and investment opportunities.",
    status: "past"
  }
];

const upcomingEvents = events.filter(event => event.status === "upcoming");
const pastEvents = events.filter(event => event.status === "past");

export default function Events() {
  return (
    <main className="w-full">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-12 py-6 md:px-20 lg:px-32">
          {/* Logo */}
          <Link href="/" className="text-gray-900 font-semibold text-lg tracking-wide">
            Wharton PEVC
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/team" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Our Team
            </Link>
            <Link href="/sponsors" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Sponsors
            </Link>
            <Link href="/events" className="text-gray-900 text-sm font-medium">
              Events
            </Link>
            <Link href="/projects" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Industry Projects
            </Link>
            <Link href="/join" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Join Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-px bg-gray-300" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
                Events
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight mb-8">
              Connect with industry leaders and expand your network.
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              PEVC hosts exclusive speaker events, networking opportunities, educational workshops, and competitions throughout the academic year. Our events provide unparalleled access to private markets professionals and hands-on learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Mark your calendars for these exclusive events featuring industry leaders and networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {event.image && (
                  <div className="aspect-[4/3] bg-gray-100">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded ${
                      event.type === "Speaker Event" ? "bg-blue-100 text-blue-900" :
                      event.type === "Networking" ? "bg-green-100 text-green-900" :
                      event.type === "Workshop" ? "bg-purple-100 text-purple-900" :
                      "bg-orange-100 text-orange-900"
                    }`}>
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-3 leading-tight">
                    {event.title}
                  </h3>
                  
                  {event.time && (
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">{event.time}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>
                  
                  {event.registrationLink && (
                    <Link
                      href={event.registrationLink}
                      className="inline-flex items-center bg-blue-900 text-white px-6 py-3 text-sm font-medium hover:bg-blue-800 transition-colors"
                    >
                      Register Now
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Past Events
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Take a look at the exceptional programming we've delivered to our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="group">
                {event.image ? (
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-6">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg overflow-hidden mb-6 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="text-2xl font-light mb-2">PEVC</div>
                      <div className="text-xs tracking-widest">{event.type.toUpperCase()}</div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded ${
                    event.type === "Speaker Event" ? "bg-blue-100 text-blue-900" :
                    event.type === "Networking" ? "bg-green-100 text-green-900" :
                    event.type === "Workshop" ? "bg-purple-100 text-purple-900" :
                    "bg-orange-100 text-orange-900"
                  }`}>
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-3 leading-tight">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Types of Events
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer diverse programming to meet the varied interests and career goals of our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Speaker Events</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Exclusive talks from industry leaders sharing insights on careers, markets, and leadership.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Networking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connect with PE/VC professionals and build relationships that can shape your career.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Workshops</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hands-on learning sessions covering financial modeling, valuation, and industry skills.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Competitions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stock pitch competitions and case study challenges with prizes and recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Don't Miss Out
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Join PEVC to gain exclusive access to our events and networking opportunities with industry leaders.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center bg-blue-900 text-white px-8 py-4 text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            Join PEVC Today
          </Link>
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

            {/* Connect */}
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