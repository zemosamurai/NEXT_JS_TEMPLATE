import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@/6-shared/lib/i18n";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  const messages = {
    home: (await import(`./translation/${locale}/home.json`)).default,
    films: (await import(`./translation/${locale}/films.json`)).default,
    about: (await import(`./translation/${locale}/about.json`)).default,
    contacts: (await import(`./translation/${locale}/contacts.json`)).default,
    navigation: (await import(`./translation/${locale}/navigation.json`))
      .default,
  };

  return {
    messages,
  };
});