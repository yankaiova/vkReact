export interface IFilm {
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  movieLength: number;
  year: number;
  description: string;
  genres: [
    {
      name: string;
    }
  ];
  countries: [
    {
      name: string;
    }
  ];
  rating: {
    kp: number;
    imdb: number;
  };
  votes: {
    kp: number;
    imdb: number;
  };
  premiere: {
    country: string;
    world: string;
    russia: string;
  };
  poster: {
    url: string;
    previewUrl: string;
  };
  similarMovies: SMovie[];
}

export type SMovie = {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: {
    url: string;
    previewUrl: string;
  };
  rating: {
    kp: number;
    imdb: number;
  };
  year: number;
};
export type TRoute = { path: string; element: () => JSX.Element };
