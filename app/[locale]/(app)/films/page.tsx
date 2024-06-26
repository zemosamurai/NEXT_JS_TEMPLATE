import { FilmsList } from "@/3-features/films";
import { SearchInput } from "@/5-shared/ui";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import s from "./styles.module.scss";

interface IProps {
  params: { locale: string };
  searchParams?: {
    search?: string;
    page?: string;
  };
}

export default async function Films({
  params: { locale },
  searchParams,
}: IProps) {
  const t = await getTranslations({ locale, namespace: "films" });

  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className={s.main}>
      <div className={s.titleWrapper}>
        <h2>{t("title")}</h2>
        <SearchInput placeholder={"Search"} />
      </div>

      <FilmsList currentPage={currentPage} search={search} />
    </main>
  );
}

export async function generateMetadata({
  params: { locale },
}: IProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "films" });

  return {
    title: t("meta.title"),
    description: t("meta.title"),
  };
}
