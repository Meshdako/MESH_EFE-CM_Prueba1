import axios from 'axios';

export const getFakestore = () => {
    return axios.get(`https://fakestoreapi.com/products`);
}