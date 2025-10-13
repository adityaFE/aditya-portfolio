import { YouTubeShowcase } from "../components/sections/YouTubeShowcase";
import { InstagramShowcase } from "../components/sections/InstagramShowcase";
import { MouseFollower } from "@/components/MouseFollower";
import { Code, Home,  Sparkles } from "lucide-react";
import ClickSpark from "../../react-bits/ClickSpark/ClickSpark";
import { Link } from "wouter";

const shouldShowCreator = false
const Photography = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <MouseFollower />

        <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none z-10" />
        <div className="fixed inset-0 backdrop-blur-[1px] pointer-events-none z-10" />

        <div className="fixed top-4 left-4 z-50 flex gap-3 flex-wrap">
          <div className="flex items-center gap-4">
  <Link
    href="/"
    className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:text-accent transition-colors
              backdrop-blur-md bg-white/5 px-3 py-1.5 rounded-full"
  >
    <Home className="w-6 h-6 text-[hsl(270,91%,65%)] group-hover:drop-shadow-[0_0_6px_hsl(270,91%,65%)] transition-all"/>
  </Link>

  <Link href="/technical" className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:text-accent transition-colors
              backdrop-blur-md bg-white/5 px-3 py-1.5 rounded-full">
    <Code  className="w-6 h-6 text-[hsl(270,91%,65%)] group-hover:drop-shadow-[0_0_6px_hsl(270,91%,65%)] transition-all" />
  </Link>


</div>
        </div>

        <div className="relative z-20">
          <header className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/40 backdrop-blur-xl">
                <Sparkles className="w-5 h-5 text-primary" />
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                Creator Portfolio
              </h1>
              </div>
              <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto font-light">
                Turning ideas into code and snapshots into stories through design and creativity.
              </p>
            </div>
          </header>

          {shouldShowCreator ?<main className="container mx-auto px-4 pb-20 space-y-20">
            <YouTubeShowcase />
            <InstagramShowcase />
          </main>:
          <div>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto font-light">
                This is a work in progress. Check back soon for more updates!
              </p>
          </div>
            }

          <footer className="container mx-auto px-4 py-12 text-center">
            <div className="inline-block px-6 py-3 rounded-full bg-card/30 backdrop-blur-xl border border-primary/20">
              <p className="text-muted-foreground text-sm">
                A little bit of logic, a lot of imagination ✨
              </p>
            </div>
          </footer>
        </div>
      </ClickSpark>
    </div>
  );
};

export default Photography;