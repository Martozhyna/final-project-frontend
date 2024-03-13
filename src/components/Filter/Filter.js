import {FilterForm} from "../FilterForm/FilterForm";
import {FilterOption} from "../FilterOption/FilterOption";
import css from './Filter.module.css';

const Filter = ({search, setSearch}) => {
    return (
        <div className={css.main}>
            <FilterForm search={search} setSearch={setSearch}/>
            <FilterOption/>
        </div>
    )
}
export {Filter}