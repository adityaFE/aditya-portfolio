import express from "express";
import fetch from "node-fetch";

const router = express.Router();

export interface ChannelType {
  kind: string; 
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ChannelItemType[];
}

interface ChannelItemType {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetType;
  statistics: StatisticsType;
}

interface SnippetType {
  title: string;
  description: string;
  customUrl?: string;
  publishedAt: string;
  thumbnails: {
    default?: { url: string; width?: number; height?: number };
    medium?: { url: string; width?: number; height?: number };
    high?: { url: string; width?: number; height?: number };
  };
  localized?: {
    title: string;
    description: string;
  };
  country?: string;
}

interface StatisticsType {
  viewCount: string;          
  subscriberCount: string;     
  hiddenSubscriberCount: boolean; 
  videoCount: string;          
}

interface VideosIdType {
  kind: string;      
  videoId: string;
}

interface ThumbnailType {
  url: string;
  width?: number;
  height?: number;
}

interface VideosSnippetType {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default?: ThumbnailType;
    medium?: ThumbnailType;
    high?: ThumbnailType;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface VideosItemType {
  kind: string;
  etag: string;
  id: VideosIdType;
  snippet: VideosSnippetType;
}

export interface VideosDataType {
  kind: string; 
  etag: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: VideosItemType[];
}

interface VideoThumbnail {
  url: string;
  width?: number;
  height?: number;
}

interface StatsVideoSnippetType {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default?: VideoThumbnail;
    medium?: VideoThumbnail;
    high?: VideoThumbnail;
    standard?: VideoThumbnail;
    maxres?: VideoThumbnail;
  };
  channelTitle: string;
  categoryId?: string;
  liveBroadcastContent?: string;
  defaultLanguage?: string;
  localized?: {
    title: string;
    description: string;
  };
  defaultAudioLanguage?: string;
}

export interface StatsVideoStatisticsType {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface StatsVideoItemType {
  kind: string; 
  etag: string;
  id: string;
  snippet: StatsVideoSnippetType;
  statistics: StatsVideoStatisticsType;
}

export interface StatsDataType {
  kind: string;
  etag: string;
  items: StatsVideoItemType[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}


router.get("/", async (req, res) => {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`
    );

    const channelData = (await channelRes.json()) as ChannelType

    if (!channelRes.ok) {
  const text = await channelRes.text();
  console.error("YouTube API error body:", text);
    return res.status(channelRes.status).json({ error: "YouTube API error" });
}

    if (!channelData.items?.length) {
      return res.status(404).json({ error: "Channel not found" });
    }

    const channelInfo = channelData.items[0];
    const channelName = channelInfo.snippet.title;
    const stats = channelInfo.statistics;

    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=15`
    );
    const videosData = (await videosRes.json()) as VideosDataType

    const videoIds = videosData.items
      .filter((item) => item.id.videoId)
      .map((item) => item.id.videoId)
      .join(",");

    const statsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${videoIds}&key=${API_KEY}`
    );
    const statsData = (await statsRes.json()) as StatsDataType;

    const videos = statsData.items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      views: item.statistics.viewCount,
      likes: item.statistics.likeCount,
      thumbnail: item.snippet?.thumbnails?.high?.url,
    }));

    res.json({
      channelName,
      subscribers: stats.subscriberCount,
      totalViews: stats.viewCount,
      videos,
    });
  } catch (err) {
    console.error("YouTube API error:", err.message);
    res.status(500).json({ error: "Failed to fetch YouTube data" });
  }
});

export default router;