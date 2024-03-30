import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";

import css from './FilterOption.module.css';
import { userActions } from "../../redux";

const FilterOption = ({ setSearch, reset, handleReset, setShowMyOrders, showMyOrders }) => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getMe())
    }, [dispatch])

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setShowMyOrders(params.get('manager') === user.surname);
    }, [user.surname, setShowMyOrders]);

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
            <button className={showMyOrders ? `${css.btn} ${css.active}` : css.btn} onClick={click}>My</button>
            <button className={css.btn} onClick={handleReset}>Reset</button>
            <button className={css.btn}>Excel</button>
        </div>
    );
}

export { FilterOption };
