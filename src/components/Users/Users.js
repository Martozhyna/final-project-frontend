import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const [query, setQuery] = useSearchParams({ page: "1" });
    const { userStatistic } = useSelector((state) => state.user);
    useEffect(() => {
        if (!userStatistic){
            dispatch(userActions.getUserStatistic());
        }

    }, [dispatch, userStatistic]);


    useEffect(() => {
        dispatch(userActions.getAllUsers({page: query.get('page')}))
    }, [dispatch, query])
    return (
        <div>
            {
              users &&  users.map((user) => (<User user={user} key={user.id} userStatistic={userStatistic}/>))
            }
        </div>
    )
}
export {Users}