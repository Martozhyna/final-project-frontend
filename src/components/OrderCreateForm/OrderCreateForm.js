import {ModalFormInput} from "../ModalFormInput/ModalFormInput";
import {useForm} from "react-hook-form";

import css from '../Headline/Headline.module.css';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const OrderCreateForm = ({setOpen}) => {

    const {register, handleSubmit, setValue} = useForm({mode: 'all'})
    const dispatch = useDispatch();

    const create = (data) => {
        console.log(data)

        dispatch(userActions.createUser(data))
        setOpen(false)

    }

    return (
        <form onSubmit={handleSubmit(create)}>
            <div>
                <ModalFormInput type={'text'} name={'email'} label={'email'} register={register}/>
            </div>
            <div>
                <ModalFormInput type={'text'} name={'name'} label={'name'} register={register}/>
            </div>
            <div>
                <ModalFormInput type={'text'} name={'surname'} label={'surname'} register={register}/>
            </div>
            <div className={css.btns}>
                <button className={css.btn2}>Save</button>
            </div>
        </form>

    )
}
export {OrderCreateForm}