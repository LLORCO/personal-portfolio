import { useContent } from "../hooks/useContent";
import { useLocale } from "../context/LocaleContext";

export default function LocaleToggle() {
  const { locale, toggleLocale } = useLocale();
  const { locale: localeCopy } = useContent();
  const isEs = locale === "es";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-stone-300 bg-white px-2.5 py-2 font-heading text-xs font-bold uppercase tracking-wide text-stone-700 shadow-sm transition-colors duration-200 hover:border-stone-400 hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:bg-stone-700 dark:focus-visible:outline-accent-400"
      aria-label={isEs ? localeCopy.switchToEn : localeCopy.switchToEs}
    >
      {isEs ? "EN" : "ES"}
    </button>
  );
}
