import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/matches';

export const matchService = {
    async getMatches() {
        try {
            const response = await axios.get(API_URL);
            return response.data.data || response.data
        } catch (error) {
            console.error("API Error in matchService:", error);
            throw error;
        }
    }
}