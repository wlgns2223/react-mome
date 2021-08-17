import axios from "axios";

const apiUrl = "https://react-mome.herokuapp.com/words/";
const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
