import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FlyRank Capstone Portfolio",
    description:
      "A responsive portfolio built with React, TypeScript, and Tailwind CSS — featuring a validated contact form and mobile-first layout.",
    tags: ["React", "TypeScript", "Tailwind"],
    href: "https://github.com/mrdola22-commits/flyrank-frontend-capstone",
  },
  {
    title: "Component Library Starter",
    description:
      "Reusable UI primitives with accessible patterns for buttons, inputs, and form controls.",
    tags: ["React", "Accessibility"],
    href: "#",
  },
  {
    title: "Responsive Landing Page",
    description:
      "Mobile-first marketing page with semantic sections, smooth scroll navigation, and optimized typography.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-slate-800 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Selected work
        </h2>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group flex flex-col rounded-2xl border border-slate-700/80 bg-slate-800/40 p-6 transition-colors hover:border-indigo-500/50 hover:bg-slate-800/70"
            >
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 transition-colors group-hover:text-indigo-300"
              >
                View project
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
