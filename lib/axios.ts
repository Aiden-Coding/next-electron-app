// lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // 可以在 .env 文件中定义 API 基础路径
  timeout: 10000, // 设置请求超时时间
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
