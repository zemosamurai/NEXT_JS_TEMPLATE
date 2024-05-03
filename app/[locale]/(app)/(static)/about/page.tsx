import { AboutPage } from "@/2-pages/about";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface IProps {
  params: { locale: string };
}

export default function About({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale);

  return <AboutPage />;
}

export async function generateMetadata({
  params: { locale },
}: IProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("meta.title"),
    description: t("meta.title"),
  };
}
