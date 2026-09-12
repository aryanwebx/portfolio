import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeader } from '../ui/SectionHeader';

const strengths = [
  {
    icon: '01',
    title: 'Full-Stack',
    desc: 'React, Node.js, Express & MongoDB',
  },
  {
    icon: '02',
    title: 'Backend',
    desc: 'REST APIs, Redis, JWT & Socket.IO',
  },
  {
    icon: '03',
    title: 'Problem Solver',
    desc: '400+ LeetCode problems solved',
  },
  {
    icon: '04',
    title: 'AI-Assisted',
    desc: 'Claude, Cursor & Prompt Engineering',
  },
];

export function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="About Me"
          title="Software Engineer focused on building scalable products."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="space-y-5 text-text-secondary leading-relaxed">

              <p>
                I'm <span className="text-text-primary font-medium">Aryan Yadav</span>,
                a B.Tech Computer Science (AI & ML) undergraduate passionate about
                designing reliable software and solving real-world engineering problems.
              </p>

              <p>
                My primary expertise lies in
                <span className="text-accent font-medium">
                  {' '}React, Node.js, Express.js, MongoDB, Redis,
                  REST API development, and scalable backend architecture
                </span>.
                I enjoy building clean, performant applications that deliver
                exceptional user experiences.
              </p>

              <p>
                I have solved
                <span className="text-text-primary font-medium">
                  {' '}400+ Data Structures & Algorithms problems
                </span>
                and continuously strengthen my understanding of core Computer
                Science fundamentals while shipping production-ready full-stack
                applications.
              </p>

              <p>
                Beyond coding, I leverage
                <span className="text-accent font-medium">
                  {' '}AI-assisted development tools such as Claude and Cursor
                </span>
                to accelerate development workflows, improve code quality, and
                build maintainable software systems.
              </p>

            </div>
          </div>

          {/* Right */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-150 ${
              rightVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {strengths.map((item, index) => (
                <div
                  key={index}
                  className="border-t border-border pt-4 hover:border-accent transition-colors duration-300"
                >
                  <div className="font-mono text-xs text-accent mb-6">{item.icon}</div>

                  <h3 className="text-text-primary font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}