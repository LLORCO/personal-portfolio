import { Cpu, Palette, ServerCog, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import { useContent } from "../../hooks/useContent";
import SectionTitle from "../ui/SectionTitle";

const icons = {
  frontend: Palette,
  ecommerce: ShoppingBag,
  quality: ShieldCheck,
  backend: ServerCog,
  plus: Sparkles,
  tools: Cpu,
};

export default function SkillsSection() {
  const { skills } = useContent();

  return (
    <section className="space-y-10 py-14 sm:space-y-12 sm:py-20">
      <SectionTitle eyebrow={skills.eyebrow} title={skills.title} text={skills.text} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map(({ id, label, items }) => {
          const Icon = icons[id] || Cpu;
          return (
            <article key={id} className="rounded-2xl border border-stone-300 bg-white p-6 shadow-sm dark:border-stone-600 dark:bg-stone-900">
              <div className="mb-4 inline-flex rounded-lg bg-accent-700 p-2.5 text-white shadow-sm">
                <Icon size={18} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-stone-900 dark:text-stone-50">{label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-stone-300 bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-800 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
