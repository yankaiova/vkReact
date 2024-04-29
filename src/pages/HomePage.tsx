import { BestMovies } from "../components/best-movies/BestMovies";
import { Search } from "../components/search/Search";

export const HomePage = () => {
  return (
    <>
      <Search />
      <BestMovies />
    </>
  );
};
