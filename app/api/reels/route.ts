import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  // Make channelId optional. If provided, we search that channel, else we search globally.
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey) {
    return NextResponse.json(
      { error: "YouTube API Key is missing in .env.local" },
      { status: 500 }
    );
  }

  try {
    // 1. Fetch latest videos globally
    let searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&maxResults=50`;
    
    if (channelId && channelId.trim() !== "") {
      searchUrl += `&channelId=${channelId}&order=date`;
    } else {
      // Search for generic tech shorts if no channel ID is provided
      searchUrl += `&q=coding+programming+tech+shorts&order=relevance`;
    }
    const searchRes = await fetch(searchUrl, { cache: 'no-store' });

    if (!searchRes.ok) {
      const errorData = await searchRes.json();
      console.error("YouTube API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to fetch from YouTube API." },
        { status: searchRes.status }
      );
    }

    const searchData = await searchRes.json();
    
    // Extract video IDs
    const videoIds = searchData.items
      .filter((item: any) => item.id.kind === "youtube#video")
      .map((item: any) => item.id.videoId);

    if (videoIds.length === 0) {
      return NextResponse.json({ data: [] });
    }

    // 2. Fetch video details to identify if they are Shorts (duration <= 60s)
    const videosUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds.join(",")}&part=snippet,contentDetails,statistics`;
    const videosRes = await fetch(videosUrl, { cache: 'no-store' });
    
    if (!videosRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch video details." },
        { status: videosRes.status }
      );
    }

    const videosData = await videosRes.json();

    // Parse ISO 8601 duration (e.g. PT15S) to seconds and filter for shorts (< 65 seconds)
    const shorts = videosData.items.filter((video: any) => {
      const durationStr = video.contentDetails.duration;
      const match = durationStr.match(/PT(\d+M)?(\d+S)?/);
      let seconds = 0;
      if (match) {
        const m = match[1] ? parseInt(match[1].replace("M", "")) : 0;
        const s = match[2] ? parseInt(match[2].replace("S", "")) : 0;
        seconds = m * 60 + s;
      }
      return seconds <= 65; // allow slightly over 60s for margin
    }).map((video: any) => ({
      id: video.id,
      url: `https://www.youtube.com/embed/${video.id}?autoplay=0&mute=0&loop=1&playlist=${video.id}&controls=1&modestbranding=1&rel=0`,
      title: video.snippet.title.substring(0, 50),
      likes: formatCount(video.statistics.likeCount),
      comments: formatCount(video.statistics.commentCount),
      isYouTube: true
    }));

    // Randomize the order of shorts so they are different on every reload
    const shuffledShorts = shorts.sort(() => 0.5 - Math.random());

    return NextResponse.json({ data: shuffledShorts });
  } catch (error) {
    console.error("Error fetching YouTube reels:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

function formatCount(countStr: string | undefined): string {
  if (!countStr) return "0";
  const num = parseInt(countStr);
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}
