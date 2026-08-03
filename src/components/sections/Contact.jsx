import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const contactLinks = [
  {
    label: 'Email',
    value: 'aryanyadav9811@gmail.com',
    href: 'mailto:aryanyadav9811@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 8l10 6 10-6" />
      </svg>
    ),
    color: '#00D9FF',
  },
  {
    label: 'GitHub',
    value: 'github.com/aryanwebx',
    href: 'https://github.com/aryanwebx',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: '#A78BFA',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/aryanwebx',
    href: 'https://linkedin.com/in/aryanwebx',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#34D399',
  },
];

function ContactLinkCard({ link, index }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <a
      ref={ref}
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`
        group flex items-center gap-4 p-5 bg-card border border-border rounded-2xl
        hover:border-opacity-50 transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
      style={{
        transitionDelay: `${index * 80}ms`,
        '--link-color': link.color,
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${link.color}15`,
          border: `1px solid ${link.color}25`,
          color: link.color,
        }}
      >
        {link.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-mono text-xs text-text-muted uppercase tracking-wide mb-0.5">{link.label}</p>
        <p
          className="font-body text-sm text-text-secondary truncate group-hover:transition-colors duration-300"
          style={{ '--hover-color': link.color }}
        >
          {link.value}
        </p>
      </div>
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
      >
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  try {
    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(0,217,255,0.06),transparent)]" />
      <div className="section-container relative">
        <SectionHeader
          label="Get In Touch"
          title="Let's build something great"
          description="I'm actively looking for full-stack and AI engineering opportunities. Whether it's a role, freelance project, or just a chat about tech — reach out."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Links + info */}
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              The best way to reach me is via email or LinkedIn. I typically respond within 24 hours. If you're looking for a developer who can own projects end-to-end — from architecture to deployment — let's talk.
            </p>

            <div className="space-y-3 mt-6">
              {contactLinks.map((link, i) => (
                <ContactLinkCard key={link.label} link={link} index={i} />
              ))}
            </div>

            {/* Availability note */}
            <div className="flex items-start gap-3 p-4 bg-card border border-green-500/20 rounded-2xl mt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse mt-1 flex-shrink-0" />
              <div>
                <p className="font-display font-medium text-sm text-text-primary">Open to opportunities</p>
                <p className="font-body text-xs text-text-secondary mt-0.5">
                  Full-time, internship, or freelance · Remote or hybrid · Starting immediately
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div
            ref={formRef}
            className={`transition-all duration-700 delay-200 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-7">
              <h3 className="font-display font-semibold text-text-primary mb-5">Send a message</h3>

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/25 flex items-center justify-center text-2xl">
                    ✅
                  </div>
                  <p className="font-display font-semibold text-text-primary">Message sent!</p>
                  <p className="font-body text-sm text-text-secondary">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="font-mono text-xs text-accent hover:text-accent-dim transition-colors mt-2"
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs text-text-muted mb-1.5 block uppercase tracking-wide">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs text-text-muted mb-1.5 block uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-text-muted mb-1.5 block uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the project, role, or just say hi..."
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`
                      w-full flex items-center justify-center gap-2.5 font-display font-semibold text-bg
                      py-4 rounded-xl transition-all duration-200 active:scale-[0.98]
                      ${status === 'sending'
                        ? 'bg-accent/60 cursor-not-allowed'
                        : 'bg-accent hover:bg-accent-dim shadow-[0_0_20px_rgba(0,217,255,0.25)] hover:shadow-[0_0_35px_rgba(0,217,255,0.4)]'
                      }
                    `}
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-bg/40 border-t-bg rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                          <path d="M2 8h10M9 4l4 4-4 4M14 3L9 14 7 9 2 7l12-4z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
