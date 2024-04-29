import { SMovie } from "../../model/types";
import style from "./SimilarMovies.module.css";
import { CardMovie } from "../ui/card/CardMovie";
type props = { sMovies: SMovie[] };
export const SimilarMovies = ({ sMovies }: props) => {
  return (
    <>
      <div className={style.title}>Похожие фильмы</div>
      <div className={style.moviesContainer}>
        {sMovies.map((item) => (
          <CardMovie key={item.id} poster={item.poster.url}>
            <div>{item.name}</div>
          </CardMovie>
        ))}
      </div>
    </>
  );
};
