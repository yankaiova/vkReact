import { makeAutoObservable } from "mobx";
import { FavoriteStore } from "./store-favorite";
import { MoviesStore } from "./store-movies";

class RootStore {
  favorites = new FavoriteStore();
  movies = new MoviesStore();
  constructor() {
    makeAutoObservable(this);
  }
}

export type { RootStore };
export const store = new RootStore();
