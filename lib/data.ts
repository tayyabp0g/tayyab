// Centralized profile data for Muhammad Tayyab's portfolio
// Yeh file saare components ko data provide karti hai

export const profileData = {
  name: "Muhammad Tayyab",
  firstName: "Muhammad",
  lastName: "Tayyab",
  title: "Full Stack Developer & AI/ML Engineer",
  subtitle: "BSCS Graduate | AI/ML Engineer | Full Stack Developer",
  email: "muhammadtayyab3753@gmail.com",
  phone: "0328-8784687",
  location: "Sargodha, Pakistan",
  github: "https://github.com/tayyabp0g",
  githubUsername: "tayyabp0g",
  linkedin: "https://www.linkedin.com/in/muhammad-tayyab-12b816279",
  university: "University of Sargodha",
  degree: "BS in Computer Science (Graduated 2026)",
  educationDuration: "09/2022 – 06/2026",
  bio: `Results-driven Computer Science graduate specializing in AI-powered Full Stack Development. Proficient in React.js, Next.js, Node.js, and Python, with hands-on experience in Machine Learning, Deep Learning (CNN, LSTM), and Computer Vision. Passionate about building intelligent, production-ready web applications that solve real-world problems through the power of Artificial Intelligence.`,
  shortBio: `Full Stack Web Developer & AI/ML Engineer experienced in React.js, Next.js, Node.js, Python, and Machine Learning. Delivering production-ready, AI-powered web solutions.`,
  heroRoles: [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "React & Next.js Developer",
    "Tech Enthusiast",
  ],
  yearsOfExperience: 1,
  projectsCompleted: 10,
  technologiesUsed: 15,

  experience: [
    {
      title: "Search Engine Optimization",
      company: "Rank Divine Toheed Mall Sargodha",
      duration: "10/2024 – 05/2026",
      description:
        "Detail-oriented SEO Executive with expertise in on-page/off-page SEO, keyword optimization, and analytics. Focused on boosting website traffic and search visibility through data-driven strategies.",
      type: "work",
    },
    {
      title: "Data Manager",
      company: "SAMWF NGO 83 SB Lahore Road Sargodha",
      duration: "07/2025 – 11/2025",
      description:
        "Managed and maintained data collection and monitoring systems using KoboToolbox, ensuring data accuracy through effective validation, cleaning, and reporting. Integrated KoboToolbox with Microsoft Excel for real-time data synchronization.",
      type: "work",
    },
    {
      title: "Bachelor's in Computer Science",
      company: "University Of Sargodha",
      duration: "2022 – 2026",
      description:
        "Specializing in AI-powered Full Stack Development and Software Engineering.",
      type: "education",
    },
    {
      title: "ICS Physics – Intermediate Level",
      company: "Aspire College Sargodha",
      duration: "2021 – 2022",
      description:
        "Intermediate level studies with a focus on Physics and Computer Science.",
      type: "education",
    },
    {
      title: "Matriculation in Computer Science",
      company: "Govt High School 79 NB",
      duration: "2018 – 2020",
      description:
        "Foundational studies in Computer Science.",
      type: "education",
    },
  ],

  skills: {
    frontend: [
      { name: "HTML5", level: 95, icon: "html5" },
      { name: "CSS3", level: 90, icon: "css3" },
      { name: "JavaScript", level: 88, icon: "javascript" },
      { name: "TypeScript", level: 80, icon: "typescript" },
      { name: "React.js", level: 85, icon: "react" },
      { name: "Next.js", level: 82, icon: "nextjs" },
      { name: "Bootstrap", level: 88, icon: "bootstrap" },
    ],
    backend: [
      { name: "Node.js", level: 78, icon: "nodejs" },
      { name: "Python", level: 85, icon: "python" },
      { name: "PHP", level: 70, icon: "php" },
      { name: "C++", level: 80, icon: "cplusplus" },
      { name: "OOP", level: 85, icon: "code" },
      { name: "DSA", level: 80, icon: "code" },
    ],
    database: [
      { name: "PostgreSQL", level: 75, icon: "postgresql" },
      { name: "MySQL", level: 72, icon: "mysql" },
      { name: "SQL", level: 85, icon: "database" },
      { name: "ChromaDB", level: 75, icon: "database" },
    ],
    ai: [
      { name: "Machine Learning", level: 80, icon: "python" },
      { name: "Deep Learning (CNN, LSTM)", level: 75, icon: "python" },
      { name: "Computer Vision", level: 78, icon: "python" },
      { name: "RAG", level: 80, icon: "python" },
      { name: "LangGraph", level: 85, icon: "python" },
      { name: "LangChain", level: 80, icon: "python" },
    ],
    it_ops: [
      { name: "Hardware Troubleshooting", level: 85, icon: "it_ops" },
      { name: "Network Setup & Config", level: 80, icon: "networking" },
      { name: "System Administration", level: 78, icon: "it_ops" },
      { name: "Technical Support", level: 88, icon: "it_ops" },
    ],
    office: [
      { name: "Microsoft Word", level: 90, icon: "office" },
      { name: "Microsoft Excel", level: 88, icon: "office" },
      { name: "Microsoft PowerPoint", level: 85, icon: "office" },
      { name: "Data Entry & Cleaning", level: 85, icon: "office" },
      { name: "Report Generation", level: 82, icon: "office" },
    ],
    tools: [
      { name: "Git & GitHub", level: 82, icon: "git" },
      { name: "SEO", level: 80, icon: "seo" },
      { name: "Networking", level: 65, icon: "networking" },
    ],
    soft_skills: [
      { name: "Time Management", level: 95, icon: "tools" },
      { name: "Problem Solving", level: 90, icon: "brain" },
      { name: "Quick Learner", level: 95, icon: "brain" },
      { name: "Communication", level: 85, icon: "office" },
    ],
  },

  projects: [
    {
      title: "AI-Driven SRS Generator (Final Year Project)",
      description:
        "A full-stack AI application that converts vague stakeholder ideas into complete IEEE 830-compliant SRS documents using recursive multi-agent elicitation. Built with LangGraph, FastAPI, Next.js 16, and PostgreSQL — featuring RAG-powered regulatory compliance (HIPAA, GDPR, PCI-DSS), Mermaid diagram generation, DOCX export, and a 3-column chat workspace with real-time SSE streaming.",
      tags: ["LangGraph", "FastAPI", "Next.js 16", "React 19", "PostgreSQL", "ChromaDB", "Python", "TypeScript"],
      github: "https://github.com/tayyabp0g/Final_Year_Project",
      live: "",
      image: "/images/projects/srs-generator.png",
      featured: true,
    },
    {
      title: "Deepfake Detection System",
      description:
        "An AI-powered deepfake detection system using Convolutional Neural Networks to identify manipulated/AI-generated facial images. Trained on real vs fake face datasets with high accuracy classification and visual confidence scoring.",
      tags: ["Python", "TensorFlow", "CNN", "Deep Learning", "OpenCV"],
      github: "https://github.com/tayyabp0g/Deepfake_Detection",
      live: "",
      image: "/images/projects/deepfake.png",
      featured: true,
    },
    {
      title: "AI Flower Classification System",
      description:
        "A specialized deep learning image classification system using Convolutional Neural Networks to accurately identify and classify different species of flowers. Features an intuitive UI with prediction labels and high confidence scoring.",
      tags: ["Python", "TensorFlow", "CNN", "Keras", "NumPy", "Deep Learning"],
      github: "https://github.com/tayyabp0g/Image-Classfication",
      live: "",
      image: "/images/projects/flower-classify.png",
      featured: true,
    },
    {
      title: "School Management System",
      description:
        "A comprehensive web application designed to automate school administrative tasks, student enrollment, fee tracking, and employee payroll. Built as a full-featured eSkooly clone with modern UI.",
      tags: ["React.js", "Next.js", "Node.js", "Express", "PostgreSQL", "CSS"],
      github: "https://github.com/tayyabp0g/Skool-Management-software",
      live: "https://skool-management-software.vercel.app/index.html",
      image: "/images/projects/school-mgmt.png",
      featured: false,
    },
    {
      title: "Sales & Cash Book Management",
      description:
        "A localized web application for small-scale retail businesses. Manages credit sales, inventory, daily expenses, and customer records with automated reporting and dashboard analytics.",
      tags: ["React.js", "Next.js", "PostgreSQL", "Node.js", "Express", "Tailwind CSS"],
      github: "https://github.com/tayyabp0g/Crush_point",
      live: "https://crush-point.vercel.app/dashboard",
      image: "/images/projects/cashbook.png",
      featured: false,
    },
    {
      title: "Manufacturing Landing Page",
      description:
        "A high-converting, fully responsive landing page for a manufacturing consultancy (Prodmast). Built with pixel-perfect layouts, modern typography, glassmorphism effects, and optimized assets.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/tayyabp0g/Landing-Page",
      live: "https://landing-page-iota-tan-89.vercel.app/",
      image: "/images/projects/landing-page.png",
      featured: false,
    },
  ],

  services: [
    {
      title: "AI & Machine Learning",
      description:
        "Developing intelligent models and AI-powered solutions including Computer Vision and Deep Learning architectures.",
      icon: "brain",
    },
    {
      title: "Full Stack Solutions",
      description:
        "End-to-end web application development from database design to deployment.",
      icon: "stack",
    },
    {
      title: "Frontend Development",
      description:
        "Building modern, responsive UIs using React, Next.js, and TypeScript with pixel-perfect designs.",
      icon: "code",
    },
    {
      title: "Backend Development",
      description:
        "Creating robust server-side applications with Node.js, Python, and PostgreSQL.",
      icon: "server",
    },
    {
      title: "IT Support & Networking",
      description:
        "Providing system stability, hardware/software troubleshooting, and managing IT operations.",
      icon: "consult",
    },
    {
      title: "Data Analytics",
      description:
        "Cleaning data, generating structured reports, and building automated Excel dashboards.",
      icon: "search",
    },
  ],

  languages: [
    { name: "Urdu", level: "Native" },
    { name: "English", level: "Good" },
  ],

  softSkills: ["Communication", "Teamwork", "Problem Solving", "Adaptability", "Time Management", "Quick Learner"],
};
