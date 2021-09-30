import { MainApi } from "./main";

export const all = () => {
    const url = `/user`;
    return MainApi.get(url);
  }
  export const update = (item) => {
    const url = `/user/${item.id}`;
    return MainApi.put(url, item);
  };
  export const show = (id) => {
    const url = `/user/${id}`;
    return MainApi.get(url);
  };
  export const remove = (id) => {
    const url = `/user/${id}`;
    return MainApi.delete(url);
  };
  export const create = (user) => {
    const url = `/user/create`;
    return MainApi.post(url, user);
  };