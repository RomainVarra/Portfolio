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
  MyProjects: {
    projectNature: string;
    lang: string;
  }
  MyProjectsDetails: {
        details: string;
        description: {
          1 : string;
          2:string;
        } & Record<string, string>;
    }
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
export type ProjectsType = {
  id: number,
  name: string,
  picture: string,
  project: string,
  language: string[] ;
} 