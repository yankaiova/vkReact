import { IFilm } from "../../../model/types";
import style from "./CardMovie.module.css";
type props = {
  children?: React.ReactNode;
  movie: IFilm;
  handleClick?: () => void;
};
export const CardMovie = ({ children, movie, handleClick }: props) => {
  return (
    <div className={style.card} onClick={handleClick}>
      {movie.poster && (
        <img src={movie.poster.url} alt="" className={style.cardMedia} />
      )}
      <div className={style.cardContent}>
        <div>{movie.name || movie.alternativeName}</div>
        <div>{movie.year}</div>
        <div>{movie.rating.kp}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};
