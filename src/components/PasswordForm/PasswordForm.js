import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import css from "../../pages/LoginPage/LodinPage.module.css";
import {activateUserValidator} from "../../validators/activateUserValidator";

const PasswordForm = (activate) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all", resolver: yupResolver(activateUserValidator)
    });
    return (
        <form onSubmit={handleSubmit(activate)}>
            <div className={css.card}>
                <div className={css.box}>
                    <div>
                        <h3 className={css.text}>Password</h3>
                    </div>
                    <input className={css.input} type="text" placeholder={'Password'} {...register('password')} />
                    {errors.password && <div>{errors.password.message}</div>}
                </div>
                <div className={css.box}>
                    <div>
                        <h3 className={css.text}>Confirm Password</h3>
                    </div>
                    <input className={css.input} type="text" placeholder={'Confirm'} {...register('confirm')} />
                    {errors.password && <div>{errors.password.message}</div>}
                </div>
                <div className={css.box}>
                    <button className={css.btn}>ACTIVATE</button>
                </div>
            </div>
        </form>
    )
}
export {PasswordForm}