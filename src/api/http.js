// src/api/http.js
import axios from "axios";

export const http = axios.create({
  baseURL: "/api",          // Vite proxy 타도록
  withCredentials: true,    // 쿠키 포함
});

http.interceptors.request.use((config) => {
  const t = localStorage.getItem("accessToken");
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});