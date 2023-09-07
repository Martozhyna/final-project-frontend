import {useForm} from "react-hook-form";

import css from './LodinPage.module.css';
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const login = async (userCredential) => {
        try {
            await authService.login(userCredential);
            navigate('/orders')
        } catch (e) {
            console.log(e.response.data)
        }
    };

    return (
        <form onSubmit={handleSubmit(login)}>

            <div className={css.card}>
                <div className={css.box}>
                    <div>
                        <h3 className={css.text}>Email</h3>
                    </div>
                    <input className={css.input} type="text" placeholder={'Email'} {...register('email')}/>
                </div>
                <div className={css.box}>
                    <div>
                        <h3 className={css.text}>Password</h3>
                    </div>
                    <input className={css.input} type="text" placeholder={'Password'} {...register('password')}/>
                </div>
                <div className={css.box}>
                    <button className={css.btn}>LOGIN</button>
                </div>

            </div>

        </form>
    )
};

export {LoginPage};