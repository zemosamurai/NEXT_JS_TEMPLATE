import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const host = process.env.BASE_API_URL;

export const locales = ["en", "ru"];
export const defaultLocale = "en";
export const localePrefix = "always";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
