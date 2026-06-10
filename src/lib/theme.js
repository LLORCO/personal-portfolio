const STORAGE_KEY = "portfolio-theme";

export function getPreferredTheme() {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme) {
  const isDark = theme === "dark";
  const root = document.documentElement;

  root.classList.remove("dark");
  document.body.classList.remove("dark");

  if (isDark) {
    root.classList.add("dark");
    document.body.classList.add("dark");
  }

  root.style.colorScheme = isDark ? "dark" : "light";
  localStorage.setItem(STORAGE_KEY, theme);
}

export function getInitialTheme() {
  if (typeof document !== "undefined" && document.documentElement.classList.contains("dark")) {
    return "dark";
  }
  return getPreferredTheme();
}
