import Link from "next/link";

interface TeamMember {
  name: string;
  position: string;
  year: string;
  school: string;
  bio: string;
  linkedin?: string;
}

const boardMembers: TeamMember[] = [
  {
    name: "Sarah Chen",
    position: "President",
    year: "Wharton '25",
    school: "Finance & Management",
    bio: "Sarah leads our strategic vision and oversees all club operations. She has interned at Goldman Sachs and Blackstone, and is passionate about mentoring the next generation of finance professionals.",
    linkedin: "https://linkedin.com/in/sarahchen"
  },
  {
    name: "Michael Rodriguez", 
    position: "Vice President",
    year: "Wharton '25",
    school: "Finance & Economics",
    bio: "Michael manages our committee operations and member development programs. He has experience at KKR and leads our corporate outreach initiatives.",
    linkedin: "https://linkedin.com/in/michaelrodriguez"
  },
  {
    name: "Emily Zhang",
    position: "VP of Education",
    year: "Wharton '26", 
    school: "Finance & Statistics",
    bio: "Emily oversees our PEVC Academy and educational programming. She's passionate about making private markets education accessible to all Penn students.",
    linkedin: "https://linkedin.com/in/emilyzhang"
  },
  {
    name: "David Park",
    position: "VP of Industry Relations",
    year: "Wharton '25",
    school: "Finance & Computer Science",
    bio: "David manages relationships with our sponsor firms and coordinates our speaker series. He has interned at Apollo Global Management.",
    linkedin: "https://linkedin.com/in/davidpark"
  },
  {
    name: "Jessica Liu",
    position: "VP of Investment Analysis",
    year: "Wharton '26",
    school: "Finance & Management",
    bio: "Jessica leads our Investment Analysis committee and coordinates pitch competitions. She's experienced in financial modeling and valuation.",
    linkedin: "https://linkedin.com/in/jessicaliu"
  },
  {
    name: "Alex Thompson",
    position: "VP of Industry Projects", 
    year: "Wharton '25",
    school: "Finance & Engineering",
    bio: "Alex manages our consulting projects with local entrepreneurs and startups. He combines technical expertise with financial acumen.",
    linkedin: "https://linkedin.com/in/alexthompson"
  }
];

const committeeHeads: TeamMember[] = [
  {
    name: "Rachel Kim",
    position: "Corporate Outreach Chair",
    year: "Wharton '26",
    school: "Finance & Marketing", 
    bio: "Rachel builds relationships with PE/VC firms and coordinates networking events for our members."
  },
  {
    name: "James Wilson",
    position: "Events Chair",
    year: "Wharton '26", 
    school: "Finance & Communications",
    bio: "James plans and executes our speaker events, networking nights, and member social activities."
  },
  {
    name: "Sophia Martinez",
    position: "Technology Chair",
    year: "Wharton '27",
    school: "Finance & Computer Science",
    bio: "Sophia manages our digital presence and develops tools to enhance the member experience."
  },
  {
    name: "Daniel Chen",
    position: "Alumni Relations Chair",
    year: "Wharton '26",
    school: "Finance & International Studies", 
    bio: "Daniel maintains connections with our extensive alumni network in the private markets industry."
  }
];

export default function Team() {
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
            <Link href="/team" className="text-gray-900 text-sm font-medium">
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
                Our Team
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight mb-8">
              Meet the dedicated leaders driving PEVC forward.
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              Our board members and committee chairs are passionate about private equity and venture capital, bringing diverse experiences and perspectives to create an exceptional learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Executive Board
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Our executive team provides strategic leadership and oversees all club operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-900 text-xl font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-900 text-sm font-medium mb-1">{member.position}</p>
                  <p className="text-gray-500 text-sm">{member.year} • {member.school}</p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Chairs Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Committee Chairs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Our committee chairs lead specialized teams and coordinate key club functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {committeeHeads.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-blue-900 text-lg font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-900 text-sm font-medium mb-1">{member.position}</p>
                    <p className="text-gray-500 text-sm mb-3">{member.year} • {member.school}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Our Alumni Network
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              PEVC alumni have gone on to successful careers at leading private equity firms, venture capital funds, investment banks, and consulting companies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-light text-blue-900 mb-2">150+</div>
              <p className="text-gray-600 text-sm">Alumni Network</p>
            </div>
            <div>
              <div className="text-4xl font-light text-blue-900 mb-2">50+</div>
              <p className="text-gray-600 text-sm">PE/VC Firms</p>
            </div>
            <div>
              <div className="text-4xl font-light text-blue-900 mb-2">25+</div>
              <p className="text-gray-600 text-sm">Investment Banks</p>
            </div>
            <div>
              <div className="text-4xl font-light text-blue-900 mb-2">10+</div>
              <p className="text-gray-600 text-sm">Consulting Firms</p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-light text-gray-900 text-center mb-12">
              Alumni at Leading Firms
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {["Blackstone", "KKR", "Apollo", "Carlyle", "TPG", "Bain Capital", "Goldman Sachs", "Morgan Stanley", "McKinsey", "BCG", "Warburg Pincus", "General Atlantic"].map((firm, index) => (
                <div key={index} className="text-center">
                  <div className="text-gray-400 font-medium text-sm tracking-wide">
                    {firm}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Ready to Lead with Us?
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Join our team of passionate students driving excellence in private equity and venture capital education.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center bg-blue-900 text-white px-8 py-4 text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            Apply to Join
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