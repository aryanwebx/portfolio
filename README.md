# Aryan Yadav — Portfolio

A modern, minimal, production-grade developer portfolio built with React + Vite + TailwindCSS.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### 1. Install Dependencies

```bash
cd aryan-portfolio
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder — ready to deploy to Vercel, Netlify, or any static host.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Sticky nav, active section tracking, mobile menu
│   │   └── Footer.jsx          # Social links, copyright
│   ├── sections/
│   │   ├── Hero.jsx            # Headline, typing animation, stats, CTAs
│   │   ├── About.jsx           # Bio, strengths, education
│   │   ├── Skills.jsx          # Skill categories with animated progress bars
│   │   ├── Projects.jsx        # Case study cards with expand/collapse
│   │   ├── Experience.jsx      # Timeline, stats, achievements
│   │   └── Contact.jsx         # Contact links + contact form
│   └── ui/
│       ├── Button.jsx          # Reusable button with variants
│       ├── Card.jsx            # Reusable card wrapper
│       ├── Container.jsx       # Layout container with size variants
│       └── SectionHeader.jsx   # Consistent section titles with scroll reveal
│
├── data/
│   ├── projects.js             # All project data (case studies)
│   ├── skills.js               # Skill categories + tool list
│   └── experience.js           # Achievements, stats, timeline
│
├── hooks/
│   ├── useActiveSection.js     # Tracks which section is in viewport
│   ├── useTypingEffect.js      # Cycling typing animation
│   └── useScrollReveal.js      # Intersection Observer reveal on scroll
│
├── App.jsx                     # Root component
├── main.jsx                    # Entry point
└── index.css                   # Global styles + Tailwind directives
```

---

## 🎨 Design System

| Token         | Value        | Usage                        |
|---------------|--------------|------------------------------|
| `bg`          | `#080C10`    | Page background              |
| `surface`     | `#0E1318`    | Elevated panels              |
| `card`        | `#111820`    | Cards, modals                |
| `border`      | `#1C2630`    | Borders, dividers            |
| `accent`      | `#00D9FF`    | Primary CTA, highlights      |
| `text-primary`| `#E8EDF2`    | Headings, key text           |
| `text-secondary`| `#8A9BB0`  | Body text, descriptions      |
| `text-muted`  | `#4A5A6B`    | Labels, metadata             |

**Fonts:**
- Display/Headlines: **Syne** (weights 600–800)
- Body: **DM Sans** (weights 300–500)
- Code/Labels: **JetBrains Mono** (weights 300–500)

---

## ✏️ Customization

### Update your details

1. **Personal info** — Edit `src/components/sections/Hero.jsx` (name, tagline)
2. **Projects** — Edit `src/data/projects.js` (all project case study data)
3. **Skills** — Edit `src/data/skills.js` (categories, skill names, levels)
4. **Experience** — Edit `src/data/experience.js` (achievements, stats)
5. **Contact links** — Edit `src/components/sections/Contact.jsx`
6. **Social links** — Edit `src/components/layout/Footer.jsx`
7. **Resume** — Place your resume PDF at `public/resume.pdf`

### Add a profile photo

In `src/components/sections/About.jsx`, add an `<img>` tag in the left column.

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://username.github.io/aryan-portfolio"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d dist"
npm run deploy
```

---

## ⚡ Performance Notes

- All animations use CSS transforms (GPU-accelerated)
- Scroll reveal uses IntersectionObserver (no scroll event listeners)
- Fonts loaded via Google Fonts with `display=swap`
- Images should be WebP format for optimal load time
- No heavy third-party animation libraries required

---

## 📄 License

MIT — Feel free to use this as a base for your own portfolio.
