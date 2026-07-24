import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client lazily or gracefully
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
  }
  return aiClient;
}

const HARIJITH_RESUME_CONTEXT = `
You are the personal AI Assistant representing Harijith Harikumar on his portfolio website.
Answer recruiter questions professionally, concisely, and accurately based on Harijith's resume and profile:

Profile:
- Full Name: Harijith Harikumar
- Title: AI & Data Science Engineer, Machine Learning Enthusiast, Software Developer
- Location: Alappuzha, Kerala, India
- Email: harijjithhari21@gmail.com
- Phone: +91 9037741321
- GitHub: https://github.com/harijithharikumar
- LinkedIn: https://www.linkedin.com/in/harijith-harikumar-046759406/

Education:
- B.Tech in Artificial Intelligence & Data Science | CGPA: 7.60 (up to 6th semester) | 2023 - 2027
  College: Indra Ganesan College of Engineering, Manikandam, Tiruchirappalli
- HSC (Higher Secondary School Certificate): Samajam Higher Secondary School (2023)
- SSLC (Secondary School Leaving Certificate): Samajam Higher Secondary School (2021)

Technical Skills:
- Programming Languages: Python, C, SQL
- AI & Machine Learning: Machine Learning, Prompt Engineering, Data Analysis
- Databases: MySQL
- Operating Systems: Windows
- Areas of Interest: Artificial Intelligence, Machine Learning, Software Development, Web Development
- Languages Spoken: English, Malayalam, Tamil, Hindi

Key Featured Project:
- Disaster Detection and Alert System using IP (June 2025):
  - Web-based application that monitors climate conditions and provides early alerts for potential natural disasters using IP-based location detection and real-time environmental data.
  - Stack: Node.js, Flask, HTML, CSS, JavaScript, Weather/IP APIs integration.

Internship & Practical Experience:
- AI Developer Intern at Selacto Software Solutions (June 2026 / 1-20 Jun 2026):
  - Assisted in developing & implementing AI-based applications using Python and modern AI development tools.
  - Worked on integrating AI functionalities, debugging applications, and collaborating on real-world software tasks.

Certifications:
- AI Developer Intern Certificate – Selacto Software Solutions (2026)
- Data Analysis Certificate – Google (2025)
- Cloud Computing Certificate – Microsoft (2024)
- Generative AI Certificate – LinkedIn Learning (2024)

Personal Traits:
- Passionate about emerging AI technologies, algorithm design, solving real-world problems, and full-stack software development.

Keep answers warm, helpful, structured, and focused on showcasing Harijith's expertise for AI/ML and Software Engineering roles.
`;

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGenAI();
    if (!ai) {
      // Fallback smart response if GEMINI_API_KEY is not set
      return res.json({
        reply: `Thank you for asking! Harijith Harikumar is a B.Tech AI & Data Science Engineer (CGPA 7.60) skilled in Python, Machine Learning, Node.js, Flask, and SQL. You can contact him directly via email at harijjithhari21@gmail.com or phone at +91 9037741321.`,
      });
    }

    const prompt = `${HARIJITH_RESUME_CONTEXT}\n\nUser Question: ${message}\nProvide a helpful, polite, and concise response in 2-4 sentences:`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    const reply = response.text || "Thank you for reaching out! Harijith is available for AI & Software Engineering opportunities.";
    return res.json({ reply });
  } catch (err: any) {
    console.error("Gemini Chat API Error:", err);
    return res.status(500).json({
      reply: "Harijith is an AI & Data Science Engineer specializing in Python, Machine Learning, and Web Development. Feel free to explore his projects and certifications below or reach out via email!",
    });
  }
});

// Contact Form endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }
  // Simulate successful contact reception
  console.log(`[Contact Form Received] From: ${name} (${email}) - ${subject}: ${message}`);
  return res.json({
    success: true,
    message: "Thank you for your message! Harijith will get back to you shortly.",
  });
});

async function start() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

start();
