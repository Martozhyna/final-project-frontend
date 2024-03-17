import css from './FilterOption.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userActions} from "../../redux";

const FilterOption = ({setSearch}) => {
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

    return (
        <div>
            <button className={css.btn} onClick={click}>My</button>
            <button className={css.btn}>Reset</button>
            <button className={css.btn}>Exel</button>
        </div>
    )
}
export {FilterOption}