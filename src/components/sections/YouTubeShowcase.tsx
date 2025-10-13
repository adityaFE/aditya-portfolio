import { Youtube, Eye, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { AnimatedCounter } from "../AnimatedCounter";
import { Carousel } from "../Carousel";
import {API_BASE_URL} from '../../../config';

interface Video {
  id: string;
  title: string;
  likes:string
  views: string;
  thumbnail: string;
}

interface YouTubeData {
  channelName: string;
  subscribers: string;
  totalViews: string;
  videos: Video[];
}

const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

const getCachedData = (): YouTubeData | null => {
  try {
    const cached = localStorage.getItem("youtubeDataCache");
    if (cached) return JSON.parse(cached);
  } catch (err) {
    console.warn("Error reading cached YouTube data:", err);
  }
  return null;
};

const fetchYouTubeData = async (): Promise<YouTubeData> => {
  try {
    const res = await fetch(`${API_BASE_URL}/youtube`);
    if (!res.ok) throw new Error("Failed to fetch YouTube data");
    const data = await res.json();
    localStorage.setItem("youtubeDataCache", JSON.stringify(data));
    return data;
  } catch (error) {
    console.warn("YouTube API failed, using cached data:", error);
    const cached = getCachedData();
    if (cached) return cached;

    return {
      channelName: "Vlogtastic Aditya",
      subscribers: "780",
      totalViews: "800000",
      videos: [],
    };
  }
};

export const YouTubeShowcase = () => {
  const { data, isLoading } = useQuery<YouTubeData>({
    queryKey: ["youtubeData"],
    queryFn: fetchYouTubeData,
    staleTime: Infinity,
  });

  if (isLoading || !data) {
    return (
      <div className="w-full h-64 flex items-center justify-center text-2xl font-bold text-primary animate-pulse">
        Loading Magic...
      </div>
    );
  }

  const hasVideos = data.videos && data.videos.length > 0;

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-xl border border-primary/20 animate-glow-pulse">
            <Youtube className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground">
              {data.channelName}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-full bg-card/30 backdrop-blur-xl border border-primary/20 flex items-center gap-2 hover:scale-110 transition-transform duration-300 hover:border-primary/60">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              <AnimatedCounter value={data.subscribers} />
            </span>
          </div>
          <div className="px-4 py-2 rounded-full bg-card/30 backdrop-blur-xl border border-accent/20 flex items-center gap-2 hover:scale-110 transition-transform duration-300 hover:border-accent/60">
            <Eye className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground">
              <AnimatedCounter value={data.totalViews} />
            </span>
          </div>
        </div>
      </div>

      {hasVideos ? (
        <Carousel>
          {data.videos.map((video, idx) => (
            <Card
              key={`${video.id}-${idx}`}
              className="flex-shrink-0 w-11/12 sm:w-64 md:w-[400px] overflow-hidden bg-card/20 backdrop-blur-2xl border-primary/20 hover:border-primary/60 transition-all duration-500 group cursor-pointer perspective-1000"
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  style={{ filter: "brightness(0.9)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <div className="bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-foreground border border-primary/30 flex items-center gap-1.5 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/90 group-hover:text-white">
                    <Eye className="w-3 h-3" />
                    <AnimatedCounter value={video.views} />
                  </div>
                  <div className="bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-foreground border border-accent/30 flex items-center gap-1.5 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/90 group-hover:text-white">
                    <Heart className="w-3 h-3 text-accent" style={{ color: "white" }} />
                    <AnimatedCounter value={video.likes} />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500"
                  >
                    <Youtube className="w-8 h-8 text-white ml-1" />
                  </a>
                </div>
              </div>
              <div className="p-5 relative">
                <h4 className="font-semibold text-base text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-relaxed">
                  {video.title}
                </h4>
              </div>
            </Card>
          ))}
        </Carousel>
      ) : (
        <div className="text-center text-muted-foreground text-lg">
  There&apos;s something wrong with the YouTube API.{" "}
  <a
    href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary font-semibold hover:underline hover:text-primary/80 transition-colors duration-200"
  >
    Please click here to visit my channel
  </a>
  .
</div>
      )}
    </div>
  );
};