import axios from 'axios';

const baseURL = 'https://stunning-telegram-gv76vvwgp6x2wj9w-8000.app.github.dev/api/';

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

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const response = await axios.post(`${baseURL}token/refresh/`, { refresh: refreshToken });

                if (response.status === 200) {
                    localStorage.setItem('access_token', response.data.access);

                    // Retry the original request with the new token
                    originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access;
                    return axios(originalRequest);
                }
            } catch (refreshError) {
                // If refresh token fails, logout the user...
                console.error('Error refreshing token:', refreshError);
                // Implement logout logic here
            }
        }

        return Promise.reject(error);
    }
);

export default api;