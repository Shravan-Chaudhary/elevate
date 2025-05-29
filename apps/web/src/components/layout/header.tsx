"use client";

import { Button } from "@/components/ui/button";
import { MicrophoneIcon } from "@/components/ui/microphone-icon";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "#features" },
];

export function Header() {
  // State to track if the page has been scrolled
  const [hasScrolled, setHasScrolled] = useState(false);
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track if the current view is mobile size
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Set initial mobile view state
    setIsMobileView(window.innerWidth < 768);

    // Handler for scroll event to update header style
    const handleScroll = () => {
      const offset = window.scrollY;
      setHasScrolled(offset > 50);
    };

    // Handler for resize event to update mobile view state
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Class names for the main header element based on state
  const headerClasses = cn(
    "fixed top-0 z-50 w-full transition-all duration-300",
    isMobileView && hasScrolled
      ? // Mobile view and scrolled: full width, solid background, less margin
        "bg-white shadow-sm border-b border-gray-200 rounded-none max-w-full mt-0 py-3"
      : isMobileView
        ? // Mobile view, not scrolled: transparent background, centered, more margin, less padding
          "bg-white/0 shadow-none border-transparent rounded-full max-w-2xl mx-auto mt-6 py-1"
        : // Desktop view (not mobile view): solid background, centered, fixed max width, more margin, standard padding
          "py-2 bg-white shadow-sm rounded-full border border-gray-200 max-w-lg left-1/2 -translate-x-1/2 mt-6",
  );

  // Class names for the inner container div
  const innerDivClasses = cn(
    "flex items-center justify-between px-4 w-full",
    !isMobileView && "md:max-w-6xl md:mx-auto", // Apply max width and center on desktop
  );

  // Class names for the "Get Started" button
  const getStartedButtonClasses = cn(
    "rounded-full font-medium text-sm px-4 py-2 transition-colors border flex items-center gap-1",
    isMobileView
      ? hasScrolled
        ? // Mobile view and scrolled: green solid button
          "bg-green-900 text-white hover:bg-green-800 border-green-900 hover:border-green-800"
        : // Mobile view, not scrolled: white outline button
          "bg-white text-gray-700 hover:bg-gray-100 border-gray-200 hover:border-gray-100"
      : // Desktop view: white outline button
        "bg-white text-gray-700 hover:bg-gray-100 border-gray-200 hover:border-gray-100",
  );

  return (
    <header className={headerClasses}>
      <div className={innerDivClasses}>
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-transform hover:scale-105"
        >
          <div className="relative rounded-lg overflow-hidden bg-green-800 text-white font-bold w-8 h-8 flex items-center justify-center shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-900 to-green-700 animate-shimmer" />
            <span className="relative z-10 text-sm">E</span>
          </div>
          <span className="font-bold text-lg text-gray-900">Elevate</span>
        </Link>

        {/* Navigation and Buttons */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav
            className={cn(
              "hidden md:flex items-center gap-6",
              !isMobileView && "", // Ensure flex is applied on desktop
            )}
          >
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors hover:bg-gray-100 rounded-full"
                // Apply staggered animation delay
                style={{ animationDelay: `${index * 100 + 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Get Started Button */}
            <Link href="/sign-in">
              <Button size="sm" className={getStartedButtonClasses}>
                {/* Microphone SVG */}
                <MicrophoneIcon className="w-4 h-4" />
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className={cn(
                "md:hidden flex items-center text-gray-700",
                isMobileView ? "" : "hidden", // Only show on mobile view
              )}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" /> // Close icon when menu is open
              ) : (
                <Menu className="h-6 w-6" /> // Menu icon when menu is closed
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 top-[68px] bg-white/90 backdrop-blur-sm z-40 transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
            "md:hidden", // Hide on desktop
          )}
          onClick={toggleMobileMenu} // Close menu when clicking overlay
        >
          <div className="flex flex-col items-center py-6 space-y-4 bg-white w-full shadow-md">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                onClick={toggleMobileMenu} // Close menu when clicking a link
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
