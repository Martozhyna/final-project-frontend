import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import css from './FilterOption.module.css';
import {userActions} from "../../redux";

const FilterOption = ({setSearch, reset, handleReset}) => {

    const { user } = useSelector((state) => state.user);
    const [showMyOrders, setShowMyOrders] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getMe())
    }, [dispatch])

    const click = () => {
        setSearch((currentQuery) => {
            const query = new URLSearchParams(currentQuery);
            if (!showMyOrders) {
                query.set('manager', user.surname);
            } else {
                query.delete('manager');
            }
            return query;
        });
        setShowMyOrders(!showMyOrders);

    }


    return (
        <div>
            <button className={css.btn} onClick={click}>My</button>
            <button className={css.btn} onClick={handleReset}>Reset</button>
            <button className={css.btn}>Exel</button>
        </div>
    )
}
export {FilterOption}