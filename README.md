# FlyRank Front-End AI Engineering Capstone

A responsive, mobile-first web application built as the capstone project for the [FlyRank AI Internship](https://internship.flyrank.ai/tracks) **Front-end AI Engineering** track. This repository documents the full development lifecycle—from AI-assisted planning and implementation to deployment and browser QA—serving as reviewable evidence of front-end craftsmanship and responsible AI use.

---

## Project Overview

FlyRank Front-End Capstone is a production-quality front-end artifact designed to demonstrate modern web development skills with AI as a development partner. The project ships a fully responsive interface optimized for mobile, tablet, and desktop viewports, with clean Tailwind CSS execution and accessible, maintainable component architecture.

The capstone aligns with FlyRank's Front-end AI Engineering brief: deliver a public, inspectable website that reviewers can open without extra context. Development was guided by AI-assisted workflows (prompting, iteration, debugging, and QA) while maintaining clear human ownership of design decisions and final code quality.

**Capstone type:** Client-style responsive website *(adapt this line if you chose a personal site or ecommerce-style build)*

**Live demo:** *[Add your deployed URL — e.g. Vercel, Netlify, or GitHub Pages]*

---



## Objectives


| Objective                  | Description                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------- |
| **Responsive design**      | Mobile-first layout that scales cleanly across breakpoints without horizontal scroll or broken UI |
| **Tailwind execution**     | Consistent spacing, typography, and color system using utility-first CSS                          |
| **Component architecture** | Reusable, readable React components with clear separation of concerns                             |
| **AI-assisted workflow**   | Document prompts, iterations, and debugging steps used during development                         |
| **Accessibility**          | Semantic HTML, keyboard navigation, and sufficient color contrast                                 |
| **Performance**            | Optimized assets, lazy loading where appropriate, and fast initial page load                      |
| **Deployable artifact**    | Public URL suitable for mentor review and portfolio use                                           |


---



## Tech Stack


| Category            | Technology                                              |
| ------------------- | ------------------------------------------------------- |
| **Framework**       | [React 19](https://react.dev/)                          |
| **Build tool**      | [Vite](https://vitejs.dev/)                             |
| **Language**        | TypeScript                                              |
| **Styling**         | [Tailwind CSS](https://tailwindcss.com/)                |
| **Routing**         | React Router *(if multi-page)*                          |
| **Icons**           | Lucide React / Heroicons                                |
| **Deployment**      | Vercel / Netlify / Cloudflare Pages                     |
| **AI tooling**      | Cursor, ChatGPT, or Claude *(for assisted development)* |
| **Version control** | Git & GitHub                                            |




Planned Tech Stack

- HTML

- CSS

- JavaScript

- React (planned)

- Git

- GitHub

- Cursor AI



---



## Installation



### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm, pnpm, or yarn
- Git



### Setup

1. **Clone the repository**
  ```bash
   git clone https://github.com/<your-username>/flyrank-frontend-capstone.git
   cd flyrank-frontend-capstone
  ```
2. **Install dependencies**
  ```bash
   npm install
  ```
3. **Configure environment variables** *(if applicable)*
  ```bash
   cp .env.example .env
  ```
   Edit `.env` with any required API keys or configuration values.
4. **Start the development server**
  ```bash
   npm run dev
  ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.



### Available Scripts


| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start local development server with hot reload |
| `npm run build`   | Compile TypeScript and build for production    |
| `npm run preview` | Preview the production build locally           |
| `npm run lint`    | Run ESLint across the project                  |


---



## Folder Structure

```
flyrank-frontend-capstone/
├── public/                 # Static assets (favicon, images, robots.txt)
├── src/
│   ├── assets/             # Images, fonts, and media imported by components
│   ├── components/
│   │   ├── layout/         # Header, Footer, Navigation, Page wrappers
│   │   ├── ui/             # Reusable UI primitives (Button, Card, Input)
│   │   └── sections/       # Page-specific sections (Hero, Features, CTA)
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Route-level page components
│   ├── styles/             # Global CSS and Tailwind entry point
│   ├── utils/              # Helper functions and constants
│   ├── App.tsx             # Root application component
│   └── main.tsx            # Application entry point
├── .env.example            # Environment variable template
├── index.html              # HTML shell
├── package.json
├── tailwind.config.js      # Tailwind theme and content paths
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── README.md
```

---



## AI-Assisted Development

This project was built using AI as a development partner, consistent with FlyRank capstone requirements. The workflow included:

- **Planning** — AI-assisted wireframing, component breakdown, and tech decisions
- **Implementation** — Prompt-driven scaffolding with human review of every change
- **Debugging** — AI-supported error diagnosis and fix verification
- **QA** — Cross-browser and responsive testing with documented results

> Reviewers can inspect commit history and this README for evidence of ownership, safe AI use, and a clear explanation of what was built.

---



## Future Improvements

- [ ] **Dark mode** — System-aware theme toggle with persisted user preference
- [ ] **Animation polish** — Subtle scroll-triggered and micro-interactions via Framer Motion
- [ ] **Form validation** — Client-side validation with accessible error messaging
- [ ] **SEO & meta tags** — Open Graph, Twitter cards, and structured data
- [ ] **Unit & E2E tests** — Vitest component tests and Playwright browser tests
- [ ] **CMS integration** — Headless content source for dynamic page sections
- [ ] **Internationalization (i18n)** — Multi-language support for broader reach
- [ ] **Performance audit** — Lighthouse score optimization and Core Web Vitals tuning
- [ ] **Ecommerce features** — Product catalog, cart UI, and checkout flow *(if applicable)*

---



## License

This project was created as educational work for the FlyRank AI Internship. All code is owned by the author and may be used in personal portfolios.

---



## Author

**[Dola Praveen]** — FlyRank AI Internship, Front-end AI Engineering Track

- GitHub:   **[https://github.com/mrdola22-commits/flyrank-frontend-capstone.git](https://github.com/mrdola22-commits/flyrank-frontend-capstone.git)  [](https://github.com/your-username)
- LinkedIn: [Yhttps://www.linkedin.com/in/dola-mr-b7700036b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app](https://linkedin.com/in/your-profile)
- Live site: Live demo: Not deployed yet (will be deployed during the internship).





## Progress

- Initial project setup completed.

- GitHub repository created.

- AI development environment configured.



