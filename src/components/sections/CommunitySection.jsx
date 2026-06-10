import { ArrowUpRight, Users } from "lucide-react";
import { useContent } from "../../hooks/useContent";
import SectionTitle from "../ui/SectionTitle";

export default function CommunitySection() {
  const { community } = useContent();

  return (
    <section className="space-y-10 py-14 sm:space-y-12 sm:py-20">
      <SectionTitle eyebrow={community.eyebrow} title={community.title} text={community.text} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {community.cards.map((card) => (
          <article
            key={card.title}
            className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
              card.accent
                ? "border-accent-300 bg-mint-50 dark:border-accent-800 dark:bg-moss-950/50"
                : "border-stone-300 bg-white dark:border-stone-600 dark:bg-stone-900"
            }`}
          >
            <div className="inline-flex w-fit rounded-xl border-2 border-accent-400/60 bg-white p-2.5 text-accent-600 shadow-sm ring-1 ring-accent-500/15 dark:border-accent-600/50 dark:bg-stone-800 dark:text-accent-400 dark:ring-accent-500/25">
              <Users size={20} strokeWidth={2.25} aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-stone-900 dark:text-stone-50">{card.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-800 dark:text-stone-200">{card.description}</p>
            {card.href && (
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800 dark:text-accent-400 dark:hover:text-accent-300"
              >
                {card.hrefLabel}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
