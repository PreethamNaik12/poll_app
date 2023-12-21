// api.js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL; // Replace with your API base URL

const api = {
    getData: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/pollChoice`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch data');
        }
    },
    // Add more API functions as needed
};

export default api;
