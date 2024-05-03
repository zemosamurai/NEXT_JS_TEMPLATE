import { HomePage } from "@/2-pages/home";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface IProps {
  params: { locale: string };
}

export default function Home() {
  return <HomePage />;
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
