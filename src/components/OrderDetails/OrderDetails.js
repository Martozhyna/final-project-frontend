import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useState} from "react";

import css from './OrderDetails.module.css';
import {Comments} from "../Comments/Comments";
import {orderActions} from "../../redux";

const OrderDetails = ({order}) => {

    const {register, handleSubmit, reset, formState:{errors}, setValue} = useForm();
    const dispatch = useDispatch();
    const [comments, setComments] = useState(order.comments)

    const submit = async (comment) => {
       const newComment = await dispatch(orderActions.createComment({id: order.id, comment: comment}));
        console.log(newComment.payload)
        await setComments(prev => [...prev, newComment.payload])
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

                <div className={css.right_block} >

                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <input className={css.input} type="text" placeholder={'Comment'} {...register('comment')}/>
                        </div>
                        <div >
                            <button className={css.btn}>Submit</button>
                        </div>
                    </form>

                    <div>
                        <button className={css.btn}>Edit</button>
                    </div>

                </div>
            </div>

        </div>
    )
}
export {OrderDetails}