import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import css from './OrderDetails.module.css';
import {Comments} from "../Comments/Comments";
import {orderActions} from "../../redux";
import {ModalConstruction} from "../ModalConstruction/ModalConstruction";

const OrderDetails = ({order}) => {

    const {register, handleSubmit, reset, formState:{isValid}} = useForm();
    const dispatch = useDispatch();
    const [comments, setComments] = useState(order.comments)
    const [error, setError] = useState(null);
    const {user} = useSelector((state) => state.user);

    const submit = async (comment) => {
        const newComment = await dispatch(orderActions.createComment({id: order.id, comment: comment}));
        if (!newComment.error) {
            setComments(prev => [...prev, newComment.payload]);
        } else {
            setError(newComment.payload)
        }
        reset();
    };


    return (
        <div className={css.editing}>
            <div className={css.text}>
                <p>Message: {order.msg}</p>
                <p>UTM: {order.utm}</p>
            </div>
            <div>

                {comments && comments.map(comment => (<Comments comment={comment} key={comment.id}/>))}
                {
                    error && <div className={css.errors}>{error}</div>
                }

                <div className={css.right_block}>

                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <input className={css.input} type="text" placeholder={'Comment'} {...register('comment')}/>
                            <button className={css.btn} disabled={user.surname !== order.manager}>Submit</button>
                        </div>
                        <div>
                        </div>
                    </form>

                    <div>
                        <ModalConstruction order={order} user={user}/>
                    </div>

                </div>
            </div>

        </div>
    )
}
export {OrderDetails}