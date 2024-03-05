import {useForm} from "react-hook-form";
import {useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import css from './LodinPage.module.css';
import {authService} from "../../services";
import {loginValidator} from "../../validators";

const LoginPage = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        mode:"all",
        resolver: joiResolver(loginValidator)
    });
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const login = async (userCredential) => {

        try {
            await authService.login(userCredential);
            navigate('/orders')
        } catch (e) {
            if (e.response.status === 401) {
                setError('немає акаунта з такими даними')
            }
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
                    {errors.email && <div>{errors.email.message}</div>}
                </div>
                <div className={css.box}>
                    <div>
                        <h3 className={css.text}>Password</h3>
                    </div>
                    <input className={css.input} type="password" placeholder={'Password'} {...register('password')}/>
                    {error &&
                        <div>
                            {error}
                        </div>
                    }
                </div>
                <div className={css.box}>
                    <button className={css.btn}>LOGIN</button>

                </div>

            </div>

        </form>
    )
};

export {LoginPage};