import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {orderActions} from "../../redux";
import css from './Orders.module.css';
import {Paginate} from "../Paginate/Paginate";
import {Order} from "../Order/Order";

const Orders = () => {
    const dispatch = useDispatch();
    const {orders} = useSelector(state => state.order);
    const [query] = useSearchParams({page: '1'});
    const [order, setOrder] = useSearchParams({ordering: '-id'})

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
    console.log(sort)

    return (
        <div>
            {orders && <table className={css.table}>
                <thead>
                <tr className={css.th_list}  >
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
                    <th onClick={() => {
                        sort('manager')
                    }}>manager
                    </th>
                    <th onClick={() => {
                        sort('group')
                    }}>group
                    </th>
                </tr>
                </thead>
                <tbody>

                {orders.map(order => (<Order order={order} key={order.id}/>)
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