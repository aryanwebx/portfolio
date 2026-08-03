import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function SectionHeader({ label, title, description, align = 'left', className = '' }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`
        mb-16
        ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}
        ${className}
        transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      {label && (
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-3 block">
          {label}
        </span>
      )}
      <h2 className="font-display font-bold text-4xl lg:text-5xl text-text-primary leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
