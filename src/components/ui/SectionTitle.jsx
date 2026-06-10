export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <header className="max-w-3xl space-y-4 border-l-4 border-accent-600 pl-5 dark:border-accent-500">
      <p className="inline-flex w-fit rounded-md border border-accent-200 bg-accent-50 px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-accent-800 dark:border-accent-800 dark:bg-accent-950/60 dark:text-accent-300 sm:text-xs">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-semibold leading-tight text-stone-900 dark:text-stone-50 md:text-4xl">{title}</h2>
      <p className="text-base leading-relaxed text-stone-600 dark:text-stone-400 md:text-lg">{text}</p>
    </header>
  );
}
