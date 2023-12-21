import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL; // Replace with your API base URL

const api = {
    getData: async (offset) => {
        console.log(offset, "inside the api function");
        try {
            const response = await axios.get(`${BASE_URL}/ormpoll/try/${offset}`);
            console.log(response.data, "response.data inside the api function");
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch data');
        }
    },
    // Add more API functions as needed
};

export default api;
