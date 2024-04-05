import dateformat from "dateformat";

import css from './User.module.css';
import style from '../Headline/Headline.module.css'
import {UserStatistics} from "../UserStatistics/UserStatistics";
import {useDispatch} from "react-redux";
import {userActions, userActions as usersActions} from "../../redux";
import {usersService} from "../../services";

const User = ({ user, userStatistic }) => {
    const dispatch = useDispatch()

    const banUser = () => {
        dispatch(usersActions.banUser(user.id))
    }

    const unbanUser = () => {
        dispatch(userActions.unbanUser(user.id))
    }
    
    const activate = async () => {
        await usersService.getActivate(user.id)
    }

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
                <UserStatistics id={user.id} userStatistic={userStatistic} />
            </div>

            <div className={style.btns}>
                <button className={style.btn} onClick={activate}>{user.is_active ? 'Recovery password' : 'Activate'}</button>
                <button className={style.btn} onClick={banUser}>Ban</button>
                <button className={style.btn} onClick={unbanUser}>Unban</button>
            </div>
        </div>
    );
};
export {User}