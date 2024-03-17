import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {orderActions} from "../../redux";
import css from './Orders.module.css';
import {Paginate} from "../Paginate/Paginate";
import {Order} from "../Order/Order";

const Orders = ({search}) => {
    const dispatch = useDispatch();
    const {orders} = useSelector(state => state.order);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [order, setOrder] = useSearchParams({ordering: '-id'})


    useEffect(() => {
        if (search.size === 1){
            dispatch(orderActions.getAll({page: query.get('page'), ordering: order.get('ordering')}));
        }
    }, [dispatch, query, order, search])

    const sort = (field) => {
        let orderValue = order.get("ordering");

        // Отримання поточної сторінки з параметрів URL
        const currentPage = parseInt(query.get("page")) || 1;

        setOrder((value) => {
            const ordering = value.get("ordering") === field ? `-${field}` : field;

            // Створення нових параметрів URL для посилання
            const newOrder = new URLSearchParams(value.toString());
            newOrder.set("ordering", ordering);

            // При зміні сортування сторінка має бути переведена на першу
            newOrder.set("page", "1");

            // Оновлення параметрів URL
            setQuery(newOrder);

            return newOrder;
        });
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