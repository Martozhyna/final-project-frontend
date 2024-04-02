import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const [query, setQuery] = useSearchParams({ page: "1" });

    useEffect(() => {
        dispatch(userActions.getAllUsers({page: query.get('page')}))
    }, [dispatch, query])
    return (
        <div>
            {
              users &&  users.map((user) => (<User user={user} key={user.id}/>))
            }
        </div>
    )
}
export {Users}