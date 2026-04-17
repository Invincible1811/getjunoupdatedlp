"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Locale = "de" | "en";
type TranslationItem = { de: string; en: string };

interface LanguageContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: (item: TranslationItem) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");

  const toggleLocale = () => setLocale((l) => (l === "de" ? "en" : "de"));
  const t = (item: TranslationItem) => item[locale];

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
