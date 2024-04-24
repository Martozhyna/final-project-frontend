import dateformat from "dateformat";

import css from "./Order.module.css";
import { OrderDetails } from "../OrderDetails/OrderDetails";

const Order = ({ order, isOpen, toggleOrder}) => {
    const handleClick = () => {
        toggleOrder(order.id);
    };

    return (
        <>
            <tr key={order.id} className={css.tr_list} onClick={handleClick}>
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
                <td>
                    {order.created_at ? dateformat(order.created_at, "mmm d, yyyy") : "-"}
                </td>
                <td>{order.manager}</td>
                <td>{order.group?.title}</td>
            </tr>

            {isOpen && (
                <tr className={`${!isOpen ? css.collapsed : css.task} `}>
                    <td colSpan={15}>
                        <OrderDetails order={order}/>
                    </td>
                </tr>
            )}
        </>
    );
};
export { Order };
