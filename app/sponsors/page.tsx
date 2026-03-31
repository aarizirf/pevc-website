import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Sponsors",
  description: "Partners and case competition sponsors of Wharton Undergraduate PEVC.",
};

interface Sponsor {
  name: string;
  logo: string;
  description: string;
  sector: string;
  website: string;
}

const caseCompetitionPartners: Sponsor[] = [
  {
    name: "KKR",
    logo: "/sponsors/kkr.png",
    description: "Global investment company managing $504 billion across private equity, real estate, credit, and hedge funds with 23 funds and 690+ investments worldwide.",
    sector: "Private Equity",
    website: "https://www.kkr.com",
  },
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
];

const platinumSponsors: Sponsor[] = [
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
  {
    name: "KKR",
    logo: "/sponsors/kkr.png",
    description: "Global investment company managing $504 billion across private equity, real estate, credit, and hedge funds with 23 funds and 690+ investments worldwide.",
    sector: "Private Equity",
    website: "https://www.kkr.com",
  },
  {
    name: "OceanSound Partners",
    logo: "/sponsors/oceansound-partners.svg",
    description: "New York-based private equity firm with $4.5 billion AUM focused on technology and technology-enabled services companies serving government and enterprise end-markets.",
    sector: "Private Equity",
    website: "https://oceansoundpartners.com",
  },
  {
    name: "Warburg Pincus",
    logo: "/sponsors/warburg-pincus.svg.webp",
    description: "Global private equity firm based in New York managing over $85 billion in assets, with a growth-oriented investment philosophy across 21 funds and 1,000+ investments.",
    sector: "Private Equity",
    website: "https://www.warburgpincus.com",
  },
];

const pastSponsors: Sponsor[] = [
  {
    name: "Altamont Capital Partners",
    logo: "/sponsors/altamont.jpg",
    description: "Private equity firm with $4.3 billion under management specializing in middle-market control investments across consumer, industrial, and financial services sectors.",
    sector: "Private Equity",
    website: "https://www.altamontcapital.com",
  },
  {
    name: "Apax Partners",
    logo: "/sponsors/apax.png",
    description: "Global private equity advisory firm with over 50 years of investing experience, focusing on tech & telco, services, healthcare, and consumer sectors.",
    sector: "Private Equity",
    website: "https://www.apax.com",
  },
  {
    name: "Ares Capital Corporation",
    logo: "/sponsors/ares.jpg",
    description: "Specialty finance company and leading provider of flexible, one-stop financing solutions to private middle-market companies in the United States.",
    sector: "Credit",
    website: "https://www.arescapitalcorp.com",
  },
  {
    name: "General Atlantic",
    logo: "/sponsors/general-atlantic.jpg",
    description: "Leading global growth equity firm providing capital and strategic support for growth companies across technology, consumer, financial services, and healthcare.",
    sector: "Growth Equity",
    website: "https://www.generalatlantic.com",
  },
  {
    name: "GTCR",
    logo: "/sponsors/gtcr.jpg",
    description: "Chicago-based private equity firm pioneering The Leaders Strategy, focusing on buyouts, recapitalizations, and build-ups in financial services, healthcare, and technology.",
    sector: "Private Equity",
    website: "https://www.gtcr.com",
  },
  {
    name: "Insight Partners",
    logo: "/sponsors/insight-partners.png",
    description: "Global software investor and operational partner, investing in high-growth technology, software, and internet businesses across all stages from Series A through late-stage growth.",
    sector: "Venture Capital",
    website: "https://www.insightpartners.com",
  },
  {
    name: "LLR Partners",
    logo: "/sponsors/llr-partners.webp",
    description: "Private equity firm investing in education, fintech, healthcare, industrial tech, software, and security sectors, partnering with founders to accelerate growth.",
    sector: "Private Equity",
    website: "https://www.llrpartners.com",
  },
];

const SECTOR_ACCENTS: Record<string, string> = {
  "Private Equity": "border-blue-200",
  "Venture Capital": "border-emerald-200",
  "Growth Equity": "border-violet-200",
  "Technology": "border-amber-200",
  "Credit": "border-slate-200",
};

function getSectorAccent(sector: string): string {
  return SECTOR_ACCENTS[sector] ?? "border-gray-200";
}

function SponsorRow({ sponsor, isLast }: { sponsor: Sponsor; isLast: boolean }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-[180px_1fr_120px] lg:grid-cols-[200px_1fr_140px] gap-6 md:gap-8 px-6 md:px-8 py-8 md:py-10 items-start ${isLast ? "" : "border-b border-gray-100"}`}>
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
  borderAccent,
}: {
  title: string;
  sponsors: Sponsor[];
  borderAccent?: string;
}) {
  const sectionAccent = borderAccent ?? (sponsors.length ? getSectorAccent(sponsors[0].sector) : "border-gray-200");
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-6 md:mb-8">{title}</h2>

      <div className={`border rounded-lg overflow-hidden ${sectionAccent}`}>
        {/* Table Header - hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-[180px_1fr_120px] lg:grid-cols-[200px_1fr_140px] gap-8 px-8 py-4 border-b border-gray-100">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Company
          </span>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Description
          </span>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider text-right">
            Sector
          </span>
        </div>

        {/* Mobile header */}
        <div className="md:hidden px-6 py-4 border-b border-gray-100">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Sponsors
          </span>
        </div>

        {/* Sponsor Rows */}
        {sponsors.map((sponsor, index) => (
          <SponsorRow key={sponsor.name} sponsor={sponsor} isLast={index === sponsors.length - 1} />
        ))}
      </div>
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <main className="w-full">
      {/* Navigation */}
      <Navbar activeLink="/sponsors" />

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0 animate-page-intro" />
            <span className="text-sm text-gray-500 uppercase tracking-wider animate-page-intro-delay-1">Our Partners</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 animate-page-intro-delay-2">
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
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="animate-page-intro-delay-4">
            <SponsorSection title="Sponsors" sponsors={platinumSponsors} />
          </div>
          <SponsorSection title="Case Competition Partners" sponsors={caseCompetitionPartners} />
          <SponsorSection title="Past Sponsors" sponsors={pastSponsors} borderAccent="border-gray-200" />
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32 text-center">
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
      <Footer />
    </main>
  );
}
