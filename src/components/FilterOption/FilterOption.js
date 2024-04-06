import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";

import css from './FilterOption.module.css';
import { userActions } from "../../redux";
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import {ordersService} from "../../services";

const FilterOption = ({ setSearch, reset, handleReset, setShowMyOrders, showMyOrders }) => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const location = useLocation();

    const downloadExcel = async () => {
        const query = queryString.parse(location.search);
        const { data } = await ordersService.getExcel(query);
        const name = `Order from ${new Date().toLocaleDateString()}.xls`;
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", name);
        document.body.appendChild(link);
        link.click();
    };

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
            <button className={css.btn} onClick={downloadExcel}>Excel</button>
        </div>
    );
}

export { FilterOption };
