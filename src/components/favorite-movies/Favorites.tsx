import { IFilm } from "../../model/types";
import style from "../list-movies/MoviesList.module.css";
import { CardMovie } from "../ui/card/CardMovie";
import { Link } from "react-router-dom";
import { useStores } from "../../app/context/root-store-context";
import { observer } from "mobx-react-lite";
export const FavoriteList = observer(() => {
  const { favorites } = useStores();
  return (
    <div>
      <div className={style.moviesContainer}>
        {favorites.movies.map((movie: IFilm) => (
          <CardMovie key={movie.id} movie={movie}>
            <div>
              {" "}
              <button onClick={() => favorites.removeFromFavorite(movie.id)}>
                Удалить
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
    </div>
  );
});
