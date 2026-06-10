import { createContext, useContext, useEffect, useState } from "react";
import { applyLocale, getInitialLocale } from "../lib/locale";

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => getInitialLocale());

  useEffect(() => {
    applyLocale(locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((current) => (current === "es" ? "en" : "es"));
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale debe usarse dentro de LocaleProvider");
  return ctx;
}
