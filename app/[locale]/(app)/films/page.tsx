import { FilmsPage } from "@/2-pages/films";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface IProps {
  params: { locale: string };
}

export default function Films() {
  // unstable_setRequestLocale(locale);
  return <FilmsPage />;
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
