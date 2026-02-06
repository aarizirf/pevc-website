import Link from "next/link";
import ClientReviewsCarousel from "@/app/components/ClientReviewsCarousel";

export default function ProjectsPage() {
  return (
    <main className="w-full">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-12 py-8 md:px-20 lg:px-32 bg-white border-b border-gray-100">
        <Link href="/">
          <img src="/wharton-logo.png" alt="Wharton PEVC" className="h-12 brightness-0" />
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/team" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Our Team</Link>
          <Link href="/sponsors" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Sponsors</Link>
          <Link href="/events" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Events</Link>
          <Link href="/projects" className="text-gray-900 text-sm font-medium">Industry Projects</Link>
          <Link href="/join" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Join Us</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0" />
            <span className="text-sm text-gray-500 uppercase tracking-wider">Industry Projects</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 max-w-5xl">
            Valuation Services +<br />Growth Acceleration
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <p className="text-gray-600 text-lg leading-relaxed">
              PEVC is now offering valuation services for local businesses, no matter the size or financial profile across the United States. Our growth acceleration team formulates strategic advice to help your firm take advantage of macro trends and help you grow your most promising products.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Members have 2+ summers of experience building valuation models for top private equity firms, venture capital firms, hedge funds, asset managers, and investment banks. Members have taken rigorous finance, accounting, and operations courses at Wharton and placed at national case competitions. The team brings insights into Gen Z consumer preferences and revolutionary technology products. All services are pro bono.
            </p>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="bg-white py-16 md:py-24">
        <div className="px-12 md:px-20 lg:px-32">
          <h2 className="text-lg md:text-xl font-light text-gray-900 mb-10">
            Client Reviews
          </h2>
          <ClientReviewsCarousel />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="px-12 md:px-20 lg:px-32 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Interested in Becoming a Client?
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto mb-8">
            Reach out to learn more about our valuation services and growth acceleration program.
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
            <Link href="/">
              <img src="/wharton-logo.png" alt="Wharton PEVC" className="h-10" />
            </Link>
            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              <Link href="/" className="text-gray-300 text-sm hover:text-white transition-colors">Home</Link>
              <Link href="/team" className="text-gray-300 text-sm hover:text-white transition-colors">Our Team</Link>
              <Link href="/sponsors" className="text-gray-300 text-sm hover:text-white transition-colors">Sponsors</Link>
              <Link href="/events" className="text-gray-300 text-sm hover:text-white transition-colors">Events</Link>
              <Link href="/projects" className="text-gray-300 text-sm hover:text-white transition-colors">Industry Projects</Link>
              <Link href="/join" className="text-gray-300 text-sm hover:text-white transition-colors">Join Us</Link>
            </div>
            <div className="flex items-center gap-5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 <span className="text-gray-400">Wharton PEVC</span> All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed text-center md:text-right max-w-xl">
              As a Wharton Council-recognized student organization, Wharton PEVC adheres to the{" "}
              <a href="https://almanac.upenn.edu/articles/of-record-university-of-pennsylvania-policy-on-equal-opportunity-and-equal-opportunity-and-nondiscrimination-statement" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors">
                University of Pennsylvania Policy on Equal Opportunity
              </a>.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
