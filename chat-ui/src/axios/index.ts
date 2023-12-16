import axios from "axios";

const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

export default axiosApi;
