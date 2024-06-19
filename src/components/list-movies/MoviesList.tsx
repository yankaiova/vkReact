import { useState, useEffect } from "react";
import { IFilm } from "../../model/types";
import style from "./MoviesList.module.css";
import { getMovies } from "../../api/movieApi";
import { CardMovie } from "../ui/card/CardMovie";
import { Link } from "react-router-dom";
import { Pagination } from "../ui/pagination/Pagination";
import { observer } from "mobx-react-lite";
import { useStores } from "../../app/context/root-store-context";
import { genresString } from "../../utils/helpers/genresString";

export const MoviesList = observer(() => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const tablePerPage = 50;
  const totalPage = 5;
  const { movies } = useStores();
  const { favorites } = useStores();

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    getMovies({
      page: currentPage,
      limit: tablePerPage,
      query: `&year=${movies._rangeYear.min}-${
        movies._rangeYear.max
      }&rating.kp=${movies._rangeRaiting.min}-${
        movies._rangeRaiting.max
      }${genresString(movies._genres)}`,
    }).then((res) => {
      movies.setMovies(res);
    });
  }, [currentPage]);

  return (
    <div>
      <div className={style.moviesContainer}>
        {movies.list.map((movie: IFilm) => (
          <CardMovie key={movie.id} movie={movie}>
            <div>
              {" "}
              <button onClick={() => favorites.addToFavorite(movie)}>
                В Избранное
              </button>
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
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </div>
  );
});
