"use client";

import Link from "next/link";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What are the eligibility requirements to join PEVC?",
    answer: "PEVC is open to all Penn undergraduates. While we welcome students from all schools and majors, most members are from Wharton or Engineering. We look for students with strong academic performance, demonstrated interest in finance, and leadership potential."
  },
  {
    question: "When does recruitment happen?",
    answer: "We recruit new members twice a year: once in the fall semester (September) and once in the spring semester (February). Applications typically open 2 weeks before the deadline, with interviews scheduled the following week."
  },
  {
    question: "What is the time commitment for PEVC members?",
    answer: "Members typically commit 8-12 hours per week, which includes committee meetings, general body meetings, events, and committee-specific work. The time commitment varies by committee, with Industry Projects requiring the most time during active client engagements."
  },
  {
    question: "Do I need prior finance experience to apply?",
    answer: "No prior finance experience is required! We welcome students who are passionate about learning. However, we do recommend taking introductory finance courses and demonstrating genuine interest in private equity and venture capital through self-study or relevant experiences."
  },
  {
    question: "Can I choose which committee to join?",
    answer: "Yes! During the application process, you can indicate your preferred committee(s). We try to match applicants with their preferences, but final committee placement depends on your background, interests, and committee capacity."
  },
  {
    question: "What happens after I'm accepted?",
    answer: "New members participate in an onboarding program that includes PEVC Academy sessions, committee orientation, and mentorship pairing with upperclassmen. You'll immediately begin participating in your committee's activities and general body meetings."
  }
];

export default function Join() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
            <Link href="/events" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Events
            </Link>
            <Link href="/projects" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Industry Projects
            </Link>
            <Link href="/join" className="text-gray-900 text-sm font-medium">
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
                Join Us
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight mb-8">
              Begin your journey in private equity and venture capital.
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              Join Penn's premier private equity and venture capital club to develop essential financial skills, build lasting relationships with industry professionals, and work alongside the most driven students on campus.
            </p>
          </div>
        </div>
      </section>

      {/* Application Status Alert */}
      <section className="bg-blue-50 border-l-4 border-blue-400 py-6">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Spring 2025 Applications</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>Applications for Spring 2025 are now open! Deadline: <strong>February 15, 2025 at 11:59 PM</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join PEVC */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Why Join PEVC?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the unique benefits and opportunities that come with PEVC membership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Accelerate Your Career</h3>
              <p className="text-gray-600 leading-relaxed">
                Gain direct access to internships and full-time opportunities at top-tier PE and VC firms through our extensive sponsor network and alumni connections.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Develop Essential Skills</h3>
              <p className="text-gray-600 leading-relaxed">
                Master financial modeling, valuation techniques, and investment analysis through hands-on projects and expert-led workshops.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Build Your Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with industry professionals, successful alumni, and ambitious peers who share your passion for private markets.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Gain Real Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Work on live deals through our Industry Projects committee, providing real-world consulting services to local entrepreneurs and businesses.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Access Exclusive Events</h3>
              <p className="text-gray-600 leading-relaxed">
                Attend private speaker series, networking receptions, and industry conferences featuring leaders from top PE and VC firms.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Join a Proven Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Be part of an award-winning organization recognized by Wharton Council for excellence in programming and leadership development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Application Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our application process is designed to identify passionate students who will contribute meaningfully to our community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="space-y-8">
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold">1</div>
                  <div className="w-px h-16 bg-gray-300 mt-4"></div>
                </div>
                <div className="flex-1 pb-16">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Submit Application</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Complete our online application including your resume, transcript, and responses to short essay questions about your interest in private equity and venture capital.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Deadline:</strong> February 15, 2025 at 11:59 PM
                  </div>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold">2</div>
                  <div className="w-px h-16 bg-gray-300 mt-4"></div>
                </div>
                <div className="flex-1 pb-16">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Application Review</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our admissions committee reviews all applications holistically, considering academic performance, demonstrated interest in finance, leadership experience, and fit with PEVC's mission.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Timeline:</strong> February 16-20, 2025
                  </div>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold">3</div>
                  <div className="w-px h-16 bg-gray-300 mt-4"></div>
                </div>
                <div className="flex-1 pb-16">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Interview Process</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Selected candidates participate in a 30-minute interview with current board members. We'll discuss your background, interests, and goals, plus ask questions about current market events.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Timeline:</strong> February 21-25, 2025
                  </div>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">✓</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Decision & Onboarding</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Successful candidates receive acceptance offers and begin their PEVC journey with orientation, committee placement, and mentorship matching.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Timeline:</strong> February 28, 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                What We Look For
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We seek students who demonstrate academic excellence, genuine interest in private markets, and strong potential for leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">Essential Qualities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-3 shrink-0" />
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Academic Excellence</h4>
                      <p className="text-gray-600 text-sm">Strong academic record with particular emphasis on quantitative coursework</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-3 shrink-0" />
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Genuine Interest</h4>
                      <p className="text-gray-600 text-sm">Demonstrated passion for private equity, venture capital, and financial markets</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-3 shrink-0" />
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Leadership Potential</h4>
                      <p className="text-gray-600 text-sm">History of leadership roles and initiatives in academic or extracurricular settings</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-3 shrink-0" />
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Communication Skills</h4>
                      <p className="text-gray-600 text-sm">Excellent written and verbal communication abilities</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">Preferred Background</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 shrink-0" />
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Relevant Coursework</h4>
                      <p className="text-gray-600 text-sm">Finance, economics, accounting, or related quantitative courses</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 shrink-0" />
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Work Experience</h4>
                      <p className="text-gray-600 text-sm">Internships in finance, consulting, or business development (not required)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 shrink-0" />
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Technical Skills</h4>
                      <p className="text-gray-600 text-sm">Proficiency in Excel, PowerPoint, and financial modeling (can be developed)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 shrink-0" />
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Entrepreneurial Experience</h4>
                      <p className="text-gray-600 text-sm">Startup experience, business plan competitions, or entrepreneurial ventures</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Get answers to common questions about joining PEVC.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-medium text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-gray-400 shrink-0">
                      {openFAQ === index ? "−" : "+"}
                    </span>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="bg-blue-900 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Apply?
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            Take the first step towards joining Penn's premier private equity and venture capital community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Apply Now - Spring 2025
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center bg-transparent text-white border border-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-blue-900 transition-colors"
            >
              Questions? Contact Us
            </Link>
          </div>
          
          <div className="mt-8 text-blue-200 text-sm">
            Application Deadline: February 15, 2025 at 11:59 PM EST
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