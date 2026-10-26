import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { API_URL } from "../configs";

const baseURL = API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL,
  withCredentials: true, // Send and receive cookies automatically
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach Authorization header if token exists in localStorage
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Optional: Handle token expiry
      console.warn("Unauthorized, clearing token if any.");
      // localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default api;
