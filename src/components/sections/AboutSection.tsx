const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Responsive Design",
  "Accessibility",
  "Git & GitHub",
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-slate-800 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
          About
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Crafting thoughtful front-end experiences
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
          I&apos;m a front-end developer focused on building clean, performant
          interfaces that work beautifully on every device. My approach combines
          semantic HTML, component-driven architecture, and AI-assisted
          workflows to ship polished results efficiently.
        </p>

        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Skills & Tools
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5 text-sm text-slate-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
