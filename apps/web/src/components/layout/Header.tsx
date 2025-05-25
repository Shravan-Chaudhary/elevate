"use client";

import { Button } from "@/components/ui/button";
import { MicrophoneIcon } from "@/components/ui/microphone-icon";
import { cn } from "@/lib/utils";
import { fadeUp, fadeIn, stagger, smooth } from "@/lib/animations";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
        "shadow-sm border-b border-gray-200 rounded-none max-w-full mt-0 py-3"
      : isMobileView
        ? // Mobile view, not scrolled: transparent background, centered, more margin, less padding
          "shadow-none border-transparent rounded-full max-w-2xl mx-auto mt-6 py-1"
        : // Desktop view (not mobile view): solid background, centered, fixed max width, more margin, standard padding
          "py-2 shadow-sm rounded-full border border-gray-200 max-w-lg left-1/2 -translate-x-1/2 mt-6",
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
      : // Desktop view: white outline button (always visible with backdrop)
        "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:text-gray-900 border-gray-200 hover:border-gray-300",
  );

  return (
    <motion.header
      className={headerClasses}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        backgroundColor:
          hasScrolled && isMobileView
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0.9)",
        backdropFilter: hasScrolled || !isMobileView ? "blur(12px)" : "none",
      }}
      transition={{
        duration: 0.6,
        ease: smooth,
        backgroundColor: { duration: 0.3, ease: smooth },
        backdropFilter: { duration: 0.3, ease: smooth },
      }}
    >
      <motion.div
        className={innerDivClasses}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={fadeUp}>
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
        </motion.div>

        {/* Navigation and Buttons */}
        <motion.div className="flex items-center gap-6" variants={fadeUp}>
          {/* Desktop Navigation */}
          <motion.nav
            className={cn(
              "hidden md:flex items-center gap-6",
              !isMobileView && "", // Ensure flex is applied on desktop
            )}
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {navigationItems.map((item, index) => (
              <motion.div key={item.href} variants={fadeUp}>
                <Link
                  href={item.href}
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors hover:bg-gray-100 rounded-full"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div className="flex items-center gap-3" variants={fadeUp}>
            {/* Get Started Button */}
            <Link href="/sign-in">
              <Button size="sm" className={getStartedButtonClasses}>
                {/* Microphone SVG */}
                <MicrophoneIcon className="w-4 h-4" />
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <motion.button
              className={cn(
                "md:hidden flex items-center text-gray-700",
                isMobileView ? "" : "hidden", // Only show on mobile view
              )}
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: smooth }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: smooth }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: smooth }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={cn(
              "fixed inset-0 top-[68px] bg-white/90 backdrop-blur-sm z-40",
              "md:hidden", // Hide on desktop
            )}
            onClick={toggleMobileMenu} // Close menu when clicking overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: smooth }}
          >
            <motion.div
              className="flex flex-col items-center py-6 space-y-4 bg-white w-full shadow-md"
              variants={stagger}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navigationItems.map((item) => (
                <motion.div key={item.href} variants={fadeUp}>
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
                    onClick={toggleMobileMenu} // Close menu when clicking a link
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
