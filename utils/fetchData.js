import axios from '../configs';
import Cookies from 'js-cookie';

export function getData(url, params, token) {
    return axios.get(`${url}`, {
        params,
        // headers: {
        //     Authorization: `Bearer ${token}`,
        // },
    });
}