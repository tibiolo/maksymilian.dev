import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "/api",
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default axiosClient;
