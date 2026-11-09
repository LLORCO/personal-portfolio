import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useContent } from "../hooks/useContent";
import { toggleClass } from "./ui/buttons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { theme: themeCopy } = useContent();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${toggleClass} p-2`}
      aria-label={isDark ? themeCopy.toLight : themeCopy.toDark}
    >
      {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
    </button>
  );
}
