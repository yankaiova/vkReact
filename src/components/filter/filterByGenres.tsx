import { useEffect, useState } from "react";
import { getGenres } from "../../api/genresApi";
type props = {
  genres: string[];
  setGenres: React.Dispatch<React.SetStateAction<string[]>>;
};
export const FilterByGenres = ({ genres, setGenres }: props) => {
  const [options, setOptions] = useState<string[]>([]);

  const handleClick = (option: string) => {
    if (genres.includes(option)) {
      setGenres((genres) => {
        genres = genres.filter((item) => item !== option);
        return genres.filter((item) => item !== option);
      });
      console.log(genres);
    } else {
      setGenres((prev) => [...prev, option]);
      console.log(genres);
    }
  };

  useEffect(() => {
    getGenres().then((res) => {
      setOptions(res);
    });
  }, []);

  return (
    <div style={{ marginLeft: "40px" }}>
      <div>Жанры</div>
      <div>
        {options.map((item: string) => (
          <>
            <input
              type="checkbox"
              value={item}
              name={"genre" + item}
              key={item}
              onChange={() => handleClick(item)}
            />
            <span>{item}</span>
          </>
        ))}
      </div>
    </div>
  );
};
