import ReactPaginate from 'react-paginate';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from './Paginate.module.css';

const Paginate = () => {

    const {total_pages} = useSelector(state => state.order);
    const [, setQuery] = useSearchParams({page: '1'});
    const [order] = useSearchParams({ordering: null})

    const handlePageClick = (e) => {
        const selectedPage = e.selected + 1;

        if (order.get('ordering') !== 'null') {
            setQuery({
                page: selectedPage,
                ordering: order.get('ordering')
            });
        } else {
            setQuery({
                page: selectedPage
            });
        }
    };

    return (
        <div>
            <ReactPaginate previousLabel={"<"}
                           nextLabel={">"}
                           breakLabel={"..."}
                           marginPagesDisplayed={1}
                           pageRangeDisplayed={7}
                           onPageChange={handlePageClick}
                           breakClassName={"break-me"}
                           containerClassName={"pagination"}
                           className={css.pagination}
                           activeClassName={css.active}
                           pageCount={total_pages}/>
        </div>
    )
};

export {Paginate}