import { Download } from "lucide-react";
import { useContent } from "../hooks/useContent";

const CV_FILES = {
  es: "Jorge-Hernandez-CV-ES.pdf",
  en: "Jorge-Hernandez-CV-EN.pdf",
};

const buttonClass = {
  hero: "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent-700 px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-moss-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700 dark:bg-accent-400 dark:text-moss-950 dark:hover:bg-mint-300 dark:focus-visible:outline-accent-400 sm:w-auto",
  contact:
    "inline-flex min-w-0 cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/55 hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
};

const altLinkClass = {
  hero: "inline-flex cursor-pointer items-center rounded-sm text-sm font-semibold text-moss-800 underline underline-offset-4 transition-colors duration-200 hover:text-moss-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700 dark:text-mint-200 dark:hover:text-mint-100 dark:focus-visible:outline-accent-400",
  contact:
    "inline-flex cursor-pointer items-center rounded-sm text-sm font-medium text-emerald-50 underline underline-offset-4 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
};

export default function DownloadCvButton({ variant = "hero", className = "" }) {
  const { cv, locale } = useContent();
  const altLocale = locale === "es" ? "en" : "es";

  return (
    <div className={`flex min-w-0 flex-col items-start gap-2 ${className}`}>
      <a
        href={`/cv/${CV_FILES[locale]}`}
        download={CV_FILES[locale]}
        type="application/pdf"
        className={buttonClass[variant]}
        aria-label={cv.ariaLabel}
      >
        <Download size={18} className="shrink-0" aria-hidden="true" />
        {cv.label}
      </a>
      <a
        href={`/cv/${CV_FILES[altLocale]}`}
        download={CV_FILES[altLocale]}
        type="application/pdf"
        className={altLinkClass[variant]}
        aria-label={cv.altAriaLabel}
      >
        {cv.altLabel}
      </a>
    </div>
  );
}
