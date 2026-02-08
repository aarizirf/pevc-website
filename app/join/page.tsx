"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function JoinUsPage() {
  const [showListservForm, setShowListservForm] = useState(false);
  return (
    <main className="w-full">
      {/* Navigation */}
      <Navbar activeLink="/join" />

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0" />
            <span className="text-sm text-gray-500 uppercase tracking-wider">Get Involved</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Join Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Become part of the premier private equity and venture capital community at Wharton.
            Explore our committees, join our listserv, and connect with industry professionals.
          </p>
        </div>
      </section>

      {/* Committee Applications & Listserv Side by Side */}
      <section className="bg-white py-12 md:py-16">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Committee Applications */}
            <div>
              <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-6" style={{ fontFamily: "inherit" }}>
                Committee Applications
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Fall 2026 applications will open at the beginning of September. Interested students can join
                the listserv to stay updated on timelines and application deadlines.
              </p>
            </div>

            {/* Listserv */}
            <div>
            <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-6" style={{ fontFamily: "inherit" }}>
              Join Our Listserv
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Stay connected with Wharton PEVC through our biweekly newsletters. Receive information about:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-base md:text-lg leading-relaxed mb-8 space-y-2 ml-4">
              <li>Upcoming speakers and events</li>
              <li>Job opportunities in the PEVC space</li>
              <li>Club announcements and updates</li>
              <li>Industry insights and resources</li>
            </ul>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Sign up with your name, email, and graduation year to receive our biweekly newsletters
              and stay informed about all club activities and opportunities.
            </p>
            <button
              onClick={() => setShowListservForm(!showListservForm)}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Join the Listserv
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${showListservForm ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showListservForm && (
              <div className="mt-6 border border-gray-200 bg-white p-6 md:p-8 max-w-lg">
                <form
                  action="https://upenn.us5.list-manage.com/subscribe/post?u=9c38dae34345d3295f9437940&amp;id=84e341d4d0&amp;f_id=00c3f1ebf0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_self"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Subscribe</h3>
                  <p className="text-xs text-gray-500 mb-5">
                    <span className="text-red-500">*</span> indicates required
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="mce-EMAIL" className="block text-sm text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        required
                        className="w-full border border-gray-300 px-3 py-2.5 md:py-2 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="mce-FNAME" className="block text-sm text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="FNAME"
                        id="mce-FNAME"
                        required
                        className="w-full border border-gray-300 px-3 py-2.5 md:py-2 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="mce-LNAME" className="block text-sm text-gray-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="LNAME"
                        id="mce-LNAME"
                        required
                        className="w-full border border-gray-300 px-3 py-2.5 md:py-2 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="mce-SELECTYUI" className="block text-sm text-gray-700 mb-1">
                        Graduation Year <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="SELECTYUI"
                        id="mce-SELECTYUI"
                        required
                        className="w-full border border-gray-300 px-3 py-2.5 md:py-2 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div id="mce-responses">
                    <div id="mce-error-response" style={{ display: "none" }} />
                    <div id="mce-success-response" style={{ display: "none" }} />
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                    <input type="text" name="b_9c38dae34345d3295f9437940_84e341d4d0" tabIndex={-1} defaultValue="" />
                  </div>

                  <button
                    type="submit"
                    name="subscribe"
                    className="mt-6 bg-gray-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto mb-8">
            For inquiries about committee applications, the listserv, or general club information,
            we&apos;d love to hear from you.
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
