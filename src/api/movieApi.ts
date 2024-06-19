import { IFilm } from "../model/types";
import { $host } from "./api";
type TParams = {
  page: number;
  limit: number;
  query?: string;
};

export const getMovies = async (params: TParams): Promise<IFilm[]> => {
  const { data } = await $host.get(
    `v1.4/movie?page=${params.page}&limit=${params.limit}&${params.query}`
  );
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
