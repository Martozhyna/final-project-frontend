import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { orderActions } from "../../redux";
import css from "./Orders.module.css";
import { Paginate } from "../Paginate/Paginate";
import { Order } from "../Order/Order";
import {Loader} from "../Loader/Loader";

const Orders = ({ search }) => {
    const dispatch = useDispatch();
    const { orders, loading } = useSelector((state) => state.order);
    const [query, setQuery] = useSearchParams({ page: "1" });
    const [order, setOrder] = useSearchParams({ ordering: "-id" });
    const [openedOrderId, setOpenedOrderId] = useState(null);

    useEffect(() => {
        if (search.size === 1) {
            dispatch(
                orderActions.getAll({
                    page: query.get("page"),
                    ordering: order.get("ordering"),
                })
            );
        }
    }, [dispatch, query, order, search]);

    const sort = (field) => {
        setOrder((value) => {
            const ordering = value.get("ordering") === field ? `-${field}` : field;
            const newOrder = new URLSearchParams(value.toString());
            newOrder.set("ordering", ordering);
            newOrder.set("page", "1");
            setQuery(newOrder);
            return newOrder;
        });
    };

    const toggleOrder = (orderId) => {
        setOpenedOrderId((prevId) => (prevId === orderId ? null : orderId));
    };

    return (
        <div>
            {loading ? <Loader/> : orders && (
                <table className={css.table}>
                    <thead>
                    <tr className={css.th_list}>
                        <th onClick={() => sort("id")}>id</th>
                        <th onClick={() => sort("name")}>name</th>
                        <th onClick={() => sort("surname")}>surname</th>
                        <th onClick={() => sort("email")}>email</th>
                        <th onClick={() => sort("phone")}>phone</th>
                        <th onClick={() => sort("age")}>age</th>
                        <th onClick={() => sort("course")}>course</th>
                        <th onClick={() => sort("course_format")}>course_format</th>
                        <th onClick={() => sort("course_type")}>course_type</th>
                        <th onClick={() => sort("status")}>status</th>
                        <th onClick={() => sort("sum")}>sum</th>
                        <th onClick={() => sort("alreadyPaid")}>alreadyPaid</th>
                        <th onClick={() => sort("created_at")}>created_at</th>
                        <th onClick={() => sort("manager")}>manager</th>
                        <th onClick={() => sort("group")}>group</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order) => (
                        <Order
                            order={order}
                            key={order.id}
                            isOpen={order.id === openedOrderId}
                            toggleOrder={toggleOrder}
                        />
                    ))}
                    </tbody>
                </table>
            )}

            <div className={css.pagination_block}>
                <Paginate />
            </div>
        </div>
    );
};
export { Orders };
