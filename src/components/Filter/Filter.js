import {useForm} from "react-hook-form";

import {FilterForm} from "../FilterForm/FilterForm";
import {FilterOption} from "../FilterOption/FilterOption";
import css from './Filter.module.css';

const Filter = ({search, setSearch}) => {

    const {register, handleSubmit, reset} = useForm({mode:"all"})

    return (
        <div className={css.main}>
            <FilterForm search={search} setSearch={setSearch} register={register} handleSubmit={handleSubmit}/>
            <FilterOption setSearch={setSearch} reset={reset}/>
        </div>
    )
}
export {Filter}