import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {orderActions} from "../../redux";
import css from './OrderStatistics.module.css';

const OrderStatistics = () => {
    const dispatch = useDispatch();
    const { orders_statistics } = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(orderActions.getOrdersStatistics())
    }, [dispatch])

    const status_statistics = orders_statistics[0]
    console.log(status_statistics);
    return (
        <div>
            {status_statistics &&
                <div className={css.statistic}>
                    <div>Total: {status_statistics.total}</div>
                    <div>Agree: {status_statistics.agree}</div>
                    <div>Disagree: {status_statistics.disagree}</div>
                    <div>In work: {status_statistics.in_work}</div>
                    <div>Dubbing: {status_statistics.dubbing}</div>
                    <div>New: {status_statistics.new}</div>
                </div>

            }

        </div>
    )
}
export {OrderStatistics}