import dateformat from "dateformat";
import {useDispatch} from "react-redux";

import css from './User.module.css';
import style from '../Headline/Headline.module.css'
import {UserStatistics} from "../UserStatistics/UserStatistics";
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
        const {data} = await usersService.getActivate(user.id)
        await navigator.clipboard.writeText(`${window.location.origin}/activate/${data.token}`)
    }

    const recovery = async () => {
        const {data} = await usersService.getRecoverPasswordToken(user.email)
        await navigator.clipboard.writeText(`${window.location.origin}/recovery-password/${data.token}`)
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
                <UserStatistics user={user} userStatistic={userStatistic} />
            </div>

            <div className={style.btns}>
                <button className={style.btn} onClick={user.last_login ? recovery : activate}>{user.last_login ? 'Recovery password' : 'Activate'}</button>
                <button className={style.btn} onClick={banUser}>Ban</button>
                <button className={style.btn} onClick={unbanUser}>Unban</button>
            </div>
        </div>
    );
};
export {User}