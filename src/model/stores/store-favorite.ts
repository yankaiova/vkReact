import { makeAutoObservable } from "mobx";
import { IFilm } from "../types";

export class FavoriteStore {
  movies: IFilm[] = JSON.parse(localStorage.getItem("movies")) || [];
  constructor() {
    makeAutoObservable(this);
  }

  get favoritesList() {
    return this.movies;
  }
  addToFavorite(movie: IFilm) {
    this.movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(this.movies));
  }
  removeFromFavorite(id: number) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
    localStorage.setItem("movies", JSON.stringify(this.movies));
  }
}
