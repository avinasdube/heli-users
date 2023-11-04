import axios from "axios";

const API_BASE_URL = 'http://localhost:5000/api';

// api function to get all user data

export const fetchUsersData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/getusers`);
        return response.data;
    } catch (error) {
        throw error;
    }
}