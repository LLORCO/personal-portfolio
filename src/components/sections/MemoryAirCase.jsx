import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { useContent } from "../../hooks/useContent";
import { btnSecondary, textLink } from "../ui/buttons";
import MediaSlot from "../ui/MediaSlot";

export default function MemoryAirCase() {
  const { caseStudies, personal, locale, projects } = useContent();
  const study = caseStudies.memoryAir;
  const cvHref = personal.cv[locale];

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <MediaSlot media={study.media.hero} />
      <h1 className="font-heading text-4xl font-bold tracking-[-0.025em] text-stone-950 dark:text-stone-50 sm:text-5xl">
        {study.title}
      </h1>
      <p className="mt-4 max-w-[50ch] text-lg leading-relaxed text-stone-700 dark:text-stone-300">{study.intro}</p>

      <dl className="mt-10 border-b border-stone-200 dark:border-stone-800">
        {study.facts.map((fact) => (
          <div key={fact.label} className="border-t border-stone-200 py-3 dark:border-stone-800">
            <dt className="text-sm text-stone-600 dark:text-stone-400">{fact.label}</dt>
            <dd className="mt-0.5 font-semibold text-stone-900 dark:text-stone-50">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <MediaSlot media={study.media.beforeAfter} />

      {study.sections.map((section, index) => (
        <section key={section.title} aria-labelledby={`case-h2-${index}`}>
          <h2
            id={`case-h2-${index}`}
            className="mt-14 font-heading text-2xl font-bold text-stone-950 dark:text-stone-50"
          >
            {section.title}
          </h2>
          {section.paragraphs?.map((p) => (
            <p key={p} className="mt-4 max-w-[50ch] text-lg leading-relaxed text-stone-700 dark:text-stone-300">
              {p}
            </p>
          ))}
          {section.list ? (
            <ul className="mt-4 max-w-[50ch] space-y-3 text-lg leading-relaxed text-stone-700 dark:text-stone-300">
              {section.list.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-700 dark:bg-accent-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-stone-900 dark:text-stone-50">{item.label}</strong>{" "}
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
          {section.after ? (
            <p className="mt-4 max-w-[50ch] text-lg leading-relaxed text-stone-700 dark:text-stone-300">{section.after}</p>
          ) : null}
        </section>
      ))}

      <p className="mt-6">
        <a
          href={personal.links.memoryAir}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 ${textLink}`}
        >
          {study.ctaSite}
          <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only">{projects.newTab}</span>
        </a>
      </p>

      <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-stone-300 pt-8 dark:border-stone-700">
        <a href="/#work" className={btnSecondary}>
          <ArrowLeft size={16} aria-hidden="true" />
          {study.back}
        </a>
        <a href={cvHref} download type="application/pdf" className={btnSecondary}>
          <Download size={16} aria-hidden="true" />
          {study.cv}
        </a>
      </div>
    </article>
  );
}
