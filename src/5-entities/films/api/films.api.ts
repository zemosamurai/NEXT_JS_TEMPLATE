import { IFilmsResponse, IFilmResponse } from "./types";
import { instance } from "@/6-shared/api";

export const filmsApi = {
  getFilms: async (): Promise<IFilmsResponse> => {
    const res = await fetch("https://swapi.tech/api/films", {
      // cache: "no-cache", // SSR
      // cache: "force-cache", // SSG
      next: { revalidate: 60 }, // ISR
    });

    return res.json();

    // return instance.get("/films").then((res) => res.data);
  },
  getFilm: async (film_id: string): Promise<IFilmResponse> => {
    const res = await fetch(`https://swapi.tech/api/films/${film_id}`, {
      next: { revalidate: 60 },
    });
    return res.json();

    // return instance.get(`/films/${film_id}`).then((res) => res.data);
  },
};
