// src/services/api.js
import axios from 'axios';

const baseURL = 'http://localhost:8000/api/';

const api = axios.create({
    baseURL: baseURL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Check if the error has a response before accessing status
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const response = await axios.post(`${baseURL}token/refresh/`, { refresh: refreshToken });

                if (response.status === 200) {
                    localStorage.setItem('access_token', response.data.access);

                    originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access;
                    return axios(originalRequest);
                }
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError);
                // Implement logout logic here
            }
        }

        return Promise.reject(error);
    }
);

export default api;