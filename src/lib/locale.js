const STORAGE_KEY = "portfolio-locale";

export function getPreferredLocale() {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en") return stored;
  return "es";
}

export function applyLocale(locale) {
  document.documentElement.lang = locale;
  localStorage.setItem(STORAGE_KEY, locale);
}

export function getInitialLocale() {
  if (typeof document !== "undefined" && document.documentElement.lang) {
    const lang = document.documentElement.lang.slice(0, 2);
    if (lang === "es" || lang === "en") return lang;
  }
  return getPreferredLocale();
}
