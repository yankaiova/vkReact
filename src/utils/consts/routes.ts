import { HomePage } from "../../pages/HomePage";
import { MovieInfo } from "../../pages/MovieInfo";
import { TRoute } from "../../model/types";

export const ROUTES: TRoute[] = [
  { path: "/", element: HomePage },
  { path: "movie/:id", element: MovieInfo },
];
