# Wilson Tennis — Performance Series Landing Page

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white&style=flat-square)
![Three.js](https://img.shields.io/badge/Three.js-0.183-000000?logo=threedotjs&logoColor=white&style=flat-square)
![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?logo=greensock&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/License-Personal_Project-gray?style=flat-square)

An immersive, scroll-driven product landing page for the Wilson tennis racket Performance Series. Built as a personal portfolio project to demonstrate advanced web animation techniques using React, Three.js/R3F, and GSAP.

> **Disclaimer:** This is a personal project and is not affiliated with, endorsed by, or connected to Wilson Sporting Goods in any way.

---

## Description

This landing page showcases the Wilson Blade 98 and Performance Series racket lineup through a cinematic, interactive experience. As users scroll through the page, a 3D tennis racket model animates in real-time — repositioning, rotating, and scaling across each section. Scroll-triggered GSAP animations, a live ticker marquee, animated SVG connector lines, and a detailed product collection make the experience feel like a high-end product campaign. The project was built combining Three.js 3D rendering with GSAP ScrollTrigger in a single cohesive React application.

---

## Goal

The goal of this project was to:

- Build a visually compelling, production-quality landing page from scratch
- Integrate a real-time 3D model (`@react-three/fiber`) driven entirely by scroll position
- Demonstrate understanding of GSAP timeline and ScrollTrigger animations
- Implement a full design system (typography, color palette, component library) using Tailwind CSS
- Create a responsive layout that works across mobile, tablet, and desktop

---

## Screenshots

| Section | Preview |
|--------|---------|
| Hero |<img src="public\screenshots\preview_home.png" width="auto" height="500">|
| Features |<img src="public\screenshots\preview_features.png" width="auto" height="500"> |
| Technology | <img src="public\screenshots\preview_technology.png" width="auto" height="500"> |
| Collection | <img src="public\screenshots\preview_collection.png" width="auto" height="500"> |

---

## Features

- **Animated Loading Screen** — Progress bar fills while the 3D GLTF model loads in the background, then transitions into the hero section
- **Scroll-Driven 3D Racket** — A fixed WebGL canvas renders a Wilson Blade tennis racket that repositions, rotates, and scales between five distinct keyframe states as the user scrolls
- **GSAP Hero Animation** — Staggered entrance animations for headlines, geometric decorations, and CTA buttons on page load
- **Infinite Ticker Marquee** — Two counter-scrolling rows of brand text using GSAP's infinite repeating timeline
- **Technology Grid** — Material specs and stats with scroll-triggered staggered card animations
- **Collection Cards** — Product cards with before/after image hover swaps and slanted accent panels using CSS `clip-path`
- **Responsive Design** — Mobile-first layout that adapts across all breakpoints

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
git clone https://github.com/LuisHuerta4/Tennis-Landing-Page.git
cd Tennis-Landing-Page
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

---

## Project Structure

```
Tennis-Landing-Page/
├── src/
│   ├── components/
│   │   ├── Hero.jsx                  # Hero section with GSAP entrance animation
│   │   ├── Navbar.jsx                # Fixed navigation bar
│   │   ├── Features.jsx              # Feature cards with animated SVG connectors
│   │   ├── Technology.jsx            # Materials & construction stats grid
│   │   ├── Collection.jsx            # Product collection with hover image swap
│   │   ├── Ticker.jsx                # Infinite marquee text rows
│   │   ├── Footer.jsx                # Footer with legal disclaimer
│   │   ├── LoadingScreen.jsx         # Animated loading overlay
│   │   ├── RacketScene.jsx           # R3F WebGL canvas with 3D racket model
│   │   └── ScrollAnimationManager.jsx # Bridges scroll progress to 3D model
│   ├── lib/
│   │   ├── scrollStore.js            # Mutable scroll progress store (DOM ↔ WebGL bridge)
│   │   ├── loadStore.js              # Model load completion callback store
│   │   └── racketKeyframes.js        # 3D racket position/rotation keyframes per section
│   ├── App.jsx                       # Root component, loading & animation state
│   ├── main.jsx                      # Entry point, GSAP ScrollTrigger registration
│   └── index.css                     # Tailwind v4 + custom CSS theme variables
├── public/
│   ├── images/                       # Racket product images (before/after pairs)
│   └── models/
│       └── tennis_racket_wilson_blade/  # GLTF model with textures
├── package.json
├── vite.config.js
└── index.html
```

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| React | 19.2 | UI framework |
| Vite | 8.0 | Build tool & dev server |
| Three.js | 0.183 | 3D graphics engine |
| @react-three/fiber | 9.5 | React renderer for Three.js |
| @react-three/drei | 10.7 | R3F helper components (useGLTF, Environment) |
| GSAP | 3.14 | Animation engine + ScrollTrigger plugin |
| @gsap/react | 2.1 | GSAP React hooks integration |
| Tailwind CSS | 4.2 | Utility-first styling framework |

For full technical documentation, see [Documentation.md](Documentation/DOCUMENTATION.md).

---

## License

Personal project — not affiliated with Wilson Sporting Goods Co.
