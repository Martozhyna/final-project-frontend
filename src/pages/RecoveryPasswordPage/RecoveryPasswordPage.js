import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {activateUserValidator} from "../../validators";
import {userActions} from "../../redux";
import css from "../LoginPage/LodinPage.module.css";

const RecoveryPasswordPage = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: "all", resolver: yupResolver(activateUserValidator)
    });
    const dispatch = useDispatch();
    const {token} = useParams();
    const { errors: er } = useSelector((state) => state.user);


    const activate = async (data) => {
        const password = data.password
        await dispatch(userActions.recoveryPassword({token: token, password: password}));
    }

    return (
        <form onSubmit={handleSubmit(activate)}>
            <div className={css.card}>
                <div className={css.box}>
                    <div>
                        <h3 className={css.text}>Password</h3>
                    </div>
                    <input className={css.input} type="password" placeholder={'Password'} {...register('password')} />
                    {errors.password && <div>{errors.password.message}</div>}
                </div>
                <div className={css.box}>
                    <div>
                        <h3 className={css.text}>Confirm Password</h3>
                    </div>
                    <input className={css.input} type="password" placeholder={'Confirm'} {...register('confirm')} />
                    {errors.confirm && <div>{errors.confirm.message}</div>}
                </div>
                <div className={css.box}>
                    {er && <div className={css.text}>{er.details}</div>}
                    <button className={css.btn} disabled={!isValid}>ACTIVATE</button>
                </div>
            </div>
        </form>
    );
}
export {RecoveryPasswordPage}