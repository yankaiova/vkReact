import { makeAutoObservable } from "mobx";
import { IFilm } from "../types";

type Range = { min: string; max: string };

export class MoviesStore {
  list: IFilm[] = [];
  _genres: string[] = [];
  _rangeYear: Range = {
    min: "1970",
    max: String(new Date(Date.now()).getFullYear()),
  };
  _rangeRaiting: Range = { min: "7.1", max: "10" };

  constructor() {
    makeAutoObservable(this);
  }

  setMovies(movies: IFilm[]) {
    this.list = movies;
  }
  defaultOptions() {
    this._rangeYear = {
      min: "1970",
      max: String(new Date(Date.now()).getFullYear()),
    };
    this._rangeRaiting = { min: "7.1", max: "10" };
    this._genres = [];
  }
  setGenres(option: string[]) {
    this._genres = option;
  }
  setYears(option: Range) {
    this._rangeYear = option;
  }
  setRaiting(option: Range) {
    this._rangeRaiting = option;
  }
}
