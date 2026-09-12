import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { skillCategories, tools } from "../../data/skills";

function CategoryCard({ category, index }) {
  const { ref, isVisible } = useScrollReveal();

  const categoryColors = {
    frontend: {
      border: "border-cyan-500/20",
      glow: "from-cyan-500/5",
      icon: "#00D9FF",
    },
    backend: {
      border: "border-green-500/20",
      glow: "from-green-500/5",
      icon: "#34D399",
    },
    database: {
      border: "border-amber-500/20",
      glow: "from-amber-500/5",
      icon: "#F5A623",
    },
    tools: {
      border: "border-violet-500/20",
      glow: "from-violet-500/5",
      icon: "#A78BFA",
    },
  };

  const colors = categoryColors[category.id];

  return (
    <div
      ref={ref}
      className={`
        border-b border-border pb-6
        transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span
            className="font-mono text-xs tracking-[0.15em] uppercase mb-1 block"
            style={{ color: colors.icon }}>
            {category.label}
          </span>
          <p className="font-body text-xs text-text-muted">{category.description}</p>
        </div>

        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
          style={{
            background: `${colors.icon}15`,
            border: `1px solid ${colors.icon}25`,
          }}>
          {category.icon}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {category.skills.map((skill, i) => (
          <div
            key={skill.name}
            title={skill.name}
            className="
              flex flex-col items-center justify-center
              p-3 rounded-none bg-transparent border-b border-border
              hover:border-accent
              transition-all duration-300 group
            "
            style={{ transitionDelay: `${i * 80}ms` }}>
            <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2 object-contain" />

            <span
              className="
              text-xs text-text-secondary
              group-hover:text-accent transition-colors
            ">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { ref: toolsRef, isVisible: toolsVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding relative bg-surface/40">
      <div className="section-container relative">
        <SectionHeader
          label="Technical Skills"
          title="Technologies I work with"
          description="A curated collection of the languages, frameworks, databases, and tools I use to design, build, and ship scalable software."
        />

        {/* Categories */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        {/* Tools */}
        <div
          ref={toolsRef}
          className={`transition-all duration-700 ${
            toolsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <div className="border-t border-border pt-5">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-text-muted">
                Tools & Environment
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="
                    font-mono text-xs bg-transparent border-b border-border
                    text-text-secondary hover:border-accent/40
                    hover:text-accent px-1 py-2
                    transition-all duration-200
                  ">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
