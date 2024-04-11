import dateformat from "dateformat";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import css from './User.module.css';
import style from '../Headline/Headline.module.css'
import { UserStatistics } from "../UserStatistics/UserStatistics";
import { userActions, userActions as usersActions } from "../../redux";
import { usersService } from "../../services";

const User = ({ user, userStatistic }) => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const { errors } = useSelector((state) => state.user);
    const userError = errors && errors[user.id];

    useEffect(() => {
        setError(userError);
    }, [userError]);

    const banUser = () => {
        setError(null)
        dispatch(usersActions.banUser(user.id));
    }

    const unbanUser = () => {
        setError(null)
        dispatch(userActions.unbanUser(user.id));
    }

    const activate = async () => {
        setError(null)
        try {
            const { data } = await usersService.getActivate(user.id);
            await navigator.clipboard.writeText(`${window.location.origin}/activate/${data.token}`);
            alert('Посилання активації було скопійовано до вашого буфера обміну.');
        } catch (error) {
            console.error('Failed to copy activation link to clipboard:', error);
            alert('Failed to copy activation link to clipboard. Please try again or copy it manually.');
        }
    };

    const recovery = async () => {
        setError(null)
        try {
            const { data } = await usersService.getRecoverPasswordToken(user.email);
            await navigator.clipboard.writeText(`${window.location.origin}/recovery-password/${data.token}`);
            alert('Посилання для відновлення було скопійовано до вашого буфера обміну.');
        } catch (error) {
            console.error('Failed to copy activation link to clipboard:', error);
            alert('Failed to copy activation link to clipboard. Please try again or copy it manually.');
        }
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
            <div>
                {error && <div className={css.error}>{error.error}</div>}
                <div className={style.btns}>
                    <button className={style.btn} onClick={user.last_login ? recovery : activate}>{user.last_login ? 'Recovery password' : 'Activate'}</button>
                    <button className={style.btn} onClick={banUser}>Ban</button>
                    <button className={style.btn} onClick={unbanUser}>Unban</button>
                </div>
            </div>
        </div>
    );
};
export { User }
