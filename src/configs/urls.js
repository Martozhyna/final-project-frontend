const baseURL = 'http://localhost:8000';

const orders = '/orders';
const auth = '/auth';

const urls = {
    auth:{
        login:`${auth}/login`,
        refresh:`${auth}/refresh`
    },
    orders:{
        orders
    }
};

export {
    baseURL,
    urls
};