import axios from "axios";

const api = axios.create({
  baseURL: "https://qbc11-front-next.liara.run/api",
  withCredentials: true, // اگر لاگین کوکی داره
});

export default api;