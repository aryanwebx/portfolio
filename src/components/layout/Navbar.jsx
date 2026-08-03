import React, { useState, useEffect } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-bg/90 backdrop-blur-xl border-b border-border/60 py-3'
            : 'bg-transparent py-5'
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="font-display font-bold text-xl text-text-primary hover:text-accent transition-colors duration-200 flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                <path d="M4 16L10 4L16 16" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 12H14" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span>
              Aryan<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`
                    relative font-body text-sm px-4 py-2 rounded-lg transition-all duration-200
                    ${isActive
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                    }
                  `}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-accent/8 rounded-lg border border-accent/15" />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="hidden md:inline-flex items-center gap-2 font-display font-medium text-sm text-bg bg-accent hover:bg-accent-dim px-5 py-2.5 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(0,217,255,0.2)]"
            >
              Hire Me
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-surface transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden transition-all duration-300
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-bg/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        {/* Menu */}
        <div className={`
          absolute top-0 right-0 w-full max-w-xs h-full bg-surface border-l border-border
          flex flex-col pt-24 px-8 pb-12 gap-2
          transition-transform duration-300
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {navLinks.map((link, i) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
                className={`
                  font-display font-medium text-xl py-3 px-4 rounded-xl transition-all duration-300
                  ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                  ${isActive ? 'text-accent bg-accent/10' : 'text-text-secondary hover:text-text-primary hover:bg-card'}
                `}
              >
                {link.label}
              </a>
            );
          })}
          <div className="mt-auto pt-8 border-t border-border">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="flex items-center justify-center gap-2 font-display font-semibold text-bg bg-accent hover:bg-accent-dim w-full py-4 rounded-xl transition-all duration-200"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
