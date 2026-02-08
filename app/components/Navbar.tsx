"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Our Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Industry Projects" },
  { href: "/join", label: "Join Us" },
];

interface NavbarProps {
  variant?: "transparent" | "white";
  activeLink?: string;
}

export default function Navbar({ variant = "white", activeLink }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isTransparent = variant === "transparent";

  const linkColor = isTransparent
    ? "text-white hover:opacity-80"
    : "text-gray-600 hover:text-gray-900";

  const activeLinkColor = isTransparent
    ? "text-white font-medium"
    : "text-gray-900 font-medium";

  return (
    <>
      <nav
        className={`flex items-center justify-between px-6 py-8 md:px-12 lg:px-20 xl:px-32 ${
          isTransparent ? "" : "bg-white border-b border-gray-100"
        }`}
      >
        <Link href="/">
          <img
            src="/wharton-logo.png"
            alt="Wharton PEVC"
            className={`h-12 ${isTransparent ? "" : "brightness-0"}`}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                activeLink === link.href ? activeLinkColor : linkColor
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 ${
            isTransparent ? "text-white" : "text-gray-900"
          }`}
          aria-label="Open menu"
        >
          <span
            className={`block w-5 h-[2px] mb-[5px] ${
              isTransparent ? "bg-white" : "bg-gray-900"
            }`}
          />
          <span
            className={`block w-5 h-[2px] ${
              isTransparent ? "bg-white" : "bg-gray-900"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-8">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img
                src="/wharton-logo.png"
                alt="Wharton PEVC"
                className="h-12 brightness-0"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-gray-900"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col px-6 pt-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-light transition-colors ${
                  activeLink === link.href
                    ? "text-gray-900 font-normal"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
