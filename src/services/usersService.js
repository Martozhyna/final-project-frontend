import {axiosService} from "./axiosService";
import {urls} from "../configs";

const usersService = {
    getMe: () => axiosService.get(urls.users.me),
    getAll:(page) => axiosService.get(urls.users.users, page)

};

export {
    usersService
};