import { filmsApi } from "@/5-entities/films";

interface IProps {
  film_id: string;
}

export const FilmPage = async ({ film_id }: IProps) => {
  const film = await filmsApi.getFilm(film_id);

  return (
    <main style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>{film.result.properties.title}</h2>
    </main>
  );
};
