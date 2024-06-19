import { useState } from "react";
import style from "./Search.module.css";
import { getMoviesByName } from "../../api/movieApi";
import { observer } from "mobx-react-lite";
import { useStores } from "../../app/context/root-store-context";

export const Search = observer(() => {
  if (window.location.pathname === "/") {
    const { movies } = useStores();
    const [value, setValue] = useState<string>("");
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      movies.defaultOptions();
      getMoviesByName({ page: 1, limit: 50, query: value }).then((res) => {
        movies.setMovies(res);
        setValue("");
      });
    };

    return (
      <div>
        <form className={style.formSearch}>
          <label>Введите название фильма</label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={style.searchInput}
          />
          <button className={style.btnSearch} onClick={(e) => handleClick(e)}>
            Найти
          </button>
        </form>
      </div>
    );
  }
});
