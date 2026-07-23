// AI Chatbot Engine - Rule-based intelligent responses
// Yeh engine Muhammad Tayyab ke baare mein sawaalat ka jawaab deta hai

import { profileData } from "./data";

interface ChatResponse {
  message: string;
  suggestions?: string[];
}

// Keyword patterns and their responses
const patterns: {
  keywords: string[];
  response: () => ChatResponse;
}[] = [
  {
    keywords: ["hello", "hi", "hey", "salam", "assalam", "greetings", "hola"],
    response: () => ({
      message: `Hello! 👋 Welcome to ${profileData.name}'s portfolio! I'm his AI assistant. I can tell you about his skills, experience, education, projects, or how to contact him. What would you like to know?`,
      suggestions: ["What are his skills?", "Tell me about his experience", "How can I contact him?"],
    }),
  },
  {
    keywords: ["skill", "skills", "technology", "tech", "stack", "technologies", "programming", "languages", "know", "expertise"],
    response: () => {
      const frontend = profileData.skills.frontend.map((s) => s.name).join(", ");
      const backend = profileData.skills.backend.map((s) => s.name).join(", ");
      const database = profileData.skills.database.map((s) => s.name).join(", ");
      const ai = profileData.skills.ai.map((s) => s.name).join(", ");
      const it_ops = profileData.skills.it_ops.map((s) => s.name).join(", ");
      const office = profileData.skills.office.map((s) => s.name).join(", ");
      const tools = profileData.skills.tools.map((s) => s.name).join(", ");
      const soft = profileData.skills.soft_skills?.map((s) => s.name).join(", ") || "";
      return {
        message: `${profileData.name} has expertise in multiple technologies:\n\n🧠 AI & Machine Learning: ${ai}\n\n🎨 Frontend: ${frontend}\n\n⚙️ Backend: ${backend}\n\n🗄️ Database: ${database}\n\n🖥️ IT & System Operations: ${it_ops}\n\n📊 Office & Productivity: ${office}\n\n🛠️ Tools: ${tools}\n\n💡 Soft Skills: ${soft}\n\nHe's always learning and upgrading his skillset!`,
        suggestions: ["Tell me about his projects", "What's his experience?", "Education details?"],
      };
    },
  },
  {
    keywords: ["ai", "ml", "machine learning", "deep learning", "computer vision", "artificial intelligence", "cnn", "lstm", "data analyst"],
    response: () => ({
      message: `${profileData.name} is an AI/ML Engineer with hands-on experience in Machine Learning, Deep Learning (CNN, LSTM), and Computer Vision. He uses Python and modern AI tools to build intelligent, production-ready web applications! 🤖`,
      suggestions: ["What are his skills?", "Work experience?", "View projects"],
    }),
  },
  {
    keywords: ["experience", "work", "job", "career", "professional", "seo", "rank divine"],
    response: () => {
      const workExp = profileData.experience
        .filter((e) => e.type === "work" || e.type === "volunteer")
        .map((e) => `• ${e.title} at ${e.company} (${e.duration})\n  ${e.description}`)
        .join("\n\n");
      return {
        message: `Here's ${profileData.name}'s professional experience:\n\n${workExp}`,
        suggestions: ["What are his skills?", "Education details?", "View his projects"],
      };
    },
  },
  {
    keywords: ["education", "study", "university", "degree", "bscs", "college", "sargodha", "student", "details?", "details"],
    response: () => {
      const edu = profileData.experience
        .filter((e) => e.type === "education")
        .map((e) => `• ${e.title} at ${e.company} (${e.duration})`)
        .join("\n");
      return {
        message: `🎓 Here is ${profileData.name}'s education history:\n\n${edu}`,
        suggestions: ["What are his skills?", "Work experience?", "How to contact him?"],
      };
    },
  },
  {
    keywords: ["project", "projects", "portfolio", "built", "created", "developed", "made", "work sample"],
    response: () => {
      const projects = profileData.projects
        .map((p) => `• ${p.title}: ${p.description}\n  Tech: ${p.tags.join(", ")}\n  🔗 Live: ${p.live || "N/A"} | GitHub: ${p.github}`)
        .join("\n\n");
      return {
        message: `Here are ${profileData.name}'s featured projects:\n\n${projects}\n\nAll projects are live and deployed! Check them out! 🚀`,
        suggestions: ["What technologies does he use?", "How to contact him?", "Tell me about his experience"],
      };
    },
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire", "connect", "message"],
    response: () => ({
      message: `You can reach ${profileData.name} through:\n\n📧 Email: ${profileData.email}\n📱 Phone: ${profileData.phone}\n📍 Location: ${profileData.location}\n💻 GitHub: ${profileData.githubUsername}\n💼 LinkedIn: Check the contact section below!\n\nFeel free to reach out — he'd love to connect!`,
      suggestions: ["What are his skills?", "View his projects", "Tell me about him"],
    }),
  },
  {
    keywords: ["who", "about", "tell me", "introduce", "tayyab", "yourself", "bio"],
    response: () => ({
      message: `${profileData.bio}\n\n📍 Based in ${profileData.location}\n🎓 ${profileData.degree} student at ${profileData.university}\n💼 ${profileData.yearsOfExperience}+ years of experience\n🚀 ${profileData.projectsCompleted}+ projects completed`,
      suggestions: ["What are his skills?", "Work experience?", "View projects"],
    }),
  },
  {
    keywords: ["cv", "resume", "download"],
    response: () => ({
      message: `You can download ${profileData.name}'s CV/Resume from the About section on this page. Just click the "Download CV" button! 📄\n\nThe CV includes his full education, work experience, skills, and contact information.`,
      suggestions: ["What are his skills?", "Tell me about him", "How to contact?"],
    }),
  },
  {
    keywords: ["service", "offer", "provide", "what can", "help", "do you", "kar sakte"],
    response: () => {
      const services = profileData.services
        .map((s) => `• ${s.title}: ${s.description}`)
        .join("\n\n");
      return {
        message: `I can develop anything with the help of AI in any tech stack! 🚀\n\nHere are the specific services ${profileData.name} offers:\n\n${services}`,
        suggestions: ["View his projects", "What technologies?", "Contact him"],
      };
    },
  },
  {
    keywords: ["frontend", "react", "nextjs", "next.js", "html", "css", "javascript", "typescript", "bootstrap"],
    response: () => ({
      message: `${profileData.name}'s frontend expertise includes:\n\n${profileData.skills.frontend.map((s) => `• ${s.name} — ${s.level}% proficiency`).join("\n")}\n\nHe builds modern, responsive, and pixel-perfect user interfaces!`,
      suggestions: ["Backend skills?", "Database skills?", "View projects"],
    }),
  },
  {
    keywords: ["backend", "node", "python", "php", "server", "api"],
    response: () => ({
      message: `${profileData.name}'s backend skills:\n\n${profileData.skills.backend.map((s) => `• ${s.name} — ${s.level}% proficiency`).join("\n")}\n\nHe can build RESTful APIs, server-side applications, and microservices!`,
      suggestions: ["Frontend skills?", "Database skills?", "View projects"],
    }),
  },
  {
    keywords: ["database", "postgresql", "postgres", "mysql", "sql", "db"],
    response: () => ({
      message: `${profileData.name}'s database skills:\n\n${profileData.skills.database.map((s) => `• ${s.name} — ${s.level}% proficiency`).join("\n")}\n\nHe can design schemas, write complex queries, and manage databases!`,
      suggestions: ["Frontend skills?", "Backend skills?", "View projects"],
    }),
  },
  {
    keywords: ["thanks", "thank you", "shukriya", "shukria", "great", "awesome", "nice", "cool"],
    response: () => ({
      message: `You're welcome! 😊 If you have any more questions about ${profileData.name}, feel free to ask. Have a great day! ✨`,
      suggestions: ["Tell me more about him", "View his skills", "Contact information"],
    }),
  },
  {
    keywords: ["bye", "goodbye", "see you", "take care", "later"],
    response: () => ({
      message: `Goodbye! 👋 Thanks for visiting ${profileData.name}'s portfolio. Feel free to come back anytime. Have an amazing day! 🌟`,
      suggestions: ["Start over", "Contact information", "View skills"],
    }),
  },
];

// Default response when no pattern matches
const defaultResponse: ChatResponse = {
  message: `I'm not sure I understand that question. I can help you learn about ${profileData.name}'s:\n\n• 💻 Skills & Technologies\n• 💼 Work Experience\n• 🎓 Education\n• 🚀 Projects\n• 📬 Contact Information\n• 📄 Resume/CV\n\nWhat would you like to know?`,
  suggestions: ["What are his skills?", "Tell me about his experience", "How to contact him?"],
};

export function getChatResponse(userMessage: string): ChatResponse {
  const message = userMessage.toLowerCase().trim();

  // Check each pattern for keyword matches using word boundaries
  for (const pattern of patterns) {
    const matched = pattern.keywords.some((keyword) => {
      // Create a regex to match exact words, escaping special chars just in case
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(^|\\W)${escapedKeyword}($|\\W)`, 'i');
      return regex.test(message);
    });
    if (matched) {
      return pattern.response();
    }
  }

  return defaultResponse;
}

export function getWelcomeMessage(): ChatResponse {
  return {
    message: `Assalam o Alaikum! 👋 I'm ${profileData.name}'s AI Assistant. I can tell you about his skills, experience, education, projects, and more. What would you like to know?`,
    suggestions: ["Who is Tayyab?", "What are his skills?", "How to contact him?"],
  };
}
