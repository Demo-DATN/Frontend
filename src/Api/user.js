import { MainApi } from "./main";

export const all = () => {
    const url = `/users`;
    return MainApi.get(url);
  }
  export const update = (item) => {
    const url = `/users/${item.id}`;
    return MainApi.put(url, item);
  };
  export const show = (id) => {
    const url = `/users/${id}`;
    return MainApi.get(url);
  };
  export const remove = (id) => {
    const url = `/users/${id}`;
    return MainApi.delete(url);
  };
  export const create = (product) => {
    const url = `/users`;
    return MainApi.post(url, product);
  };