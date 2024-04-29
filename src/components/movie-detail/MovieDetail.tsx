import { IFilm } from "../../model/types";
import style from "./MovieDetail.module.css";
type props = { movie: IFilm };
export const MovieDetail = ({ movie }: props) => {
  const dateToString =
    movie.premiere.world.slice(8, 10) +
    "-" +
    movie.premiere.world.slice(5, 7) +
    "-" +
    movie.premiere.world.slice(0, 4);
  const timeToString =
    Math.floor(movie.movieLength / 60) +
    "ч " +
    (movie.movieLength % 60) +
    "мин";

  return (
    <div className={style.movieContainer}>
      <div>
        <div className={style.moviePreview}>
          {movie.rating.kp} {movie.name}
        </div>
        <div className={style.movieInfo}>{movie.description}</div>
        <div className={style.movieParagraph}>
          <div className={style.movieTitle}>Длительность:</div>
          <div className={style.movieInfo}>{timeToString}</div>
        </div>
        <div className={style.movieParagraph}>
          <div className={style.movieTitle}>Популярность:</div>
          <div className={style.movieInfo}>{movie.votes.kp}</div>
        </div>
        <div className={style.movieParagraph}>
          <div className={style.movieTitle}>Дата выхода:</div>
          <div className={style.movieInfo}>{dateToString}</div>
        </div>
        <div className={style.movieParagraph}>
          <div className={style.movieTitle}>Жанры:</div>
          <div className={style.movieInfo}>
            {movie.genres.map((genre: { name: string }) => (
              <span>#{genre.name} </span>
            ))}
          </div>
        </div>
      </div>
      <img className={style.moviePoster} src={movie.poster.url} />
    </div>
  );
};
