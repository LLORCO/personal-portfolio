import { Briefcase, ShieldCheck, TrendingUp } from "lucide-react";
import { useContent } from "../../hooks/useContent";
import SectionTitle from "../ui/SectionTitle";

const icons = {
  digital: Briefcase,
  quality: ShieldCheck,
  scale: TrendingUp,
};

export default function ServicesSection() {
  const { services } = useContent();

  return (
    <section id="services" className="scroll-mt-24 space-y-10 py-14 sm:space-y-12 sm:scroll-mt-28 sm:py-20">
      <SectionTitle eyebrow={services.eyebrow} title={services.title} text={services.text} />

      <div className="grid gap-6 lg:grid-cols-3">
        {services.columns.map((column) => {
          const Icon = icons[column.id];
          return (
            <article
              key={column.id}
              className="flex flex-col rounded-2xl border border-stone-300 bg-white p-6 shadow-sm dark:border-stone-600 dark:bg-stone-900"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent-600 p-2.5 text-white shadow-sm">
                <Icon size={18} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-stone-900 dark:text-stone-50">{column.title}</h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="rounded-2xl border border-stone-300 bg-stone-100/80 p-6 dark:border-stone-600 dark:bg-stone-900/60">
        <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-base">{services.footer}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
            {services.rolesLabel}:
          </span>
          {services.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-accent-300 bg-mint-50 px-3 py-1 text-xs font-medium text-moss-900 dark:border-accent-800 dark:bg-moss-950/50 dark:text-mint-200"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
