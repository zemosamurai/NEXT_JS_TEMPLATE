import { FilmPage } from "@/2-pages/film";
import { filmsApi } from "@/5-entities/films";
import { Metadata } from "next";

interface IProps {
  params: { film_id: string; locale: string };
}

export default async function Film({ params: { film_id, locale } }: IProps) {
  // unstable_setRequestLocale(locale);
  return <FilmPage film_id={film_id} />;
}

// export async function generateStaticParams() {
//   const films = await filmsApi.getFilms();
//   const res = films.result.map((el) => ({ film_id: el.uid }));

//   return res;
// }

export async function generateMetadata({
  params: { film_id },
}: IProps): Promise<Metadata> {
  const film = await filmsApi.getFilm(film_id);

  return {
    title: film.result.properties.title,
    description: film.result.description,
  };
}
