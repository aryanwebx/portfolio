export const projects = [
  {
    id: "interviewready",
    title: "InterviewReady",
    tagline: "AI-Powered Interview Preparation Platform",
    summary: "AI interview preparation and ATS resume formatting powered by Gemini.",
    category: "AI + Full Stack",
    status: "Production",
    year: "2025",

    problem:
      "Candidates need practical interview preparation, resume feedback, and secure access to personalized reports in one place.",

    solution:
      "Built an AI-powered interview preparation platform that analyzes resumes, generates personalized interview reports, and formats resumes into ATS-friendly layouts.",

    architecture: "React.js -> Express.js REST APIs -> Gemini API -> MongoDB -> Redis -> Puppeteer",

    features: [
      "AI-generated interview reports",
      "Resume analysis and ATS-friendly formatting",
      "PDF resume processing and generation",
      "JWT authentication with HTTP-only cookies",
      "Redis rate limiting and caching",
    ],

    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Gemini API", "Puppeteer"],

    github: "https://github.com/aryanwebx/InterviewReady",
    live: "https://interviewready.aryanwebx.me/",
    image: "/projects/interviewready.png",

    color: "#F5A623",
    accent: "from-amber-500/10 to-orange-500/10",
  },
  {
    id: "project-pulse",
    title: "Project Pulse",
    tagline: "Multi-Tenant Issue Tracking Platform",
    summary: "Multi-tenant issue tracking with RBAC, Redis caching, and real-time updates.",
    category: "Full Stack",
    status: "Production",
    year: "2025",

    problem:
      "Teams struggle to manage issues across multiple organizations while maintaining complete data isolation, secure authentication, and real-time collaboration.",

    solution:
      "Developed a multi-tenant issue tracking platform with isolated workspaces, secure JWT authentication, role-based access control, Redis caching, and real-time updates using Socket.IO.",

    architecture:
      "React.js → Express.js REST APIs → JWT Authentication → MongoDB → Redis Cache → Socket.IO → Modular Backend Architecture",

    features: [
      "Multi-tenant organization workspaces",
      "JWT authentication & role-based access control",
      "Real-time issue updates using Socket.IO",
      "Redis caching for improved API performance",
      "Responsive dashboard with issue tracking",
    ],

    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Socket.IO", "JWT"],

    github: "https://github.com/aryanwebx/Project-Pulse-",
    live: "https://project-pulse-gules.vercel.app/",
    image: "/projects/project-pulse.png",

    color: "#00D9FF",
    accent: "from-cyan-500/10 to-blue-500/10",
  },
  {
    id: "safenet",
    title: "Safenet",
    tagline: "AI-Assisted Content Moderation System",
    summary: "Multimodal text, image, and audio moderation powered by Groq AI.",

    category: "AI + Full Stack",

    status: "Production",

    year: "2025",

    problem:
      "Online platforms require automated moderation to detect inappropriate content quickly across text, images, and audio while reducing manual review effort.",

    solution:
      "Built an AI-assisted moderation platform capable of scanning text, image, and audio files using Groq API with an Express.js backend and responsive React frontend.",

    architecture:
      "React.js → Express.js → Groq API → Content Classification → Moderation Dashboard",

    features: [
      "Text moderation",
      "Image moderation",
      "Audio moderation",
      "Drag-and-drop uploads",
      "Real-time moderation feedback",
      "Automated error handling",
    ],

    stack: ["React.js", "Node.js", "Express.js", "Groq API", "REST APIs"],

    github: "https://github.com/aryanwebx/hackhazards",

    live: "https://safenet11.netlify.app/",
    image: "/projects/safenet.png",

    color: "#A78BFA",

    accent: "from-violet-500/10 to-purple-500/10",
  },
];
