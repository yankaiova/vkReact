import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { getMovies } from "../../api/movieApi";
import { useStores } from "../../app/context/root-store-context";
import { RangeInput } from "../ui/rangeInput/RangeInput";
import { FilterByGenres } from "./filterByGenres";
import { genresString } from "../../utils/helpers/genresString";

export const FilterListGroup: FC = observer(() => {
  const { movies } = useStores();
  const [genres, setGenres] = useState<string[]>([]);
  const [minYear, setMinYear] = useState<string>(movies._rangeYear.min);
  const [maxYear, setMaxYear] = useState<string>(movies._rangeYear.max);
  const [minRaiting, setMinRaiting] = useState<string>(
    movies._rangeRaiting.min
  );
  const [maxRaiting, setMaxRaiting] = useState<string>(
    movies._rangeRaiting.max
  );

  function moviesByFilter() {
    movies.setYears({ min: minYear, max: maxYear });
    movies.setRaiting({ min: minRaiting, max: maxRaiting });
    movies.setGenres(genres);
    getMovies({
      page: 1,
      limit: 50,
      query: `&year=${movies._rangeYear.min}-${
        movies._rangeYear.max
      }&rating.kp=${movies._rangeRaiting.min}-${
        movies._rangeRaiting.max
      }${genresString(movies._genres)}`,
    }).then((res) => {
      movies.setMovies(res);
    });
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <FilterByGenres genres={genres} setGenres={setGenres} />
      <RangeInput
        min={minYear}
        max={maxYear}
        setMin={setMinYear}
        setMax={setMaxYear}
        name={"Год выпуска"}
      />
      <RangeInput
        min={minRaiting}
        max={maxRaiting}
        setMin={setMinRaiting}
        setMax={setMaxRaiting}
        name={"Рейтинг"}
      />
      <button
        style={{ margin: "20px 40px" }}
        onClick={() => {
          moviesByFilter();
        }}
      >
        Применить
      </button>
    </div>
  );
});
