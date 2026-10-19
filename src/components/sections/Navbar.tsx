import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Camera, Home, Menu, X, Github, Linkedin, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Accessible Skip Link for Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-primary-foreground font-medium text-xs rounded-lg shadow-xl ring-2 ring-white/20 focus:outline-none"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 sm:py-4 transition-[padding,background-color] duration-300">
        <nav
          aria-label="Main Navigation"
          className={`w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-[background-color,border-color,box-shadow] duration-300 ${
            scrolled || isOpen
              ? "bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40"
              : "bg-background/30 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Left Navigation Pathways */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors p-2 rounded-xl hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Go to landing page"
            >
              <Home className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="hidden sm:inline font-mono text-xs">Home</span>
            </Link>

            <Link
              href="/photography"
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors p-2 rounded-xl hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Go to creator portfolio"
            >
              <Camera className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="hidden sm:inline font-mono text-xs">Creator</span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                    isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveSection(sectionId)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Actions & Socials */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/adityaFE"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Aditya's GitHub Profile (opens in new tab)"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-anand-4a843516a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Aditya's LinkedIn Profile (opens in new tab)"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" aria-hidden="true" />
            </a>
            <a
              href="https://drive.google.com/file/d/18I7BT6WoCizAgM71R4_ePtTGUn-MY0S1/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Download Resume (Google Drive, opens in new tab)"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              Resume
            </a>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-16 left-4 right-4 bg-background/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/80 space-y-1 z-50 overscroll-contain"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/5 flex gap-2">
                <a
                  href="https://drive.google.com/file/d/18I7BT6WoCizAgM71R4_ePtTGUn-MY0S1/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-xs font-medium bg-primary/20 text-primary border border-primary/30 py-2.5 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  aria-label="Download Resume (opens in new tab)"
                >
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
