import { YouTubeShowcase } from "../components/sections/YouTubeShowcase";
import { InstagramShowcase } from "../components/sections/InstagramShowcase";
import { MouseFollower } from "@/components/MouseFollower";
import { Code, Home, Sparkles, ArrowLeft } from "lucide-react";
import ClickSpark from "../../react-bits/ClickSpark/ClickSpark";
import { Link } from "wouter";
import { useEffect } from "react";
import Footer from "@/components/sections/Footer";

const shouldShowCreator = true;

const Photography = () => {
  useEffect(() => {
    document.title = "Aditya Anand | Creator Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <MouseFollower />

        {/* Ambient background glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
        </div>

        {/* Floating Top Nav */}
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 sm:py-4">
          <nav
            aria-label="Creator Navigation"
            className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors p-2 rounded-xl hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                aria-label="Return to Home Landing"
              >
                <Home className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/technical"
                className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-3.5 py-1.5 rounded-xl transition-[background-color,border-color] duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                aria-label="Go to Technical Portfolio"
              >
                <Code className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Technical Portfolio</span>
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <div className="relative z-20 pt-28 sm:pt-36">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-24 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Creative & Visual Storytelling
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground [text-wrap:balance]">
              Creator Portfolio
            </h1>

            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
              Turning concepts into visual stories and frames into memories. Exploring cinematography, tech storytelling, and street photography.
            </p>
          </div>

          {shouldShowCreator ? (
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
              <YouTubeShowcase />
              <InstagramShowcase />
            </main>
          ) : (
            <div className="max-w-md mx-auto text-center py-20">
              <p className="text-muted-foreground text-sm">
                This section is currently being updated with new visual projects. Check back soon.
              </p>
            </div>
          )}

          <Footer />
        </div>
      </ClickSpark>
    </div>
  );
};

export default Photography;
