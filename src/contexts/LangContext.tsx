import { createContext, ReactNode, useContext, useState } from "react";

type LanguageType = {
    language: string,
    toogleLanguage: () => void;
}

const LangContext = createContext<LanguageType>({
    language: "fr",
    toogleLanguage: () => undefined,
});

function LangProvider({children}: {children: ReactNode}){
    const [language, setLanguage] = useState<string>("fr");
    const toogleLanguage = () => {
        setLanguage(language === "fr"  ? "en" : "fr")
    }
return(
    <LangContext.Provider value={{language, toogleLanguage}}>
        {children}
    </LangContext.Provider>
)
}

export default LangProvider;

export const useTranslation = () : LanguageType => {
    return useContext(LangContext);
}