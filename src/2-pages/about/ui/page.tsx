import { LoginForm } from "@/4-features/auth/loginForm";
import { useTranslations } from "next-intl";

export const AboutPage = () => {
  const t = useTranslations("about");

  return (
    <main>
      <h2>{t("title")}</h2>
    </main>
  );
};
