import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import GooeyNav from "../../react-bits/GooeyNav/GooeyNav";
import TrueFocus from "../../react-bits/TrueFocus/TrueFocus";
import { log } from "console";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Determine initial active index based on current hash
  const getInitialActiveIndex = () => {
    if (typeof window !== "undefined" && window.location.hash) {
      const idx = navItems.findIndex(
        (item) => item.href === window.location.hash
      );
      return idx !== -1 ? idx : 0;
    }
    return 0;
  };

  const [activeIndex, setActiveIndex] = useState(getInitialActiveIndex());
  console.log("Active Index:", activeIndex);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clear the hash and scroll to top AFTER initialActiveIndex is set
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.scrollTo(0, 0);
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            >
              Welcome!
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <GooeyNav
              items={navItems}
              initialActiveIndex={activeIndex} // pass initial active tab index
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-background/85 backdrop-blur-md border-t border-primary/10">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base text-foreground/70 hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors font-bold"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveIndex(idx);
                  }}
                >
                  <TrueFocus
                    sentence={item.label}
                    manualMode={false}
                    blurAmount={5}
                    borderColor="red"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
