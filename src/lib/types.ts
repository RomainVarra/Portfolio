export type TranslationContent = {
  NavBar: {
    home: string;
    about: string;
    contact: string;
    projects: string;
  };
  Homepage: {
    maintitle: string;
  };
};

export type TranslationsType = {
  en: TranslationContent;
  fr: TranslationContent;
};

export type LanguageContextType = {
    language: keyof TranslationsType;
    toggleLanguage: () => void;
    translations: TranslationContent;
};