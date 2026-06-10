import { ArrowUpRight, Star } from "lucide-react";
import { useContent } from "../../hooks/useContent";
import SectionTitle from "../ui/SectionTitle";

export default function ProjectsSection() {
  const { projects: projectsCopy } = useContent();

  return (
    <section className="space-y-10 py-14 sm:space-y-12 sm:py-20">
      <SectionTitle eyebrow={projectsCopy.eyebrow} title={projectsCopy.title} text={projectsCopy.text} />

      <div className="grid gap-6 lg:grid-cols-2">
        {projectsCopy.projects.map((project) => (
          <article
            key={project.id}
            className={`flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-colors duration-200 hover:shadow-md dark:bg-stone-900 ${
              project.featured
                ? "border-accent-400/50 ring-1 ring-accent-500/20 dark:border-accent-700/50 lg:col-span-2"
                : "border-stone-300 hover:border-stone-400 dark:border-stone-600 dark:hover:border-stone-500"
            }`}
          >
            <div className={`h-1.5 ${project.barClass}`} />
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-heading text-xl font-semibold text-stone-900 dark:text-stone-50 sm:text-2xl">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-300 bg-mint-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-moss-900 dark:border-accent-800 dark:bg-moss-950/50 dark:text-mint-200">
                    <Star size={12} className="text-accent-600 dark:text-accent-400" aria-hidden="true" />
                    {projectsCopy.featuredLabel}
                  </span>
                )}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-base">
                {project.description}
              </p>
              {project.highlights?.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-stone-700 dark:text-stone-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-4 text-sm font-semibold text-accent-700 dark:text-accent-400">{project.impact}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-stone-300 bg-stone-100 px-2 py-1 text-xs font-medium text-stone-800 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800 dark:text-accent-400 dark:hover:text-accent-300"
                  >
                    {projectsCopy.visitSite}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
