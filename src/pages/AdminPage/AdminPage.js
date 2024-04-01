import {useNavigate} from "react-router-dom";

import css from "../../components/Headline/Headline.module.css";
import {OrderStatistics} from "../../components";


const AdminPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={css.main}>
                <div>
                    <img className={css.img} src='https://i.pinimg.com/564x/76/88/f5/7688f5198092cf5347c6453ed145a3e1.jpg'
                         alt="logo"/>
                </div>
                <div className={css.btnContainer}>
                    <button className={css.btn} onClick={() => navigate("/orders")}>Back</button>
                    <button className={css.btn} onClick={() => navigate("/login")}>Exit</button>
                </div>
            </div>
            <OrderStatistics/>
        </div>




    )
}
export {AdminPage}