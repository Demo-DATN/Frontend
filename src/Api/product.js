import { MainApi } from "./main";

export const all = () => {
    const url = `/products`;
    return MainApi.get(url);
  }
  export const update = (item) => {
    const url = `/products/${item.id}`;
    return MainApi.put(url, item);
  };
  export const show = (id) => {
    const url = `/products/${id}`;
    return MainApi.get(url);
  };
  export const remove = (id) => {
    const url = `/products/${id}`;
    return MainApi.delete(url);
  };
  export const create = (product) => {
    const url = `/products`;
    return MainApi.post(url, product);
  };