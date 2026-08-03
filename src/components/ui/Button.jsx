import React from 'react';

const variants = {
  primary:
    'bg-accent text-bg font-semibold hover:bg-accent-dim active:scale-[0.97] shadow-[0_0_20px_rgba(0,217,255,0.25)] hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]',
  secondary:
    'bg-transparent text-text-primary border border-border hover:border-accent/50 hover:text-accent active:scale-[0.97]',
  ghost:
    'bg-transparent text-text-secondary hover:text-accent active:scale-[0.97]',
  outline:
    'bg-transparent text-accent border border-accent/40 hover:border-accent hover:bg-accent/5 active:scale-[0.97]',
};

const sizes = {
  sm: 'text-sm px-4 py-2 rounded-lg',
  md: 'text-sm px-6 py-3 rounded-xl',
  lg: 'text-base px-8 py-4 rounded-xl',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      className={`
        inline-flex items-center gap-2 font-display font-medium
        transition-all duration-200 select-none
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </Tag>
  );
}
