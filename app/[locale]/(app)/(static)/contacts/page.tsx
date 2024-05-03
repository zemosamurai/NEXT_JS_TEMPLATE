import { ContactsPage } from "@/2-pages/contacts";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface IProps {
  params: { locale: string };
}

export default function Contacts({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale);

  return <ContactsPage />;
}

export async function generateMetadata({
  params: { locale },
}: IProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "contacts" });

  return {
    title: t("meta.title"),
    description: t("meta.title"),
  };
}
