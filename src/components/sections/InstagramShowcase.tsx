import { Instagram, Heart, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "../AnimatedCounter";
import { GlitchText } from "../GlitchText";

const INSTAGRAM_DATA = {
  username: "@techcreator",
  followers: "856K",
  totalLikes: "12.4M",
  posts: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=500&h=500&fit=crop",
      likes: "45.2K",
      caption: "New video dropping tomorrow! 🚀",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=500&h=500&fit=crop",
      likes: "38.9K",
      caption: "Behind the scenes of today's shoot",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
      likes: "52.1K",
      caption: "Setup tour coming soon ✨",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop",
      likes: "41.3K",
      caption: "Creating magic ✨",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&h=500&fit=crop",
      likes: "48.7K",
      caption: "Workspace vibes 💜",
    },
  ],
};

export const InstagramShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const duplicatedPosts = [...INSTAGRAM_DATA.posts, ...INSTAGRAM_DATA.posts];

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Header with subtle stats */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-accent/10 backdrop-blur-xl border border-accent/20 animate-glow-pulse">
            <Instagram className="w-7 h-7 text-accent" />
          </div>
          <div>
            <GlitchText text="Instagram Feed (coming soon)" className="text-3xl font-bold text-foreground" />
            <p className="text-sm text-muted-foreground">Visual stories and moments</p>
          </div>
        </div>
        
        {/* Minimal stats badges */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-full bg-card/30 backdrop-blur-xl border border-accent/20 flex items-center gap-2 hover:scale-110 transition-transform duration-300 hover:border-accent/60">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground">
              <AnimatedCounter value={INSTAGRAM_DATA.followers} />
            </span>
          </div>
          <div className="px-4 py-2 rounded-full bg-card/30 backdrop-blur-xl border border-primary/20 flex items-center gap-2 hover:scale-110 transition-transform duration-300 hover:border-primary/60">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              <AnimatedCounter value={INSTAGRAM_DATA.totalLikes} />
            </span>
          </div>
        </div>
      </div>

      {/* Auto-scrolling carousel */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedPosts.map((post, index) => (
            <Card
              key={`${post.id}-${index}`}
              className="flex-shrink-0 w-[350px] overflow-hidden bg-card/20 backdrop-blur-2xl border-accent/20 hover:border-accent/60 transition-all duration-500 group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  style={{
                    filter: 'brightness(0.9)',
                  }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(236, 72, 153, 0.3)',
                  }}
                />

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent" />
                  <div className="absolute inset-0" style={{ boxShadow: 'var(--glow-pink)' }} />
                </div>

                {/* Instagram overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500" style={{ boxShadow: 'var(--glow-pink)' }}>
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 text-white mb-2 backdrop-blur-sm bg-black/30 rounded-full px-3 py-1.5 w-fit">
                    <Heart className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-semibold">{post.likes}</span>
                  </div>
                  <p className="text-sm text-white/95 line-clamp-2 font-medium backdrop-blur-sm bg-black/30 rounded-lg px-3 py-2">
                    {post.caption}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
