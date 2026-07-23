"use client";

import { useEffect, useRef, useState } from "react";
import { FaHeart, FaComment, FaShare, FaMusic } from "react-icons/fa";

// Sample video URLs (vertical). Replace these with your own if needed.
const REELS_DATA = [
  {
    id: 1,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Coding late night 💻",
    likes: "12K",
    comments: "340",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/demo/video/upload/v1605699257/dog.mp4",
    title: "AI Development 🤖",
    likes: "8.5K",
    comments: "120",
  },
  {
    id: 3,
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    title: "Server rooms & networking 🌐",
    likes: "45K",
    comments: "890",
  },
];

function Reel({ data }: { data: typeof REELS_DATA[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => { });
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => { });
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="reel-item">
      <video
        ref={videoRef}
        src={data.url}
        className="reel-video"
        loop
        playsInline
        muted // Muted to allow autoplay without user interaction initially
        onClick={togglePlay}
      />

      {/* Overlay UI */}
      <div className="reel-overlay">
        <div className="reel-info">
          <h3>@tayyabp0g</h3>
          <p>{data.title}</p>
          <div className="reel-music">
            <FaMusic className="music-icon" />
            <div className="marquee-container">
              <span className="marquee-text">Original Audio - Tayyab</span>
            </div>
          </div>
        </div>

        <div className="reel-actions">
          <button className="action-btn">
            <FaHeart />
            <span>{data.likes}</span>
          </button>
          <button className="action-btn">
            <FaComment />
            <span>{data.comments}</span>
          </button>
          <button className="action-btn">
            <FaShare />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function YouTubeReel({ reel }: { reel: any }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Auto-play when the reel is scrolled into view
            iframeRef.current?.contentWindow?.postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              '*'
            );
            setIsPlaying(true);
          } else {
            // Pause when scrolled out of view
            iframeRef.current?.contentWindow?.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              '*'
            );
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.6 } // Trigger play/pause when mostly in/out of view
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="reel-item" style={{ position: "relative" }}>
      <iframe
        ref={iframeRef}
        src={`${reel.url}&enablejsapi=1`}
        className="reel-video"
        style={{ border: "none", width: "100%", height: "100%", pointerEvents: "auto" }}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div className="reel-overlay" style={{ pointerEvents: 'none' }}>
        <div className="reel-info">
          <h3>@tayyabp0g</h3>
          <p>{reel.title}</p>
        </div>
      </div>
    </div>
  );
}

export default function EntertainmentSection() {
  const [reels, setReels] = useState(REELS_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReels() {
      try {
        const res = await fetch("/api/reels");
        if (res.ok) {
          const data = await res.json();
          if (data.data && data.data.length > 0) {
            setReels(data.data);
            return;
          }
        }
      } catch (error) {
        console.error("Failed to fetch reels:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchReels();
  }, []);

  return (
    <section id="entertainment" className="section-padding">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="heading-primary">Entertainment</h2>
          <p className="heading-secondary">Reels are the reason I became an engineer, how can I ever forget them?</p>
        </div>

        <div className="reels-container-wrapper">
          <div className="reels-container">
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", color: "#fff" }}>
                Loading Reels...
              </div>
            ) : (
              reels.map((reel: any) => (
                reel.isYouTube ? (
                  <YouTubeReel key={reel.id} reel={reel} />
                ) : (
                  <Reel key={reel.id} data={reel} />
                )
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
