import { locales } from "@/6-shared/lib/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

interface IProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function StaticLayout({ children, params: { locale } }: IProps) {
  unstable_setRequestLocale(locale);

  return children;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
