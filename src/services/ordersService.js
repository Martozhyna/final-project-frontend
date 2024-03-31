import {axiosService} from "./axiosService";
import {urls} from "../configs";

const ordersService = {
    getAll: (params) => axiosService.get(urls.orders.orders, {params}),
    getAllCommentsByOrder:(id) => axiosService.get(`${urls.orders.orders}/${id}/comment`),
    setComments:(id, comment) => axiosService.post(`${urls.orders.orders}/${id}/comment`, comment),
    updateById: (id, data) => axiosService.patch(`${urls.orders.orders}/${id}`, data),
    getExcel: (params) => axiosService.get(`${urls.orders.orders}/excel`, {params, responseType: "arraybuffer"})

};

export {
    ordersService
};