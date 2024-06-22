import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://quizizz-be-production.up.railway.app/api",
});
