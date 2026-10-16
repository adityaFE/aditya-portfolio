import { Link } from "wouter";
import { Github, Linkedin, Camera, Home, ArrowUp } from "lucide-react";
import { navItems } from "@/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-background border-t border-white/10 pt-16 pb-12" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand / Role */}
          <div className="text-center md:text-left space-y-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg"
            >
              Aditya Anand
            </Link>
            <p className="text-xs font-mono text-muted-foreground">
              Senior Frontend Engineer & Creative Developer
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-muted-foreground">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md px-1 py-0.5"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/adityaFE"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-card/60 hover:bg-white/10 border border-white/10 text-muted-foreground hover:text-foreground transition-[background-color,border-color,color] duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Aditya's GitHub profile (opens in new tab)"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-anand-frontend/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-card/60 hover:bg-white/10 border border-white/10 text-muted-foreground hover:text-foreground transition-[background-color,border-color,color] duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Aditya's LinkedIn profile (opens in new tab)"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" aria-hidden="true" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary transition-[background-color,border-color] duration-200 ml-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            © <span className="tabular-nums">{new Date().getFullYear()}</span> Aditya Anand. Crafted with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
