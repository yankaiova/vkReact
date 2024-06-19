import { HomePage } from "../../pages/HomePage";
import { MovieInfo } from "../../pages/MovieInfo";
import { TRoute } from "../../model/types";
import { FavoritePage } from "../../pages/FavoritePage";

export const ROUTES: TRoute[] = [
  { path: "/", element: HomePage },
  { path: "movie/:id", element: MovieInfo },
  { path: "favorites", element: FavoritePage },
];
