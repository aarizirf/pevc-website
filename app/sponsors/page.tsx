import Link from "next/link";

interface Sponsor {
  name: string;
  tier: "Platinum" | "Gold" | "Silver";
  description: string;
  industry: string;
  website: string;
  partnership: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Blackstone",
    tier: "Platinum",
    description: "The world's largest alternative asset manager, specializing in private equity, real estate, hedge funds, and credit.",
    industry: "Private Equity & Alternative Investments",
    website: "https://blackstone.com",
    partnership: "Exclusive speaker series, internship opportunities, and mentorship programs"
  },
  {
    name: "KKR",
    tier: "Platinum", 
    description: "A leading global investment firm managing capital across private equity, infrastructure, real estate, and credit strategies.",
    industry: "Private Equity & Investment Management",
    website: "https://kkr.com",
    partnership: "Annual networking events, case study competitions, and summer internship placements"
  },
  {
    name: "Apollo Global Management",
    tier: "Platinum",
    description: "A high-growth, global alternative investment manager with expertise in private equity, credit, and real estate.",
    industry: "Alternative Investment Management",
    website: "https://apollo.com", 
    partnership: "Executive speaker events, investment analysis workshops, and career development programs"
  },
  {
    name: "The Carlyle Group",
    tier: "Gold",
    description: "A global investment firm specializing in private equity, real assets, and market strategies across various sectors.",
    industry: "Private Equity & Real Assets",
    website: "https://carlyle.com",
    partnership: "Industry insights sessions, portfolio company case studies, and recruitment partnerships"
  },
  {
    name: "TPG",
    tier: "Gold",
    description: "A leading global alternative asset firm focused on private equity, impact investing, real estate, and market solutions.",
    industry: "Alternative Asset Management",
    website: "https://tpg.com",
    partnership: "Impact investing workshops, social impact case studies, and sustainable investing education"
  },
  {
    name: "Warburg Pincus",
    tier: "Gold",
    description: "A leading global private equity firm focused on growth investing across technology, healthcare, and financial services.",
    industry: "Growth Private Equity",
    website: "https://warburgpincus.com",
    partnership: "Growth equity education, technology sector insights, and startup evaluation workshops"
  },
  {
    name: "Advent International",
    tier: "Gold",
    description: "One of the largest and most experienced global private equity investors, focused on international markets.",
    industry: "International Private Equity", 
    website: "https://adventinternational.com",
    partnership: "Global market analysis, cross-border investment strategies, and international business development"
  },
  {
    name: "Bain Capital",
    tier: "Silver",
    description: "A leading private investment firm with expertise in private equity, credit, public equity, and venture capital.",
    industry: "Multi-Strategy Investment",
    website: "https://baincapital.com",
    partnership: "Multi-strategy investment education and portfolio management workshops"
  },
  {
    name: "Silver Lake",
    tier: "Silver",
    description: "The global leader in technology investing, with over $88 billion in combined assets under management.",
    industry: "Technology Private Equity",
    website: "https://silverlake.com",
    partnership: "Technology sector deep dives and digital transformation case studies"
  },
  {
    name: "Vista Equity Partners",
    tier: "Silver",
    description: "A leading investment firm focused exclusively on enterprise software, data, and technology-enabled businesses.",
    industry: "Enterprise Software & Technology",
    website: "https://vistaequitypartners.com", 
    partnership: "Software investing education and enterprise technology analysis"
  },
  {
    name: "Thoma Bravo",
    tier: "Silver",
    description: "A leading private equity firm focused on investing in software and technology-enabled services companies.",
    industry: "Software Private Equity",
    website: "https://thomabravo.com",
    partnership: "Software business model analysis and B2B technology investment strategies"
  },
  {
    name: "General Atlantic",
    tier: "Silver",
    description: "A leading global growth equity firm providing capital and strategic support for growth companies.",
    industry: "Growth Equity",
    website: "https://generalatlantic.com",
    partnership: "Growth equity fundamentals and scaling business strategies"
  }
];

const platinumSponsors = sponsors.filter(s => s.tier === "Platinum");
const goldSponsors = sponsors.filter(s => s.tier === "Gold");
const silverSponsors = sponsors.filter(s => s.tier === "Silver");

export default function Sponsors() {
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
            <Link href="/sponsors" className="text-gray-900 text-sm font-medium">
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
                Our Sponsors
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight mb-8">
              Partnering with the world's leading private markets firms.
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              PEVC is proud to partner with premier private equity and venture capital firms that share our commitment to educating the next generation of finance professionals. Our sponsors provide invaluable support through mentorship, networking opportunities, and real-world insights.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsor Overview Stats */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-light text-blue-900 mb-2">12+</div>
              <p className="text-gray-600 text-sm">Partner Firms</p>
            </div>
            <div>
              <div className="text-4xl font-light text-blue-900 mb-2">$2T+</div>
              <p className="text-gray-600 text-sm">Assets Under Management</p>
            </div>
            <div>
              <div className="text-4xl font-light text-blue-900 mb-2">50+</div>
              <p className="text-gray-600 text-sm">Speaking Events Annually</p>
            </div>
            <div>
              <div className="text-4xl font-light text-blue-900 mb-2">100+</div>
              <p className="text-gray-600 text-sm">Internship Placements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platinum Sponsors */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-50 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              Platinum Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Premier Partnership Tier
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our platinum partners provide the highest level of support and engagement with exclusive programming and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {platinumSponsors.map((sponsor, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8 border border-yellow-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-medium text-gray-900">{sponsor.name}</h3>
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded text-xs font-semibold">
                    PLATINUM
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {sponsor.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Industry Focus</span>
                  <p className="text-gray-900 text-sm font-medium">{sponsor.industry}</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Partnership Benefits</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{sponsor.partnership}</p>
                </div>
                
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-900 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-50 text-orange-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              Gold Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Strategic Partnership Tier
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our gold partners contribute significantly to our educational programming and member development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goldSponsors.map((sponsor, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-orange-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-gray-900">{sponsor.name}</h3>
                  <span className="bg-orange-400 text-orange-900 px-3 py-1 rounded text-xs font-semibold">
                    GOLD
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {sponsor.description}
                </p>
                
                <div className="mb-3">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Industry Focus</span>
                  <p className="text-gray-900 text-sm font-medium">{sponsor.industry}</p>
                </div>
                
                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Partnership Benefits</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{sponsor.partnership}</p>
                </div>
                
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-900 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silver Sponsors */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
              Silver Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Supporting Partnership Tier
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our silver partners provide valuable industry expertise and specialized educational programming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {silverSponsors.map((sponsor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">{sponsor.name}</h3>
                  <span className="bg-gray-400 text-white px-2 py-1 rounded text-xs font-semibold">
                    SILVER
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {sponsor.description}
                </p>
                
                <div className="mb-3">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Industry Focus</span>
                  <p className="text-gray-900 text-sm font-medium">{sponsor.industry}</p>
                </div>
                
                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Partnership Benefits</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{sponsor.partnership}</p>
                </div>
                
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-900 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Partnership Benefits
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our sponsors gain access to Penn's top talent while supporting the next generation of private markets professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Talent Access</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Direct access to Penn's most talented students for internships and full-time opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Brand Visibility</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Increased brand recognition among Penn students through events and programming.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Thought Leadership</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Platform to share industry insights and establish thought leadership in private markets.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Networking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Opportunities to connect with alumni network and build long-term relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Direct impact on education and professional development of future industry leaders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Recognition</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Recognition as a supporter of education and professional development at Penn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Interested in Partnership?
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Join our network of leading firms supporting the next generation of private markets professionals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-900 text-white px-8 py-4 text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            Contact Us About Partnership
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