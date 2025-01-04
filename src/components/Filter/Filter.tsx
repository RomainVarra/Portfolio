import style from "./filter.module.css";
import { useState } from "react";
import { useTranslation } from "../../contexts/LangContext";
import type { FilterProps } from "../../lib/types";
import options from "../../data/OptionsFilter.json"


function Filter({ onFilterChange }: FilterProps) {
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [projectFilter, setProjectFilter] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const { translations } = useTranslation();


  const handleLanguageClick = (value: string) => {
    setLanguageFilter(value);
    setOpenMenu(false);
    onFilterChange({ language: value, project: projectFilter || undefined });
  };

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setProjectFilter(value);
    onFilterChange({ language: languageFilter || undefined, project: value });
  };

  return (
    <div className={style.allFilters}>
      
      <select
        className={style.projectNatureFilter}
        onChange={handleProjectChange}
        value={projectFilter || ""}
      >
        <option value="">{translations.MyProjects.projectNature}</option>
        <option value="Front-end">Front-end</option>
        <option value="Back-end">Back-end</option>
        <option value="Full-stack">Full-stack</option>
      </select>

      
      <section className={style.sectionFilter}>
        <button className={style.buttonSection} onClick={() => setOpenMenu(!openMenu)}>
          {languageFilter ? (
            <>
              <img
                src={options.find((o) => o.value === languageFilter)?.img}
                alt={languageFilter}
              />
              <span>{languageFilter}</span>
            </>
          ) : (
            translations.Filter.choose
          )}
        </button>

        {openMenu && (
          <section className={style.filterSection}>
            {options.map((m) => (
              <div
                key={m.value}
                className={style.itemsFilter}
                onClick={() => handleLanguageClick(m.value)}
              >
                <img src={m.img} alt={m.value} className={style.logoFilter} />
                <span>{m.value}</span>
              </div>
            ))}
          </section>
        )}
      </section>
    </div>
  );
}

export default Filter;
