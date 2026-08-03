export const projects = [
  {
  id: 'project-pulse',
  title: 'Project Pulse',
  tagline: 'Multi-Tenant Issue Tracking Platform',
  category: 'Full Stack',
  status: 'Production',
  year: '2025',

  problem:
    'Teams struggle to manage issues across multiple organizations while maintaining complete data isolation, secure authentication, and real-time collaboration.',

  solution:
    'Developed a multi-tenant issue tracking platform with isolated workspaces, secure JWT authentication, role-based access control, Redis caching, and real-time updates using Socket.IO.',

  architecture:
    'React.js → Express.js REST APIs → JWT Authentication → MongoDB → Redis Cache → Socket.IO → Modular Backend Architecture',

  features: [
    'Multi-tenant organization workspaces',
    'JWT authentication & role-based access control',
    'Real-time issue updates using Socket.IO',
    'Redis caching for improved API performance',
    'Responsive dashboard with issue tracking',
  ],

  stack: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Redis',
    'Socket.IO',
    'JWT',
  ],

  github: 'https://github.com/aryanwebx/Project-Pulse-',
  live: 'https://project-pulse-gules.vercel.app/',

  color: '#00D9FF',
  accent: 'from-cyan-500/10 to-blue-500/10',
},
  {
  id: 'safenet',
  title: 'Safenet',
  tagline: 'AI-Assisted Content Moderation System',

  category: 'AI + Full Stack',

  status: 'Production',

  year: '2025',

  problem:
    'Online platforms require automated moderation to detect inappropriate content quickly across text, images, and audio while reducing manual review effort.',

  solution:
    'Built an AI-assisted moderation platform capable of scanning text, image, and audio files using Groq API with an Express.js backend and responsive React frontend.',

  architecture:
    'React.js → Express.js → Groq API → Content Classification → Moderation Dashboard',

  features: [
    'Text moderation',
    'Image moderation',
    'Audio moderation',
    'Drag-and-drop uploads',
    'Real-time moderation feedback',
    'Automated error handling',
  ],

  stack: [
    'React.js',
    'Node.js',
    'Express.js',
    'Groq API',
    'REST APIs',
  ],

  github: 'https://github.com/aryanwebx/hackhazards',

  live: '#',

  color: '#A78BFA',

  accent: 'from-violet-500/10 to-purple-500/10',
},
  {
  id: 'foodie-fiesta',

  title: 'Foodie Fiesta',

  tagline: 'Recipe Discovery Web Application',

  category: 'Frontend',

  status: 'Production',

  year: '2024',

  problem:
    'Finding recipes across multiple websites is time-consuming and often results in inconsistent user experiences and slow searches.',

  solution:
    'Built a responsive recipe discovery platform integrating Spoonacular REST APIs with optimized search, client-side filtering, and caching.',

  architecture:
    'React.js → Spoonacular REST APIs → Client-side Filtering → Responsive UI',

  features: [
    'Recipe search',
    'Debounced search',
    'Client-side filtering',
    'Responsive design',
    'Recipe details',
  ],

  stack: [
    'JavaScript',
    'React.js',
    'HTML5',
    'CSS3',
    'REST APIs',
  ],

  github: 'https://github.com/aryanwebx/foodie-fiesta',

  live: 'https://foodie-fiesta-teal.vercel.app/',

  color: '#34D399',

  accent: 'from-emerald-500/10 to-green-500/10',
},
];
