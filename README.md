# Tayyab's Advanced AI-Powered Portfolio 🚀

Welcome to my personal developer portfolio! This project is not just a static website; it is a highly dynamic, intelligent, and API-driven web application designed to demonstrate my full-stack engineering capabilities, UI/UX implementation, and system integration skills.

---

## 🧠 Core Features & Architecture

### 1. Custom AI Chat Agent
Built an intelligent, context-aware chatbot trained specifically on my personal CV data. 
- **Under the Hood:** The agent uses an advanced pattern-matching engine (Regex word boundaries) combined with a highly optimized data retrieval system to instantly answer queries about my education, experience, and technical skills. 
- **Tech Stack:** React State Management, Custom TypeScript Engine, Event-Driven UI.

### 2. Infinite YouTube Shorts Engine (Reels)
A fully functional "TikTok/Reels" style vertical video player integrated directly into the web application.
- **Under the Hood:** Integrated the **YouTube Data API v3** via a custom Next.js Serverless API Route (`/api/reels`). It fetches a dynamic, randomized batch of 50 public tech/coding Shorts on every reload while bypassing standard caching (`cache: 'no-store'`).
- **Player Mechanics:** Uses the `IntersectionObserver` API combined with YouTube's `postMessage` protocol to programmatically trigger autoplay and pause based on the viewport—replicating native mobile behavior perfectly.
- **Tech Stack:** Next.js API Routes, Google Cloud Console, IntersectionObserver API, CSS Scroll Snapping.

### 3. Serverless SMTP Contact Form
A secure, real-time messaging system allowing visitors to contact me directly from the web interface.
- **Under the Hood:** Built a secure POST endpoint (`/api/contact`) utilizing **Nodemailer**. It authenticates with Google's SMTP servers via App Passwords. Security measures are in place to ensure environment variables (`SMTP_EMAIL`, `SMTP_PASSWORD`) are executed server-side, protecting sensitive credentials from the client payload.
- **Tech Stack:** Nodemailer, Next.js API Routes (Backend), React Controlled Components (Frontend).

### 4. Modern UI & Animations
The entire frontend is built with performance and aesthetics in mind.
- **Styling:** Custom Vanilla CSS for granular control, bypassing heavy frameworks to maintain an ultra-fast Time to Interactive (TTI).
- **Features:** Glassmorphism, CSS Micro-animations, CSS Grid/Flexbox layouts, and Strict 9:16 aspect ratio containers for video rendering.

---

## 🛠️ Complete Tech Stack

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript
- **Backend/APIs:** Next.js Serverless Functions (`route.ts`)
- **External Integrations:** YouTube Data API v3, Google SMTP (Nodemailer)
- **Styling:** Custom CSS, Lucide / React-Icons
- **Deployment:** Ready for Vercel Serverless Deployment

---

## ⚙️ Local Development Guide

To run this complex architecture locally, follow these steps:

**1. Clone the repository:**
```bash
git clone https://github.com/tayyabp0g/tayyab.git
cd tayyab
```

**2. Install dependencies:**
```bash
npm install
```

**3. Configure Environment Variables:**
Create a `.env.local` file in the root directory and add your secure keys:
```env
# Google SMTP Credentials for Nodemailer
SMTP_EMAIL=your_gmail_address
SMTP_PASSWORD=your_16_digit_app_password

# YouTube API for the Reels Engine
YOUTUBE_API_KEY=your_google_cloud_api_key
```

**4. Start the server:**
```bash
npm run dev
```

Visit `http://localhost:3000` to interact with the AI agent, view the infinite shorts, and test the serverless email endpoint.
