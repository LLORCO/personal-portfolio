import { Download, Mail } from "lucide-react";
import { useContent } from "../../hooks/useContent";
import { btnContactCv, btnContactPrimary, contactTextLink } from "../ui/buttons";

export default function ContactSection() {
  const { contact, personal, locale, projects } = useContent();
  const cvHref = personal.cv[locale];

  return (
    <section id="contact" className="scroll-mt-24 py-14 sm:py-20">
      <div className="rounded-2xl bg-moss-950 p-8 text-white sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
        <div className="min-w-0">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">{contact.title}</h2>
          <p className="mt-4 max-w-[60ch] text-lg text-mint-100">{contact.text}</p>
        </div>
        <div className="mt-8 flex min-w-0 flex-wrap items-center gap-3 lg:mt-0">
          <a href={`mailto:${personal.email}`} className={btnContactPrimary}>
            <Mail size={16} aria-hidden="true" />
            {contact.emailCta}
          </a>
          <a href={cvHref} download type="application/pdf" className={btnContactCv}>
            <Download size={16} aria-hidden="true" />
            {contact.cv}
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center py-3 ${contactTextLink}`}
          >
            {contact.linkedin}
            <span className="sr-only">{projects.newTab}</span>
          </a>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center py-3 ${contactTextLink}`}
          >
            {contact.github}
            <span className="sr-only">{projects.newTab}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
