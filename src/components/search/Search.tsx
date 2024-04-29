import { useState } from "react";
import { IFilm } from "../../model/types";
import { CardMovie } from "../ui/card/CardMovie";
import style from "./Search.module.css";
import { getMoviesByName } from "../../api/movieApi";
import { Link } from "react-router-dom";

export const Search = () => {
  const [value, setValue] = useState<string>("");
  const [movies, setMovies] = useState<IFilm[]>([]);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    getMoviesByName({
      query: value,
    }).then((res) => {
      console.log(res);
      setMovies(res);
    });
  };
  return (
    <div>
      <form className={style.formSearch}>
        <label>Введите название фильма</label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={style.searchInput}
        />
        <button className={style.btnSearch} onClick={(e) => handleClick(e)}>
          Найти
        </button>
      </form>
      {movies &&
        movies.map((item) => (
          <CardMovie key={item.id} poster={item.poster.url}>
            {" "}
            <div>{item.name}</div>
            <Link
              key={item.id}
              to={`/movie/${item.id}`}
              className={style.btnDescr}
            >
              Подробнее
            </Link>
          </CardMovie>
        ))}
    </div>
  );
};
