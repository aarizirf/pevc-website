import Link from "next/link";

interface Sponsor {
  name: string;
  logo: string;
  description: string;
  sector: string;
  website: string;
}

const caseCompetitionPartners: Sponsor[] = [
  {
    name: "Silver Lake",
    logo: "/sponsors/silver-lake.png",
    description: "Global private equity firm focused on investments in technology, technology-enabled and related industries, headquartered in Silicon Valley with offices in New York, London, and Hong Kong.",
    sector: "Private Equity",
    website: "https://www.silverlake.com",
  },
  {
    name: "Warburg Pincus",
    logo: "/sponsors/warburg-pincus.svg.webp",
    description: "Global private equity firm based in New York managing over $85 billion in assets, with a growth-oriented investment philosophy across 21 funds and 1,000+ investments.",
    sector: "Private Equity",
    website: "https://www.warburgpincus.com",
  },
  {
    name: "Altamont Capital Partners",
    logo: "/sponsors/altamont.jpg",
    description: "Private equity firm with $4.3 billion under management specializing in middle-market control investments across consumer, industrial, and financial services sectors.",
    sector: "Private Equity",
    website: "https://www.altamontcapital.com",
  },
  {
    name: "KKR",
    logo: "/sponsors/kkr.png",
    description: "Global investment company managing $504 billion across private equity, real estate, credit, and hedge funds with 23 funds and 690+ investments worldwide.",
    sector: "Private Equity",
    website: "https://www.kkr.com",
  },
];

const platinumSponsors: Sponsor[] = [
  {
    name: "Insight Partners",
    logo: "/sponsors/insight-partners.png",
    description: "Global software investor and operational partner, investing in high-growth technology, software, and internet businesses across all stages from Series A through late-stage growth.",
    sector: "Venture Capital",
    website: "https://www.insightpartners.com",
  },
  {
    name: "Apax Partners",
    logo: "/sponsors/apax.png",
    description: "Global private equity advisory firm with over 50 years of investing experience, focusing on tech & telco, services, healthcare, and consumer sectors.",
    sector: "Private Equity",
    website: "https://www.apax.com",
  },
  {
    name: "American Securities",
    logo: "/sponsors/american-securities.png",
    description: "Leading private equity firm investing in market-leading North American companies with annual revenues generally ranging from $200 million to $2 billion.",
    sector: "Private Equity",
    website: "https://www.american-securities.com",
  },
  {
    name: "Grata",
    logo: "/sponsors/grata.png",
    description: "Leading private company intelligence platform that helps dealmakers discover, research, and engage with private companies for sourcing and market mapping.",
    sector: "Technology",
    website: "https://www.grata.com",
  },
];

const pastSponsors: Sponsor[] = [
  {
    name: "LLR Partners",
    logo: "/sponsors/llr-partners.webp",
    description: "Private equity firm investing in education, fintech, healthcare, industrial tech, software, and security sectors, partnering with founders to accelerate growth.",
    sector: "Private Equity",
    website: "https://www.llrpartners.com",
  },
  {
    name: "General Atlantic",
    logo: "/sponsors/general-atlantic.jpg",
    description: "Leading global growth equity firm providing capital and strategic support for growth companies across technology, consumer, financial services, and healthcare.",
    sector: "Growth Equity",
    website: "https://www.generalatlantic.com",
  },
  {
    name: "Ares Capital Corporation",
    logo: "/sponsors/ares.jpg",
    description: "Specialty finance company and leading provider of flexible, one-stop financing solutions to private middle-market companies in the United States.",
    sector: "Credit",
    website: "https://www.arescapitalcorp.com",
  },
  {
    name: "GTCR",
    logo: "/sponsors/gtcr.jpg",
    description: "Chicago-based private equity firm pioneering The Leaders Strategy, focusing on buyouts, recapitalizations, and build-ups in financial services, healthcare, and technology.",
    sector: "Private Equity",
    website: "https://www.gtcr.com",
  },
];

const SECTOR_ACCENTS: Record<string, string> = {
  "Private Equity": "bg-blue-50/70",
  "Venture Capital": "bg-emerald-50/70",
  "Growth Equity": "bg-violet-50/70",
  "Technology": "bg-amber-50/70",
  "Credit": "bg-slate-100/70",
};

function getSectorAccent(sector: string): string {
  return SECTOR_ACCENTS[sector] ?? "bg-gray-50/50";
}

function SponsorRow({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_120px] lg:grid-cols-[200px_1fr_140px] gap-6 md:gap-8 py-8 md:py-10 border-b border-gray-200 items-start">
      {/* Logo */}
      <div className="flex items-center md:justify-center h-16 md:h-20">
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="max-h-12 md:max-h-16 max-w-[140px] md:max-w-[160px] object-contain"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-3">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {sponsor.description}
        </p>
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 text-sm font-medium underline underline-offset-2 hover:text-gray-600 transition-colors w-fit"
        >
          View Site
        </a>
      </div>

      {/* Sector */}
      <div className="md:text-right">
        <span className="text-gray-500 md:text-gray-600 text-xs md:text-sm">{sponsor.sector}</span>
      </div>
    </div>
  );
}

function SponsorSection({
  title,
  sponsors,
}: {
  title: string;
  sponsors: Sponsor[];
}) {
  const sectionAccent = sponsors.length ? getSectorAccent(sponsors[0].sector) : "bg-gray-50/50";
  return (
    <div className={`mb-16 md:mb-20 rounded-xl px-6 md:px-8 py-8 md:py-10 -mx-6 md:-mx-8 ${sectionAccent}`}>
      <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-6 md:mb-8">{title}</h2>

      {/* Table Header - hidden on mobile */}
      <div className="hidden md:grid md:grid-cols-[180px_1fr_120px] lg:grid-cols-[200px_1fr_140px] gap-8 pb-4 border-b border-gray-900">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          Company
        </span>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          Description
        </span>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider text-right">
          Sector
        </span>
      </div>

      {/* Mobile header */}
      <div className="md:hidden pb-4 border-b border-gray-900">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          Sponsors
        </span>
      </div>

      {/* Sponsor Rows */}
      {sponsors.map((sponsor) => (
        <SponsorRow key={sponsor.name} sponsor={sponsor} />
      ))}
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <main className="w-full">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-12 py-8 md:px-20 lg:px-32 bg-white border-b border-gray-100">
        <Link href="/">
          <img src="/wharton-logo.png" alt="Wharton PEVC" className="h-12 brightness-0" />
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/team" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
            Our Team
          </Link>
          <Link href="/sponsors" className="text-gray-900 text-sm font-medium">
            Sponsors
          </Link>
          <Link href="/events" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
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

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0 animate-page-intro" />
            <span className="text-sm text-gray-500 uppercase tracking-wider animate-page-intro-delay-1">Our Partners</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 animate-page-intro-delay-2">
            Sponsors
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed animate-page-intro-delay-3">
            We are grateful for the support of leading private equity and venture capital firms
            who help make our events, case competitions, and programming possible.
          </p>
        </div>
      </section>

      {/* Sponsors Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="px-12 md:px-20 lg:px-32">
          <SponsorSection title="Platinum Sponsors" sponsors={platinumSponsors} />
          <SponsorSection title="Case Competition Partners" sponsors={caseCompetitionPartners} />
          <SponsorSection title="Past Sponsors" sponsors={pastSponsors} />
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="px-12 md:px-20 lg:px-32 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Interested in Sponsoring?
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto mb-8">
            Partner with Wharton PEVC to connect with talented undergraduates and support
            the next generation of finance professionals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 md:py-16">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Logo */}
            <Link href="/">
              <img src="/wharton-logo.png" alt="Wharton PEVC" className="h-10" />
            </Link>

            {/* Nav Links */}
            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              <Link href="/" className="text-gray-300 text-sm hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/team" className="text-gray-300 text-sm hover:text-white transition-colors">
                Our Team
              </Link>
              <Link href="/sponsors" className="text-gray-300 text-sm hover:text-white transition-colors">
                Sponsors
              </Link>
              <Link href="/events" className="text-gray-300 text-sm hover:text-white transition-colors">
                Events
              </Link>
              <Link href="/projects" className="text-gray-300 text-sm hover:text-white transition-colors">
                Industry Projects
              </Link>
              <Link href="/join" className="text-gray-300 text-sm hover:text-white transition-colors">
                Join Us
              </Link>
            </div>

            {/* Connect */}
            <div className="flex items-center gap-5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 <span className="text-gray-400">Wharton PEVC</span> All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed text-center md:text-right max-w-xl">
              As a Wharton Council-recognized student organization, Wharton PEVC adheres to the{" "}
              <a
                href="https://almanac.upenn.edu/articles/of-record-university-of-pennsylvania-policy-on-equal-opportunity-and-equal-opportunity-and-nondiscrimination-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300 transition-colors"
              >
                University of Pennsylvania Policy on Equal Opportunity
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
