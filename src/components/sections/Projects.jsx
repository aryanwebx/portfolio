import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projects } from '../../data/projects';

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5m0 0v5m0-5L7 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`
        group relative bg-card border border-border rounded-3xl overflow-hidden
        hover:border-opacity-60 transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{
        transitionDelay: `${index * 120}ms`,
        borderColor: isVisible ? undefined : 'transparent',
      }}
    >
      {/* Color accent top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }}
      />

      {/* Subtle gradient bg */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.accent} to-transparent`}
      />

      <div className="relative p-7 lg:p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span
                className="font-mono text-xs tracking-wide uppercase px-2.5 py-1 rounded-full border"
                style={{ color: project.color, borderColor: `${project.color}30`, background: `${project.color}10` }}
              >
                {project.category}
              </span>
              <span className={`
                font-mono text-xs px-2.5 py-1 rounded-full
                ${project.status === 'Production'
                  ? 'text-green-400 bg-green-400/10 border border-green-400/25'
                  : 'text-amber-400 bg-amber-400/10 border border-amber-400/25'
                }
              `}>
                ● {project.status}
              </span>
              <span className="font-mono text-xs text-text-muted">{project.year}</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="font-body text-sm text-text-secondary">{project.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
              title="View on GitHub"
            >
              <GitHubIcon />
            </a>
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
                title="View Live"
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-surface/60 border border-border/60 rounded-xl p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-wide">Problem</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">{project.problem}</p>
          </div>
          <div className="bg-surface/60 border border-border/60 rounded-xl p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-wide">Solution</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">{project.solution}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-surface/60 text-text-muted hover:text-text-secondary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors duration-200 group/btn"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          >
            <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {expanded ? 'Hide case study' : 'View full case study'}
        </button>

        {/* Expanded: Architecture + Features */}
        <div
          className={`
            overflow-hidden transition-all duration-500 ease-in-out
            ${expanded ? 'max-h-[600px] opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0'}
          `}
        >
          <div className="border-t border-border/60 pt-5 space-y-5">
            {/* Architecture */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg viewBox="0 0 16 16" fill="none" stroke={project.color} strokeWidth="1.5" className="w-4 h-4">
                  <path d="M2 5h12M2 8h12M2 11h7" strokeLinecap="round" />
                </svg>
                <span className="font-mono text-xs text-text-muted uppercase tracking-wide">Architecture</span>
              </div>
              <div className="bg-surface/60 border border-border/60 rounded-xl p-4">
                <p className="font-mono text-xs text-text-secondary leading-relaxed">{project.architecture}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg viewBox="0 0 16 16" fill="none" stroke={project.color} strokeWidth="1.5" className="w-4 h-4">
                  <path d="M8 2l1.8 3.6L14 6.5l-3 2.9.7 4.1L8 11.5l-3.7 1.9.7-4.1L2 6.5l4.2-.9L8 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-mono text-xs text-text-muted uppercase tracking-wide">Key Features</span>
              </div>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: project.color }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(0,217,255,0.04),transparent)]" />
      <div className="section-container relative">
        <SectionHeader
  label="Projects"
  title="Featured Projects"
  description="A selection of software projects demonstrating full-stack development, scalable backend systems, and real-world problem solving."
/>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/aryanwebx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-display font-medium text-text-secondary border border-border hover:border-accent/40 hover:text-accent bg-card px-8 py-4 rounded-xl transition-all duration-200"
          >
            <GitHubIcon />
           View all projects on GitHub
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
