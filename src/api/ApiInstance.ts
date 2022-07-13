import axios from 'axios';

const getAccessToken = (): string | null => sessionStorage.getItem('access_token');

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json'
    }
});
