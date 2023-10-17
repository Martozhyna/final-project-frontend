const baseURL = 'http://localhost:8000';

const orders = '/orders';
const auth = '/auth';
const comments = '/comments'

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
};

export {
    baseURL,
    urls
};