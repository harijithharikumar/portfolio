import { SkillItem, ProjectItem, InternshipItem, EducationItem, CertificationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Harijith Harikumar',
  roleTitles: [
    'AI & Data Science Engineer',
    'Machine Learning Enthusiast',
    'Software Developer',
    'Web Development Engineer',
  ],
  bio: 'B.Tech Artificial Intelligence & Data Science student (CGPA: 7.60) with a strong foundation in Python, Machine Learning, and Data Science. Passionate about applying AI algorithms and full-stack software development to solve real-world problems.',
  location: 'Alappuzha, Kerala, India',
  email: 'harijjithhari21@gmail.com',
  phone: '+91 9037741321',
  github: 'https://github.com/harijithharikumar',
  linkedin: 'https://www.linkedin.com/in/harijith-harikumar-046759406/',
  dob: '21 June 2005',
  languages: ['English', 'Malayalam', 'Tamil', 'Hindi'],
  cgpa: '7.60',
  currentYear: 'Final Year (2023 - 2027)',
  availability: 'Open for AI, ML & Software Engineering Roles',
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Software Development',
    'Web Development',
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming Languages
  {
    id: 'prog-python',
    name: 'Python',
    category: 'programming',
    proficiency: 92,
    iconName: 'Code2',
    description: 'Core language for ML models, data analysis, Flask backends, and AI toolchains.',
    tags: ['Scikit-Learn', 'Pandas', 'NumPy', 'Flask'],
  },
  {
    id: 'prog-c',
    name: 'C Language',
    category: 'programming',
    proficiency: 80,
    iconName: 'Cpu',
    description: 'Fundamental procedural programming, memory management, and data structure logic.',
    tags: ['Data Structures', 'Algorithms', 'Memory Allocation'],
  },
  {
    id: 'prog-sql',
    name: 'SQL',
    category: 'programming',
    proficiency: 88,
    iconName: 'Database',
    description: 'Relational database querying, joins, indexing, and schema design.',
    tags: ['Queries', 'Joins', 'Aggregations', 'Indexes'],
  },

  // AI & ML
  {
    id: 'ai-ml',
    name: 'Machine Learning',
    category: 'ai',
    proficiency: 88,
    iconName: 'BrainCircuit',
    description: 'Supervised & unsupervised learning, classification models, regression, and model evaluation.',
    tags: ['Classification', 'Regression', 'Feature Engineering', 'Model Tuning'],
  },
  {
    id: 'ai-prompt',
    name: 'Prompt Engineering',
    category: 'ai',
    proficiency: 90,
    iconName: 'Sparkles',
    description: 'Designing structured prompts for LLMs (Gemini, GPT-4), chain-of-thought, and context framing.',
    tags: ['LLMs', 'Few-Shot', 'Chain-of-Thought', 'AI Workflows'],
  },
  {
    id: 'ai-data-analysis',
    name: 'Data Analysis',
    category: 'ai',
    proficiency: 85,
    iconName: 'LineChart',
    description: 'Exploratory data analysis, trend identification, cleaning, and insight visualization.',
    tags: ['Data Cleaning', 'Exploratory Analysis', 'Visualization', 'Pandas'],
  },

  // Database
  {
    id: 'db-mysql',
    name: 'MySQL',
    category: 'database',
    proficiency: 86,
    iconName: 'Server',
    description: 'Relational database management system, stored procedures, and backend connectivity.',
    tags: ['Tables', 'Foreign Keys', 'Transactions', 'Node/Flask Integration'],
  },
  

  // OS
  {
    id: 'os-windows',
    name: 'Windows OS',
    category: 'os',
    proficiency: 90,
    iconName: 'Monitor',
    description: 'Development environment, PowerShell terminal, tooling setup, and software debugging.',
    tags: ['CLI', 'Environment Variables', 'Dev Setup'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'disaster-alert-system',
    title: 'Disaster Detection & Alert System using IP',
    subtitle: 'Real-Time Climate Monitoring & Automated Geospatial Disaster Warning System',
    date: 'June 2025',
    description: 'A comprehensive web-based application designed to monitor live environmental data, detect climate anomalies, and dispatch instant location-specific alerts based on user IP geolocation.',
    detailedPoints: [
      'Developed a full-stack web application integrating Flask (Python) and Node.js for dual backend stream handling.',
      'Implemented automatic IP-based location detection to pinpoint user geographic coordinates without manual entry.',
      'Fetched and processed real-time weather, temperature, humidity, and storm monitoring APIs.',
      'Built a warning notification pipeline that alerts citizens during impending heavy rainfall, floods, or extreme weather spikes.',
      'Designed a clean, intuitive dashboard with interactive charts using JavaScript, HTML5, and CSS3.',
    ],
    technologies: ['Node.js', 'Flask (Python)', 'JavaScript', 'HTML5', 'CSS3', 'Weather APIs', 'IP Geolocation API'],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/harijithharikumar',
    liveDemoUrl: '#',
    hasInteractiveDemo: true,
  },
  {
    id: 'ai-prompt-sandbox',
    title: 'Generative AI Prompt Optimizer & Analytics',
    subtitle: 'Interactive Prompt Engineering Workbench for Model Performance',
    date: 'May 2025',
    description: 'An AI tool allowing developers to test, refine, and evaluate LLM prompt strategies with real-time response metrics.',
    detailedPoints: [
      'Engineered a lightweight bench to experiment with zero-shot, few-shot, and system prompt parameters.',
      'Integrated Google Gemini API for fast text completion and reasoning analysis.',
      'Provided token efficiency scoring and output consistency metrics.',
    ],
    technologies: ['Python', 'Gemini API', 'Flask', 'Data Analysis'],
    category: 'AI/ML',
    featured: false,
    githubUrl: 'https://github.com/harijithharikumar',
  },
];

export const INTERNSHIP_DATA: InternshipItem[] = [
  {
    id: 'selacto-internship',
    role: 'AI Developer Intern',
    company: 'Selacto Software Solutions',
    period: 'June 1 – June 20, 2026',
    location: 'Remote / On-site',
    highlights: [
      'Assisted in the development and implementation of AI-based applications by working with Python and modern AI development tools.',
      'Gained practical experience in integrating AI functionalities, debugging complex codebases, and collaborating on real-world software development tasks.',
      'Enhanced technical skills in AI application development, problem-solving, and team software engineering practices.',
      'Contributed to code refactoring and performance tuning of machine learning data pipelines.',
    ],
    skillsGained: ['Python AI Tools', 'AI API Integration', 'Software Debugging', 'Team Collaboration', 'ML Pipeline Integration'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'btech-aids',
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Indra Ganesan College of Engineering, Manikandam, Tiruchirappalli',
    period: '2023 – 2027',
    score: 'CGPA: 7.60',
    description: 'Specializing in machine learning algorithms, deep learning fundamentals, database management systems, data structures, and AI software engineering.',
  },
  {
    id: 'hsc',
    degree: 'HSC (Higher Secondary Certificate)',
    institution: 'Samajam Higher Secondary School',
    period: '2023',
    score: 'Higher Secondary Completed',
    description: 'Focused on Mathematics, Physics, and Computer Science fundamentals.',
  },
  {
    id: 'sslc',
    degree: 'SSLC (Secondary School Leaving Certificate)',
    institution: 'Samajam Higher Secondary School',
    period: '2021',
    score: 'Secondary School Completed',
    description: 'Strong foundation in Science, Mathematics, and Analytical Reasoning.',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-selacto',
    title: 'AI Developer Intern Certification',
    issuer: 'Selacto Software Solutions',
    date: 'June 2026',
    badgeColor: 'from-blue-500 to-indigo-600',
    skillsCovered: ['AI Development', 'Python', 'AI Tools Integration', 'Software Engineering'],
    description: 'Certificate awarded for successfully completing intensive hands-on AI application development and debugging tasks.',
  },
  {
    id: 'cert-google-data',
    title: 'Data Analysis Certificate',
    issuer: 'Google',
    date: '2025',
    badgeColor: 'from-cyan-500 to-blue-600',
    skillsCovered: ['Data Cleaning', 'Data Visualization', 'SQL', 'Data Analytics Methodology'],
    description: 'Verified professional certification covering data processing, statistical insights, and decision-making techniques.',
  },
  {
    id: 'cert-microsoft-cloud',
    title: 'Cloud Computing Certificate',
    issuer: 'Microsoft',
    date: '2024',
    badgeColor: 'from-sky-500 to-indigo-500',
    skillsCovered: ['Cloud Architecture', 'Azure Fundamentals', 'Cloud Infrastructure', 'Storage & Security'],
    description: 'Certification validating expertise in foundational cloud services, deployment models, and security principles.',
  },
  {
    id: 'cert-linkedin-genai',
    title: 'Generative AI Certificate',
    issuer: 'LinkedIn Learning',
    date: '2024',
    badgeColor: 'from-purple-500 to-pink-600',
    skillsCovered: ['Generative AI', 'LLM Architectures', 'Prompt Engineering', 'AI Ethics'],
    description: 'In-depth coursework on transformer models, prompt optimization, and practical application of Generative AI tools.',
  },
];
