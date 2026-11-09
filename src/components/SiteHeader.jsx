import { ArrowUpRight } from "lucide-react";
import { useContent } from "../hooks/useContent";
import LocaleToggle from "./LocaleToggle";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const { header, personal } = useContent();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/90 bg-stone-50/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-stone-50/80 dark:border-stone-800/90 dark:bg-stone-950/90 dark:supports-[backdrop-filter]:bg-stone-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          <img
            src="/monogram.svg"
            alt={`Monograma de ${personal.fullName}`}
            width={48}
            height={48}
            className="h-10 w-10 shrink-0 rounded-xl object-contain ring-1 ring-stone-200 dark:ring-stone-700 sm:h-11 sm:w-11"
          />
          <div className="min-w-0">
            <p className="truncate font-heading text-base font-semibold tracking-tight text-stone-900 dark:text-stone-50 sm:text-lg">
              {personal.fullName}
            </p>
            <p className="truncate font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-stone-600 dark:text-stone-400 sm:text-[11px] sm:tracking-[0.18em]">
              {personal.tagline}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LocaleToggle />
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-accent-700 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-accent-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700 sm:px-4 sm:py-2.5"
          >
            {header.contact}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
