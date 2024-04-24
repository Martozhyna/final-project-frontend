import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import css from './OrderDetails.module.css';
import {Comments} from "../Comments/Comments";
import {orderActions} from "../../redux";
import {ModalConstruction} from "../ModalConstruction/ModalConstruction";

const OrderDetails = ({order}) => {

    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const [comments, setComments] = useState(order.comments)
    const {user} = useSelector((state) => state.user);

    const submit = async (comment) => {
        const newComment = await dispatch(orderActions.createComment({id: order.id, comment: comment}));
        setComments(prev => [...prev, newComment.payload]);
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


                <div className={css.right_block}>

                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <input className={css.input} type="text" placeholder={'Comment'} {...register('comment')}/>
                            <button className={css.btn}
                                    disabled={order.manager && user.surname !== order.manager}>Submit
                            </button>
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