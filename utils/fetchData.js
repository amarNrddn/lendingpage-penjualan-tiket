import axios from '../configs';
import Cookies from 'js-cookie';

export const getData = (url, params, token) => {
    return axios.get(`${url}`, {
        params,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export const postData = async (token, payload, url) => {
    return await axios.post(`${url}`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

export const putData = async (token, payload, url) => {
    return await axios.put(`${url}`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}