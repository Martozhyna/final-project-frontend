import {FilterForm} from "../FilterForm/FilterForm";
import {FilterOption} from "../FilterOption/FilterOption";
import css from './Filter.module.css';

const Filter = () => {
    return (
        <div className={css.main}>
            <FilterForm/>
            <FilterOption/>
        </div>
    )
}
export {Filter}