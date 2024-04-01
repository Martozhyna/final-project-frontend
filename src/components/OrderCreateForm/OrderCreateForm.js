import {ModalFormInput} from "../ModalFormInput/ModalFormInput";
import {useForm} from "react-hook-form";

import css from '../Headline/Headline.module.css';

const OrderCreateForm = () => {

    const {register, handleSubmit, setValue} = useForm()
    return (
        <div>
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
        </div>

    )
}
export {OrderCreateForm}