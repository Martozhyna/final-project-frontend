import {axiosService} from "./axiosService";
import {urls} from "../configs";

const groupsService =  {
    getAll: (page) => axiosService.get(urls.groups.groups, {params: {page}}),
    create: (data) => axiosService.post(urls.groups.groups, data)
}

export {
    groupsService
};