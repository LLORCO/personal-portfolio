import { useEffect } from "react";
import { useContent } from "../hooks/useContent";
import { isMemoryAirPath } from "../lib/path";

const OG_LOCALES = { es: "es_MX", en: "en_US" };

function setMeta(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute("content", value);
}

export default function DocumentMeta() {
  const { meta, locale, caseStudies } = useContent();
  const isCase = isMemoryAirPath();

  useEffect(() => {
    document.documentElement.lang = locale;

    const title = isCase ? caseStudies.memoryAir.metaTitle : meta.title;
    document.title = title;
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[name="twitter:title"]', meta.title);

    const active = OG_LOCALES[locale];
    const alternate = OG_LOCALES[locale === "es" ? "en" : "es"];
    setMeta('meta[property="og:locale"]', active);
    setMeta('meta[property="og:locale:alternate"]', alternate);
  }, [meta, locale, isCase, caseStudies]);

  return null;
}
