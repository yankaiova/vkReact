import { MovieDetail } from "../components/ui/movie-detail/MovieDetail";
import { IFilm } from "../model/types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../api/movieApi";

export const MovieInfo = () => {
  const [movie, setMovie] = useState<IFilm>();
  const { id } = useParams();
  useEffect(() => {
    getMovieById(Number(id)).then((res) => {
      setMovie(res);
    });
  }, []);
  return (
    <>
      {movie && (
        <div>
          <MovieDetail movie={movie} key={id} />
        </div>
      )}
    </>
  );
};
