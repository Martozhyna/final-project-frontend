import {axiosService} from "./axiosService";
import {urls} from "../configs";

const ordersService = {
    getAll: (page = 1, ordering) => axiosService.get(urls.orders.orders, {params:{page, ordering}})
};

export {
    ordersService
};