import React from "react";

import {Orders} from "../../components";
import {Header} from "../../components/Header/Header";
import {useSearchParams} from "react-router-dom";

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