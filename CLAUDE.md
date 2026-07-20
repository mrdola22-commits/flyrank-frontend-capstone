# CLAUDE.md

Guidance for AI assistants working in this repository.

## Project

**FlyRank Front-End AI Engineering Capstone** is a responsive, mobile-first web application built for the [FlyRank AI Internship](https://internship.flyrank.ai/tracks) Front-end AI Engineering track. The project demonstrates modern front-end development with AI as a development partner—producing a public, reviewable artifact suitable for mentor review and portfolio use.

The stack centers on web fundamentals (**HTML**, **CSS**, **JavaScript**) extended with **React** for component-based UI. Source control and collaboration use **Git** and **GitHub**.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML (semantic, accessible) |
| Styling | CSS, Tailwind CSS |
| Logic | JavaScript, TypeScript |
| UI | React |
| Build | Vite |
| Version control | Git, GitHub |

## Coding Conventions

### General

- Write self-documenting code; add comments only for non-obvious business logic.
- Keep changes focused—avoid unrelated edits in the same commit.
- Match existing patterns in the file you are editing before introducing new abstractions.

### HTML

- Use semantic elements (`header`, `nav`, `main`, `section`, `footer`, `article`).
- Include meaningful `alt` text on images and labels on form inputs.
- Prefer accessibility attributes (`aria-*`, `role`) when native semantics are insufficient.

### CSS

- Follow a mobile-first approach; add breakpoint overrides with `min-width` media queries.
- Use Tailwind utility classes for layout and spacing; reserve custom CSS for one-off or complex cases.
- Keep a consistent spacing scale and typography hierarchy across pages.

### JavaScript & React

- Use functional components and hooks; avoid class components.
- Name components in PascalCase (`HeroSection`, `NavBar`).
- Name hooks, utilities, and variables in camelCase (`useScrollPosition`, `formatPrice`).
- Co-locate component-specific styles and logic; extract shared UI into `components/ui/`.
- Prefer explicit imports over wildcard imports.
- Handle loading, empty, and error states in data-driven components.

### File Organization

```
src/
├── components/
│   ├── layout/     # Header, Footer, page wrappers
│   ├── ui/         # Reusable primitives (Button, Card)
│   └── sections/   # Page sections (Hero, Features)
├── pages/          # Route-level components
├── hooks/          # Custom React hooks
├── utils/          # Pure helper functions
└── styles/         # Global CSS entry
```

## Git & GitHub

- Commit early and often with small, logical units of work.
- Push to feature branches; open pull requests for review when collaborating.
- Never commit secrets—keep `.env` local and use `.env.example` for templates.
- Keep the default branch deployable at all times.

## Conventional Commits

All commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <short description>

[optional body]

[optional footer]
```

### Types

| Type | Use when |
|------|----------|
| `feat` | Adding a new feature |
| `fix` | Fixing a bug |
| `docs` | Documentation only |
| `style` | Formatting, whitespace (no logic change) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `chore` | Build, tooling, dependency updates |
| `ci` | CI/CD configuration changes |

### Examples

```
feat(hero): add responsive hero section with CTA button
fix(nav): close mobile menu on route change
docs: update README installation steps
chore: upgrade vite to latest patch version
```

- Use imperative mood in the subject line: "add feature" not "added feature".
- Keep the subject line under 72 characters.
- Reference issues in the footer when applicable: `Closes #12`.

## AI-Assisted Development

When using AI to generate or modify code:

- Review every suggestion before accepting; you own the final output.
- Test changes in the browser across mobile, tablet, and desktop viewports.
- Document significant AI-assisted decisions in commit messages or PR descriptions.
- Do not paste secrets, API keys, or private data into AI prompts.
