import { $host } from "./api";
export const getGenres = async () => {
  const { data } = await $host.get(
    "v1/movie/possible-values-by-field?field=genres.name"
  );
  const doc = data.map((item: { name: string; slug: string }) => {
    return item.name;
  });
  return doc;
};
