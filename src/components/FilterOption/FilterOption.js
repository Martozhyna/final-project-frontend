import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './FilterOption.module.css';
import {userActions} from "../../redux";

const FilterOption = ({setSearch, reset, handleReset}) => {

    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getMe())
    }, [dispatch])

    const click = () => {
        setSearch((currentQuery) => {
            currentQuery.set("manager", user.surname)
            return currentQuery
        })
        console.log(user.surname)

    }

    // const reboot = () => {
    //     reset();
    //     const params = new URLSearchParams();
    //     params.set("page", "1");
    //     params.set("ordering", "-id");
    //     setSearch(params);
    // }

    return (
        <div>
            <button className={css.btn} onClick={click}>My</button>
            <button className={css.btn} onClick={handleReset}>Reset</button>
            <button className={css.btn}>Exel</button>
        </div>
    )
}
export {FilterOption}