import ReactPaginate from 'react-paginate';
import { useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';

import css from './Paginate.module.css';

const Paginate = () => {
    const { total_pages } = useSelector((state) => state.order);
    const [query, setQuery] = useSearchParams({ page: '1' });
    const [order] = useSearchParams({ ordering: null });

    const handlePageClick = (e) => {
        let selectedPage = e.selected + 1;

        if (order.get('ordering') !== 'null' ) {
            setQuery({
                ordering: order.get('ordering'),
                page: selectedPage,
            });}
        else {

            setQuery({
                page: selectedPage,
            });

        }};

    return (
        <div>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={Math.ceil(total_pages)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={7}
                onPageChange={handlePageClick}
                breakClassName={'break-me'}
                containerClassName={'pagination'}
                className={css.pagination}
                activeClassName={css.active}
                // initialPage={(parseInt(query.get('page')) || 1) - 1}
                forcePage={query.get('page') === '1' ? 0 : parseInt(query.get('page') )- 1}
            />
        </div>

    );
};

export { Paginate };