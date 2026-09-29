import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  GraduationCap,
  Laptop,
  Lightbulb,
  Linkedin,
  Mail,
} from "lucide-react";
import { projects as projectData } from "./data/projects";
import { skillCategories, tools } from "./data/skills";

const projects = projectData.map((project, index) => ({
  category: project.category,
  year: project.year,
  tagline: project.tagline,
  summary: project.summary,
  tags: project.stack.slice(0, 3),
  image: project.image,
  github: project.github,
  href: project.live && project.live !== "#" ? project.live : project.github,
}));
const sections = ["home", "about", "experience", "projects", "contact"];
const sectionLabels = {
  home: "Home",
  about: "About",
  experience: "Skills",
  projects: "Projects",
  contact: "Contact",
};

export default function App() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 220) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="portfolio-theme min-h-screen bg-[#EDE7DF] text-[#1E1E1E] font-sans antialiased selection:bg-[#2C2825] selection:text-[#EDE7DF] relative overflow-x-hidden">
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#E0D5C7]/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#DFD4C4]/50 blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-10 sm:py-14 relative z-10">
        <header className="site-header flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-[#DCD3C7]">
          <a
            href="#home"
            className="site-brand whitespace-nowrap font-serif text-2xl font-bold tracking-tight text-[#1C1B1A]">
            <span className="brand-mark">AY</span>
            <span className="brand-name">
              <strong>Aryan</strong> Yadav
            </span>
          </a>
          <nav
            className="site-nav flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-medium text-[#4A4744]"
            aria-label="Primary navigation">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`site-nav-link ${active === item ? "is-active" : ""}`}>
                {sectionLabels[item]}
              </a>
            ))}
          </nav>
          <a
            href="/Aryan_Yadav_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#2B2825] text-xs font-semibold tracking-wide uppercase hover:bg-[#2B2825] hover:text-[#EDE7DF] transition-all">
            <Download className="w-3.5 h-3.5" />
            Download Resume
          </a>
        </header>

        <main>
          <section
            id="home"
            className="py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-12 gap-12 items-center">
            <div className="sm:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[0.25em] font-bold text-[#635E59] uppercase">
                  BUILD &bull; LEARN &bull; GROW
                </span>
                <div className="h-px w-12 bg-[#B8ADA1]" />
              </div>
              <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-[#1A1816] leading-[1.1]">
                Hi, I’m
                <br />
                <span className="text-[#766A57]">Aryan Yadav</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#58534E] max-w-xl leading-relaxed">
                A Computer Science undergraduate passionate about building scalable web applications
                and solving real-world problems through code.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#201E1C] text-[#F3EFE9] text-sm font-semibold hover:bg-[#34302C] shadow-sm">
                  View My Work <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#BDB2A5] text-[#22201D] text-sm font-semibold hover:border-[#201E1C] hover:bg-[#E4DCCE]">
                  Get In Touch
                </a>
              </div>
              <div className="flex items-center gap-5 pt-3 text-[#3E3A36]">
                <a href="https://github.com/aryanwebx" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/aryanwebx" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:aryanyadav9811@gmail.com" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <aside className="sm:col-span-4 sm:pl-10 sm:border-l sm:border-[#D5CBC0] flex items-center">
              <motion.div
                className="hero-visual"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
                <div className="hero-visual-header">
                  <span>ARYAN / 01</span>
                  <span className="hero-visual-live">LIVE BUILD</span>
                </div>
                <div className="hero-visual-body">
                  <div className="hero-visual-mark">/</div>
                  <div>
                    <span className="hero-visual-kicker">FULL-STACK ENGINEERING</span>
                    <strong>
                      From brief
                      <br />
                      to shipped.
                    </strong>
                  </div>
                </div>
                <div className="hero-visual-footer">
                  <span>REACT / NODE / AI</span>
                  <span>SCROLL TO EXPLORE ↓</span>
                </div>
              </motion.div>
            </aside>
          </section>

          <section id="about" className="py-16 border-t border-[#DDD3C6]">
            <SectionLabel number="01" label="ABOUT ME" />
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 items-start">
              <div className="sm:col-span-7 space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1D1B]">
                  Engineer with a bias toward shipping.
                </h2>
                <p className="text-[#56504A] leading-relaxed text-base sm:text-lg">
                  I’m Aryan, a Computer Science undergraduate who turns complex product ideas into
                  focused, reliable web experiences. My work sits where thoughtful interfaces meet
                  scalable backend systems and practical AI.
                </p>
                <div className="about-stats">
                  <div>
                    <strong>400+</strong>
                    <span>LeetCode problems solved</span>
                  </div>
                  <div>
                    <strong>4</strong>
                    <span>Production projects shipped</span>
                  </div>
                  <div>
                    <strong>2027</strong>
                    <span>B.Tech graduation target</span>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-5 space-y-6 bg-[#E6DDD1]/50 p-6 sm:p-8 rounded-2xl border border-[#D9CFC2]">
                <div className="about-card-header">
                  <span>PROFILE / 2026</span>
                  <span>OPEN TO OPPORTUNITIES</span>
                </div>
                <p className="about-card-lead">
                  Building at the intersection of <em>product, systems, and AI.</em>
                </p>
                <Detail icon={GraduationCap} title="Education">
                  B.Tech in Computer Science &bull; 2023 – 2027
                </Detail>
                <Detail icon={Laptop} title="Interests">
                  Web Development, Cloud, DSA
                </Detail>
                <Detail icon={Lightbulb} title="Always Learning">
                  Exploring new technologies &amp; frameworks
                </Detail>
              </div>
            </div>
          </section>

          <section id="experience" className="py-14 border-t border-[#DDD3C6]">
            <div className="skills-heading">
              <div>
                <SectionLabel number="02" label="SKILLS" />
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1D1B]">
                  What I Work With
                </h2>
              </div>
              <p>
                A practical stack shaped by shipping full-stack products, integrating AI, and
                solving the details that make software dependable.
              </p>
            </div>
            <div className="skill-groups">
              {skillCategories.map((category, index) => (
                <article className="skill-group" key={category.id}>
                  <div className="skill-group-header">
                    <span className="skill-group-index">0{index + 1}</span>
                    <div>
                      <h3>{category.label}</h3>
                      <p>{category.description}</p>
                    </div>
                  </div>
                  <div className="skill-group-list">
                    {category.skills.map((skill) => (
                      <span key={skill.name} title={skill.name}>
                        <img src={skill.icon} alt="" loading="lazy" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="skill-toolkit">
              <span>DAILY TOOLKIT</span>
              <div>
                {tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="py-16 border-t border-[#DDD3C6]">
            <div className="projects-heading">
              <div>
                <SectionLabel number="03" label="PROJECTS" />
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1D1B]">
                  Selected work
                </h2>
              </div>
              <p>
                A selection of systems and interfaces built to solve real problems, from AI-assisted
                workflows to real-time collaboration.
              </p>
              <a
                href="https://github.com/aryanwebx"
                className="projects-all-link inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2D2A27]">
                View All Projects <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card group">
                  <div className="project-card-media">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="h-full w-full object-cover object-top"
                    />
                    <span>{project.category}</span>
                  </div>
                  <div className="project-card-body">
                    <div className="project-card-meta">
                      <span>{project.tagline}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-card-summary">{project.summary}</p>
                    <div className="project-card-footer">
                      <div className="project-card-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card-link inline-flex items-center gap-1.5 text-xs font-semibold text-[#262422]">
                        View Project <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="py-16 border-t border-[#DDD3C6]">
            <div className="contact-panel">
              <div className="contact-main">
                <SectionLabel number="04" label="LET'S CONNECT" />
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1A18]">
                  Have a problem
                  <br />
                  worth solving?
                </h2>
                <p>
                  I’m open to thoughtful collaborations, ambitious products, and conversations about
                  building useful software.
                </p>
                <a href="mailto:aryanyadav9811@gmail.com" className="contact-email">
                  <Mail className="w-4 h-4" />
                  aryanyadav9811@gmail.com
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <div className="contact-side">
                <div>
                  <span>BASED IN</span>
                  <strong>Noida, India</strong>
                  <iframe
                    className="contact-map"
                    title="Map showing Noida, India"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=77.32%2C28.50%2C77.43%2C28.62&layer=mapnik&marker=28.5355%2C77.3910"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span>ELSEWHERE</span>
                  <div className="contact-links">
                    <a href="https://github.com/aryanwebx">
                      GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a href="https://linkedin.com/in/aryanwebx">
                      LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="pt-12 pb-4 border-t border-[#DDD3C6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B645D]">
          <p>&copy; 2026 Aryan Yadav. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/aryanwebx">GitHub</a>
            <a href="https://linkedin.com/in/aryanwebx">LinkedIn</a>
            <a href="mailto:aryanyadav9811@gmail.com">Email</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xs font-mono text-[#7D766F] font-bold">{number}</span>
      <span className="text-xs tracking-[0.2em] font-bold text-[#6E6760] uppercase">{label}</span>
      <div className="h-px w-10 bg-[#C7BCB0]" />
    </div>
  );
}
function Detail({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2.5 bg-[#DDD3C5] rounded-xl text-[#2B2724] shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-sm sm:text-base text-[#1E1B19]">{title}</h4>
        <p className="text-xs sm:text-sm text-[#615B54]">{children}</p>
      </div>
    </div>
  );
}
