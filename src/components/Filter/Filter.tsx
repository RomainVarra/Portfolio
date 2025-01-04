import style from "./filter.module.css"
import css from "../../../public/Images/css-3.png"
import js from "../../../public/Images/js.png"
import { useState } from "react"
import { useTranslation } from "../../contexts/LangContext"
import type { filterType } from "../../lib/types"

function Filter() {
    const [filter, setFilter] = useState<filterType | null>(null);
    const [openMenu, setOpenMenu] = useState(false);
    const {translations} = useTranslation();

    const handleClick = (value: filterType) => {
        setFilter(value)
        setOpenMenu(false)
    };
    const handleMenuClick = () => {setOpenMenu(!openMenu)} 
    const options = [
        {value: "CSS", img: css},
        {value: "JS", img: js}
    ]
    return(
        <>
        <h1>Mon filtre</h1>
        <div className={style.allFilters}>
        <select className={style.projectNatureFilter}>
            <option ></option>
            <option value="front-end">Front-end</option>
            <option value="back-end">Back-end</option>
        </select>
        <section className={style.sectionFilter}>
            <button className={style.buttonSection} onClick={handleMenuClick}>
        {filter ? (
            <>
            <img src={filter.img} alt={filter.value} />
        <span>{filter.value}</span>
            </>
        ) : (translations.Filter.choose)}
            </button>
            {openMenu && (

                <section className={style.filterSection}>
                {options.map((m) => (
                    <div
                    key={m.value}
                    className={style.itemsFilter}
                    onClick={() => handleClick(m)}>
                        <img src={m.img} alt={m.value} className={style.logoFilter} />
                        <span>{m.value}</span>
                    </div>
                ))}
            </section>
            )}
        </section>
            </div>
        </>
    )
}

export default Filter;