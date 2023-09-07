import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {orderActions} from "../../redux";
import css from './Orders.module.css';
import {Paginate} from "../Paginate/Paginate";


const Orders = () => {
    const dispatch = useDispatch();
    const {orders} = useSelector(state => state.order);
    const [query] = useSearchParams({page: '1'});
    const [order, setOrder] = useSearchParams({ordering: null})

    useEffect(() => {
        dispatch(orderActions.getAll({page: query.get('page'), ordering: order.get('ordering')}));
    }, [dispatch, query, order])


    const sort = (field) => {
        let order_value = order.get('ordering')
        setOrder((value => ({ordering: +value.get('ordering')})));
        setOrder(((value => ({ordering: field}))))

        if (order_value === field) {
            setOrder(((value => ({ordering: `-${field}`}))))
        }

    };

    return (
        <div>
            {orders && <table className={css.table}>
                <thead>
                <tr className={css.th_list}>
                    <th onClick={() => {
                        sort('id')
                    }}>id
                    </th>
                    <th onClick={() => {
                        sort('name')
                    }}>name
                    </th>
                    <th onClick={() => {
                        sort('surname')
                    }}>surname
                    </th>
                    <th onClick={() => {
                        sort('email')
                    }}>email
                    </th>
                    <th onClick={() => {
                        sort('phone')
                    }}>phone
                    </th>
                    <th onClick={() => {
                        sort('age')
                    }}>age
                    </th>
                    <th onClick={() => {
                        sort('course')
                    }}>course
                    </th>
                    <th onClick={() => {
                        sort('course_format')
                    }}>course_format
                    </th>
                    <th onClick={() => {
                        sort('course_type')
                    }}>course_type
                    </th>
                    <th onClick={() => {
                        sort('status')
                    }}>status
                    </th>
                    <th onClick={() => {
                        sort('sum')
                    }}>sum
                    </th>
                    <th onClick={() => {
                        sort('alreadyPaid')
                    }}>alreadyPaid
                    </th>
                    <th onClick={() => {
                        sort('created_at')
                    }}>created_at
                    </th>
                </tr>
                </thead>
                <tbody>
                {orders.map(order => (
                        <tr key={order.id} className={css.tr_list}>
                            <td>{order.id}</td>
                            <td>{order.name}</td>
                            <td>{order.surname}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td>{order.age}</td>
                            <td>{order.course}</td>
                            <td>{order.course_format}</td>
                            <td>{order.course_type}</td>
                            <td>{order.status}</td>
                            <td>{order.sum}</td>
                            <td>{order.alreadyPaid}</td>
                            <td>{order.created_at}</td>
                        </tr>
                    )
                )}

                </tbody>
            </table>}
            <div className={css.pagination_block}>
                <Paginate/>
            </div>
        </div>
    )
}
export {Orders}