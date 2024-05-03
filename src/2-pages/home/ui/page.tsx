import { useTranslations } from "next-intl";

export const HomePage = () => {
  const t = useTranslations("home");

  return (
    <main>
      <h2>{t("title")}</h2>
    </main>
  );
};
