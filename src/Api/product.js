import { MainApi } from "./main";

export const all = () => {
    const url = `/product`;
    return MainApi.get(url);
  }
  export const update = (item) => {
    const url = `/product/${item.id}`;
    return MainApi.put(url, item);
  };
  export const show = (id) => {
    const url = `/product/${id}`;
    return MainApi.get(url);
  };
  export const remove = (id) => {
    const url = `/product/${id}`;
    return MainApi.delete(url);
  };
  export const create = (product) => {
    const url = `/product`;
    return MainApi.post(url, product);
  };