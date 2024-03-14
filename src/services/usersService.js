import {axiosService} from "./axiosService";
import {urls} from "../configs";

const usersService = {
    getMe: () => axiosService.get(urls.users.me)

};

export {
    usersService
};