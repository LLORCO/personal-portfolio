import { Figma, Layers3, ServerCog, Sparkles } from "lucide-react";
import { useContent } from "../../hooks/useContent";

export default function HeroSection() {
  const { hero, availability, personal } = useContent();

  return (
    <section className="mb-14 grid gap-10 lg:mb-20 lg:grid-cols-12 lg:items-start lg:gap-12">
      <div className="min-w-0 space-y-6 lg:col-span-7">
        <div className="flex flex-wrap items-center gap-2">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-stone-800 shadow-sm dark:border-stone-600 dark:bg-stone-900 dark:text-stone-200">
            <Sparkles size={14} className="text-accent-600 dark:text-accent-400" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <p className="inline-flex w-fit items-center rounded-full border border-accent-300 bg-mint-50 px-3 py-1.5 text-xs font-semibold text-moss-900 dark:border-accent-800 dark:bg-moss-950/50 dark:text-mint-200">
            {availability}
          </p>
        </div>
        <h1 className="space-y-3 sm:space-y-4">
          <span className="block font-heading text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            {personal.fullName}
          </span>
          <span className="block max-w-2xl text-pretty font-heading text-2xl font-medium leading-snug text-accent-700 dark:text-accent-400 sm:text-3xl lg:text-[2rem] lg:leading-tight">
            {hero.headline}
          </span>
          <span className="block max-w-2xl text-pretty font-heading text-lg font-medium leading-snug text-stone-700 dark:text-stone-300 sm:text-xl">
            {hero.subheadline}
          </span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400 lg:text-xl">{hero.intro}</p>
      </div>

      <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
        <div className="rounded-2xl border border-emerald-700/30 bg-gradient-to-br from-accent-700 via-accent-700 to-moss-900 p-6 text-white shadow-md dark:border-emerald-600/40">
          <p className="font-heading text-4xl font-black leading-none sm:text-5xl">UI</p>
          <p className="mt-2 font-heading text-4xl font-black leading-none sm:text-5xl">UX</p>
          <p className="mt-2 font-heading text-4xl font-black leading-none sm:text-5xl">DEV</p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {hero.stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col rounded-xl border border-stone-300 bg-white p-3 shadow-sm dark:border-stone-600 dark:bg-stone-900 sm:p-4"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-600 dark:text-stone-400 sm:text-xs">
                {s.label}
              </p>
              <p className="mt-1 font-heading text-base font-bold text-moss-900 dark:text-mint-200 sm:text-lg">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-stone-300 bg-white p-6 shadow-sm motion-safe:animate-fadeUp dark:border-stone-600 dark:bg-stone-900">
          <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-50 sm:text-xl">
            {hero.valueTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            <li className="flex gap-3">
              <Layers3 className="mt-0.5 shrink-0 text-accent-600 dark:text-accent-400" size={18} aria-hidden="true" />
              {hero.valueItems[0]}
            </li>
            <li className="flex gap-3">
              <Figma className="mt-0.5 shrink-0 text-accent-600 dark:text-accent-400" size={18} aria-hidden="true" />
              {hero.valueItems[1]}
            </li>
            <li className="flex gap-3">
              <ServerCog className="mt-0.5 shrink-0 text-accent-600 dark:text-accent-400" size={18} aria-hidden="true" />
              {hero.valueItems[2]}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
