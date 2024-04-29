import { IFilm } from "../model/types";
import axios from "axios";
import { TOKEN, BASE_URL } from "../utils/consts/api";
export const $host = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-API-KEY": TOKEN,
  },
});

type TParams = {
  page?: number;
  limit?: number;
  sortType?: number;
  type?: string;
  lists?: string;
  sortField?: string;
  query?: string;
  name?: string;
};

export const getMovies = async (params: TParams): Promise<IFilm[]> => {
  const { data } = await $host.get("v1.4/movie", {
    params: params,
  });
  return data.docs;
};
export const getMovieById = async (id: number): Promise<IFilm> => {
  const { data } = await $host.get(`v1.4/movie/${id}`);
  return data;
};
export const getMoviesByName = async (params: TParams): Promise<IFilm[]> => {
  const { data } = await $host.get("v1.4/movie/search", {
    params: params,
  });
  return data.docs;
};
