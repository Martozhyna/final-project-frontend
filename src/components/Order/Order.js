import {useState} from "react";


import css from './Order.module.css'
import {OrderDetails} from "../OrderDetails/OrderDetails";
import dateformat from "dateformat";

const Order = ({order}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(() => !isExpanded);
        if (isExpanded) {
            console.log('True');
        } else {
            console.log('False')
        }
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
                <td>{order.created_at ? dateformat(order.created_at, 'mmm d, yyyy') : '-'}</td>
                <td>{order.manager}</td>
                <td>{order.group}</td>
            </tr>

            <tr className={`${!isExpanded ? css.collapsed : css.task} `}>
                <td colSpan={15}>
                    <OrderDetails order={order}/>
                </td>
            </tr>

        </>
    )
}
export {Order}