import {axiosService} from "./axiosService";
import {urls} from "../configs";

const usersService = {
    getMe: () => axiosService.get(urls.users.me),
    getAll:(page) => axiosService.get(urls.users.users, page),
    getOrderStatistics: () => axiosService.get(urls.users.statistics),
    banUser: (id) => axiosService.patch(`${urls.users.users}/${id}/ban`),
    unbanUser: (id) => axiosService.patch(`${urls.users.users}/${id}/unban`),
    createUser: (user) => axiosService.post(urls.auth.register, user),
    getActivate: (id) => axiosService.get(`${urls.auth.auth}/${id}/register`),
    activateUser: (token, password) => axiosService.post(`${urls.auth.activate}/${token}`, {password}),
    getRecoverPasswordToken: (email) => axiosService.post(`${urls.auth.auth}/recovery/password`, {email}),
    recoveryPassword: (token, password) => axiosService.post(`${urls.auth.auth}/change/password/${token}`, {password})


};

export {
    usersService
};