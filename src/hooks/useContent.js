import { content, personal } from "../data/content";
import { useLocale } from "../context/LocaleContext";

export function useContent() {
  const { locale } = useLocale();
  return { ...content[locale], personal, locale };
}
