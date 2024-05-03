import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.BASE_API_URL,
});

console.log(process.env.BASE_API_URL);
