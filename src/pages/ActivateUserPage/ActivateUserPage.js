import css from "../LoginPage/LodinPage.module.css";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux";
import {ModalFormInput} from "../../components/ModalFormInput/ModalFormInput";

const ActivateUserPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token } = useParams();

    const activate = async (data) => {
        const password = data.password
       await dispatch(userActions.activateUser({token: token, password: password}));
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
                    <button className={css.btn}>ACTIVATE</button>
                </div>
            </div>
        </form>
    );
}

export { ActivateUserPage }
