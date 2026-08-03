import React from 'react';

export function Card({ children, className = '', hover = true, glow = false, ...props }) {
  return (
    <div
      className={`
        bg-card border border-border rounded-2xl
        ${hover ? 'hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,217,255,0.06)] transition-all duration-300' : ''}
        ${glow ? 'shadow-[0_0_30px_rgba(0,217,255,0.05)]' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
