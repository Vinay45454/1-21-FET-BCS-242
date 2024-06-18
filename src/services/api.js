import axios from 'axios';

const API_BASE_URL = 'http://your-backend-api.com';

export const getProducts = (filters, sort, page, limit) => {
    return axios.get(`${API_BASE_URL}/products`, {
        params: {
            ...filters,
            sort,
            page,
            limit
        }
    });
};

export const getProductById = (productId) => {
    return axios.get(`${API_BASE_URL}/products/${productId}`);
};
