import { useTranslations } from "next-intl";

export const ContactsPage = () => {
  const t = useTranslations("contacts");

  return (
    <main>
      <h2>{t("title")}</h2>
    </main>
  );
};
