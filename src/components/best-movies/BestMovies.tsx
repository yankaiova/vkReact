import { useState, useEffect } from "react";
import { IFilm } from "../../model/types";
import style from "./BestMovies.module.css";
import { getMovies } from "../../api/movieApi";
import { CardMovie } from "../ui/card/CardMovie";
import { Link } from "react-router-dom";
import { Pagination } from "../ui/pagination/Pagination";

export const BestMovies = () => {
  const [movies, setMovies] = useState<IFilm[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const tablePerPage = 4;
  const totalPage = 25;

  useEffect(() => {
    getMovies({
      page: currentPage,
      limit: tablePerPage,
      sortField: "rating.kp",
      sortType: -1,
      type: "movie",
      lists: "top250",
    }).then((res) => {
      setMovies(res);
    });
  }, [currentPage]);

  return (
    <div>
    <div className={style.title}>Лучшие фильмы</div>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPage={totalPage}
      />
      <div className={style.moviesContainer}>
        {movies.map((movie) => (
          <CardMovie key={movie.id} poster={movie.poster.url}>
            <div>
              {" "}
              <div>{movie.rating.kp}</div>
              <div>{movie.name}</div>
              <div>{movie.year}</div>
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className={style.btnDescr}
              >
                Подробнее
              </Link>
            </div>
          </CardMovie>
        ))}
      </div>
    </div>
  );
};
