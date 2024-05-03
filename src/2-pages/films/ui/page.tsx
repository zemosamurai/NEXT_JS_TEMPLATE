import { filmsApi } from "@/5-entities/films";
import { Link } from "@/6-shared/lib/i18n";

export const FilmsPage = async () => {
  const films = await filmsApi.getFilms();

  return (
    <main style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>Список фильмов:</h2>
      <ul>
        {films.result.map((el) => (
          <li key={el.uid} style={{ marginBottom: "10px" }}>
            <Link href={`/films/${el.uid}`}>{el.properties.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
