import axios from "axios";

const apiUrl = "http://localhost:3001/words/";
const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
