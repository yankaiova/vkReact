import { FilterListGroup } from "../components/filter/Filter";
import { MoviesList } from "../components/list-movies/MoviesList";
import { NavBar } from "../components/navBar/NavBar";
export const HomePage = () => {
  return (
    <>
      <NavBar />
      <FilterListGroup />
      <MoviesList />
    </>
  );
};
