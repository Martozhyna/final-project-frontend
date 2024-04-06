import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {userActions} from "../../redux";
import {User} from "../User/User";
import css from "../Paginate/Paginate.module.css";
import ReactPaginate from "react-paginate";

const Users = () => {

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const [query, setQuery] = useSearchParams({ page: "1" });
    const { userStatistic, total_pages } = useSelector((state) => state.user);
    useEffect(() => {
        if (!userStatistic){
            dispatch(userActions.getUserStatistic());
        }

    }, [dispatch, userStatistic]);

    const handlePageClick = (e) => {
        let selectedPage = e.selected + 1;

            setQuery((currentQuery) => {
                currentQuery.set('page', selectedPage.toString());
                return currentQuery;
            });
    };


    useEffect(() => {
        dispatch(userActions.getAllUsers({page: query.get('page')}))
    }, [dispatch, query])

    const pageCount = Math.ceil(total_pages);
    const forcePage = Math.min(pageCount - 1, parseInt(query.get('page') || 1) - 1);

    return (
        <div>
            {
              users &&  users.map((user) => (<User user={user} key={user.id} userStatistic={userStatistic}/>))
            }
            <div className={css.block}>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={7}
                    onPageChange={handlePageClick}
                    breakClassName={'break-me'}
                    containerClassName={'pagination'}
                    className={css.pagination}
                    activeClassName={css.active}
                    forcePage={forcePage}
                />
            </div>
        </div>
    )
}
export {Users}