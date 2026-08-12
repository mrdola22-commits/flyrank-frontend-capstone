import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-800 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-300">
              Have a project in mind, a job opportunity, or just want to say
              hello? Fill out the form and I&apos;ll get back to you as soon as I
              can.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <span className="flex size-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:hello@example.com"
                    className="text-sm text-slate-200 transition-colors hover:text-indigo-400"
                  >
                    hello@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="flex size-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Location
                  </p>
                  <p className="text-sm text-slate-200">Available for remote work</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-700/80 bg-slate-800/30 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
