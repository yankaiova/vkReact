import { IFilm } from "../../../model/types";
import style from "./MovieDetail.module.css";
import { dateToString } from "../../../utils/helpers/dateToString";
type props = { movie: IFilm };
export const MovieDetail = ({ movie }: props) => {
  return (
    <div className={style.movieContainer}>
      <div>
        <div className={style.moviePreview}>
          {movie.name || movie.alternativeName}
        </div>
        <div className={style.movieInfo}>{movie.description}</div>
        <div className={style.movieParagraph}>
          <div className={style.movieTitle}>Рейтинг:</div>
          <div className={style.movieInfo}>{movie.rating.kp}</div>
        </div>
        <div className={style.movieParagraph}>
          <div className={style.movieTitle}>Дата выхода:</div>
          <div className={style.movieInfo}>
            {dateToString(movie.premiere.world)}
          </div>
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
      {movie.poster.url && (
        <img className={style.moviePoster} src={movie.poster.url} />
      )}
    </div>
  );
};
