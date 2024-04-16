import {ModalFormInput} from "../ModalFormInput/ModalFormInput";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import css from '../Headline/Headline.module.css';
import {userActions} from "../../redux";
import {registerUserValidator} from "../../validators";

const UserCreateForm = ({setOpen}) => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'all',
        resolver: joiResolver(registerUserValidator)
    })
    const dispatch = useDispatch();

    const create = (data) => {
        dispatch(userActions.createUser(data))
        setOpen(false)
    }

    return (
        <form onSubmit={handleSubmit(create)}>
            <div>
                <ModalFormInput type={'text'} name={'email'} label={'email'} register={register}/>
                {errors.email && <div className={css.msg}>{errors.email.message}</div>}
            </div>
            <div>
                <ModalFormInput type={'text'} name={'name'} label={'name'} register={register}/>
                {errors.name && <div className={css.msg}>{errors.name.message}</div>}
            </div>
            <div>
                <ModalFormInput type={'text'} name={'surname'} label={'surname'} register={register}/>
                {errors.surname && <div className={css.msg}>{errors.surname.message}</div>}
            </div>
            <div className={css.btns}>
                <button className={css.btn2}>Save</button>
            </div>
        </form>

    )
}
export {UserCreateForm}