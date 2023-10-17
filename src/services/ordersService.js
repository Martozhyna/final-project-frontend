import {axiosService} from "./axiosService";
import {urls} from "../configs";

const ordersService = {
    getAll: (page = 1, ordering) => axiosService.get(urls.orders.orders, {params:{page, ordering}}),
    getAllCommentsByOrder:(id) => axiosService.get(`${urls.orders.orders}/${id}/comment`),
    setComments:(id, comment) => axiosService.post(`${urls.orders.orders}/${id}/comment`, comment)
};

export {
    ordersService
};