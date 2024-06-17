import { FilmPage } from "@/2-pages/film";
import { filmsApi } from "@/5-entities/films";
import { Metadata, ResolvingMetadata } from "next";

interface IProps {
  params: { film_id: string; locale: string };
}

export default function Film({ params: { film_id, locale } }: IProps) {
  // unstable_setRequestLocale(locale);
  return <FilmPage film_id={film_id} />;
}

// export async function generateStaticParams() {
//   const films = await filmsApi.getFilms();
//   const res = films.result.map((el) => ({ film_id: el.uid }));

//   return res;
// }

export async function generateMetadata(
  { params: { film_id, locale } }: IProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const film = await filmsApi.getFilm(film_id);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: film.result.properties.title,
    description: film.result.description,
    openGraph: {
      title: film.result.properties.title,
      description: film.result.description,
      url: "http://localhost:8080",
      siteName: "Next Template",
      images: [
        {
          url: "https://s1.afisha.ru/mediastorage/a0/d9/8733aca357d24d789677ac42d9a0.jpg",
          width: 800,
          height: 600,
        },
        ...previousImages,
      ],
      locale,
      type: "website",
    },
  };
}
