import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

export const signup = async (username, password) => {
  return await axios.post(`${API_URL}signup`, { username, password });
};

export const login = async (username, password) => {
  return await axios.post(`${API_URL}login`, { username, password });
};
