import { createContext, ReactNode, useContext, useState } from "react";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import type { TranslationsType,LanguageContextType } from "../lib/types";


const translations: TranslationsType = { en, fr };

const LangContext = createContext<LanguageContextType>({
  language: "fr",
  toggleLanguage: () => undefined,
  translations: translations["fr"],
});

function LangProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<keyof TranslationsType>("fr");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "fr" ? "en" : "fr"));
  };

  const value = {
    language,
    toggleLanguage,
    translations: translations[language],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useTranslation = (): LanguageContextType => {
  return useContext(LangContext);
};

export default LangProvider;