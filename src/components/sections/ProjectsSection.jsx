import "../../styles/projects-motion.css";
import { useContent } from "../../hooks/useContent";
import FigsCard from "../projects/FigsCard";
import MemoryAirCard from "../projects/MemoryAirCard";
import TextsReveal from "../projects/TextsReveal";

export default function ProjectsSection() {
  const { projects } = useContent();

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 space-y-8 py-14 sm:scroll-mt-28 sm:space-y-10 sm:py-20"
    >
      <TextsReveal titleId="projects-title" title={projects.title} text={projects.text} />

      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.9fr)]">
        <MemoryAirCard featured={projects.featured} />

        <div className="flex min-w-0 flex-col gap-4">
          <FigsCard figs={projects.figs} />
          <ul className="flex flex-col">
            {projects.others.map((item) => (
              <li
                key={item.title}
                className="border-t-2 border-moss-950/15 py-3.5 first:pt-3.5 dark:border-mint-200/25"
              >
                <h3 className="font-heading text-xl font-bold tracking-tight text-moss-950 dark:text-stone-50">
                  {item.title}
                </h3>
                <p className="mt-1 text-[0.98rem] leading-snug text-stone-700 dark:text-stone-300">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
