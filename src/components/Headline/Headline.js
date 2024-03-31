import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './Headline.module.css';



const Headline = () => {
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    return (
        <div className={css.main}>
            <div>
                <img className={css.img} src='https://i.pinimg.com/564x/76/88/f5/7688f5198092cf5347c6453ed145a3e1.jpg' alt="logo"/>
            </div>
            <div className={css.btnContainer}>
                {user.surname === "Adminka" ? <button className={css.btn}>Admin</button> : <div className={css.surname}>{user.surname}</div>}

                <button className={css.btn} onClick={() => navigate("/login")}>Exit</button>
            </div>
        </div>
    )
}
export {Headline}