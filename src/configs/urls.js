const baseURL = 'http://localhost:8000';

const orders = '/orders';
const auth = '/auth';
const comments = '/comments';
const groups = '/groups';
const users = '/users';

const urls = {
    auth:{
        login:`${auth}/login`,
        refresh:`${auth}/refresh`
    },
    orders:{
        orders
    },
    comments:{
        comments
    },
    groups:{
        groups
    },
    users:{
        me: `${users}/me`
    },

};

export {
    baseURL,
    urls
};