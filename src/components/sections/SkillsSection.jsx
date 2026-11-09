import { useContent } from "../../hooks/useContent";

export default function SkillsSection() {
  const { skills } = useContent();

  return (
    <section
      id="tools"
      aria-labelledby="tools-title"
      className="scroll-mt-24 border-t border-stone-200 py-14 dark:border-stone-800 sm:py-20"
    >
      <h2
        id="tools-title"
        className="font-heading text-3xl font-bold tracking-[-0.02em] text-stone-950 dark:text-stone-50 sm:text-4xl"
      >
        {skills.title}
      </h2>
      <dl className="mt-8 divide-y divide-stone-200 border-y border-stone-200 dark:divide-stone-800 dark:border-stone-800">
        {skills.groups.map((group) => (
          <div key={group.label} className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr]">
            <dt className="font-heading font-semibold text-stone-900 dark:text-stone-50">{group.label}</dt>
            <dd className="text-stone-700 dark:text-stone-300">{group.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
