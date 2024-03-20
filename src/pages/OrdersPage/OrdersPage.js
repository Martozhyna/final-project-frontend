import React from "react";
import {useSearchParams} from "react-router-dom";

import {Orders, Header} from "../../components";

const OrdersPage = () => {
    const [search, setSearch] = useSearchParams({ page: "1" });


    return (
        <div>
            <Header search={search} setSearch={setSearch}/>
            <Orders search={search}/>
        </div>
    )
};

export {OrdersPage};