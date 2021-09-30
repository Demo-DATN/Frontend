import { MainApi } from "./main";

export const login = (user) => {
    const url = `/login`;
    return MainApi.post(url, user);
  }
  export const register = (user) => {
    const url = `/register`;
    return MainApi.post(url, user);
  };