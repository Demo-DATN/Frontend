import axios from "axios";

export const MainApi = axios.create({
    baseURL: "http://demoapi.wtf/api",
    headers: {
      "Content-Type": "application/json"
    }
  });
