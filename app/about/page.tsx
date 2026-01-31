import Link from "next/link";

export default function About() {
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
            <Link href="/about" className="text-gray-900 text-sm font-medium">
              About
            </Link>
            <Link href="/team" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Our Team
            </Link>
            <Link href="/sponsors" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Sponsors
            </Link>
            <Link href="/events" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
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
                Our Story
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight mb-8">
              Building bridges between Penn students and the private markets industry since 2011.
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              The Wharton Undergraduate Private Equity and Venture Capital Club was founded with a simple mission: to provide Penn students with unparalleled access to the buy-side industry through education, networking, and hands-on experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Mission */}
            <div>
              <h3 className="text-gray-900 text-xl font-medium mb-6">Our Mission</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                We strive to cultivate connections between private market firms and Penn's students that will ultimately lead to a more professionally prepared and passionate educational community.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                As a PEVC member, you will acquire and hone vital financial skills, meet and interact with professionals from the industry's best firms, and work alongside the most driven and interesting students Penn has to offer.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-gray-900 text-xl font-medium mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-3 shrink-0" />
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Excellence</h4>
                    <p className="text-gray-600 text-sm">Pursuing the highest standards in everything we do</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-3 shrink-0" />
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Collaboration</h4>
                    <p className="text-gray-600 text-sm">Working together to achieve shared goals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-3 shrink-0" />
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Professional Growth</h4>
                    <p className="text-gray-600 text-sm">Developing the skills needed for success in finance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-3 shrink-0" />
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Community</h4>
                    <p className="text-gray-600 text-sm">Building lasting relationships within our network</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Recognition for our commitment to excellence and impact on the Penn community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-900 text-2xl font-bold">2023</div>
              </div>
              <h3 className="text-gray-900 text-lg font-medium mb-2">Best GBM Program</h3>
              <p className="text-gray-600 text-sm">Wharton Council recognition</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-900 text-2xl font-bold">2023</div>
              </div>
              <h3 className="text-gray-900 text-lg font-medium mb-2">Best Event</h3>
              <p className="text-gray-600 text-sm">Outstanding event organization</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-900 text-2xl font-bold">2x</div>
              </div>
              <h3 className="text-gray-900 text-lg font-medium mb-2">Most Outstanding Board Member</h3>
              <p className="text-gray-600 text-sm">2024 & 2025 consecutive years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16">
              Our Timeline
            </h2>

            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <div className="text-white text-sm font-bold">2011</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 text-xl font-medium mb-2">Club Founded</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Wharton PEVC was established to bridge the gap between Penn students and the private equity and venture capital industry.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <div className="text-white text-sm font-bold">2015</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 text-xl font-medium mb-2">First Industry Projects</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Launched our Industry Projects committee, providing real-world consulting experience to local entrepreneurs and businesses.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <div className="text-white text-sm font-bold">2018</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 text-xl font-medium mb-2">PEVC Academy Launch</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Introduced our educational program to provide foundational knowledge and skills to all interested students.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <div className="text-white text-sm font-bold">2023</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 text-xl font-medium mb-2">Awards & Recognition</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Received multiple Wharton Council awards including "Best GBM Program" and "Best Event."
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="text-gray-600 text-sm font-bold">Now</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 text-xl font-medium mb-2">Continued Excellence</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Today, we continue to be the premier destination for Penn students interested in private equity and venture capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Become part of the next generation of private equity and venture capital leaders.
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