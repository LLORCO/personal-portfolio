import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { useContent } from "../../hooks/useContent";
import DownloadCvButton from "../DownloadCvButton";

const contactActionClass =
  "inline-flex min-w-0 cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/55 hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function ContactSection() {
  const { contact, availability, personal } = useContent();

  return (
    <section id="contact" className="scroll-mt-24 py-14 sm:scroll-mt-28 sm:py-20">
      <div className="flex flex-col gap-8 rounded-2xl border border-moss-800/40 bg-gradient-to-br from-moss-900 via-moss-800 to-moss-950 p-8 text-white shadow-xl shadow-stone-900/25 dark:border-moss-700/50 dark:shadow-black/40 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-10">
        <div className="min-w-0 max-w-2xl">
          <div className="flex flex-wrap gap-2">
            <p className="inline-block rounded-md border border-white/30 bg-white/10 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-white">
              {contact.eyebrow}
            </p>
            <p className="inline-block rounded-md border border-emerald-400/40 bg-emerald-500/15 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-emerald-50">
              {availability}
            </p>
          </div>
          <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-sm text-emerald-50/90 sm:text-base">{contact.text}</p>
        </div>
        <div className="flex min-w-0 flex-col gap-4 lg:max-w-md">
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <a href={`mailto:${personal.email}`} className={contactActionClass}>
              <Mail size={16} className="shrink-0 opacity-90" aria-hidden="true" />
              <span className="truncate">{personal.email}</span>
            </a>
            <a href={personal.links.github} target="_blank" rel="noopener noreferrer" className={contactActionClass}>
              <Github size={16} className="shrink-0 opacity-90" aria-hidden="true" />
              {contact.github}
            </a>
            <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer" className={contactActionClass}>
              <Linkedin size={16} className="shrink-0 opacity-90" aria-hidden="true" />
              {contact.linkedin}
            </a>
            <a href={personal.links.pytalavera} target="_blank" rel="noopener noreferrer" className={contactActionClass}>
              <Globe size={16} className="shrink-0 opacity-90" aria-hidden="true" />
              {contact.pytalavera}
            </a>
          </div>
          <DownloadCvButton variant="contact" />
        </div>
      </div>
    </section>
  );
}
