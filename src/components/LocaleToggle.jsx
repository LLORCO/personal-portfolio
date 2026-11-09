import { useContent } from "../hooks/useContent";
import { useLocale } from "../context/LocaleContext";
import { toggleClass } from "./ui/buttons";

export default function LocaleToggle() {
  const { locale, toggleLocale } = useLocale();
  const { locale: localeCopy } = useContent();
  const isEs = locale === "es";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={`${toggleClass} px-2.5 py-2 font-heading text-xs font-bold`}
      aria-label={isEs ? localeCopy.switchToEn : localeCopy.switchToEs}
    >
      {isEs ? "EN" : "ES"}
    </button>
  );
}
