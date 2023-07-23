// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io', // Set your base URL here
    headers: {
        'Content-Type': 'application/json',
        // Add any other common headers you need
    },
});

export default instance;