import { useContent } from "../../hooks/useContent";
import { textLink } from "../ui/buttons";

export default function CommunitySection() {
  const { community, projects } = useContent();

  return (
    <section
      id="community"
      aria-labelledby="community-title"
      className="scroll-mt-24 border-t border-stone-200 py-14 dark:border-stone-800 sm:py-20"
    >
      <h2
        id="community-title"
        className="font-heading text-3xl font-bold tracking-[-0.02em] text-stone-950 dark:text-stone-50 sm:text-4xl"
      >
        {community.title}
      </h2>
      <ul className="mt-8 border-b border-stone-300 dark:border-stone-700">
        {community.items.map((item) => (
          <li
            key={item.name}
            className="grid gap-2 border-t border-stone-300 py-6 dark:border-stone-700 sm:grid-cols-[14rem_1fr]"
          >
            <div>
              <h3 className="font-heading text-xl font-semibold text-stone-950 dark:text-stone-50">{item.name}</h3>
              {item.role ? <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{item.role}</p> : null}
            </div>
            <div>
              <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300">{item.description}</p>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={`mt-2 inline-flex ${textLink}`}>
                  {item.hrefLabel}
                  <span className="sr-only">{projects.newTab}</span>
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
