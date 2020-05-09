import axios from "axios";

const axiosBaseInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
  });

export default axiosBaseInstance;