export interface IFilm {
  id: number;
  name: string;
  alternativeName: string;
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
  premiere: {
    country: string;
    world: string;
    russia: string;
  };
  poster: {
    url: string;
    previewUrl: string;
  };
}

export type TRoute = { path: string; element: () => JSX.Element };
