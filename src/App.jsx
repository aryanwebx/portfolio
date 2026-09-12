import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckSquare,
  Cloud,
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

const skills = [
  ...new Set([
    ...skillCategories.flatMap((category) => category.skills.map((skill) => skill.name)),
    ...tools,
  ]),
];
const projectIcons = [Activity, CheckSquare, Cloud];
const projects = projectData.map((project, index) => ({
  title: project.title,
  description: project.solution,
  tags: project.stack.slice(0, 3),
  icon: projectIcons[index % projectIcons.length],
  href: project.live && project.live !== "#" ? project.live : project.github,
}));
const sections = ["home", "about", "projects", "experience", "contact"];

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
        <header className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-[#DCD3C7]">
          <a
            href="#home"
            className="whitespace-nowrap font-serif text-2xl font-bold tracking-tight text-[#1C1B1A]">
            Aryan Yadav
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-medium text-[#4A4744]">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`${active === item ? "text-[#1C1B1A] font-semibold border-b-2 border-[#1C1B1A] pb-0.5" : "hover:text-[#1C1B1A]"} transition-colors`}>
                {item[0].toUpperCase() + item.slice(1)}
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
            <aside className="sm:col-span-4 sm:pl-10 sm:border-l sm:border-[#D5CBC0] flex flex-col justify-center space-y-6">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1E1C1A] leading-tight font-medium">
                  Turning
                  <br />
                  ideas into
                  <br />
                  impact.
                </h3>
                <div className="w-10 h-0.5 bg-[#2B2825] my-4" />
              </div>
              <div className="silver-shine font-serif italic text-base sm:text-lg leading-[1.22] -rotate-2 text-right pr-3 sm:pr-1">
                <span className="block translate-x-1">Better</span>
                <span className="block -translate-x-1">Code</span>
                <span className="block translate-x-1">Brighter</span>
                <span className="block -translate-x-2">Tomorrow</span>
              </div>
            </aside>
          </section>

          <section id="about" className="py-16 border-t border-[#DDD3C6]">
            <SectionLabel number="01" label="ABOUT ME" />
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 items-start">
              <div className="sm:col-span-7 space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1D1B]">
                  More About Me
                </h2>
                <p className="text-[#56504A] leading-relaxed text-base sm:text-lg">
                  I’m a Computer Science undergraduate with a keen interest in web development,
                  cloud technologies, and problem solving. I love turning ideas into real projects
                  and continuously learning new tools and technologies.
                </p>
              </div>
              <div className="sm:col-span-5 space-y-6 bg-[#E6DDD1]/50 p-6 sm:p-8 rounded-2xl border border-[#D9CFC2]">
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
            <SectionLabel number="02" label="SKILLS" />
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1D1B] mb-8">
              What I Work With
            </h2>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full bg-[#DFD6C9] hover:bg-[#D5CBBC] text-[#2C2926] text-xs sm:text-sm font-medium border border-[#D0C6B8]">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section id="projects" className="py-16 border-t border-[#DDD3C6]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <SectionLabel number="03" label="PROJECTS" />
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1D1B]">
                  Featured Projects
                </h2>
              </div>
              <a
                href="https://github.com/aryanwebx"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2D2A27]">
                View All Projects <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article
                    key={project.title}
                    className="bg-[#E7DFD4]/70 border border-[#D7CDC0] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#BDB0A0] hover:shadow-sm group">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-[#DDD3C5] flex items-center justify-center text-[#2A2724]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#1D1B19]">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#5C5650] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="pt-6 space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-[#DFD6C9] text-[11px] font-medium text-[#46413C]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#262422] group-hover:underline">
                        View Project <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="contact" className="py-16 border-t border-[#DDD3C6]">
            <SectionLabel number="04" label="LET'S CONNECT" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 bg-[#E5DCD0]/60 border border-[#D9CFC1] rounded-2xl p-8 sm:p-10">
              <div className="max-w-md space-y-2">
                <h2 className="font-serif text-3xl font-semibold text-[#1C1A18]">Get In Touch</h2>
                <p className="text-sm sm:text-base text-[#56504A] leading-relaxed">
                  I’m always open to discussing new opportunities, interesting projects, or just
                  having a chat about technology.
                </p>
              </div>
              <a
                href="mailto:aryanyadav9811@gmail.com"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#201E1C] text-[#F3EFE9] text-sm font-semibold hover:bg-[#34302C] shadow-sm">
                <Mail className="w-4 h-4" />
                Say Hello
                <ArrowRight className="w-4 h-4" />
              </a>
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
