import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface IProps {
  params: { locale: string };
}

export default async function Home({ params: { locale } }: IProps) {
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <main>
      <h2>{t("title")}</h2>
    </main>
  );
}

export async function generateMetadata({
  params: { locale },
}: IProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("meta.title"),
    description: t("meta.title"),
  };
}
