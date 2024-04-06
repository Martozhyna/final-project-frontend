import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {activateUserValidator} from "../../validators/activateUserValidator";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";
import css from "../LoginPage/LodinPage.module.css";

const RecoveryPasswordPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "all", resolver: yupResolver(activateUserValidator)
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {token} = useParams();

    const activate = async (data) => {
        const password = data.password
        await dispatch(userActions.recoveryPassword({token: token, password: password}));
        navigate('/login')
    }

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
    );
}
export {RecoveryPasswordPage}