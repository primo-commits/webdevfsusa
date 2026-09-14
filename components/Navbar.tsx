"use client";

import { useState } from "react";
import Link from "next/link";
import FeeSlayerLogo from "./FeeSlayerLogo";

interface NavbarProps {
  theme?: "light" | "dark";
}

export default function Navbar({ theme = "light" }: NavbarProps) {
  const isDark = theme === "dark";
  const [mobileOpen, setMobileOpen] = useState(false);

  const textColor = isDark ? "text-cream" : "text-navy";
  const borderColor = isDark ? "border-navy-soft/30" : "border-cream-dark";
  const bgColor = isDark ? "bg-navy" : "bg-cream-light";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${bgColor} ${isDark ? "border-b border-white/10" : "border-b border-cream-dark/50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <FeeSlayerLogo variant={isDark ? "light" : "dark"} />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/canada" className={`text-sm font-medium ${textColor} hover:text-gold transition-colors`}>
              Canada
            </Link>
            <Link href="/us" className={`text-sm font-medium ${textColor} hover:text-gold transition-colors`}>
              United States
            </Link>
            <Link href="/us#services" className={`text-sm font-medium ${textColor} hover:text-gold transition-colors`}>
              Services
            </Link>
            <Link href="/us#how-it-works" className={`text-sm font-medium ${textColor} hover:text-gold transition-colors`}>
              How It Works
            </Link>
            <Link href="/us#contact" className="btn-gold text-sm">
              Book a Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-md ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`md:hidden ${bgColor} border-t ${borderColor} px-4 py-4 space-y-3`}>
          <Link href="/canada" className={`block text-base font-medium ${textColor}`} onClick={() => setMobileOpen(false)}>
            Canada
          </Link>
          <Link href="/us" className={`block text-base font-medium ${textColor}`} onClick={() => setMobileOpen(false)}>
            United States
          </Link>
          <Link href="/us#services" className={`block text-base font-medium ${textColor}`} onClick={() => setMobileOpen(false)}>
            Services
          </Link>
          <Link href="/us#how-it-works" className={`block text-base font-medium ${textColor}`} onClick={() => setMobileOpen(false)}>
            How It Works
          </Link>
          <Link href="/us#contact" className="btn-gold w-full justify-center mt-2" onClick={() => setMobileOpen(false)}>
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
