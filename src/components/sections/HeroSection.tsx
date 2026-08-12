import { ArrowDown, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),_transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">
          Front-End Developer
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Dola Praveen
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
          I build responsive, accessible web experiences with React and modern
          CSS. Currently completing the FlyRank Front-end AI Engineering
          capstone.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
          >
            Contact me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg border border-slate-600 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
          >
            View projects
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <a
            href="https://github.com/mrdola22-commits/flyrank-frontend-capstone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/dola-mr-b7700036b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <Linkedin className="size-5" />
          </a>
        </div>

        <a
          href="#about"
          className="mt-16 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-200"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          Scroll to explore
        </a>
      </div>
    </section>
  );
}
