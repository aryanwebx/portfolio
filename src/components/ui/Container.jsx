import React from 'react';

export function Container({ children, className = '', size = 'default', ...props }) {
  const sizes = {
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
    narrow: 'max-w-4xl',
    text: 'max-w-3xl',
  };

  return (
    <div className={`${sizes[size]} mx-auto px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </div>
  );
}
