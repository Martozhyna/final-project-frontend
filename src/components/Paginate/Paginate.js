import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector} from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import css from './Paginate.module.css';
import {orderActions} from "../../redux";

const Paginate = () => {
    const { total_pages } = useSelector((state) => state.order);
    const [query, setQuery] = useSearchParams({ page: '1' });
    const [order] = useSearchParams({ ordering: null });
    let [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(
        parseInt(searchParams.get('page')) || 1
    );
    const pageCount = Math.ceil(total_pages);

    const handlePageClick = (e) => {
        let selectedPage = e.selected + 1;
        if (order.get('ordering') !== 'null') {
            setQuery({
                ordering: order.get('ordering'),
                page: selectedPage,
            });
        } else {
            setQuery({
                page: selectedPage,
            });
        }

    };

    // useEffect(() => {
    //     const pageValue = parseInt(searchParams.get('page')) || 1;
    //     setCurrentPage(pageValue);
    //
    //     const updatedPage = query.get('page') || '1';
    //     const updatedOrdering = order.get('ordering') || null;
    //
    //     dispatch(orderActions.getAll({ page: updatedPage, ordering: updatedOrdering }));
    // }, [searchParams, dispatch, order, query]);
    // console.log(currentPage)

    return (
        <div>
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
                initialPage={currentPage - 1} // Встановлюємо initialPage відповідно до currentPage
            />
        </div>

    );
};

export { Paginate };