import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useContent } from "../../hooks/useContent";
import { btnPrimary, btnSecondary, textLink } from "../ui/buttons";
import MediaSlot from "../ui/MediaSlot";

const sectionClass =
  "scroll-mt-24 border-t border-stone-200 py-14 dark:border-stone-800 sm:py-20";
const h2Class =
  "font-heading text-3xl font-bold tracking-[-0.02em] text-stone-950 dark:text-stone-50 sm:text-4xl";
const h3Class =
  "font-heading text-2xl font-bold leading-tight tracking-[-0.02em] text-stone-950 dark:text-stone-50 sm:text-3xl";
const cardClass =
  "grid gap-10 rounded-2xl border border-stone-300 bg-white p-6 dark:border-stone-700 dark:bg-stone-900 sm:p-10 lg:grid-cols-12";

function ExternalSiteLink({ href, children, newTab, className }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only">{newTab}</span>
    </a>
  );
}

function FeatureCard({ project, newTab }) {
  return (
    <article id={project.id} className={`mt-10 ${cardClass}`}>
      <MediaSlot media={project.media} />
      <div className="lg:col-span-7">
        <h3 className={h3Class}>{project.title}</h3>
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-stone-700 dark:text-stone-300">{project.summary}</p>
        <h4 className="mt-8 font-heading text-base font-semibold text-stone-900 dark:text-stone-100">{project.builtTitle}</h4>
        <ul className="mt-3 space-y-2 text-base leading-relaxed text-stone-700 dark:text-stone-300">
          {project.built.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-700 dark:bg-accent-400" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={project.caseStudyPath} className={btnPrimary}>
            {project.ctaCase}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <ExternalSiteLink href={project.url} newTab={newTab} className={btnSecondary}>
            {project.ctaSite}
            <ArrowUpRight size={16} aria-hidden="true" />
          </ExternalSiteLink>
        </div>
      </div>
      <div className="lg:col-span-5">
        <dl className="border-b border-stone-200 dark:border-stone-800">
          {project.facts.map((fact) => (
            <div key={fact.label} className="border-t border-stone-200 py-3 dark:border-stone-800">
              <dt className="text-sm text-stone-600 dark:text-stone-400">{fact.label}</dt>
              <dd className="mt-0.5 font-semibold text-stone-900 dark:text-stone-50">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{project.stack}</p>
      </div>
    </article>
  );
}

function WideCard({ project, newTab }) {
  return (
    <article id={project.id} className={`mt-6 ${cardClass}`}>
      <MediaSlot media={project.media} />
      <div className="lg:col-span-7">
        <h3 className={h3Class}>{project.title}</h3>
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-stone-700 dark:text-stone-300">{project.summary}</p>
        <div className="mt-8">
          <ExternalSiteLink href={project.url} newTab={newTab} className={`inline-flex items-center gap-2 py-2 ${textLink}`}>
            {project.ctaSite}
            <ArrowUpRight size={16} aria-hidden="true" />
          </ExternalSiteLink>
        </div>
      </div>
      <div className="lg:col-span-5">
        <ul className="border-b border-stone-200 dark:border-stone-800">
          {project.built.map((item) => (
            <li key={item} className="border-t border-stone-200 py-3 text-base leading-relaxed text-stone-700 dark:border-stone-800 dark:text-stone-300">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{project.stack}</p>
      </div>
    </article>
  );
}

function RowCard({ project }) {
  return (
    <article id={project.id} className="border-t border-stone-300 py-8 dark:border-stone-700">
      <h3 className="font-heading text-xl font-bold text-stone-950 dark:text-stone-50 sm:text-2xl">{project.title}</h3>
      <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-stone-700 dark:text-stone-300">{project.summary}</p>
      <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">{project.meta}</p>
    </article>
  );
}

export default function ProjectsSection() {
  const { projects: projectsCopy } = useContent();
  const items = projectsCopy.items;
  const feature = items.find((p) => p.layout === "feature");
  const wide = items.find((p) => p.layout === "wide");
  const rows = items.filter((p) => p.layout === "row");
  const line = items.find((p) => p.layout === "line");

  return (
    <section id="work" aria-labelledby="work-title" className={sectionClass}>
      <h2 id="work-title" className={h2Class}>
        {projectsCopy.title}
      </h2>
      <FeatureCard project={feature} newTab={projectsCopy.newTab} />
      <WideCard project={wide} newTab={projectsCopy.newTab} />
      <div className="mt-12 grid gap-x-12 lg:grid-cols-2">
        {rows.map((project) => (
          <RowCard key={project.id} project={project} />
        ))}
      </div>
      {line && (
        <p className="mt-8 border-t border-stone-300 pt-6 text-base text-stone-700 dark:border-stone-700 dark:text-stone-300">
          {line.summary}
        </p>
      )}
    </section>
  );
}
