import dateformat from "dateformat";

import css from './User.module.css';
import style from '../Headline/Headline.module.css'

const User = ({user}) => {
    return (

            <div className={css.card}>
                <div>
                    <div>Id: {user.id}</div>
                    <div>Email: {user.email}</div>
                    <div>Name: {user.name}</div>
                    <div>Surname: {user.surname}</div>
                    <div>Active: {user.is_active.toString()}</div>
                    <div>Last login: {user.last_login ? dateformat(user.last_login, "mmm d, yyyy") : "-"}</div>
                </div>

                <div>
                    User Statistics
                </div>

                <div className={style.btns}>
                    <button className={style.btn}>Activate</button>
                    <button className={style.btn}>Ban</button>
                    <button className={style.btn}>Unban</button>
                </div>

            </div>
    )
}
export {User}