export const genresString = (genres: string[]) => {
  return "&genre.name=" + genres.join("&genre.name=");
};
