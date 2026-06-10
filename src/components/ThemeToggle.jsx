import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useContent } from "../hooks/useContent";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { theme: themeCopy } = useContent();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-stone-300 bg-white p-2.5 text-stone-700 shadow-sm transition-colors duration-200 hover:border-stone-400 hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:bg-stone-700 dark:focus-visible:outline-accent-400"
      aria-label={isDark ? themeCopy.toLight : themeCopy.toDark}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
