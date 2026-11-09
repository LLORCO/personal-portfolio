import { useContent } from "../hooks/useContent";
import { btnPrimarySm, focusRing } from "./ui/buttons";
import BrandMark from "./ui/BrandMark";
import LocaleToggle from "./LocaleToggle";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const { header, personal, locale } = useContent();
  const cvHref = personal.cv[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className={`flex min-w-0 items-center gap-3 rounded-lg ${focusRing}`}>
          <BrandMark />
          <span className="min-w-0">
            <span className="block font-heading text-base font-semibold leading-tight text-stone-900 dark:text-stone-50">
              {personal.fullName}
            </span>
            <span className="hidden text-sm text-stone-600 dark:text-stone-400 sm:block">{personal.role}</span>
          </span>
        </a>

        <nav className="flex items-center gap-3 sm:gap-5 text-sm font-semibold text-stone-700 dark:text-stone-300" aria-label={header.navLabel}>
          <div className="hidden items-center gap-5 sm:inline-flex">
            <a href="/#work" className={`rounded px-1 py-2 hover:text-stone-950 dark:hover:text-white ${focusRing}`}>
              {header.nav.work}
            </a>
            <a href="/#community" className={`rounded px-1 py-2 hover:text-stone-950 dark:hover:text-white ${focusRing}`}>
              {header.nav.community}
            </a>
            <a
              href={cvHref}
              download
              type="application/pdf"
              aria-label={header.nav.cvLabel}
              className={`rounded px-1 py-2 hover:text-stone-950 dark:hover:text-white ${focusRing}`}
            >
              {header.nav.cv}
            </a>
          </div>
          <LocaleToggle />
          <ThemeToggle />
          <a href="/#contact" className={btnPrimarySm}>
            {header.contact}
          </a>
        </nav>
      </div>
    </header>
  );
}
