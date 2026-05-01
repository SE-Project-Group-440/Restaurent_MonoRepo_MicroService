import axios from "axios";

const backendBaseUrl = "http://16.16.139.104:5173";

const baseURL = axios.create({
  baseURL: backendBaseUrl,
});


baseURL.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers["ClientId"] = "user-1";

  return config;
});

export default baseURL;