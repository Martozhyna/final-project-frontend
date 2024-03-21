import {useForm} from "react-hook-form";

import {FilterForm} from "../FilterForm/FilterForm";
import {FilterOption} from "../FilterOption/FilterOption";
import css from './Filter.module.css';

const Filter = ({search, setSearch}) => {

    const {register, handleSubmit, reset, setValue} = useForm({mode:"all"})

    const handleReset = () => {
        setValue("name", "");
        setValue("surname", "");
        setValue("email", "");
        setValue("phone", "");
        setValue("age", "");
        setValue("course", "");
        setValue("course_format", "");
        setValue("course_type", "");
        setValue("status", "");
        setValue("group", "");
        setValue("start_date", "");
        setValue("end_date", "");

        const params = new URLSearchParams();
        params.set("page", "1");
        // params.set("ordering", "-id");
        setSearch(params);

        reset();
    };

    return (
        <div className={css.main}>
            <FilterForm search={search} setSearch={setSearch} register={register} handleSubmit={handleSubmit}/>
            <FilterOption setSearch={setSearch} reset={reset} handleReset={handleReset}/>
        </div>
    )
}
export {Filter}