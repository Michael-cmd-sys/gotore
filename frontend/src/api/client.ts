import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiClient = {
  getHealth: () => api.get('/health'),
  getTest: () => api.get('/test'),
  // Add more API methods here
};
