import axios from '../configs';

export const getData = (url, params, token) => {
    return axios.get(`${url}`, {
        params,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export const postData = async (url, payload, token) => {
    return await axios.post(`${url}`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

export const putData = async (url, payload, token) => {
    return await axios.put(`${url}`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}