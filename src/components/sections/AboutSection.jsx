import SectionTitle from "../ui/SectionTitle";
import { useContent } from "../../hooks/useContent";

export default function AboutSection() {
  const { about } = useContent();

  return (
    <section className="space-y-10 py-14 sm:space-y-12 sm:py-20">
      <SectionTitle eyebrow={about.eyebrow} title={about.title} text={about.text} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {about.pillars.map(({ text, variant }) => (
          <article
            key={text}
            className={`rounded-2xl border p-5 shadow-sm transition-colors duration-200 hover:border-accent-600/50 ${
              variant === "accent"
                ? "border-accent-300 bg-mint-50 dark:border-accent-800 dark:bg-moss-950/50"
                : "border-stone-300 bg-white dark:border-stone-600 dark:bg-stone-900"
            }`}
          >
            <p className="text-sm font-medium leading-relaxed text-stone-800 dark:text-stone-200 sm:text-base">{text}</p>
          </article>
        ))}
      </div>

      <blockquote className="rounded-2xl border border-accent-300/60 bg-gradient-to-r from-mint-50 to-white px-6 py-5 dark:border-accent-800/50 dark:from-moss-950/40 dark:to-stone-900">
        <p className="font-heading text-lg font-semibold text-moss-900 dark:text-mint-200 sm:text-xl">{about.mantra}</p>
      </blockquote>
    </section>
  );
}
