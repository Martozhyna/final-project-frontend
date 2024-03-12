import css from './FilterOption.module.css';

const FilterOption = () => {
    return (
        <div>
            <button className={css.btn}>My</button>
            <button className={css.btn}>Reset</button>
            <button className={css.btn}>Exel</button>
        </div>
    )
}
export {FilterOption}