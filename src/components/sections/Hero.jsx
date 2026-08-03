import React, { useEffect, useState } from "react";
import { useTypingEffect } from "../../hooks/useTypingEffect";

const roles = ["Software Engineer", "Full Stack Developer", "Problem Solver"];

const floatingTags = [
  { label: "React.js", x: "8%", y: "20%", delay: "0s" },
  { label: "Node.js", x: "85%", y: "15%", delay: "0.5s" },
  { label: "Express.js", x: "90%", y: "70%", delay: "1s" },
  { label: "MongoDB", x: "5%", y: "75%", delay: "1.5s" },
  { label: "Redis", x: "78%", y: "45%", delay: "0.8s" },
  { label: "REST APIs", x: "12%", y: "48%", delay: "0.3s" },
];

export function Hero() {
  const typedRole = useTypingEffect(roles, 65, 35, 2200);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,217,255,0.08),transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      {/* Floating tech tags — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingTags.map((tag, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs text-text-muted/50 border border-border/60 bg-surface/60 backdrop-blur-sm px-3 py-1.5 rounded-full"
            style={{
              left: tag.x,
              top: tag.y,
              animation: `float ${5 + i * 0.4}s ease-in-out infinite`,
              animationDelay: tag.delay,
            }}>
            {tag.label}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div
          className={`
    inline-flex items-center gap-2 font-mono text-xs text-accent
    bg-accent/8 border border-accent/20 px-4 py-2 rounded-full mb-8
    transition-all duration-700 delay-100
    ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
  `}>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Open to Software Engineering Opportunities
        </div>

        {/* Headline */}
        <h1
          className={`
    font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl
    leading-[1.05] tracking-tight mb-6
    transition-all duration-700 delay-200
    ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}>
          <span className="text-text-primary">Hi, I'm </span>

          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-accent via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Aryan Yadav
            </span>

            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          </span>

          <br />

          <span className="text-text-primary">Building software that scales.</span>
        </h1>

        {/* Typing Role */}
        <div
          className={`
            font-display text-2xl sm:text-3xl lg:text-4xl text-text-secondary mb-6 h-12 flex items-center justify-center
            transition-all duration-700 delay-300
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}>
          <span className="text-text-muted mr-2">{"—"}</span>
          <span className="text-text-primary">{typedRole}</span>
          <span className="inline-block w-0.5 h-8 bg-accent ml-1 animate-blink" />
        </div>

        {/* Tagline */}
        <p
          className={`
    font-body text-lg lg:text-xl text-text-secondary
    max-w-3xl mx-auto mb-10 leading-relaxed
    transition-all duration-700 delay-[400ms]
    ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}>
          Software Engineering undergraduate passionate about building scalable, high-performance
          web applications with modern full-stack technologies. Experienced in developing responsive
          React applications, RESTful APIs, and backend systems using Node.js, Express.js, MongoDB,
          and Redis.
        </p>

        {/* CTA Buttons */}
        <div
          className={`
            flex flex-col sm:flex-row items-center justify-center gap-4 mb-16
            transition-all duration-700 delay-500
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}>
          <button
            onClick={() => handleScroll("projects")}
            className="group inline-flex items-center gap-2.5 font-display font-semibold text-bg bg-accent hover:bg-accent-dim px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_0_25px_rgba(0,217,255,0.3)] hover:shadow-[0_0_40px_rgba(0,217,255,0.45)] active:scale-[0.97]">
            View Projects
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 transition-transform group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <a
            href="./Aryan_Yadav_Resume.pdf"
            download
            className="inline-flex items-center gap-2.5 font-display font-medium text-text-primary border border-border hover:border-accent/50 hover:text-accent bg-transparent hover:bg-accent/5 px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.97]">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-4 h-4">
              <path
                d="M8 2v8M5 7l3 3 3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download Resume
          </a>

          <button
            onClick={() => handleScroll("contact")}
            className="inline-flex items-center gap-2.5 font-display font-medium text-text-secondary hover:text-text-primary px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.97]">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-4 h-4">
              <path
                d="M2 4l6 5 6-5M2 4h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Contact Me
          </button>
        </div>

        {/* Stats bar */}
        <div
          className={`
    inline-flex items-center gap-8 sm:gap-12
    bg-surface/80 backdrop-blur
    border border-border/60
    rounded-2xl
    px-8 py-5
    transition-all duration-700 delay-[600ms]
    ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}>
          {[
            {
              value: "400+",
              label: "LeetCode",
            },
            {
              value: "3+",
              label: "Projects",
            },
            {
              value: "SIH 2025",
              label: "External Round",
            },
            {
              value: "7.7",
              label: "CGPA",
            },
          ].map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div className="text-center">
                <div className="font-display font-bold text-2xl text-accent">{stat.value}</div>

                <div className="font-mono text-xs text-text-muted mt-0.5 whitespace-nowrap">
                  {stat.label}
                </div>
              </div>

              {i < 3 && <div className="w-px h-8 bg-border hidden sm:block" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted/50 animate-bounce">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <svg
          viewBox="0 0 16 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-4 h-6">
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="7" r="2" fill="currentColor" className="animate-bounce" />
        </svg>
      </div>
    </section>
  );
}
