import { filmsApi } from "@/4-entities/films";
import { Loader, Pagination } from "@/5-shared/ui";
import { Suspense } from "react";

import s from "./styles.module.scss";
import { Item } from "./item/item";

interface IProps {
  search: string;
  currentPage: number;
}

export const FilmsList = async ({ currentPage, search }: IProps) => {
  const films = await filmsApi.getFilms(currentPage, search);

  return (
    <div className={s.root}>
      <div className={s.listWrapper}>
        <Suspense key={search + currentPage} fallback={<Loader />}>
          {films.data?.map((el) => (
            <Item key={el.id} id={el.id} title={el.title} />
          ))}
        </Suspense>
      </div>

      <Pagination
        className={s.pagination}
        totalCount={films.totalCount}
        pageSize={10}
      />
    </div>
  );
};
