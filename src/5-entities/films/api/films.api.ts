import { IPaginationResponse } from "@/6-shared/types";
import { IFilm } from "./types";

export const filmsApi = {
  getFilms: async (
    page?: number,
    search?: string,
  ): Promise<IPaginationResponse<IFilm>> => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
      {
        // cache: "no-cache", // SSR
        // cache: "force-cache", // SSG
        // next: { revalidate: 60 }, // ISR
      },
    );

    const resJson = await res.json();
    return { data: [...resJson], totalCount: 100 };
  },
  getFilm: async (film_id: string): Promise<IFilm> => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${film_id}`,
    );

    return res.json();
  },
};
