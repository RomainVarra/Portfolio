import style from "./filter.module.css"
import css from "../../../public/Images/css-3.png"
import js from "../../../public/Images/js.png"
import { useState } from "react"

type filterType = {
    label: string;
    value: string;
    img: string;
}
function Filter() {
    const [filter, setFilter] = useState<filterType | null>(null);
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = (value: filterType) => {
        setFilter(value)
        setOpenMenu(false)
    };
    const handleMenuClick = () => {setOpenMenu(!openMenu)} 
    const options = [
        {label: "CSS", value: "CSS", img: css},
        {label: "JS", value: "JS", img: js}
    ]
    return(
        <>
        <h1>Mon filtre</h1>
        <section className={style.sectionFilter}>
            <button className={style.buttonSection} onClick={handleMenuClick}>
        {filter ? (
            <>
            <img src={filter.img} alt={filter.label} />
        <span>{filter.label}</span>
            </>
        ) : ("Choisir un languages")}
            </button>
            {openMenu && (

                <section className={style.filterSection}>
                {options.map((m) => (
                    <div
                    key={m.value}
                    className={style.itemsFilter}
                    onClick={() => handleClick(m)}>
                        <img src={m.img} alt={m.label} className={style.logoFilter} />
                        <span>{m.label}</span>
                    </div>
                ))}
            </section>
            )}
        </section>
        </>
    )
}

export default Filter;