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
    link: string;
    github: string;
  }
  MyProjectsDetails: {
        details: string;
        description: {
          1 : string;
          2:string;
        } & Record<string, string>;
    }
Filter: {
        choose: string;
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
  link: string,
  gitHub: string,
} 

export type FiltersType = {
  language?: string;
  project?: string 
}

export type FilterProps = {
  onFilterChange: (filters: FiltersType) => void;
};