"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4695a75c-db71-4661-a53e-b5bbb5a74cdc",
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col">
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
          <Link href="/sponsors" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
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

      {/* Contact Form Section */}
      <section className="flex-1 bg-white py-16 md:py-24">
        <div className="px-12 md:px-20 lg:px-32 max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0" />
            <h1 className="text-3xl md:text-4xl font-light text-gray-900">
              Contact Us
            </h1>
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
            Have a question or want to get in touch? Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                placeholder="What is this regarding?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 resize-y"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200">
                <p className="text-green-800 text-sm">
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200">
                <p className="text-red-800 text-sm">
                  Sorry, there was an error sending your message. Please try again or email us directly at whartonpevcweb@gmail.com
                </p>
              </div>
            )}
          </form>
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
