import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { achievements, stats } from "../../data/experience";

function StatCard({ stat, index }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`
        text-center p-6 bg-card border border-border rounded-2xl
        hover:border-accent/30 transition-all duration-500
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="font-display font-bold text-4xl text-accent mb-1">
        {stat.value}
        <span className="text-accent/70">{stat.suffix}</span>
      </div>
      <div className="font-mono text-xs text-text-muted uppercase tracking-wide">{stat.label}</div>
    </div>
  );
}

function AchievementCard({ item, index }) {
  const { ref, isVisible } = useScrollReveal();

  const typeStyles = {
    hackathon: {
      color: "#F5A623",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },

    achievement: {
      color: "#00D9FF",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },

    education: {
      color: "#34D399",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },

    project: {
      color: "#A78BFA",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
    },

    milestone: {
      color: "#EC4899",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
    },
  };

  const style = typeStyles[item.type] || typeStyles.project;

  return (
    <div
      ref={ref}
      className={`
        group relative flex gap-5 transition-all duration-600
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}>
      {/* Timeline line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`
            w-12 h-12 rounded-2xl ${style.bg} border ${style.border}
            flex items-center justify-center text-2xl
            group-hover:scale-110 transition-transform duration-300
          `}>
          {item.icon}
        </div>
        {index < achievements.length - 1 && <div className="w-px flex-1 bg-border mt-3 mb-1" />}
      </div>

      {/* Content */}
      <div className={`pb-8 ${index === achievements.length - 1 ? "pb-0" : ""}`}>
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <span className="font-mono text-xs text-text-muted">{item.date}</span>
          {item.highlight && (
            <span className="font-mono text-xs text-amber-400 bg-amber-400/10 border border-amber-400/25 px-2 py-0.5 rounded-full">
              Highlighted
            </span>
          )}
        </div>
        <h3 className="font-display font-semibold text-lg text-text-primary mb-0.5 group-hover:text-accent transition-colors duration-300">
          {item.title}
        </h3>
        <p className="font-body text-sm text-text-muted mb-3">{item.subtitle}</p>
        <p className="text-sm text-text-secondary leading-relaxed mb-3 max-w-lg">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface border border-border text-text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-surface/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(245,166,35,0.04),transparent)]" />
      <div className="section-container relative">
        <SectionHeader
          label="Achievements"
          title="Building through consistency"
          description="A snapshot of my academic journey, competitive programming, hackathons, and engineering milestones."
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-2xl">
          {achievements.map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
