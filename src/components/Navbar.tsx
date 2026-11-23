"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#home");
  const pathname = usePathname();

  // Track active section hash and scroll state
  useEffect(() => {
    const updateActiveHash = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash || "#home";
        setActiveHash(hash);
      }
    };

    updateActiveHash();
    window.addEventListener("hashchange", updateActiveHash);
    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, []);

  // Simplified single-line navigation links
  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Achievements", href: "/#achievements" },
    { name: "Education", href: "/#education" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = (hash: string) => {
    setActiveHash(hash);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full h-[72px] sm:h-20 bg-[#0B0B0A]/95 backdrop-blur-md border-b border-[#34332A] transition-colors duration-200">
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center justify-between">
          
          {/* Part 1 (Left): Compact SK Lightning Logo linking to homepage */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              onClick={() => handleLinkClick("#home")}
              aria-label="Home"
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-[#141411] border border-[#34332A] hover:border-[#FACC15] transition-colors group focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
            >
              <span className="font-mono text-sm font-extrabold tracking-wider text-[#F5F1E6] group-hover:text-[#FACC15] transition-colors">
                SK
              </span>
              <Zap className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15] group-hover:rotate-12 transition-transform duration-200" />
            </Link>
          </div>

          {/* Part 2 (Center): Simplified Single-Line Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center justify-center space-x-1 lg:space-x-3 xl:space-x-6 flex-1 px-4 overflow-x-auto no-scrollbar"
          >
            {navLinks.map((link) => {
              const linkHash = link.href.replace("/", "");
              const isCurrent = pathname === "/" && activeHash === linkHash;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(linkHash)}
                  className={`text-xs xl:text-sm font-mono tracking-wider whitespace-nowrap px-2.5 py-1.5 rounded transition-colors ${
                    isCurrent
                      ? "text-[#FACC15] font-semibold"
                      : "text-[#A6A397] hover:text-[#F5F1E6] hover:bg-[#1D1C17]/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Part 3 (Right): Solid Electric Yellow Resume Button & Mobile Trigger */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            {/* Desktop / Tablet Resume Button */}
            <a
              href={PERSONAL_INFO.resumePath}
              download="Senthil_Kumar_Mahalingam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#FACC15] hover:bg-[#EAB308] text-[#0B0B0A] font-mono text-xs font-bold transition-all shadow-sm whitespace-nowrap group"
            >
              <FileText className="w-3.5 h-3.5 text-[#0B0B0A]" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile-only Resume Button (compact) */}
            <a
              href={PERSONAL_INFO.resumePath}
              download="Senthil_Kumar_Mahalingam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-lg bg-[#FACC15] hover:bg-[#EAB308] text-[#0B0B0A] font-mono text-xs font-bold transition-all whitespace-nowrap"
            >
              Resume
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#141411] border border-[#34332A] text-[#A6A397] hover:text-[#F5F1E6] hover:border-[#FACC15] transition-colors focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F5F1E6]" /> : <Menu className="w-5 h-5 text-[#F5F1E6]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#0B0B0A]/98 border-b border-[#34332A] px-4 pt-3 pb-6 space-y-1.5 backdrop-blur-xl shadow-2xl"
        >
          {navLinks.map((link) => {
            const linkHash = link.href.replace("/", "");
            const isCurrent = pathname === "/" && activeHash === linkHash;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(linkHash)}
                className={`flex items-center justify-between text-sm font-mono tracking-wide px-3.5 py-2.5 rounded-lg transition-colors ${
                  isCurrent
                    ? "text-[#FACC15] bg-[#1D1C17] font-semibold"
                    : "text-[#A6A397] hover:text-[#F5F1E6] hover:bg-[#1D1C17]/50"
                }`}
              >
                <span>{link.name}</span>
                {isCurrent && <Zap className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-[#34332A]/60">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Senthil_Kumar_Mahalingam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-[#FACC15] hover:bg-[#EAB308] text-[#0B0B0A] font-mono text-xs font-bold transition-all"
            >
              <FileText className="w-4 h-4 text-[#0B0B0A]" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
